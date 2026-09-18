/**
 * =========================================================
 * PREKSHA WHITE-LABEL CMS & SEPARATE ADMIN PANEL LOGIC
 * Full-featured Supabase Integration & Multi-Business CMS
 * =========================================================
 */

// Default Fallback Supabase Credentials
const DEFAULT_SUPABASE_URL = "https://pomjpixlffoibewaflfv.supabase.co";
const DEFAULT_SUPABASE_KEY = "sb_publishable_b0k7bSRUXUT2v60PTwh5PA_dXh51-Uh";

// Default Site Configuration
const DEFAULT_SITE_CONFIG = {
  companyName: "PREKSHA LIGHTING WORLD",
  companyTagline: "Premium Lighting Solutions",
  companyLogoUrl: "images/preksha-lite-logo.svg",
  whatsappNumber: "917010114070",
  phoneNumber: "+91 70101 14070",
  emailAddress: "nsr8i@outlook.com",
  headquartersAddress: "Chennai, Tamil Nadu, India",
  servingCities: "Chennai, Bangalore, Hyderabad, Coimbatore, Madurai, Salem, Trichy, Kochi, Mysore, Tirupati",
  
  // Hero
  heroTaglineBadge: "",
  heroHeading: "Light Your Space With Style",
  heroDescription: "Premium decorative and architectural lighting solutions for homes, shops, offices and modern spaces.",
  heroPrimaryBtnText: "Explore Products",
  heroSecondaryBtnText: "Contact Us",
  heroBackdropPhoto: "images/opera gate light.jpeg",
  
  // About
  aboutSectionTag: "ABOUT PREKSHA",
  aboutHeading: "Lighting That Makes A Difference",
  aboutDescription: "PREKSHA LIGHTING WORLD provides premium lighting solutions designed to bring beauty, functionality and character to every space.",
  aboutBadge: "Luxury Lighting World",
  aboutImageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
  aboutMediaUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
  aboutMediaType: "image",
  aboutVideoAutoplay: true,
  aboutVideoLoop: true,
  aboutVideoMuted: true,
  aboutVideoControls: true,
  aboutFeat1Title: "Architectural Craft",
  aboutFeat1Text: "Precision optical diffusers and premium metal finishes.",
  aboutFeat2Title: "Ultra Efficiency",
  aboutFeat2Text: "High-lumen Grade-A LED chips with long lifespan.",
  aboutFeat3Title: "Custom Lighting",
  aboutFeat3Text: "Bespoke lighting consultations for villas and retail.",
  aboutFeat4Title: "Pan-India Reach",
  aboutFeat4Text: "Fast, insured delivery with personalized support.",

  // Why Us
  whyTag: "THE PREKSHA PROMISE",
  whyTitle: "Why Choose Us",
  whySubtitle: "Dedicated to transforming spaces with uncompromised quality and architectural lighting brilliance.",
  whyCard1Title: "Premium Quality",
  whyCard1Desc: "Finest grade materials, weather-resistant coatings, and high-efficiency LED drivers engineered for excellence.",
  whyCard2Title: "Wide Collection",
  whyCard2Desc: "From grand royal chandeliers and ambient pendants to gate lights, elevation fixtures, and seamless COB profiles.",
  whyCard3Title: "Reliable Service",
  whyCard3Desc: "Expert consultations, reliable order dispatch, responsive support, and transparent communication every step.",
  whyCard4Title: "Modern Designs",
  whyCard4Desc: "Curated contemporary designs that harmoniously accentuate modern residences, boutique cafes, and commercial spaces.",

  // CTA & Footer
  ctaTitle: "Looking For The Right Light?",
  ctaText: "Contact us for product details and enquiries.",
  ctaBtn: "Get In Touch",
  footerCopyright: "© 2026 PREKSHA LIGHTING WORLD. All Rights Reserved. Premium LED lighting solutions.",

  // Supabase Custom Overrides
  customSupabaseUrl: "",
  customSupabaseKey: ""
};

// Application State
const adminState = {
  config: { ...DEFAULT_SITE_CONFIG },
  categories: [],
  products: [],
  supabaseClient: null,
  isSupabaseConnected: false,
  activePanel: "panel-dashboard",
  
  // Authentication State
  currentUser: null,
  isAuthenticated: false,
  authMethod: null,
  
  // Temporary Upload Data
  currentProductPhoto: "",
  currentCategoryPhoto: "",
  currentLogoPhoto: "",
  currentAboutMedia: null
};

// Fallback Default Datasets
const FALLBACK_CATEGORIES = [
  { id: "gate-lights", name: "Gate Lights", slug: "gate-lights", description: "Pillar and entrance lanterns.", image_url: "images/opera gate light.jpeg", sort_order: 1 },
  { id: "elevation-lights", name: "Elevation Lights", slug: "elevation-lights", description: "Facade and exterior wall accent fixtures.", image_url: "images/12w up down light.jpeg", sort_order: 2 },
  { id: "hanging-lights", name: "Hanging Lights", slug: "hanging-lights", description: "Modern pendant luminaires for dining & islands.", image_url: "images/single hanging light.jpeg", sort_order: 3 },
  { id: "chandeliers", name: "Chandeliers", slug: "chandeliers", description: "Grand luxury statement pieces.", image_url: "images/crystal chandelier.jpeg", sort_order: 4 },
  { id: "wall-lights", name: "Wall Lights", slug: "wall-lights", description: "Minimalist accent wall luminaires.", image_url: "images/laser wall light.jpeg", sort_order: 5 },
  { id: "profile-lights", name: "Profile Lights", slug: "profile-lights", description: "Seamless architectural linear lighting.", image_url: "images/profile light with smps.jpeg", sort_order: 6 },
  { id: "spotlights", name: "Spotlights", slug: "spotlights", description: "Precision focused COB spotlights.", image_url: "images/12w cob downlight.jpeg", sort_order: 7 },
  { id: "ceiling-lights", name: "Ceiling Lights", slug: "ceiling-lights", description: "Ultra-slim ambient panel luminaires.", image_url: "images/22w round surface panel.jpeg", sort_order: 8 },
  { id: "fans-and-strips", name: "Fans & LED Strips", slug: "fans-and-strips", description: "Architectural luxury blade fans & flexible rolls.", image_url: "images/flexible neon light roll.jpeg", sort_order: 9 },
  { id: "track-lights", name: "Track Lights", slug: "track-lights", description: "Adjustable commercial magnetic & rail track fixtures.", image_url: "images/12w cob downlight.jpeg", sort_order: 10 }
];

const FALLBACK_PRODUCTS = [
  { id: "prod-1", name: "Opera Gate Light", category: "Gate Lights", category_slug: "gate-lights", price: "₹ 2,450", description: "Architectural lantern with amber diffuser.", image_url: "images/opera gate light.jpeg", is_hero_featured: true },
  { id: "prod-2", name: "12W Up Down Facade Luminaire", category: "Elevation Lights", category_slug: "elevation-lights", price: "₹ 1,850", description: "Dual-beam architectural exterior light.", image_url: "images/12w up down light.jpeg" },
  { id: "prod-3", name: "Single Nordic Pendant Light", category: "Hanging Lights", category_slug: "hanging-lights", price: "₹ 1,650", description: "Minimalist dining pendant with brushed metal finish.", image_url: "images/single hanging light.jpeg" },
  { id: "prod-4", name: "Imperial Crystal Chandelier", category: "Chandeliers", category_slug: "chandeliers", price: "₹ 18,500", description: "Multi-tiered radiant K9 crystal statement luminaire.", image_url: "images/crystal chandelier.jpeg" }
];

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", async function() {
  initPanelNavigation();
  initMobileToggle();
  initDropzones();
  initForms();
  initPresetsAndBackups();
  initCopySql();
  initAdminAuth();

  // Load Data
  await loadSiteConfig();
  await initSupabaseClient();
  await checkAuthSession();
  await loadCatalogData();

  // Populate UI
  populateFormFieldsFromConfig();
  populateCategorySelects();
  renderCatalogTable();
  renderCategoriesTable();
  updateDashboardStats();
});

/**
 * Panel Switching Navigation
 */
function initPanelNavigation() {
  const navItems = document.querySelectorAll(".sidebar-nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetPanel = item.dataset.panel;
      if (targetPanel) {
        switchAdminPanel(targetPanel);
      }
    });
  });

  const globalSaveBtn = document.getElementById("globalSaveBtn");
  if (globalSaveBtn) {
    globalSaveBtn.addEventListener("click", saveAllChanges);
  }
}

function switchAdminPanel(panelId) {
  adminState.activePanel = panelId;

  document.querySelectorAll(".sidebar-nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.panel === panelId);
  });

  document.querySelectorAll(".admin-view-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === panelId);
  });

  // Close mobile sidebar if open
  const sidebar = document.getElementById("adminSidebar");
  if (sidebar) sidebar.classList.remove("open");
}

