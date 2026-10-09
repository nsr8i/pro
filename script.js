/**
 * PREKSHA LIGHTING WORLD - MAIN JAVASCRIPT
 * Complete storefront logic for homepage, category pages,
 * product modal, WhatsApp enquiries, and safe fallback behavior.
 */

const SUPABASE_URL = "https://pomjpixlffoibewaflfv.supabase.co";
const SUPABASE_KEY = "sb_publishable_b0k7bSRUXUT2v60PTwh5PA_dXh51-Uh";
const WHATSAPP_NUMBER = "917010114070";

const PREKSHA_LOGO_FALLBACK = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 120" role="img" aria-label="Preksha Lighting World">
  <defs>
    <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f6d67d"/>
      <stop offset="50%" stop-color="#e68a1b"/>
      <stop offset="100%" stop-color="#c85c00"/>
    </linearGradient>
  </defs>
  <rect width="460" height="120" rx="20" fill="#1a120d"/>
  <circle cx="72" cy="60" r="28" fill="url(#g1)"/>
  <path d="M72 34 L72 86 M46 60 L98 60 M56 44 L88 76 M56 76 L88 44" stroke="#fff7d9" stroke-width="6" stroke-linecap="round" />
  <text x="120" y="72" font-family="Arial, Helvetica, sans-serif" font-size="36" font-weight="700" fill="#f7efe1">PREKSHA</text>
  <text x="120" y="100" font-family="Arial, Helvetica, sans-serif" font-size="18" letter-spacing="2" fill="#d3a65e">LIGHTING WORLD</text>
