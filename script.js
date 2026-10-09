/**
 * uploads a local image to Supabase Storage and returns the public URL.
 * Falls back to the original data URL if upload fails.
 */
async function uploadProductImageToSupabase(imageSource, fallbackName = "product") {
  if (!imageSource) return "";

  if (typeof imageSource === "string" && imageSource.startsWith("http://")) {
    return imageSource;
  }

  if (typeof imageSource === "string" && imageSource.startsWith("https://")) {
    return imageSource;
  }

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    return imageSource;
  }

  let fileToUpload = null;
  const safeName = (fallbackName || "product").toLowerCase().replace(/[^a-z0-9-_]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "product";

  try {
    if (typeof imageSource === "string" && imageSource.startsWith("data:")) {
      const response = await fetch(imageSource);
      const blob = await response.blob();
      const mimeType = blob.type || "image/jpeg";
      const extension = mimeType === "image/png"
        ? "png"
        : mimeType === "image/webp"
          ? "webp"
          : "jpg";

      fileToUpload = new File([blob], `${safeName}-${Date.now()}.${extension}`, {
        type: mimeType,
        lastModified: Date.now()
      });
    } else if (imageSource instanceof File) {
      fileToUpload = imageSource;
    }
  } catch (err) {
    console.warn("Could not convert product image to File for Supabase upload:", err);
    return imageSource;
  }

  if (!fileToUpload) {
    return imageSource;
  }

  try {
    const bucketName = "website-images";
    const path = `products/${safeName}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${fileToUpload.name.split(".").pop() || "jpg"}`;
    const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    const { error } = await client.storage.from(bucketName).upload(path, fileToUpload, {
      cacheControl: "3600",
      upsert: false,
      contentType: fileToUpload.type || "image/jpeg"
    });

    if (error) {
      throw error;
    }

    const { data } = client.storage.from(bucketName).getPublicUrl(path);
    return data?.publicUrl || imageSource;
  } catch (err) {
    console.warn("Supabase product image upload failed, using local fallback:", err);
    return imageSource;
  }
}

async function initStorefrontApp() {
  loadAndApplySiteConfig();
  initBrandLogo();
  initVideoSourcePreservation();
  initHamburgerMenus();
  initContactForm();
  initRotatingCities();
  initModalListeners();
  initCategoryNavigation();
  initAdminPanel();

  // Load Data from Supabase with Fallbacks
  await loadAppData();

  // Re-apply site config after data loading
  loadAndApplySiteConfig();

  // Setup Dynamic Sections
  setupHeroCategorySlider();
  renderHomepageCategories();
  renderHomepageFeaturedProducts();
  updateFooterStatistics();

  // Check URL hash immediately on initial load (e.g. if arriving via direct category link)
  handleUrlHashChange();

  initPWAFeatures();

  // Listen to cross-tab updates from separate admin panel
  window.addEventListener("storage", function (e) {
    if (!e.key || e.key === "preksha_site_config") {
      loadAndApplySiteConfig();
    }
    if (!e.key || e.key === "preksha_deleted_categories" || e.key === "preksha_custom_categories" || e.key === "preksha_custom_products" || e.key === "preksha_last_category_update") {
      loadAppData().then(() => {
        setupHeroCategorySlider();
        renderHomepageCategories();
        renderHomepageFeaturedProducts();
        updateFooterStatistics();
        if (appState.activeCategory) {
          const stillExists = appState.categories.some(c => 
            (c.slug && appState.activeCategory.slug && c.slug.toLowerCase() === appState.activeCategory.slug.toLowerCase()) ||
            (c.name && appState.activeCategory.name && c.name.toLowerCase() === appState.activeCategory.name.toLowerCase())
          );
          if (stillExists) {
            openCategoryPage(appState.activeCategory, false);
          } else if (typeof closeCategoryPage === "function") {
            closeCategoryPage("previous", true);
          }
        }
      });
    }
  });

  // Throttled window scroll listener for floating header styling
  let isScrollTicking = false;
  window.addEventListener("scroll", function () {
    if (!isScrollTicking) {
      window.requestAnimationFrame(() => {
        const mainHeader = document.getElementById("mainHeader");
        if (mainHeader) {
          if (window.scrollY > 40) {
            mainHeader.classList.add("scrolled");
          } else {
            mainHeader.classList.remove("scrolled");
          }
        }
        isScrollTicking = false;
      });
      isScrollTicking = true;
    }
  }, { passive: true });
}

// Start application when DOM is fully ready and all module definitions are parsed
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initStorefrontApp);
} else {
  initStorefrontApp();
}