function initMobileToggle() {
  const toggle = document.getElementById("adminMobileToggle");
  const sidebar = document.getElementById("adminSidebar");
  if (toggle && sidebar) {
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
}

/**
 * Supabase Client Initialization & Status Testing
 */
async function initSupabaseClient() {
  const statusBadge = document.getElementById("adminSupabaseStatusBadge");
  const statusDot = document.getElementById("statusDot");
  const statusText = document.getElementById("statusText");
  const dashboardInfo = document.getElementById("dashboardSupabaseInfo");

  const activeUrl = adminState.config.customSupabaseUrl || DEFAULT_SUPABASE_URL;
  const activeKey = adminState.config.customSupabaseKey || DEFAULT_SUPABASE_KEY;

  try {
    if (window.supabase && typeof window.supabase.createClient === "function") {
      adminState.supabaseClient = window.supabase.createClient(activeUrl, activeKey);

      // Test connection
      const { data, error } = await adminState.supabaseClient
        .from("categories")
        .select("id")
        .limit(1);

      if (!error) {
        adminState.isSupabaseConnected = true;
        if (statusDot) {
          statusDot.className = "status-dot connected";
        }
        if (statusText) {
          statusText.textContent = "Supabase Connected";
        }
        if (dashboardInfo) {
          dashboardInfo.innerHTML = `
            <div style="display:flex; align-items:center; gap:8px; color:var(--admin-green); margin-bottom:6px;">
              <span style="font-size:1.1rem;">●</span> <strong>Supabase Connected & Synchronized</strong>
            </div>
            <div>Project URL: <code style="color:var(--admin-gold);">${activeUrl}</code></div>
          `;
        }
        return;
      }
    }
  } catch (err) {
    console.warn("Supabase connection check:", err);
  }

  // If connection failed or offline
  adminState.isSupabaseConnected = false;
  if (statusDot) statusDot.className = "status-dot disconnected";
  if (statusText) statusText.textContent = "Local Offline Mode (Synced)";
  if (dashboardInfo) {
    dashboardInfo.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px; color:#eab308; margin-bottom:6px;">
        <span style="font-size:1.1rem;">●</span> <strong>Local Offline Storage Active</strong>
      </div>
      <div>Using browser storage. Any changes are saved instantly and will push to Supabase when connected.</div>
    `;
  }
}

/**
 * Load Site Configuration from Storage or Supabase
 */
async function loadSiteConfig() {
  // 1. Try local storage first
  try {
    const saved = localStorage.getItem("preksha_site_config");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.heroTaglineBadge && (parsed.heroTaglineBadge.toUpperCase().includes("GATE LIGHT") || parsed.heroTaglineBadge.trim() === "GATE LIGHT COLLECTION")) {
        delete parsed.heroTaglineBadge;
        localStorage.setItem("preksha_site_config", JSON.stringify(parsed));
      }
      if (parsed.companyLogoUrl === "images/preksha-lite-logo.png") {
        parsed.companyLogoUrl = "images/preksha-lite-logo.svg";
        localStorage.setItem("preksha_site_config", JSON.stringify(parsed));
      }
      adminState.config = { ...DEFAULT_SITE_CONFIG, ...parsed };
    }
  } catch (e) {
    console.warn("Error reading site config from storage:", e);
  }

  // 2. If Supabase is connected, check remote table
  if (adminState.supabaseClient) {
    try {
      const { data, error } = await adminState.supabaseClient
        .from("site_config")
        .select("*")
        .limit(1);

      if (!error && Array.isArray(data) && data.length > 0) {
        const remoteCfg = data[0].value || data[0].config_data;
        if (remoteCfg && typeof remoteCfg === "object") {
          adminState.config = { ...adminState.config, ...remoteCfg };
          localStorage.setItem("preksha_site_config", JSON.stringify(adminState.config));
        }
      }
    } catch (err) {
      // Table may not exist yet
    }
  }

  // 3. Update Navbar title and logo
  updateNavBrand();
}

function updateNavBrand() {
  const brandName = document.getElementById("adminNavBrandName");
  const brandLogo = document.getElementById("adminNavLogo");
  if (brandName) {
    brandName.textContent = adminState.config.companyName || "PREKSHA CMS";
  }
  if (brandLogo && adminState.config.companyLogoUrl) {
    brandLogo.src = adminState.config.companyLogoUrl;
  }
}

/**
 * Load Categories and Products
 */
async function loadCatalogData() {
  let loadedCats = [];
  let loadedProds = [];

  // Try Supabase first if connected
  if (adminState.supabaseClient) {
    try {
      const { data: catData, error: catError } = await adminState.supabaseClient
        .from("categories")
        .select("*")
        .order("sort_order", { ascending: true });
      if (!catError && Array.isArray(catData) && catData.length > 0) {
        loadedCats = catData;
      }

      const { data: prodData, error: prodError } = await adminState.supabaseClient
        .from("products")
        .select("*")
        .order("sort_order", { ascending: true });
      if (!prodError && Array.isArray(prodData) && prodData.length > 0) {
        loadedProds = prodData;
      }
    } catch (err) {
      console.warn("Supabase fetch exception:", err);
    }
  }

  // Combine with localStorage custom categories
  try {
    const customCatsJson = localStorage.getItem("preksha_custom_categories");
    if (customCatsJson) {
      const customCats = JSON.parse(customCatsJson);
      if (Array.isArray(customCats)) {
        customCats.forEach(c => {
          if (!loadedCats.some(x => x.id === c.id || x.slug === c.slug)) {
            loadedCats.push(c);
          }
        });
      }
    }
  } catch (e) {}

  // Combine with localStorage custom products
  try {
    const customProdsJson = localStorage.getItem("preksha_custom_products");
    if (customProdsJson) {
      const customProds = JSON.parse(customProdsJson);
      if (Array.isArray(customProds)) {
        const existingIds = new Set(loadedProds.map(p => p.id));
        const toAdd = customProds.filter(p => !existingIds.has(p.id));
        loadedProds = [...toAdd, ...loadedProds];
      }
    }
  } catch (e) {}

  adminState.categories = loadedCats.length > 0 ? loadedCats : [...FALLBACK_CATEGORIES];
  adminState.products = loadedProds.length > 0 ? loadedProds : [...FALLBACK_PRODUCTS];
}

/**
 * Form Populate Logic
 */
function populateFormFieldsFromConfig() {
  const cfg = adminState.config;
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.value = val;
  };

  // Brand
  setVal("cfgCompanyName", cfg.companyName);
  setVal("cfgCompanyTagline", cfg.companyTagline);
  setVal("cfgLogoUrl", cfg.companyLogoUrl);
  setVal("cfgWhatsapp", cfg.whatsappNumber);
  setVal("cfgPhone", cfg.phoneNumber);
  setVal("cfgEmail", cfg.emailAddress);
  setVal("cfgAddress", cfg.headquartersAddress);
  setVal("cfgServingCities", cfg.servingCities);

  // Logo Preview
  if (cfg.companyLogoUrl) {
    setDropzonePreview("logo", cfg.companyLogoUrl, "Current Logo");
  }

  // Hero
  setVal("cfgHeroBadge", cfg.heroTaglineBadge);
  setVal("cfgHeroHeading", cfg.heroHeading);
  setVal("cfgHeroDesc", cfg.heroDescription);
  setVal("cfgHeroPrimaryBtn", cfg.heroPrimaryBtnText);
  setVal("cfgHeroSecondaryBtn", cfg.heroSecondaryBtnText);

  // About
  setVal("cfgAboutTag", cfg.aboutSectionTag);
  setVal("cfgAboutHeading", cfg.aboutHeading);
  setVal("cfgAboutDesc", cfg.aboutDescription);
  setVal("cfgAboutBadge", cfg.aboutBadge);
  setVal("cfgAboutImgUrl", cfg.aboutImageUrl);
  setVal("cfgAboutMediaUrl", cfg.aboutMediaUrl || cfg.aboutImageUrl);
  setVal("cfgAboutMediaType", cfg.aboutMediaType || "auto");
  
  const autoChk = document.getElementById("cfgAboutVideoAutoplay");
  if (autoChk) autoChk.checked = cfg.aboutVideoAutoplay !== false;
  const loopChk = document.getElementById("cfgAboutVideoLoop");
  if (loopChk) loopChk.checked = cfg.aboutVideoLoop !== false;
  const ctrlChk = document.getElementById("cfgAboutVideoControls");
  if (ctrlChk) ctrlChk.checked = cfg.aboutVideoControls !== false;

  // Set About Media Preview
  const initialAboutMediaUrl = cfg.aboutMediaUrl || cfg.aboutImageUrl;
  if (initialAboutMediaUrl) {
    setAboutMediaPreview(initialAboutMediaUrl, cfg.aboutMediaType || "auto", "Current About Media");
  }

  setVal("cfgAboutFeat1Title", cfg.aboutFeat1Title);
  setVal("cfgAboutFeat1Text", cfg.aboutFeat1Text);
  setVal("cfgAboutFeat2Title", cfg.aboutFeat2Title);
  setVal("cfgAboutFeat2Text", cfg.aboutFeat2Text);
  setVal("cfgAboutFeat3Title", cfg.aboutFeat3Title);
  setVal("cfgAboutFeat3Text", cfg.aboutFeat3Text);
  setVal("cfgAboutFeat4Title", cfg.aboutFeat4Title);
  setVal("cfgAboutFeat4Text", cfg.aboutFeat4Text);

  // Why Us
  setVal("cfgWhyTag", cfg.whyTag);
  setVal("cfgWhyTitle", cfg.whyTitle);
  setVal("cfgWhySubtitle", cfg.whySubtitle);
  setVal("cfgWhyCard1Title", cfg.whyCard1Title);
  setVal("cfgWhyCard1Desc", cfg.whyCard1Desc);
  setVal("cfgWhyCard2Title", cfg.whyCard2Title);
  setVal("cfgWhyCard2Desc", cfg.whyCard2Desc);
  setVal("cfgWhyCard3Title", cfg.whyCard3Title);
  setVal("cfgWhyCard3Desc", cfg.whyCard3Desc);
  setVal("cfgWhyCard4Title", cfg.whyCard4Title);
  setVal("cfgWhyCard4Desc", cfg.whyCard4Desc);

  // CTA & Footer
  setVal("cfgCtaTitle", cfg.ctaTitle);
  setVal("cfgCtaText", cfg.ctaText);
  setVal("cfgCtaBtn", cfg.ctaBtn);
  setVal("cfgFooterCopyright", cfg.footerCopyright);

  // Supabase Custom
  setVal("cfgSupabaseUrl", cfg.customSupabaseUrl || DEFAULT_SUPABASE_URL);
  setVal("cfgSupabaseKey", cfg.customSupabaseKey || DEFAULT_SUPABASE_KEY);
}

/**
 * Dropzone & Photo Upload Wiring
 */
function initDropzones() {
  setupDropzone("product", "productDropZone", "productFileInput", "productDropPrompt", "productPreviewWrap", "productPreviewImg", "productPreviewName", "productRemovePhotoBtn", "productPhotoUrlInput", (dataUrl) => {
    adminState.currentProductPhoto = dataUrl;
  });

  setupDropzone("cat", "catDropZone", "catFileInput", "catDropPrompt", "catPreviewWrap", "catPreviewImg", "catPreviewName", "catRemovePhotoBtn", "catPhotoUrlInput", (dataUrl) => {
    adminState.currentCategoryPhoto = dataUrl;
  });

  setupDropzone("logo", "logoDropZone", "logoFileInput", "logoDropPrompt", "logoPreviewWrap", "logoPreviewImg", "logoPreviewName", "logoRemoveBtn", "cfgLogoUrl", (dataUrl) => {
    adminState.currentLogoPhoto = dataUrl;
    adminState.config.companyLogoUrl = dataUrl;
  });

  setupAboutMediaDropzone();
}

function setupDropzone(prefix, dropZoneId, fileInputId, promptId, previewWrapId, previewImgId, previewNameId, removeBtnId, urlInputId, onDataCallback) {
  const dropZone = document.getElementById(dropZoneId);
  const fileInput = document.getElementById(fileInputId);
  const urlInput = document.getElementById(urlInputId);
  const removeBtn = document.getElementById(removeBtnId);

  if (!dropZone || !fileInput) return;

  dropZone.addEventListener("click", () => fileInput.click());

  ['dragenter', 'dragover'].forEach(event => {
    dropZone.addEventListener(event, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add("dragover");
    });
  });

  ['dragleave', 'drop'].forEach(event => {
    dropZone.addEventListener(event, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove("dragover");
    });
  });

  dropZone.addEventListener("drop", (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files[0]) {
      handleFile(dt.files[0]);
    }
  });

  fileInput.addEventListener("change", function() {
    if (this.files && this.files[0]) {
      handleFile(this.files[0]);
    }
  });

  if (urlInput) {
    urlInput.addEventListener("input", function() {
      const url = this.value.trim();
      if (url) {
        setDropzonePreview(prefix, url, url.split("/").pop() || "Remote Photo");
        onDataCallback(url);
      }
    });
  }

  if (removeBtn) {
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      clearDropzonePreview(prefix);
      onDataCallback("");
      if (urlInput) urlInput.value = "";
    });
  }

  function handleFile(file) {
    if (!file.type.startsWith("image/")) {
      showToast("Please select a valid image file.", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        const maxDim = 1200;
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        ctx.drawImage(img, 0, 0, w, h);

        let outputType = "image/jpeg";
        let quality = 0.88;
        if (prefix === "logo" || file.type === "image/png" || file.type === "image/webp" || file.type.includes("svg")) {
          outputType = "image/png";
        }

        // For logo uploads, ensure background is transparent and website-matching (remove opaque black background)
        if (prefix === "logo") {
          try {
            const imgData = ctx.getImageData(0, 0, w, h);
            const data = imgData.data;
            const corners = [0, (w - 1) * 4, ((h - 1) * w) * 4, (((h - 1) * w) + (w - 1)) * 4];
            let darkCorners = 0;
            let opaqueCorners = 0;
            corners.forEach(idx => {
              if (data[idx + 3] > 60) {
                opaqueCorners++;
                if (data[idx] < 50 && data[idx + 1] < 50 && data[idx + 2] < 50) {
                  darkCorners++;
                }
              }
            });
            if (opaqueCorners >= 2 && darkCorners >= 2) {
              for (let i = 0; i < data.length; i += 4) {
                const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
                if (a > 0) {
                  const maxVal = Math.max(r, g, b);
                  if (maxVal < 45) {
                    data[i + 3] = 0; // 100% transparent
                  } else if (maxVal < 80) {
                    data[i + 3] = Math.round(((maxVal - 45) / 35) * a); // feather edge
                  }
                }
              }
              ctx.putImageData(imgData, 0, 0);
            }
          } catch (e) {}
        }

        const dataUrl = canvas.toDataURL(outputType, quality);
        setDropzonePreview(prefix, dataUrl, file.name);
        onDataCallback(dataUrl);
      };
      img.onerror = function() {
        setDropzonePreview(prefix, e.target.result, file.name);
        onDataCallback(e.target.result);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function setDropzonePreview(prefix, src, name) {
  const prompt = document.getElementById(`${prefix}DropPrompt`);
  const wrap = document.getElementById(`${prefix}PreviewWrap`);
  const img = document.getElementById(`${prefix}PreviewImg`);
  const nameEl = document.getElementById(`${prefix}PreviewName`);

  if (prompt) prompt.style.display = "none";
  if (wrap) wrap.style.display = "flex";
  if (img) img.src = src;
  if (nameEl) nameEl.textContent = name;
}

function clearDropzonePreview(prefix) {
  const prompt = document.getElementById(`${prefix}DropPrompt`);
  const wrap = document.getElementById(`${prefix}PreviewWrap`);
  const img = document.getElementById(`${prefix}PreviewImg`);
  const input = document.getElementById(`${prefix}FileInput`);

  if (prompt) prompt.style.display = "flex";
  if (wrap) wrap.style.display = "none";
  if (img) img.src = "";
  if (input) input.value = "";
}

/**
 * Dedicated About Showcase Media Uploader (Video & Photo)
 */
function setupAboutMediaDropzone() {
  const dropZone = document.getElementById("aboutMediaDropZone");
  const fileInput = document.getElementById("aboutMediaFileInput");
  const urlInput = document.getElementById("cfgAboutMediaUrl");
  const typeSelect = document.getElementById("cfgAboutMediaType");
  const removeBtn = document.getElementById("aboutMediaRemoveBtn");

  if (!dropZone || !fileInput) return;

  dropZone.addEventListener("click", (e) => {
    if (e.target.closest("#aboutMediaRemoveBtn") || e.target.closest("video")) return;
    fileInput.click();
  });

  ['dragenter', 'dragover'].forEach(event => {
    dropZone.addEventListener(event, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add("dragover");
    });
  });

  ['dragleave', 'drop'].forEach(event => {
    dropZone.addEventListener(event, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove("dragover");
    });
  });

  dropZone.addEventListener("drop", (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files[0]) {
      handleAboutFile(dt.files[0]);
    }
  });

  fileInput.addEventListener("change", function() {
    if (this.files && this.files[0]) {
      handleAboutFile(this.files[0]);
    }
  });

  if (urlInput) {
    urlInput.addEventListener("input", function() {
      const url = this.value.trim();
      if (url) {
        const isVid = (typeSelect && typeSelect.value === "video") || 
          url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".mov") || url.endsWith(".ogg") || url.includes("video/");
        setAboutMediaPreview(url, isVid ? "video" : "image", url.split("/").pop() || "Remote Media");
        adminState.currentAboutMedia = { type: isVid ? "video" : "image", url: url, name: url.split("/").pop() };
        if (typeSelect && typeSelect.value === "auto") {
          typeSelect.value = isVid ? "video" : "image";
        }
      }
    });
  }

  if (typeSelect) {
    typeSelect.addEventListener("change", function() {
      const url = (urlInput ? urlInput.value.trim() : "") || (adminState.currentAboutMedia ? adminState.currentAboutMedia.url : "");
      if (url) {
        setAboutMediaPreview(url, this.value, "Current Media");
      }
    });
  }

  if (removeBtn) {
    removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      clearAboutMediaPreview();
      adminState.currentAboutMedia = null;
      if (urlInput) urlInput.value = "";
      fileInput.value = "";
      showToast("About showcase media cleared.", "info");
    });
  }

  function handleAboutFile(file) {
    const isVideo = file.type.startsWith("video/") || /\.(mp4|webm|mov|ogg)$/i.test(file.name);
    const isImage = file.type.startsWith("image/");

    if (!isVideo && !isImage) {
      showToast("Please select a valid video (MP4, WebM, MOV) or photo (JPG, PNG, WebP).", "error");
      return;
    }

    if (isVideo) {
      if (file.size > 25 * 1024 * 1024) {
        showToast("Large video file detected. Local preview loaded; for production hosting, an online URL is recommended.", "info");
      }
      const reader = new FileReader();
      reader.onload = function(e) {
        const dataUrl = e.target.result;
        setAboutMediaPreview(dataUrl, "video", file.name);
        adminState.currentAboutMedia = { type: "video", url: dataUrl, name: file.name };
        if (urlInput) urlInput.value = dataUrl;
        if (typeSelect) typeSelect.value = "video";
        showToast(`🎥 Video "${file.name}" loaded for About Us section!`, "success");
      };
      reader.readAsDataURL(file);
    } else {
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
          const maxDim = 1200;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          const canvas = document.createElement("canvas");
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, w, h);
          const dataUrl = canvas.toDataURL("image/jpeg", 0.88);
          setAboutMediaPreview(dataUrl, "image", file.name);
          adminState.currentAboutMedia = { type: "image", url: dataUrl, name: file.name };
          if (urlInput) urlInput.value = dataUrl;
          if (typeSelect) typeSelect.value = "image";
          showToast(`🖼️ Photo "${file.name}" loaded for About Us section!`, "success");
        };
        img.onerror = function() {
          setAboutMediaPreview(e.target.result, "image", file.name);
          adminState.currentAboutMedia = { type: "image", url: e.target.result, name: file.name };
          if (urlInput) urlInput.value = e.target.result;
          if (typeSelect) typeSelect.value = "image";
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}

function setAboutMediaPreview(src, mediaType, label) {
  const prompt = document.getElementById("aboutMediaDropPrompt");
  const wrap = document.getElementById("aboutMediaPreviewWrap");
  const videoEl = document.getElementById("aboutMediaPreviewVideo");
  const imgEl = document.getElementById("aboutMediaPreviewImg");
  const nameEl = document.getElementById("aboutMediaPreviewName");
  const badgeEl = document.getElementById("aboutMediaTypeBadge");

  if (!wrap) return;

  const isVid = mediaType === "video" || 
    (mediaType !== "image" && (
      src.includes("video/") || 
      src.endsWith(".mp4") || 
      src.endsWith(".webm") || 
      src.endsWith(".mov") || 
      src.startsWith("data:video/") ||
      src.startsWith("blob:")
    ));

  if (prompt) prompt.style.display = "none";
  wrap.style.display = "flex";

  if (isVid) {
    if (imgEl) imgEl.style.display = "none";
    if (videoEl) {
      videoEl.src = src;
      videoEl.style.display = "block";
      videoEl.load();
      videoEl.play().catch(() => {});
    }
    if (badgeEl) {
      badgeEl.textContent = "🎥 Video";
      badgeEl.className = "table-badge success";
    }
  } else {
    if (videoEl) {
      videoEl.style.display = "none";
      videoEl.pause();
    }
    if (imgEl) {
      imgEl.src = src;
      imgEl.style.display = "block";
    }
    if (badgeEl) {
      badgeEl.textContent = "🖼️ Photo";
      badgeEl.className = "table-badge default";
    }
  }

  if (nameEl) nameEl.textContent = label || (isVid ? "Video Showcase" : "Photo Showcase");
}

function clearAboutMediaPreview() {
  const prompt = document.getElementById("aboutMediaDropPrompt");
  const wrap = document.getElementById("aboutMediaPreviewWrap");
  const videoEl = document.getElementById("aboutMediaPreviewVideo");
  const imgEl = document.getElementById("aboutMediaPreviewImg");

  if (prompt) prompt.style.display = "flex";
  if (wrap) wrap.style.display = "none";
  if (videoEl) {
    videoEl.pause();
    videoEl.src = "";
    videoEl.style.display = "none";
  }
  if (imgEl) {
    imgEl.src = "";
    imgEl.style.display = "none";
  }
}

/**
 * Forms Handling
 */
function initForms() {
  // 1. Product Upload Form
  const productForm = document.getElementById("productUploadForm");
  if (productForm) {
    productForm.addEventListener("submit", async function(e) {
      e.preventDefault();

      const name = document.getElementById("prodFormName").value.trim();
      const catSelect = document.getElementById("prodFormCategory");
      const price = document.getElementById("prodFormPrice").value.trim();
      const desc = document.getElementById("prodFormDesc").value.trim();
      const isHero = document.getElementById("prodFormHeroCheck").checked;

      if (!name) {
        showToast("Please enter a product name.", "error");
        return;
      }
      if (!adminState.currentProductPhoto) {
        showToast("Please upload a product photo or provide an image URL.", "error");
        return;
      }

      const selectedCat = adminState.categories.find(c => c.slug === catSelect.value || c.id === catSelect.value);
      const catName = selectedCat ? selectedCat.name : catSelect.value;
      const catSlug = selectedCat ? selectedCat.slug : catSelect.value;

      let formattedPrice = price;
      if (formattedPrice && !formattedPrice.startsWith("₹") && !formattedPrice.startsWith("$")) {
        formattedPrice = `₹ ${formattedPrice}`;
      }

      const newProduct = {
        id: `prod-${Date.now()}`,
        name: name,
        category: catName,
        category_slug: catSlug,
        price: formattedPrice || "₹ 0",
        description: desc || `${catName} product crafted with premium quality.`,
        image_url: adminState.currentProductPhoto,
        is_hero_featured: isHero,
        is_custom: true,
        created_at: new Date().toISOString()
      };

      // If set as hero, update category override
      if (isHero) {
        adminState.products.forEach(p => {
          if ((p.category || "").toLowerCase() === catName.toLowerCase()) {
            p.is_hero_featured = false;
          }
        });
        if (selectedCat) {
          selectedCat.hero_image_url = adminState.currentProductPhoto;
        }
      }

      adminState.products.unshift(newProduct);

      // Save to localStorage
      try {
        const customProds = JSON.parse(localStorage.getItem("preksha_custom_products") || "[]");
        customProds.unshift(newProduct);
        localStorage.setItem("preksha_custom_products", JSON.stringify(customProds));
      } catch (err) {}

      // Background push to Supabase if connected
      if (adminState.supabaseClient) {
        adminState.supabaseClient.from("products").insert([{
          name: newProduct.name,
          category: newProduct.category,
          category_slug: newProduct.category_slug,
          price: newProduct.price,
          description: newProduct.description,
          image_url: newProduct.image_url,
          is_active: true
        }]).then(({ error }) => {
          if (error) console.warn("Supabase insert product note:", error.message);
        });
      }

      showToast(`✨ "${name}" published successfully!`, "success");
      productForm.reset();
      clearDropzonePreview("product");
      adminState.currentProductPhoto = "";
      renderCatalogTable();
      updateDashboardStats();
    });
  }

  // 2. Category Create Form
  const categoryForm = document.getElementById("categoryCreateForm");
  if (categoryForm) {
    categoryForm.addEventListener("submit", async function(e) {
      e.preventDefault();

      const name = document.getElementById("catFormName").value.trim();
      let slug = document.getElementById("catFormSlug").value.trim();
      const desc = document.getElementById("catFormDesc").value.trim();

      if (!name) {
        showToast("Please enter a category name.", "error");
        return;
      }

      if (!slug) {
        slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
      }

      const photoUrl = adminState.currentCategoryPhoto || "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80";

      const newCategory = {
        id: `cat-${slug}-${Date.now()}`,
        name: name,
        slug: slug,
        description: desc || `Exclusive ${name} curated collection.`,
        image_url: photoUrl,
        sort_order: adminState.categories.length + 1,
        is_custom: true
      };

      adminState.categories.push(newCategory);

      // Save to localStorage
      try {
        const customCats = JSON.parse(localStorage.getItem("preksha_custom_categories") || "[]");
        customCats.push(newCategory);
        localStorage.setItem("preksha_custom_categories", JSON.stringify(customCats));
      } catch (err) {}

      // Background push to Supabase if connected
      if (adminState.supabaseClient) {
        adminState.supabaseClient.from("categories").insert([{
          id: newCategory.id,
          name: newCategory.name,
          slug: newCategory.slug,
          description: newCategory.description,
          image_url: newCategory.image_url,
          sort_order: newCategory.sort_order,
          is_active: true
        }]).then(({ error }) => {
          if (error) console.warn("Supabase insert category note:", error.message);
        });
      }

      showToast(`📁 Category "${name}" created successfully!`, "success");
      categoryForm.reset();
      clearDropzonePreview("cat");
      adminState.currentCategoryPhoto = "";
      populateCategorySelects();
      renderCategoriesTable();
      updateDashboardStats();
    });
  }

  // 3. Brand Settings Form
  const brandForm = document.getElementById("brandForm");
  if (brandForm) {
    brandForm.addEventListener("submit", (e) => {
      e.preventDefault();
      saveBrandSettings();
    });
  }

  // 4. Content CMS Form
  const contentForm = document.getElementById("contentForm");
  if (contentForm) {
    contentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      saveContentSettings();
    });
  }

  // 5. Supabase Config Form
  const supabaseForm = document.getElementById("supabaseConfigForm");
  if (supabaseForm) {
    supabaseForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const url = document.getElementById("cfgSupabaseUrl").value.trim();
      const key = document.getElementById("cfgSupabaseKey").value.trim();

      adminState.config.customSupabaseUrl = url;
      adminState.config.customSupabaseKey = key;

      persistSiteConfig();
      await initSupabaseClient();
      showToast("Supabase configuration saved & tested.", "success");
    });
  }

  // Test Supabase Button
  const testBtn = document.getElementById("testSupabaseBtn");
  if (testBtn) {
    testBtn.addEventListener("click", async () => {
      showToast("Testing Supabase connection...", "success");
      await initSupabaseClient();
      if (adminState.isSupabaseConnected) {
        showToast("Connected to Supabase successfully!", "success");
      } else {
        showToast("Could not connect to Supabase. Check URL & Key.", "error");
      }
    });
  }

  // Push to Supabase Button
  const pushBtn = document.getElementById("pushToSupabaseBtn");
  if (pushBtn) {
    pushBtn.addEventListener("click", pushAllDataToSupabase);
  }

  // Pull from Supabase Button
  const pullBtn = document.getElementById("pullFromSupabaseBtn");
  if (pullBtn) {
    pullBtn.addEventListener("click", pullAllDataFromSupabase);
  }

  // Catalog Table Search and Filter
  const searchInput = document.getElementById("catalogSearchInput");
  const filterSelect = document.getElementById("catalogCategoryFilter");
  if (searchInput) searchInput.addEventListener("input", renderCatalogTable);
  if (filterSelect) filterSelect.addEventListener("change", renderCatalogTable);
}

/**
 * Save Brand & Contact Settings
 */
function saveBrandSettings() {
  const getVal = id => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  };

  adminState.config.companyName = getVal("cfgCompanyName") || "PREKSHA LIGHTING WORLD";
  adminState.config.companyTagline = getVal("cfgCompanyTagline");
  adminState.config.companyLogoUrl = adminState.currentLogoPhoto || getVal("cfgLogoUrl") || adminState.config.companyLogoUrl;
  adminState.config.whatsappNumber = getVal("cfgWhatsapp") || "917010114070";
  adminState.config.phoneNumber = getVal("cfgPhone");
  adminState.config.emailAddress = getVal("cfgEmail");
  adminState.config.headquartersAddress = getVal("cfgAddress");
  adminState.config.servingCities = getVal("cfgServingCities");

  persistSiteConfig();
  updateNavBrand();
  showToast("Company profile & branding saved live!", "success");
}

/**
 * Save Homepage Content CMS Settings
 */
function saveContentSettings() {
  const getVal = id => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : "";
  };

  // Hero
  adminState.config.heroTaglineBadge = getVal("cfgHeroBadge");
  adminState.config.heroHeading = getVal("cfgHeroHeading");
  adminState.config.heroDescription = getVal("cfgHeroDesc");
  adminState.config.heroPrimaryBtnText = getVal("cfgHeroPrimaryBtn");
  adminState.config.heroSecondaryBtnText = getVal("cfgHeroSecondaryBtn");

  // About
  adminState.config.aboutSectionTag = getVal("cfgAboutTag");
  adminState.config.aboutHeading = getVal("cfgAboutHeading");
  adminState.config.aboutDescription = getVal("cfgAboutDesc");
  adminState.config.aboutBadge = getVal("cfgAboutBadge");
  
  const aboutMediaUrl = getVal("cfgAboutMediaUrl") || (adminState.currentAboutMedia ? adminState.currentAboutMedia.url : "") || getVal("cfgAboutImgUrl") || adminState.config.aboutMediaUrl;
  let aboutMediaType = document.getElementById("cfgAboutMediaType") ? document.getElementById("cfgAboutMediaType").value : "auto";
  if (aboutMediaType === "auto") {
    if (aboutMediaUrl && (aboutMediaUrl.includes("video/") || aboutMediaUrl.endsWith(".mp4") || aboutMediaUrl.endsWith(".webm") || aboutMediaUrl.endsWith(".mov") || aboutMediaUrl.endsWith(".ogg") || aboutMediaUrl.startsWith("data:video/"))) {
      aboutMediaType = "video";
    } else {
      aboutMediaType = "image";
    }
  }

  adminState.config.aboutMediaUrl = aboutMediaUrl;
  adminState.config.aboutImageUrl = aboutMediaUrl; // compatibility
  adminState.config.aboutMediaType = aboutMediaType;
  adminState.config.aboutVideoAutoplay = document.getElementById("cfgAboutVideoAutoplay") ? document.getElementById("cfgAboutVideoAutoplay").checked : true;
  adminState.config.aboutVideoLoop = document.getElementById("cfgAboutVideoLoop") ? document.getElementById("cfgAboutVideoLoop").checked : true;
  adminState.config.aboutVideoControls = document.getElementById("cfgAboutVideoControls") ? document.getElementById("cfgAboutVideoControls").checked : true;

  adminState.config.aboutFeat1Title = getVal("cfgAboutFeat1Title");
  adminState.config.aboutFeat1Text = getVal("cfgAboutFeat1Text");
  adminState.config.aboutFeat2Title = getVal("cfgAboutFeat2Title");
  adminState.config.aboutFeat2Text = getVal("cfgAboutFeat2Text");
  adminState.config.aboutFeat3Title = getVal("cfgAboutFeat3Title");
  adminState.config.aboutFeat3Text = getVal("cfgAboutFeat3Text");
  adminState.config.aboutFeat4Title = getVal("cfgAboutFeat4Title");
  adminState.config.aboutFeat4Text = getVal("cfgAboutFeat4Text");

  // Why Us
  adminState.config.whyTag = getVal("cfgWhyTag");
  adminState.config.whyTitle = getVal("cfgWhyTitle");
  adminState.config.whySubtitle = getVal("cfgWhySubtitle");
  adminState.config.whyCard1Title = getVal("cfgWhyCard1Title");
  adminState.config.whyCard1Desc = getVal("cfgWhyCard1Desc");
  adminState.config.whyCard2Title = getVal("cfgWhyCard2Title");
  adminState.config.whyCard2Desc = getVal("cfgWhyCard2Desc");
  adminState.config.whyCard3Title = getVal("cfgWhyCard3Title");
  adminState.config.whyCard3Desc = getVal("cfgWhyCard3Desc");
  adminState.config.whyCard4Title = getVal("cfgWhyCard4Title");
  adminState.config.whyCard4Desc = getVal("cfgWhyCard4Desc");

  // CTA & Footer
  adminState.config.ctaTitle = getVal("cfgCtaTitle");
  adminState.config.ctaText = getVal("cfgCtaText");
  adminState.config.ctaBtn = getVal("cfgCtaBtn");
  adminState.config.footerCopyright = getVal("cfgFooterCopyright");

  persistSiteConfig();
  showToast("Homepage CMS content saved live!", "success");
}

/**
 * Save All Changes
 */
function saveAllChanges() {
  if (!adminState.isAuthenticated) {
    const overlay = document.getElementById("adminAuthOverlay");
    if (overlay) overlay.classList.add("active");
    showToast("Authentication required to save changes.", "error");
    return;
  }

  saveBrandSettings();
  saveContentSettings();
  showToast("All settings, products, and categories saved successfully.", "success");
}

/**
 * Persist Site Config to localStorage and Supabase
 */
function persistSiteConfig() {
  try {
    localStorage.setItem("preksha_site_config", JSON.stringify(adminState.config));
  } catch (e) {
    console.warn("Storage write config error:", e);
  }

  // Also push to Supabase site_config table if connected
  if (adminState.supabaseClient) {
    adminState.supabaseClient
      .from("site_config")
      .upsert({ key: "main_config", value: adminState.config })
      .then(({ error }) => {
        if (error) console.warn("Supabase site_config upsert notice:", error.message);
      });
  }
}

/**
 * Render Product Catalog Table
 */
function renderCatalogTable() {
  const tableBody = document.getElementById("catalogTableBody");
  const countSub = document.getElementById("catalogCountSub");
  if (!tableBody) return;

  const searchInput = document.getElementById("catalogSearchInput");
  const filterSelect = document.getElementById("catalogCategoryFilter");

  const query = (searchInput ? searchInput.value : "").toLowerCase().trim();
  const filterCat = filterSelect ? filterSelect.value : "all";

  const filtered = adminState.products.filter(p => {
    const matchSearch = !query ||
      (p.name && p.name.toLowerCase().includes(query)) ||
      (p.category && p.category.toLowerCase().includes(query)) ||
      (p.description && p.description.toLowerCase().includes(query));

    const pSlug = (p.category_slug || p.category || "").toLowerCase();
    const matchCat = filterCat === "all" || pSlug === filterCat.toLowerCase();

    return matchSearch && matchCat;
  });

  if (countSub) {
    countSub.textContent = `Showing ${filtered.length} of ${adminState.products.length} products`;
  }

  tableBody.innerHTML = "";

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align:center; padding:36px; color:var(--admin-text-dim);">
          No products found matching your search.
        </td>
      </tr>
    `;
    return;
  }

  filtered.forEach(prod => {
    const tr = document.createElement("tr");
    const isCustom = !!prod.is_custom;
    const isHero = !!prod.is_hero_featured;
    const imgSrc = prod.image_url || "images/opera gate light.jpeg";

    tr.innerHTML = `
      <td>
        <img class="table-thumb" src="${imgSrc}" alt="${prod.name}" onerror="this.onerror=null; this.src='images/opera gate light.jpeg';">
      </td>
      <td>
        <strong style="color:var(--admin-text-main); font-size:0.92rem;">${prod.name}</strong>
        <div style="font-size:0.75rem; color:var(--admin-text-dim);">${prod.description ? prod.description.substring(0, 50) + '...' : ''}</div>
        ${isHero ? '<span class="table-badge hero" style="margin-top:4px;">★ Category Hero Photo</span>' : ''}
      </td>
      <td><span class="table-badge default">${prod.category || 'General'}</span></td>
      <td style="color:var(--admin-gold); font-weight:600;">${prod.price || '—'}</td>
      <td>
        <span class="table-badge ${isCustom ? 'custom' : 'default'}">
          ${isCustom ? 'Custom Upload' : 'Built-in'}
        </span>
      </td>
      <td>
        <div class="table-actions">
          <button class="btn-action btn-hero" type="button" data-action="set-hero" data-id="${prod.id}" title="Make this product photo the hero background">
            ${isHero ? '★ Hero' : '☆ Set Hero'}
          </button>
          <button class="btn-action btn-danger" type="button" data-action="delete" data-id="${prod.id}" title="Delete Product">
            🗑️ Delete
          </button>
        </div>
      </td>
    `;

    // Set Hero
    tr.querySelector('[data-action="set-hero"]').addEventListener("click", () => {
      makeProductHero(prod);
    });

    // Delete
    tr.querySelector('[data-action="delete"]').addEventListener("click", () => {
      deleteProduct(prod);
    });

    tableBody.appendChild(tr);
  });
}

function makeProductHero(product) {
  const catNameLower = (product.category || "").toLowerCase().trim();
  const catSlugLower = (product.category_slug || "").toLowerCase().trim();

  adminState.products.forEach(p => {
    const pCat = (p.category || "").toLowerCase().trim();
    const pSlug = (p.category_slug || "").toLowerCase().trim();
    if (pCat === catNameLower || pSlug === catSlugLower) {
      p.is_hero_featured = (p.id === product.id);
    }
  });

  const matchedCat = adminState.categories.find(c =>
    (c.slug || "").toLowerCase() === catSlugLower ||
    (c.name || "").toLowerCase() === catNameLower
  );
  if (matchedCat) {
    matchedCat.hero_image_url = product.image_url;
  }

  // Update storage
  try {
    const customProds = adminState.products.filter(p => p.is_custom);
    localStorage.setItem("preksha_custom_products", JSON.stringify(customProds));
  } catch (e) {}

  showToast(`★ "${product.name}" photo set as Hero for ${product.category}!`, "success");
  renderCatalogTable();
}

function deleteProduct(product) {
  if (!confirm(`Are you sure you want to remove "${product.name}"?`)) {
    return;
  }

  adminState.products = adminState.products.filter(p => p.id !== product.id);

  // Remove from localStorage
  try {
    const customProds = JSON.parse(localStorage.getItem("preksha_custom_products") || "[]");
    const updated = customProds.filter(p => p.id !== product.id);
    localStorage.setItem("preksha_custom_products", JSON.stringify(updated));
  } catch (e) {}

  // Delete from Supabase if connected
  if (adminState.supabaseClient && product.id) {
    adminState.supabaseClient
      .from("products")
      .delete()
      .eq("id", product.id)
      .then(({ error }) => {
        if (error) console.warn("Supabase delete product notice:", error.message);
      });
  }

  showToast(`"${product.name}" removed from catalog.`, "success");
  renderCatalogTable();
  updateDashboardStats();
}

/**
 * Render Categories Table
 */
function renderCategoriesTable() {
  const tableBody = document.getElementById("categoryTableBody");
  const countSub = document.getElementById("categoryCountSub");
  if (!tableBody) return;

  if (countSub) {
    countSub.textContent = `${adminState.categories.length} Categories Active`;
  }

  tableBody.innerHTML = "";

  adminState.categories.forEach(cat => {
    const tr = document.createElement("tr");
    const prodsInCat = adminState.products.filter(p => {
      const pCat = (p.category || "").toLowerCase();
      const pSlug = (p.category_slug || "").toLowerCase();
      return pCat === cat.name.toLowerCase() || pSlug === (cat.slug || "").toLowerCase();
    }).length;

    const imgSrc = cat.image_url || "images/opera gate light.jpeg";

    tr.innerHTML = `
      <td>
        <img class="table-thumb" src="${imgSrc}" alt="${cat.name}" onerror="this.onerror=null; this.src='images/opera gate light.jpeg';">
      </td>
      <td><strong style="color:var(--admin-text-main); font-size:0.95rem;">${cat.name}</strong></td>
      <td><code style="color:var(--admin-gold); font-size:0.75rem;">${cat.slug}</code></td>
      <td style="color:var(--admin-text-muted); font-size:0.78rem;">${cat.description || '—'}</td>
      <td><span class="table-badge custom">${prodsInCat} Products</span></td>
      <td>
        <div class="table-actions">
          <button class="btn-action btn-danger" type="button" data-action="delete-cat" data-id="${cat.id}">
            🗑️ Delete
          </button>
        </div>
      </td>
    `;

    tr.querySelector('[data-action="delete-cat"]').addEventListener("click", () => {
      deleteCategory(cat);
    });

    tableBody.appendChild(tr);
  });
}

function deleteCategory(cat) {
  if (!confirm(`Are you sure you want to delete category "${cat.name}"? Products in this category will remain.`)) {
    return;
  }

  adminState.categories = adminState.categories.filter(c => c.id !== cat.id);

  // Update storage
  try {
    const customCats = JSON.parse(localStorage.getItem("preksha_custom_categories") || "[]");
    const updated = customCats.filter(c => c.id !== cat.id);
    localStorage.setItem("preksha_custom_categories", JSON.stringify(updated));
  } catch (e) {}

  // Delete from Supabase if connected
  if (adminState.supabaseClient && cat.id) {
    adminState.supabaseClient
      .from("categories")
      .delete()
      .eq("id", cat.id)
      .then(({ error }) => {
        if (error) console.warn("Supabase delete category notice:", error.message);
      });
  }

  showToast(`Category "${cat.name}" deleted.`, "success");
  populateCategorySelects();
  renderCategoriesTable();
  updateDashboardStats();
}

/**
 * Populate Category Dropdowns across forms
 */
function populateCategorySelects() {
  const prodSelect = document.getElementById("prodFormCategory");
  const filterSelect = document.getElementById("catalogCategoryFilter");

  if (prodSelect) {
    prodSelect.innerHTML = "";
    adminState.categories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.slug || cat.id;
      opt.textContent = cat.name;
      prodSelect.appendChild(opt);
    });
  }

  if (filterSelect) {
    const current = filterSelect.value;
    filterSelect.innerHTML = '<option value="all">All Categories</option>';
    adminState.categories.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.slug || cat.id;
      opt.textContent = cat.name;
      filterSelect.appendChild(opt);
    });
    if (current) filterSelect.value = current;
  }
}