</svg>
`);

const ROTATING_CITIES = [
  "Chennai",
  "Vijayawada",
  "Hyderabad",
  "Bengaluru",
  "Coimbatore",
  "Pune",
  "Mumbai",
  "Visakhapatnam",
  "Tirupati",
  "Madurai"
];

const FALLBACK_CATEGORIES = [
  {
    id: "cat-gate-lights",
    name: "Gate Lights",
    slug: "gate-lights",
    description: "Pillar and entrance lanterns crafted for elegant entryways.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790263311166-px9bao7.jpeg"
  },
  {
    id: "cat-elevation-lights",
    name: "Elevation Lights",
    slug: "elevation-lights",
    description: "Facade and exterior accent fixtures for premium curb appeal.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1789626815368-hcknfkiz9hp.jpeg"
  },
  {
    id: "cat-led-wall-lights",
    name: "LED WALL LIGHTS",
    slug: "led-wall-lights",
    description: "Beautiful wall lights and designer sconces for modern homes.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340416428-yu1yjgb.jpeg"
  },
  {
    id: "cat-hanging-lights",
    name: "Hanging Lights",
    slug: "hanging-lights",
    description: "Modern pendant and statement hanging luminaires.",
    image_url: "images/wood hanging light.jpeg"
  },
  {
    id: "cat-chandeliers",
    name: "Chandeliers",
    slug: "chandeliers",
    description: "Luxury chandeliers with striking architectural presence.",
    image_url: "images/chandelier gold.jpeg"
  }
];

const FALLBACK_PRODUCTS = [
  {
    id: "prod-1",
    name: "ANTIQUE GATE LAMP",
    category: "Gate Lights",
    category_slug: "gate-lights",
    description: "Premium architectural gate lamp with durable weather-resistant finish.",
    price: "₹ 900",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790263311166-px9bao7.jpeg",
    sort_order: 1
  },
  {
    id: "prod-2",
    name: "sq gate lamp",
    category: "Gate Lights",
    category_slug: "gate-lights",
    description: "Modern square pillar gate light for residential entries.",
    price: "₹ 900",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790446645003-356gl24.jpeg",
    sort_order: 2
  },
  {
    id: "prod-3",
    name: "deepam gate light",
    category: "Gate Lights",
    category_slug: "gate-lights",
    description: "Traditional aesthetic outdoor entrance gate lantern.",
    price: "₹ 600",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790446678855-quc4jvx.jpeg",
    sort_order: 3
  },
  {
    id: "prod-4",
    name: "elevation",
    category: "Elevation Lights",
    category_slug: "elevation-lights",
    description: "Dual-beam architectural exterior facade lighting.",
    price: "₹ 1,850",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1789626815368-hcknfkiz9hp.jpeg",
    sort_order: 4
  },
  {
    id: "prod-5",
    name: "LED WALL LIGHT 7175/1",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "LED wall light crafted with premium quality finish.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340416428-yu1yjgb.jpeg",
    price: "₹ 2,000",
    sort_order: 5
  },
  {
    id: "prod-6",
    name: "LED WALL LIGHT 8501/2",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "3-in-1 color changing architectural wall light.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790339679599-j3s7j7j.jpeg",
    price: "₹ 1,800",
    sort_order: 6
  },
  {
    id: "prod-7",
    name: "LED WALL LIGHT 8503/2",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "Designer double-glow wall sconce luminaire.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340027747-llv18wb.jpeg",
    price: "₹ 3,600",
    sort_order: 7
  },
  {
    id: "prod-8",
    name: "Nordic Pendant Chandelier",
    category: "Hanging Lights",
    category_slug: "hanging-lights",
    description: "Warm wooden accent hanging luminaire for dining tables and islands.",
    price: "₹ 2,400",
    image_url: "images/wood hanging light.jpeg",
    sort_order: 8
  },
  {
    id: "prod-9",
    name: "Royal Crystal Chandelier",
    category: "Chandeliers",
    category_slug: "chandeliers",
    description: "Grand gold crystal chandelier for high ceiling living halls.",
    price: "₹ 14,500",
    image_url: "images/chandelier gold.jpeg",
    sort_order: 9
  }
];

const appState = {
  categories: [...FALLBACK_CATEGORIES],
  products: [...FALLBACK_PRODUCTS],
  activeCategory: null,
  currentModalIndex: 0,
  cityInterval: null,
  heroInterval: null,
  showcaseTimer: null,
  heroIndex: 0,
  categoriesLoaded: false,
  productsLoaded: false
};

function safeText(value, fallback = "") {
  return value == null || value === "" ? fallback : String(value);
}

function getLocalStorage(name, fallback = null) {
  try {
    const raw = localStorage.getItem(name);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function setLocalStorage(name, value) {
  try {
    localStorage.setItem(name, JSON.stringify(value));
  } catch {}
}

function buildDataImageSvg(title = "PREKSHA LIGHT") {
  const label = (title || "PREKSHA LIGHT").toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
      <defs>
        <radialGradient id="bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#fff7e7"/>
          <stop offset="85%" stop-color="#f1e6d0"/>
          <stop offset="100%" stop-color="#e0d7c1"/>
        </radialGradient>
      </defs>
      <rect width="300" height="200" rx="18" fill="url(#bg)"/>
      <circle cx="150" cy="100" r="52" fill="#f7c25a" opacity="0.42"/>
      <path d="M150 34 L150 92 M116 66 L184 66 M126 122 L174 122" stroke="#b86b1d" stroke-width="7" stroke-linecap="round"/>
      <circle cx="150" cy="100" r="14" fill="#d9631d"/>
      <text x="150" y="165" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" fill="#4a3422">${label}</text>
    </svg>
  `;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function getSafeImageUrl(rawUrl, fallbackTitle = "PREKSHA LIGHT") {
  if (!rawUrl) return buildDataImageSvg(fallbackTitle);
  const value = String(rawUrl).trim();
  if (!value) return buildDataImageSvg(fallbackTitle);
  if (value.startsWith("data:")) return value;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  return value;
}

function applyLogoFallbacks() {
  const logos = document.querySelectorAll("img[id*='Logo'], img[src*='logo']");
  logos.forEach((img) => {
    const apply = () => {
      if (!img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = "true";
        img.src = PREKSHA_LOGO_FALLBACK;
      }
    };

    img.addEventListener("error", apply, { once: true });

    if (img.complete && img.naturalWidth === 0 && img.src) {
      apply();
    }
  });
}

function isVisible(el) {
  return !!el && (el.offsetParent !== null || getComputedStyle(el).display !== "none");
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function setAttribute(selector, attribute, value) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attribute, value);
}