/**
 * Update Dashboard Stats
 */
function updateDashboardStats() {
  const prodVal = document.getElementById("statTotalProducts");
  const catVal = document.getElementById("statTotalCategories");
  const customVal = document.getElementById("statCustomUploads");

  if (prodVal) prodVal.textContent = adminState.products.length;
  if (catVal) catVal.textContent = adminState.categories.length;
  if (customVal) {
    const customCount = adminState.products.filter(p => p.is_custom).length;
    customVal.textContent = customCount;
  }
}

/**
 * Push All Local Data to Supabase
 */
async function pushAllDataToSupabase() {
  if (!adminState.isAuthenticated) {
    const overlay = document.getElementById("adminAuthOverlay");
    if (overlay) overlay.classList.add("active");
    showToast("Admin authentication required to push to database.", "error");
    return;
  }

  if (!adminState.supabaseClient) {
    showToast("Supabase client not initialized. Check credentials.", "error");
    return;
  }

  showToast("Pushing data to Supabase...", "success");

  try {
    // 1. Push site_config
    await adminState.supabaseClient
      .from("site_config")
      .upsert({ key: "main_config", value: adminState.config });

    // 2. Push categories
    for (const cat of adminState.categories) {
      await adminState.supabaseClient.from("categories").upsert({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        image_url: cat.image_url,
        sort_order: cat.sort_order || 1,
        is_active: true
      });
    }

    // 3. Push products
    for (const prod of adminState.products) {
      await adminState.supabaseClient.from("products").upsert({
        id: prod.id,
        name: prod.name,
        category: prod.category,
        category_slug: prod.category_slug,
        price: prod.price,
        description: prod.description,
        image_url: prod.image_url,
        is_hero_featured: !!prod.is_hero_featured,
        is_active: true
      });
    }

    showToast("✅ Successfully pushed all configuration, categories, and products to Supabase!", "success");
  } catch (err) {
    showToast("Push error: " + err.message, "error");
  }
}