function startCityRotator() {
  const rotatingCityEl = document.getElementById("rotatingCityMain");
  const rotatingCategoryCityEl = document.getElementById("rotatingCityCategory");
  const rotate = () => {
    const nextIndex = (appState.cityIndex || 0) % ROTATING_CITIES.length;
    const city = ROTATING_CITIES[nextIndex];
    if (rotatingCityEl) rotatingCityEl.textContent = city;
    if (rotatingCategoryCityEl) rotatingCategoryCityEl.textContent = city;
    appState.cityIndex = nextIndex + 1;
  };

  rotate();
  if (appState.cityInterval) clearInterval(appState.cityInterval);
  appState.cityInterval = setInterval(rotate, 2200);
}

function formatWhatsAppText(message) {
  const cleaned = String(message || "").replace(/\s+/g, " ").trim();
  return encodeURIComponent(cleaned || "Hello PREKSHA LIGHTING WORLD, I would like to enquire about your lighting products.");
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value || "";
    const phone = document.getElementById("phone")?.value || "";
    const message = document.getElementById("message")?.value || "";

    const text = `Hello PREKSHA LIGHTING WORLD, my name is ${name}. Phone: ${phone}. Message: ${message || "I would like to enquire about your lighting products."}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}

function renderHomepageCategoryGrid() {
  const grid = document.getElementById("homepageCategoryGrid");
  if (!grid) return;

  const categories = appState.categories.slice(0, 6);

  grid.innerHTML = categories.map((cat) => `
    <button class="category-card" type="button" data-category-slug="${cat.slug}" aria-label="Open ${cat.name}">
      <div class="category-card-image-wrap">
        <img src="${getSafeImageUrl(cat.image_url, cat.name)}" alt="${cat.name}" loading="lazy" />
      </div>
      <div class="category-card-body">
        <span class="category-card-name">${cat.name}</span>
      </div>
    </button>
  `).join("");

  grid.querySelectorAll("[data-category-slug]").forEach((button) => {
    button.addEventListener("click", () => {
      const slug = button.getAttribute("data-category-slug");
      const selected = appState.categories.find((cat) => cat.slug === slug);
      if (!selected) return;
      openCategoryPage(selected);
    });
  });
}

function renderHomepageProducts() {
  const track = document.getElementById("homepageProductGrid");
  if (!track) return;

  const products = appState.products.slice(0, 12);

  track.innerHTML = products.map((product, index) => `
    <article class="showcase-product-card" data-product-index="${index}" tabindex="0">
      <div class="showcase-product-image-wrap">
        <img src="${getSafeImageUrl(product.image_url, product.name)}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="showcase-product-body">
        <p class="showcase-product-category">${product.category || "Lighting"}</p>
        <h3>${product.name}</h3>
        <div class="showcase-product-row">
          <span class="showcase-product-price">${product.price || "₹ 0"}</span>
          <button type="button" class="showcase-enquire-btn" data-product-index="${index}">View</button>
        </div>
      </div>
    </article>
  `).join("");

  track.querySelectorAll("[data-product-index]").forEach((el) => {
    const idx = Number(el.getAttribute("data-product-index"));
    const open = () => openModal(idx, appState.products);
    el.addEventListener("click", open);
  });
}

function renderCategoryGrid() {
  const grid = document.getElementById("categoryProductGrid");
  if (!grid) return;

  const category = appState.activeCategory;
  const list = appState.products.filter((product) => {
    const productCategory = (product.category || "").toLowerCase();
    const targetCategory = (category?.name || "").toLowerCase();
    return productCategory === targetCategory || product.category_slug === category?.slug;
  });

  if (!list.length) {
    grid.innerHTML = `<div class="empty-state">No products found in this collection yet.</div>`;
    return;
  }

  grid.innerHTML = list.map((product, index) => `
    <article class="product-card" data-product-index="${index}" tabindex="0">
      <div class="product-image-wrap">
        <img src="${getSafeImageUrl(product.image_url, product.name)}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-info">
        <p class="product-category">${product.category || "Lighting"}</p>
        <h3>${product.name}</h3>
        <div class="product-meta">
          <span class="product-price">${product.price || "₹ 0"}</span>
          <button type="button" class="product-view-btn" data-product-index="${index}">View</button>
        </div>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("[data-product-index]").forEach((el) => {
    const idx = Number(el.getAttribute("data-product-index"));
    const open = () => openModal(idx, list);
    el.addEventListener("click", open);
  });
}

function openCategoryPage(category) {
  appState.activeCategory = category;

  const selectedTitle = document.getElementById("selectedCategoryTitle");
  const selectedDescription = document.getElementById("selectedCategoryDescription");
  const countPill = document.getElementById("categoryProductCountPill");
  const page = document.getElementById("collectionPage");
  const homeSections = document.querySelectorAll(
    "section#home, section#products, section#about, section#why-us, section#contact, .cta-section, #mainFooter, #floatingWhatsapp"
  );

  if (selectedTitle) selectedTitle.textContent = category.name;
  if (selectedDescription) selectedDescription.textContent = category.description || "Curated lighting collection.";
  if (countPill) {
    const count = appState.products.filter((product) => {
      return (product.category || "").toLowerCase() === (category.name || "").toLowerCase()
        || product.category_slug === category.slug;
    }).length;
    countPill.textContent = `${count} curated products`;
  }

  homeSections.forEach((el) => {
    if (el) el.style.display = "none";
  });

  if (page) page.style.display = "block";
  renderCategoryGrid();
}

function closeCategoryPage() {
  const page = document.getElementById("collectionPage");
  const homeSections = document.querySelectorAll(
    "section#home, section#products, section#about, section#why-us, section#contact, .cta-section, #mainFooter, #floatingWhatsapp"
  );

  homeSections.forEach((el) => {
    if (el) el.style.display = "";
  });

  if (page) page.style.display = "none";
  appState.activeCategory = null;
}

function setupCategoryNavigation() {
  const homeButton = document.getElementById("categoryHomeBtn");
  const backButton = document.getElementById("categoryBackBtn");
  const categoryHeaderLink = document.getElementById("categoryHeaderLogoLink");

  if (homeButton) {
    homeButton.addEventListener("click", closeCategoryPage);
  }

  if (backButton) {
    backButton.addEventListener("click", closeCategoryPage);
  }

  if (categoryHeaderLink) {
    categoryHeaderLink.addEventListener("click", (event) => {
      event.preventDefault();
      closeCategoryPage();
      window.location.hash = "#home";
    });
  }

  document.querySelectorAll("[data-category-slug]").forEach((el) => {
    el.addEventListener("click", () => {
      const slug = el.getAttribute("data-category-slug");
      const category = appState.categories.find((item) => item.slug === slug);
      if (category) openCategoryPage(category);
    });
  });

  const categoryHamburger = document.getElementById("categoryHamburger");
  const categoryQuickLinks = document.getElementById("categoryQuickLinksDropdown");
  if (categoryHamburger && categoryQuickLinks) {
    categoryHamburger.addEventListener("click", () => {
      const expanded = categoryHamburger.getAttribute("aria-expanded") === "true";
      categoryHamburger.setAttribute("aria-expanded", String(!expanded));
      categoryQuickLinks.style.display = expanded ? "none" : "block";
    });
  }

  const mainHamburger = document.getElementById("mainHamburger");
  const mainQuickLinks = document.getElementById("mainQuickLinksDropdown");
  if (mainHamburger && mainQuickLinks) {
    mainHamburger.addEventListener("click", () => {
      const expanded = mainHamburger.getAttribute("aria-expanded") === "true";
      mainHamburger.setAttribute("aria-expanded", String(!expanded));
      mainQuickLinks.style.display = expanded ? "none" : "block";
    });
  }
}

function openModal(index, productList) {
  const modal = document.getElementById("productModal");
  const productImage = document.getElementById("modalProductImage");
  const productCategory = document.getElementById("modalProductCategory");
  const productTitle = document.getElementById("modalProductTitle");
  const productPrice = document.getElementById("modalProductPrice");
  const productDescription = document.getElementById("modalProductDescription");
  const modalWhatsapp = document.getElementById("modalWhatsappBtn");

  if (!modal || !productImage || !productCategory || !productTitle || !productPrice || !productDescription || !modalWhatsapp) return;

  const list = productList && productList.length ? productList : appState.products;
  const safeIndex = Math.max(0, Math.min(index, list.length - 1));
  const item = list[safeIndex];

  if (!item) return;

  appState.currentModalIndex = safeIndex;

  productImage.src = getSafeImageUrl(item.image_url, item.name);
  productImage.alt = item.name;
  productCategory.textContent = (item.category || "PREKSHA LIGHTING").toUpperCase();
  productTitle.textContent = item.name;
  productPrice.textContent = item.price || "₹ 0";
  productDescription.textContent = item.description || "Premium light fixture for elegant spaces.";

  const waText = `Hello PREKSHA LIGHTING WORLD, I am interested in ${item.name}. Price: ${item.price || "Please share details"}.`;
  modalWhatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  modal.setAttribute("aria-hidden", "false");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;
  modal.setAttribute("aria-hidden", "true");
  modal.style.display = "none";
}