/**
 * Pull Latest Data from Supabase
 */
async function pullAllDataFromSupabase() {
  if (!adminState.supabaseClient) {
    showToast("Supabase not connected.", "error");
    return;
  }

  showToast("Pulling latest data from Supabase...", "success");

  try {
    // Pull config
    const { data: configData } = await adminState.supabaseClient
      .from("site_config")
      .select("value")
      .eq("key", "main_config")
      .single();

    if (configData && configData.value) {
      adminState.config = { ...adminState.config, ...configData.value };
      persistSiteConfig();
      populateFormFieldsFromConfig();
    }

    // Pull categories
    const { data: catData } = await adminState.supabaseClient
      .from("categories")
      .select("*")
      .order("sort_order", { ascending: true });

    if (catData && catData.length > 0) {
      adminState.categories = catData;
      populateCategorySelects();
      renderCategoriesTable();
    }

    // Pull products
    const { data: prodData } = await adminState.supabaseClient
      .from("products")
      .select("*")
      .order("sort_order", { ascending: true });

    if (prodData && prodData.length > 0) {
      adminState.products = prodData;
      renderCatalogTable();
    }

    updateDashboardStats();
    showToast("✅ Synchronized with Supabase successfully!", "success");
  } catch (err) {
    showToast("Pull error: " + err.message, "error");
  }
}