function setupModalControls() {
  const modal = document.getElementById("productModal");
  const closeBtn = document.getElementById("modalCloseBtn");
  const prevBtn = document.getElementById("modalPrevBtn");
  const nextBtn = document.getElementById("modalNextBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const list = appState.products;
      const nextIndex = (appState.currentModalIndex - 1 + list.length) % list.length;
      openModal(nextIndex, list);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const list = appState.products;
      const nextIndex = (appState.currentModalIndex + 1) % list.length;
      openModal(nextIndex, list);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (modal && modal.style.display === "flex") {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") {
        const list = appState.products;
        const nextIndex = (appState.currentModalIndex + 1) % list.length;
        openModal(nextIndex, list);
      }
      if (event.key === "ArrowLeft") {
        const list = appState.products;
        const nextIndex = (appState.currentModalIndex - 1 + list.length) % list.length;
        openModal(nextIndex, list);
      }
    }
  });
}

function startHeroRotation() {
  const heroDots = document.getElementById("heroDots");
  const heroBackdrop = document.getElementById("heroBackdropImage");
  const heroHeading = document.getElementById("heroHeading");
  const heroDescription = document.getElementById("heroDescription");

  if (!heroDots || !heroBackdrop) return;

  const heroSlides = [
    {
      heading: "Light Your Space With <span>Style</span>",
      description: "Premium decorative and architectural lighting solutions for homes, shops, offices and modern spaces.",
      image: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790263311166-px9bao7.jpeg"
    },
    {
      heading: "Luxury Lighting For <span>Grand Entrances</span>",
      description: "Create a lasting first impression with elegant gate lights, elevation fixtures and statement pieces.",
      image: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790446678855-quc4jvx.jpeg"
    },
    {
      heading: "Architectural Glow For <span>Modern Living</span>",
      description: "Clean-lined wall luminaires and hanging lights designed for warm, welcoming interiors.",
      image: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340416428-yu1yjgb.jpeg"
    }
  ];

  const dots = heroSlides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot";
    dot.setAttribute("aria-label", `Show slide ${index + 1}`);
    dot.addEventListener("click", () => {
      appState.heroIndex = index;
      applyHeroSlide(heroSlides[index]);
      updateHeroDots(index);
    });
    return dot;
  });

  heroDots.innerHTML = "";
  dots.forEach((dot) => heroDots.appendChild(dot));

  const updateHeroDots = (index) => {
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });
  };

  const applyHeroSlide = (slide) => {
    if (heroBackdrop) heroBackdrop.src = getSafeImageUrl(slide.image, "Hero lighting");
    if (heroHeading) heroHeading.innerHTML = slide.heading;
    if (heroDescription) heroDescription.textContent = slide.description;
  };

  applyHeroSlide(heroSlides[0]);
  updateHeroDots(0);

  if (appState.heroInterval) clearInterval(appState.heroInterval);
  appState.heroInterval = setInterval(() => {
    appState.heroIndex = (appState.heroIndex + 1) % heroSlides.length;
    applyHeroSlide(heroSlides[appState.heroIndex]);
    updateHeroDots(appState.heroIndex);
  }, 3500);
}

function setupShowcaseSlider() {
  const viewport = document.getElementById("homepageProductSlider");
  const track = document.getElementById("homepageProductGrid");
  const prevBtn = document.getElementById("showcasePrevBtn");
  const nextBtn = document.getElementById("showcaseNextBtn");
  const pauseBtn = document.getElementById("showcasePauseBtn");

  if (!viewport || !track) return;

  const step = () => {
    const card = track.querySelector(".showcase-product-card");
    if (!card) return;
    const scrollAmount = card.getBoundingClientRect().width + 22;
    viewport.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      const card = track.querySelector(".showcase-product-card");
      if (!card) return;
      viewport.scrollBy({ left: -(card.getBoundingClientRect().width + 22), behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const card = track.querySelector(".showcase-product-card");
      if (!card) return;
      viewport.scrollBy({ left: card.getBoundingClientRect().width + 22, behavior: "smooth" });
    });
  }

  if (pauseBtn) {
    pauseBtn.addEventListener("click", () => {
      const isPaused = pauseBtn.dataset.paused === "true";
      pauseBtn.dataset.paused = String(!isPaused);
      if (isPaused) {
        if (appState.showcaseTimer) clearInterval(appState.showcaseTimer);
        appState.showcaseTimer = setInterval(step, 2200);
      } else {
        if (appState.showcaseTimer) clearInterval(appState.showcaseTimer);
      }
    });
  }

  if (!appState.showcaseTimer) {
    appState.showcaseTimer = setInterval(step, 2200);
  }
}

async function loadSupabaseCategories() {
  const client = window.supabase && typeof window.supabase.createClient === "function"
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
    : null;

  if (!client) {
    appState.categories = [...FALLBACK_CATEGORIES];
    appState.products = [...FALLBACK_PRODUCTS];
    appState.categoriesLoaded = true;
    appState.productsLoaded = true;
    return;
  }

  try {
    const { data, error } = await client.from("categories").select("*").order("name", { ascending: true }).limit(20);

    if (!error && data && data.length) {
      appState.categories = data.map((item) => ({
        id: item.id,
        name: item.name,
        slug: item.slug || item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        description: item.description || "Curated lighting collection.",
        image_url: getSafeImageUrl(item.image_url, item.name)
      }));
    } else {
      appState.categories = [...FALLBACK_CATEGORIES];
    }
  } catch {
    appState.categories = [...FALLBACK_CATEGORIES];
  }

  try {
    const { data, error } = await client.from("products").select("*").order("sort_order", { ascending: true }).limit(40);

    if (!error && data && data.length) {
      appState.products = data.map((product) => ({
        id: product.id,
        name: product.name,
        category: product.category || "Lighting",
        category_slug: product.category_slug || String(product.category || "lighting").toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        description: product.description || "Premium light fixture.",
        price: product.price || "₹ 0",
        image_url: getSafeImageUrl(product.image_url, product.name),
        sort_order: product.sort_order || 0
      }));
    } else {
      appState.products = [...FALLBACK_PRODUCTS];
    }
  } catch {
    appState.products = [...FALLBACK_PRODUCTS];
  }

  appState.categoriesLoaded = true;
  appState.productsLoaded = true;
}

async function uploadProductImageToSupabase(imageSource, fallbackName = "product") {
  if (!imageSource) return "";

  if (typeof imageSource === "string" && (imageSource.startsWith("http://") || imageSource.startsWith("https://"))) {
    return imageSource;
  }

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    return imageSource;
  }

  try {
    const response = await fetch(imageSource);
    const blob = await response.blob();
    const mimeType = blob.type || "image/jpeg";
    const extension = mimeType.includes("png") ? "png" : mimeType.includes("webp") ? "webp" : "jpg";
    const file = new File([blob], `${(fallbackName || "product").toLowerCase().replace(/[^a-z0-9-_]+/g, "-")}-${Date.now()}.${extension}`, {
      type: mimeType,
      lastModified: Date.now()
    });

    const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    const bucket = "website-images";
    const path = `products/${file.name}`;

    const { error } = await client.storage.from(bucket).upload(path, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: mimeType
    });

    if (error) throw error;

    const { data } = client.storage.from(bucket).getPublicUrl(path);
    return data?.publicUrl || imageSource;
  } catch {
    return imageSource;
  }
}

function initSite() {
  applyLogoFallbacks();
  startCityRotator();
  setupContactForm();
  setupCategoryNavigation();
  setupModalControls();
  startHeroRotation();
  setupShowcaseSlider();

  renderHomepageCategoryGrid();
  renderHomepageProducts();

  const collectionPage = document.getElementById("collectionPage");
  if (collectionPage) collectionPage.style.display = "none";

  const floatingWa = document.getElementById("floatingWhatsapp");
  if (floatingWa) {
    floatingWa.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello PREKSHA LIGHTING WORLD, I would like to enquire about your lighting products.")}`;
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  await loadSupabaseCategories();
  renderHomepageCategoryGrid();
  renderHomepageProducts();
  initSite();
});

window.addEventListener("load", () => {
  applyLogoFallbacks();
});