/**
 * 1-Click Transformation Business Presets
 */
window.applyBusinessPreset = function(presetType) {
  if (!confirm(`Apply the "${presetType.toUpperCase()}" business template? This will update headings, about, why us, categories, and sample products.`)) {
    return;
  }

  if (presetType === "lighting") {
    adminState.config.companyName = "PREKSHA LIGHTING WORLD";
    adminState.config.companyTagline = "Premium Lighting Solutions";
    adminState.config.companyLogoUrl = "images/preksha-lite-logo.svg";
    adminState.config.heroHeading = "Light Your Space With Style";
    adminState.config.heroDescription = "Premium decorative and architectural lighting solutions for homes, shops, offices and modern spaces.";
    adminState.config.aboutSectionTag = "ABOUT PREKSHA";
    adminState.config.aboutHeading = "Lighting That Makes A Difference";
    adminState.config.aboutDescription = "PREKSHA LIGHTING WORLD provides premium lighting solutions designed to bring beauty, functionality and character to every space.";
    adminState.categories = [...FALLBACK_CATEGORIES];
    adminState.products = [...FALLBACK_PRODUCTS];
  } else if (presetType === "furniture") {
    adminState.config.companyName = "ROYAL HERITAGE FURNITURE";
    adminState.config.companyTagline = "Handcrafted Luxury Living";
    adminState.config.companyLogoUrl = "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=200&q=80";
    adminState.config.heroHeading = "Furnish Your World With Luxury";
    adminState.config.heroDescription = "Handcrafted designer sofas, solid teakwood dining sets, and bespoke luxury interior decor.";
    adminState.config.aboutSectionTag = "ABOUT ROYAL HERITAGE";
    adminState.config.aboutHeading = "Furniture Crafted For Generations";
    adminState.config.aboutDescription = "We create timeless, ergonomically engineered luxury furniture with the finest natural hardwoods and imported upholstery fabrics.";
    adminState.config.aboutImageUrl = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80";
    adminState.config.ctaTitle = "Customise Your Dream Furniture";
    adminState.config.ctaText = "Consult with our master craftsmen for bespoke villa and penthouse furniture.";
    
    adminState.categories = [
      { id: "living-room", name: "Living Room Sofas", slug: "living-room-sofas", description: "Bespoke sectionals, velvet armchairs & coffee tables.", image_url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" },
      { id: "dining-sets", name: "Dining Tables", slug: "dining-tables", description: "Italian marble & solid walnut 8-seater dining suites.", image_url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80" },
      { id: "master-beds", name: "Master Beds", slug: "master-beds", description: "King size upholstered platform beds with hydraulic storage.", image_url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },
      { id: "office-desks", name: "Executive Desks", slug: "executive-desks", description: "Minimalist ergonomic work desks & leather executive chairs.", image_url: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80" }
    ];

    adminState.products = [
      { id: "furn-1", name: "Vittoria Emerald Velvet Sectional", category: "Living Room Sofas", category_slug: "living-room-sofas", price: "₹ 85,000", description: "High-density foam sectional sofa wrapped in water-repellent jewel-toned velvet.", image_url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80", is_hero_featured: true },
      { id: "furn-2", name: "Carrara Marble 8-Seater Dining Set", category: "Dining Tables", category_slug: "dining-tables", price: "₹ 1,20,000", description: "Solid polished Carrara white marble slab on cast brass architectural pedestal.", image_url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80" },
      { id: "furn-3", name: "Milano King Floating Bed", category: "Master Beds", category_slug: "master-beds", price: "₹ 74,000", description: "Integrated warm under-bed LED glow with ergonomic tufted headboard.", image_url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" }
    ];
  } else if (presetType === "hardware") {
    adminState.config.companyName = "APEX INDUSTRIAL HARDWARE";
    adminState.config.companyTagline = "Heavy-Duty Architectural & Industrial Fittings";
    adminState.config.companyLogoUrl = "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=200&q=80";
    adminState.config.heroHeading = "Engineered For Unmatched Strength";
    adminState.config.heroDescription = "Heavy-duty power tools, architectural stainless steel hardware, fasteners, and industrial equipment.";
    adminState.config.aboutSectionTag = "ABOUT APEX HARDWARE";
    adminState.config.aboutHeading = "Precision Engineering & Durability";
    adminState.config.aboutDescription = "Supplying high-torque industrial machinery, architectural glass fittings, and certified fasteners to construction leaders.";
    
    adminState.categories = [
      { id: "power-tools", name: "Power Tools", slug: "power-tools", description: "Brushless cordless drills, angle grinders & rotary hammers.", image_url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80" },
      { id: "door-fittings", name: "Architectural Fittings", slug: "architectural-fittings", description: "Mortise locks, glass patch fittings, hydraulic floor springs.", image_url: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80" }
    ];

    adminState.products = [
      { id: "tool-1", name: "Apex Pro 20V Cordless Hammer Drill", category: "Power Tools", category_slug: "power-tools", price: "₹ 6,400", description: "Brushless motor delivering 65Nm torque with dual lithium-ion batteries.", image_url: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80", is_hero_featured: true }
    ];
  } else if (presetType === "cafe") {
    adminState.config.companyName = "AROMA ARTISAN CAFE";
    adminState.config.companyTagline = "Specialty Coffee Roastery & Gourmet Bakery";
    adminState.config.companyLogoUrl = "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=200&q=80";
    adminState.config.heroHeading = "Brewed With Passion & Character";
    adminState.config.heroDescription = "Single-origin pour overs, velvety handcrafted flat whites, and fresh artisanal croissants.";
    adminState.config.aboutSectionTag = "ABOUT AROMA";
    adminState.config.aboutHeading = "From Farm To Cup";
    adminState.config.aboutDescription = "Direct trade ethically sourced beans roasted in small batches to preserve nuanced terroir and chocolatey aromas.";
    
    adminState.categories = [
      { id: "specialty-beans", name: "Specialty Coffee Beans", slug: "specialty-coffee-beans", description: "Whole bean single-origins from Chikmagalur and Ethiopia.", image_url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80" },
      { id: "artisanal-pastries", name: "Artisanal Pastries", slug: "artisanal-pastries", description: "Flaky butter croissants, sourdough loaves, and macarons.", image_url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" }
    ];

    adminState.products = [
      { id: "cafe-1", name: "Estate Reserve Arabica (250g)", category: "Specialty Coffee Beans", category_slug: "specialty-coffee-beans", price: "₹ 480", description: "Medium roast with tasting notes of hazelnut, dark cocoa, and orange zest.", image_url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80", is_hero_featured: true }
    ];
  }

  // Persist preset
  persistSiteConfig();
  try {
    localStorage.setItem("preksha_custom_categories", JSON.stringify(adminState.categories));
    localStorage.setItem("preksha_custom_products", JSON.stringify(adminState.products));
  } catch (e) {}

  populateFormFieldsFromConfig();
  populateCategorySelects();
  renderCategoriesTable();
  renderCatalogTable();
  updateDashboardStats();
  updateNavBrand();

  showToast(`🎉 "${presetType.toUpperCase()}" template applied successfully! View storefront to see changes.`, "success");
};

/**
 * Backup & Import JSON
 */
function initPresetsAndBackups() {
  const exportBtn = document.getElementById("exportFullBackupBtn");
  const importInput = document.getElementById("importFullBackupInput");
  const resetBtn = document.getElementById("resetDefaultsBtn");

  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      const payload = {
        config: adminState.config,
        categories: adminState.categories,
        products: adminState.products,
        exportedAt: new Date().toISOString()
      };
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
      const a = document.createElement("a");
      a.href = dataStr;
      a.download = `${adminState.config.companyName.toLowerCase().replace(/[^a-z0-9]/g, "-")}-full-backup.json`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      showToast("Full site package exported!", "success");
    });
  }

  if (importInput) {
    importInput.addEventListener("change", function() {
      const file = this.files && this.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        try {
          const imported = JSON.parse(e.target.result);
          if (imported.config && imported.categories && imported.products) {
            adminState.config = { ...DEFAULT_SITE_CONFIG, ...imported.config };
            adminState.categories = imported.categories;
            adminState.products = imported.products;

            persistSiteConfig();
            localStorage.setItem("preksha_custom_categories", JSON.stringify(adminState.categories));
            localStorage.setItem("preksha_custom_products", JSON.stringify(adminState.products));

            populateFormFieldsFromConfig();
            populateCategorySelects();
            renderCategoriesTable();
            renderCatalogTable();
            updateDashboardStats();
            updateNavBrand();

            showToast("✅ Full site backup successfully imported!", "success");
          } else {
            showToast("Invalid backup JSON format.", "error");
          }
        } catch (err) {
          showToast("Error importing JSON: " + err.message, "error");
        }
      };
      reader.readAsText(file);
      this.value = "";
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset everything back to Preksha Lighting World defaults?")) {
        localStorage.removeItem("preksha_site_config");
        localStorage.removeItem("preksha_custom_categories");
        localStorage.removeItem("preksha_custom_products");
        window.location.reload();
      }
    });
  }
}

/**
 * Copy SQL Schema Helper
 */
function initCopySql() {
  const copyBtn = document.getElementById("copySqlBtn");
  const sqlBox = document.getElementById("sqlBox");
  if (copyBtn && sqlBox) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(sqlBox.textContent).then(() => {
        showToast("📋 SQL Schema copied to clipboard!", "success");
      });
    });
  }
}

/**
 * Toast Notification Helper
 */
function showToast(message, type = "success") {
  const toast = document.getElementById("adminToast");
  const msgEl = document.getElementById("toastMsg");
  const iconEl = document.getElementById("toastIcon");

  if (!toast) return;

  if (msgEl) msgEl.textContent = message;
  if (iconEl) iconEl.textContent = type === "success" ? "✨" : "⚠️";

  toast.className = `admin-toast ${type} show`;

  setTimeout(() => {
    toast.classList.remove("show");
  }, 4500);
}

/**
 * =========================================================
 * ADMIN AUTHENTICATION GATEWAY ENGINE
 * Secure Supabase Auth + Emergency Master Passcode Fallback
 * =========================================================
 */
function initAdminAuth() {
  const tabSupabase = document.getElementById("tabSupabaseAuth");
  const tabPasscode = document.getElementById("tabPasscodeAuth");
  const formSupabase = document.getElementById("supabaseAuthForm");
  const formPasscode = document.getElementById("passcodeAuthForm");
  const togglePwdBtn = document.getElementById("togglePasswordVisibilityBtn");
  const pwdInput = document.getElementById("authPasswordInput");
  const magicLinkBtn = document.getElementById("authMagicLinkBtn");
  const logoutBtn = document.getElementById("adminLogoutBtn");

  // Tab Switching
  if (tabSupabase && tabPasscode && formSupabase && formPasscode) {
    tabSupabase.addEventListener("click", () => {
      tabSupabase.classList.add("active");
      tabPasscode.classList.remove("active");
      formSupabase.style.display = "block";
      formPasscode.style.display = "none";
      hideAuthAlert();
    });

    tabPasscode.addEventListener("click", () => {
      tabPasscode.classList.add("active");
      tabSupabase.classList.remove("active");
      formPasscode.style.display = "block";
      formSupabase.style.display = "none";
      hideAuthAlert();
    });
  }

  // Toggle Password Visibility
  if (togglePwdBtn && pwdInput) {
    togglePwdBtn.addEventListener("click", () => {
      const isPwd = pwdInput.type === "password";
      pwdInput.type = isPwd ? "text" : "password";
      togglePwdBtn.textContent = isPwd ? "🙈" : "👁️";
    });
  }

  // Supabase Email + Password Login
  if (formSupabase) {
    formSupabase.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("authEmailInput").value.trim();
      const password = pwdInput.value;
      const submitBtn = document.getElementById("authLoginBtn");
      const submitText = document.getElementById("authLoginBtnText");

      if (!email || !password) {
        showAuthAlert("Please enter both email and password.", "error");
        return;
      }

      if (!adminState.supabaseClient) {
        showAuthAlert("Supabase client is not connected. Use 'Master Passcode' tab to sign in immediately.", "info");
        return;
      }

      try {
        if (submitBtn) submitBtn.disabled = true;
        if (submitText) submitText.textContent = "Verifying Credentials...";

        const { data, error } = await adminState.supabaseClient.auth.signInWithPassword({
          email,
          password
        });

        if (error) {
          showAuthAlert(error.message || "Invalid login credentials. Please verify your email and password.", "error");
          return;
        }

        if (data && data.user) {
          setAuthenticatedUser(data.user.email, "supabase");
          showToast("✨ Authenticated successfully as " + data.user.email, "success");
        }
      } catch (err) {
        showAuthAlert("Authentication failed: " + err.message, "error");
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (submitText) submitText.textContent = "🔐 Sign In with Password";
      }
    });
  }

  // Magic Link / Passwordless Sign In
  if (magicLinkBtn) {
    magicLinkBtn.addEventListener("click", async () => {
      const email = document.getElementById("authEmailInput").value.trim();
      if (!email) {
        showAuthAlert("Enter your administrator email first.", "error");
        return;
      }

      if (!adminState.supabaseClient) {
        showAuthAlert("Supabase is not connected. Switch to Master Passcode tab.", "error");
        return;
      }

      try {
        magicLinkBtn.disabled = true;
        magicLinkBtn.textContent = "Sending Magic Link...";

        const { error } = await adminState.supabaseClient.auth.signInWithOtp({
          email,
          options: {
            emailRedirectTo: window.location.href
          }
        });

        if (error) {
          showAuthAlert(error.message, "error");
        } else {
          showAuthAlert("✉️ Magic login link sent to " + email + "! Please check your inbox and click the link to log in.", "success");
        }
      } catch (err) {
        showAuthAlert("Failed to send magic link: " + err.message, "error");
      } finally {
        magicLinkBtn.disabled = false;
        magicLinkBtn.textContent = "✉️ Send One-Click Magic Link";
      }
    });
  }

  // Master Passcode Login Form
  if (formPasscode) {
    formPasscode.addEventListener("submit", (e) => {
      e.preventDefault();
      const enteredPasscode = document.getElementById("authPasscodeInput").value.trim();
      const savedPasscode = localStorage.getItem("preksha_master_passcode") || "admin123";

      if (enteredPasscode === savedPasscode) {
        sessionStorage.setItem("preksha_admin_auth_token", "authorized_" + Date.now());
        setAuthenticatedUser("Master Admin", "passcode");
        showToast("🔓 Master Passcode Accepted. Welcome Admin!", "success");
      } else {
        showAuthAlert("Incorrect Master Passcode. Please re-enter or check your credentials.", "error");
      }
    });
  }

  // Logout Button
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to lock the CMS and sign out?")) {
        handleAdminLogout(true);
      }
    });
  }
}

/**
 * Check Active User Session on Page Load
 */
async function checkAuthSession() {
  // 1. Check Passcode Session in sessionStorage
  const token = sessionStorage.getItem("preksha_admin_auth_token");
  if (token && token.startsWith("authorized_")) {
    setAuthenticatedUser("Master Admin", "passcode");
    return;
  }

  // 2. Check Supabase Auth Session
  if (adminState.supabaseClient) {
    try {
      const { data: { session }, error } = await adminState.supabaseClient.auth.getSession();
      if (session && session.user) {
        setAuthenticatedUser(session.user.email, "supabase");
      } else {
        // Keep auth overlay visible
        document.getElementById("adminAuthOverlay").classList.add("active");
      }

      // Listen to Supabase Auth State Changes (e.g. magic link redirect)
      adminState.supabaseClient.auth.onAuthStateChange((event, session) => {
        if (session && session.user) {
          setAuthenticatedUser(session.user.email, "supabase");
        } else if (adminState.authMethod === "supabase") {
          handleAdminLogout(false);
        }
      });
    } catch (err) {
      console.warn("Session check warning:", err);
    }
  } else {
    // If offline, prompt login
    document.getElementById("adminAuthOverlay").classList.add("active");
  }
}

/**
 * Set Authenticated State & Update UI
 */
function setAuthenticatedUser(emailOrLabel, method) {
  adminState.isAuthenticated = true;
  adminState.currentUser = emailOrLabel;
  adminState.authMethod = method;

  // Hide Auth Overlay
  const overlay = document.getElementById("adminAuthOverlay");
  if (overlay) overlay.classList.remove("active");

  // Show User Badge & Logout Button in Navbar
  const userBadge = document.getElementById("adminUserBadge");
  const userEmail = document.getElementById("adminUserEmail");
  const logoutBtn = document.getElementById("adminLogoutBtn");

  if (userBadge) userBadge.style.display = "flex";
  if (userEmail) userEmail.textContent = emailOrLabel;
  if (logoutBtn) logoutBtn.style.display = "inline-flex";
}

/**
 * Handle Admin Sign Out & Lock Dashboard
 */
async function handleAdminLogout(notify = true) {
  if (adminState.supabaseClient && adminState.authMethod === "supabase") {
    try {
      await adminState.supabaseClient.auth.signOut();
    } catch (e) {}
  }

  sessionStorage.removeItem("preksha_admin_auth_token");

  adminState.isAuthenticated = false;
  adminState.currentUser = null;
  adminState.authMethod = null;

  // Show Auth Overlay
  const overlay = document.getElementById("adminAuthOverlay");
  if (overlay) overlay.classList.add("active");

  // Hide User Badge & Logout Button
  const userBadge = document.getElementById("adminUserBadge");
  const logoutBtn = document.getElementById("adminLogoutBtn");
  if (userBadge) userBadge.style.display = "none";
  if (logoutBtn) logoutBtn.style.display = "none";

  if (notify) {
    showToast("🔒 Admin panel locked & logged out.", "success");
  }
}

/**
 * Authentication Alert Helpers
 */
function showAuthAlert(message, type = "error") {
  const alertBox = document.getElementById("authAlertBox");
  if (!alertBox) return;
  alertBox.textContent = message;
  alertBox.className = `auth-alert ${type}`;
  alertBox.style.display = "block";
}

function hideAuthAlert() {
  const alertBox = document.getElementById("authAlertBox");
  if (alertBox) alertBox.style.display = "none";
}
