/**
 * PREKSHA LIGHTING WORLD - MAIN JAVASCRIPT
 * Full Supabase Integration + Fallback Engine
 * Separate Category View + Video Lifecycle Management
 * WhatsApp Communication & Responsive Interactions
 */

// Global Constants & Config
const SUPABASE_URL = "https://pomjpixlffoibewaflfv.supabase.co";
const SUPABASE_KEY = "sb_publishable_b0k7bSRUXUT2v60PTwh5PA_dXh51-Uh";
const WHATSAPP_NUMBER = "917010114070";

// Embedded High-Resolution Vector Brand Logo Fallback
const PREKSHA_LOGO_FALLBACK = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDYwIDI4NiIgd2lkdGg9IjEwNjAiIGhlaWdodD0iMjg2Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmN0eCB7IGZpbGw6ICNmZmY7IHN0cm9rZTogI2Q2YWE0NSwgZmlsbC1ydWxlOiBub25lOyBzdHJva2Utd2lkdGg6IDIgO2RzOjp0eXBlOnNvbGlkOyBzYW1lLWxpbmVjYXA6IGFyb3VuZDt9CiAgICAgIC5icyB7IGZpbGw6ICNlNTY3MTI7IHN0cm9rZTogI2U1NjcxMjs7IHN0cm9rZS13aWR0aDogMi4yOyBmaWxsLXJ1bGU6IG5vbmU7IH0KICAgICAgLm1hIHsgZmlsbDogI2Q2YWE0NS87IHN0cm9rZTogI2Q2YWE0NS07IHN0cm9rZS13aWR0aDogMy4wOyBmaWxsLXJ1bGU6IG5vbmU7IH0KICAgICAgLm9wdC1pY29uIHsgZmlsbDogI2Y3ZDE0NTs7IH0KICAgIDwvc3R5bGU+CiAgICA8Z2xvdmFsIGZpbHRlcj0idXJsKCNjb25uZXQpIi8+CiAgICA8bWVkaWEgc2NyZWVuPSJtYWRpYSBvcHQtd2lkdGg6IDQ4MCI+CiAgICAgIDxjbGlwUGF0aCBpZD0iY29uZXQiIHJ0b3Q9IjU1Ii8+CiAgICA8L21lZGlhPgogICAgPGNpcmNsZSBjeD0iNTM1IiBjeT0iNzAiIHI9IjIwIiBjbGFzcz0iY3R4Ii8+CiAgICA8Y2lyY2xlIGN4PSI1MzUiIGN5PSIxMzUiIHI9IjM0IiBjbGFzcz0iYmMiLz4KICAgIDxwYXRoIGNsYXNzPSJpbm5lci1saW5lIiBkPSJNMjIyIDE3N0xMMjgyIDEzMkwwMzkgMTE5bC0xOTctMTE5bDE3OS0yNSA2NyA0MSBMMjQ2IDMwN0wxODkgMTA2SDEyM0wyMzYgMTA2bC0xMDAgOTQuICIgLz4KICAgIDxwYXRoIGNsYXNzPSJpbm5lci1saW5lIiBkPSJNMzczIDEwM0w0MTQgNDReIi8+CiAgICA8cGF0aCBjbGFzcz0iYnMiIGQ9Ik0zMzEgOTY0bDEyMS0yOTlodC0yOTk2aC0yMDAxYjE3Mi0yMjlIMzEzbC0xMjYgMTEzLjRMMjM5IDQyOGxLRVRJTlNfQ0lUWSIgLz4KICAgIDxwYXRoIGNsYXNzPSJtaSIgZD0iTTI4MCA5ODdjLTIwIDQzLjMgLTI5LjYgNDUuNyA0PIDYwLjYgMzMuMSAxMS40IDUxLjMgNTEuNCAxMTkuMCA4NjEgODQyIDMzIDY4Ii8+CiAgICA8cGF0aCBjbGFzcz0ibWEiIGQ9Ik0xNTYgNzM0bDEyNCAxMzRsMTAwLTE0M2w4MSA0OWwxNTQtNDUzbC0yMzMgNDUzbC00NTIgNDk0bC0zMzItMjE0bDcxLjYgLTU2LjNMMTQ4OCA5NjdMMjIyIDk3M0wwNzg2IDM0N0wzOTU2IDE4NTFMMjY5NiAxNTMxTDEwMTMgNTQzIDc4MiA1OTdjLTMxNyAxMzFMMTQ3OCBiIi8+CiAgICA8cGF0aCBjbGFzcz0ibWEiIGQ9Ik0zMzEgOTY0bC0xNTYtMzgzQzE3NiA2NTAgOTUgNzgxIDEwNCAxNTdjMTU2IDE2MDUgMzExIDc0MSAzODYgNjgwYy0xMDggMjg2IDE0NiA0OC4yIDI2NSA2MThsMTE3IDY5N1YzOTZMMTggN1Y0MTQ7Ii8+CiAgICA8cGF0aCBjbGFzcz0ibWEiIGQ9Ik0yODIgOTY2bC0zNjYtMTM1bC0xIDEyM2gzNmtjYyA2MS41LTEyMy42IDE4NS4xLTI4NCAyMTAtNTI4bC0xMzYgNTEzYy0xNTIuOSAzMy4yLTM4Mi44IDEzNTAuOS0zOTA0IDU4Ny41bC0xMzkgNDA0LjRjMTA3IDI2IDE2Mi4zIDQxLjQgMjQ5LjEgNTNwMzk3IC0xNDQuNSAzNDAuNS01MS4xIDI4My43LTk3Ljk1ZC04NS42LTI4MS4wNCAxMy4xLTM3Mi42IDM4MS4xLTYwNS4zIDIwMy45LTM4Mi45IDQ5My45LTQyMi4wIDIxMS40bC0yNTggMTE4XSIvPgogICAgPC9nZW9tZXRyeT4KICA8L3N2Zz4=";

function applyLogoFallbacks() {
  const logos = document.querySelectorAll("img[id*='Logo'], img[src*='logo']");
  logos.forEach(img => {
    img.addEventListener('error', function() {
      if (this.dataset.fallbackApplied) return;
      this.dataset.fallbackApplied = 'true';
      this.src = PREKSHA_LOGO_FALLBACK;
    });
    // If already broken
    if (img.complete && img.naturalWidth === 0 && img.src && !img.dataset.fallbackApplied) {
      img.dataset.fallbackApplied = 'true';
      img.src = PREKSHA_LOGO_FALLBACK;
    }
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyLogoFallbacks);
} else {
  applyLogoFallbacks();
}

// Rotating Cities List
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

// Dynamic Site Configuration Engine
let currentSiteConfig = {
  companyName: "PREKSHA LIGHTING WORLD",
  companyTagline: "Premium Lighting Solutions",
  companyLogoUrl: "images/preksha-lite-logo.svg",
  whatsappNumber: "917010114070",
  phoneNumber: "+91 70101 14070",
  emailAddress: "nsr8i@outlook.com",
  headquartersAddress: "Chennai, India",
  servingCities: "Chennai, Vijayawada, Hyderabad, Bengaluru, Coimbatore, Pune, Mumbai, Visakhapatnam, Tirupati, Madurai",
  heroTaglineBadge: "",
  heroHeading: "Light Your Space With Style",
  heroDescription: "Premium decorative and architectural lighting solutions for homes, shops, offices and modern spaces.",
  heroPrimaryBtnText: "Explore Products",
  heroSecondaryBtnText: "Contact Us",
  heroBackdropPhoto: "images/opera gate light.jpeg",
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
  ctaTitle: "Looking For The Right Light?",
  ctaText: "Contact us for product details and enquiries.",
  ctaBtn: "Get In Touch",
  footerCopyright: "© 2026 PREKSHA LIGHTING WORLD. All Rights Reserved. Premium LED lighting solutions.",
  customSupabaseUrl: "",
  customSupabaseKey: ""
};

let activeCitiesList = [...ROTATING_CITIES];
let activeWhatsappNumber = WHATSAPP_NUMBER;

// Fallback Categories (Genuine core architectural lighting collections)
const FALLBACK_CATEGORIES = [
  { id: "c0000000-0000-4000-a000-000000000001", name: "Gate Lights", slug: "gate-lights", description: "Pillar and entrance lanterns.", image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790263311166-px9bao7.jpeg" },
  { id: "c0000000-0000-4000-a000-000000000002", name: "Elevation Lights", slug: "elevation-lights", description: "Facade and exterior wall accent fixtures.", image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1789626815368-hcknfkiz9hp.jpeg" },
  { id: "04a19717-6f03-411e-ba7b-2cd86025a2fa", name: "LED HANGING LIGHTS", slug: "led-hanging-lights", description: "Exclusive LED HANGING LIGHTS curated collection.", image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340416428-yu1yjgb.jpeg" },
  { id: "c0000000-0000-4000-a000-000000000003", name: "Hanging Lights", slug: "hanging-lights", description: "Modern pendant luminaires for dining & islands.", image_url: "images/wood hanging light.jpeg" },
  { id: "c0000000-0000-4000-a000-000000000004", name: "Chandeliers", slug: "chandeliers", description: "Grand luxury statement pieces.", image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1791931577957-vs5hws7.jpeg" },
  { id: "cc5e088a-68f2-4056-b822-8f04e0d26e75", name: "LED WALL LIGHTS", slug: "led-wall-lights", description: "Beautiful wall Lights and sconces.", image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340027747-llv18wb.jpeg" },
  { id: "72bbb504-fb4e-4a5c-a14e-057607e0d5f5", name: "SINGLE HANGING LIGHTS", slug: "single-hanging-lights", description: "SINGLE BULB MODEL HANGING LIGHTS", image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340372814-obrak71.jpeg" }
];

// Fallback Products for each category to ensure complete browsing experience
const FALLBACK_PRODUCTS = [
  {
    id: "9e8667ae-ec26-4baf-af48-42554404e5aa",
    name: "ANTIQUE GATE LAMP",
    category: "Gate Lights",
    category_slug: "gate-lights",
    description: "Premium architectural gate lamp with durable weather-resistant finish.",
    price: "₹ 900",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790263311166-px9bao7.jpeg",
    sort_order: 1
  },
  {
    id: "a52c1d39-fcfe-49d5-ab0c-5d3ac383376d",
    name: "sq gate lamp",
    category: "Gate Lights",
    category_slug: "gate-lights",
    description: "Modern square pillar gate light for residential entries.",
    price: "₹ 900",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790446645003-356gl24.jpeg",
    sort_order: 2
  },
  {
    id: "4bac426b-a223-4949-9159-32fa56d6d7e3",
    name: "deepam gate light",
    category: "Gate Lights",
    category_slug: "gate-lights",
    description: "Traditional aesthetic outdoor entrance gate lantern.",
    price: "₹ 600",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790446678855-quc4jvx.jpeg",
    sort_order: 3
  },
  {
    id: "80ed80a2-6e52-4ee8-9dc0-e044c5bec96e",
    name: "elevation",
    category: "Elevation Lights",
    category_slug: "elevation-lights",
    description: "Dual-beam architectural exterior facade lighting.",
    price: "₹ 1,850",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1789626815368-hcknfkiz9hp.jpeg",
    sort_order: 4
  },
  {
    id: "17e02947-d0b2-4b7f-b63a-d248cf3534cf",
    name: "led hanging light 7175/1",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "LED WALL LIGHTS product crafted with premium quality.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340416428-yu1yjgb.jpeg",
    price: "₹ 2000",
    sort_order: 5
  },
  {
    id: "e1301400-4acb-4960-9507-0e75d2cfad61",
    name: "led hanging light 8501/2",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "3 in 1 color changing architectural wall light.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790339679599-j3s7j7j.jpeg",
    price: "₹ 1,800",
    sort_order: 6
  },
  {
    id: "c1b709c1-c7ea-40da-8d09-96236f4668a8",
    name: "led hanging light 8503/2",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "Designer double-glow wall sconce luminaire.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340027747-llv18wb.jpeg",
    price: "₹ 3600",
    sort_order: 7
  },
  {
    id: "efc4fb9c-ddc9-4b0a-af78-688e533b2aa2",
    name: "led hanging light 8602/2",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "Contemporary gold-trimmed curved wall fixture.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340105388-uoxi6fa.jpeg",
    price: "₹ 3600",
    sort_order: 8
  },
  {
    id: "3cda8933-b86d-4dfb-8603-b072bb3e2958",
    name: "led hanging light 7181/2",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "3in1 light changing fixture with subtle warm tones.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340221343-dr4s8ex.jpeg",
    price: "₹ 2600",
    sort_order: 9
  },
  {
    id: "198f7e50-adaa-4686-8a21-7ecfd753d7b9",
    name: "led hanging light 7174/1",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "Minimalist compact interior LED accent luminaire.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340372814-obrak71.jpeg",
    price: "₹ 2000",
    sort_order: 10
  },
  {
    id: "dbe18d35-f01b-4e05-b3d8-148622d84098",
    name: "led hanging light 3758/1",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "Led wall light 3in1 in crystal flower model.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340950887-lut5z2f.jpeg",
    price: "₹ 3200",
    sort_order: 11
  },
  {
    id: "ac066752-8e0e-46e9-8fbc-aed1ec6a9b97",
    name: "led hanging light 3660/1",
    category: "LED WALL LIGHTS",
    category_slug: "led-wall-lights",
    description: "Artistic luxury frosted glass wall sconce.",
    image_url: "https://pomjpixlffoibewaflfv.supabase.co/storage/v1/object/public/website-images/products/1790340471626-11wbs1z.jpeg",
    price: "₹ 3200",
    sort_order: 12
  },
  {
    id: "p0000000-0000-4000-b000-000000000003",
    name: "Nordic Pendant Chandelier",
    category: "Hanging Lights",
    category_slug: "hanging-lights",
    description: "Warm wooden accent hanging luminaire for dining tables and islands.",
    price: "₹ 2,400",
    image_url: "images/wood hanging light.jpeg",
    sort_order: 13
  },
  {
    id: "p0000000-0000-4000-b000-000000000004",
    name: "Royal Crystal Chandelier",
    category: "Chandeliers",
    category_slug: "chandeliers",
    description: "Grand gold crystal chandelier for high ceiling living halls.",
    price: "₹ 14,500",
    image_url: "images/chandelier gold.jpeg",
    sort_order: 14
  }
];

function getSvgFallback(title, type) {
  const t = (type || title || "").toLowerCase();
  let iconSvg = `<circle cx="100" cy="100" r="35" fill="#fcebc2" opacity="0.8"/><circle cx="100" cy="100" r="18" fill="#e56712"/>`;
  if (t.includes("jhoom") || t.includes("chan")) {
    iconSvg = `<path d="M100 20 L100 60 M60 60 L140 60 M40 90 L160 90 M70 130 L130 130" stroke="#d6aa45" stroke-width="3"/><circle cx="100" cy="150" r="10" fill="#e56712"/><circle cx="60" cy="90" r="10" fill="#f1d58a"/><circle cx="140" cy="90" r="10" fill="#f1d58a"/>`;
  } else if (t.includes("hang") || t.includes("wood")) {
    iconSvg = `<path d="M100 15 L100 70" stroke="#080808" stroke-width="3"/><path d="M55 120 C55 80 145 80 145 120 Z" fill="#2a2318" stroke="#d6aa45" stroke-width="3"/><circle cx="100" cy="120" r="8" fill="#f0c65a"/>`;
  } else if (t.includes("strip") || t.includes("cob")) {
    iconSvg = `<rect x="30" y="90" width="140" height="20" rx="10" fill="#1a1a1a" stroke="#d6aa45" stroke-width="2"/><circle cx="55" cy="100" r="5" fill="#ffb443"/><circle cx="85" cy="100" r="5" fill="#ffb443"/><circle cx="115" cy="100" r="5" fill="#ffb443"/><circle cx="145" cy="100" r="5" fill="#ffb443"/>`;
  } else if (t.includes("elev") || t.includes("facade")) {
    iconSvg = `<rect x="75" y="40" width="50" height="120" rx="4" fill="#181818" stroke="#d6aa45" stroke-width="3"/><polygon points="100,40 60,10 140,10" fill="#ffd777" opacity="0.7"/><polygon points="100,40 60,10 140,10" fill="#fff4d0" opacity="0.15"/>`;
  } else if (t.includes("moon")) {
    iconSvg = `<circle cx="100" cy="100" r="55" fill="#fff" stroke="#d6aa45" stroke-width="3"/><circle cx="120" cy="90" r="45" fill="#faf6ec"/>`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="400" height="400">
    <defs>
      <radialGradient id="g" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="80%" stop-color="#f5f0e6"/>
        <stop offset="100%" stop-color="#ebe3d3"/>
      </radialGradient>
    </defs>
    <rect width="200" height="200" rx="12" fill="url(#g)"/>
    <circle cx="100" cy="100" r="70" fill="#ffd875" opacity="0.25"/>
    ${iconSvg}
    <text x="100" y="186" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="9" font-weight="700" fill="#666" letter-spacing="1.2">${(title || 'PREKSHA LIGHT').toUpperCase()}</text>
  </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

// Global Application State & UI Flags (Initialized at top level to avoid TDZ)
let isCategoryNavInitialized = false;
let isHeroObserverInitialized = false;
let showcaseHalfWidth = 0;
let isShowcaseSliderInitialized = false;
let isShowcaseVisible = true;
let isShowcasePaused = false;
let isShowcaseInteracting = false;
let showcaseResumeTimer = null;
let isShowcaseManuallyPaused = false;
let showcaseAnimFrameId = null;
let showcaseLastTimestamp = 0;
let showcaseScrollPos = 0;
let deferredPwaPrompt = null;

let appState = {
  categories: [],
  products: [],
  currentHeroCategoryIndex: 0,
  heroInterval: null,
  currentCityIndex: 0,
  cityInterval: null,
  savedHeroVideoSrc: "",
  activeCategory: null,
  activeCategoryProducts: [],
  currentModalIndex: 0
};

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
    const extension = (fileToUpload.name.split(".").pop() || "jpg").toLowerCase();
    const path = `products/${safeName}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${extension}`;
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

function ensureLogoWebsiteMatching(img) {
  if (!img) return;

  const checkAndClean = () => {
    try {
      if (!img.src || img.src.includes(".svg") || img.dataset.bgCleaned === "true") return;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      if (!ctx) return;

      const w = img.naturalWidth || img.width || 200;
      const h = img.naturalHeight || img.height || 60;
      if (w <= 0 || h <= 0) return;

      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);

      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;
      const corners = [0, (w - 1) * 4, ((h - 1) * w) * 4, (((h - 1) * w) + (w - 1)) * 4];
      let darkCorners = 0;
      let opaqueCorners = 0;
      for (const idx of corners) {
        const r = data[idx], g = data[idx + 1], b = data[idx + 2], a = data[idx + 3];
        if (a > 60) {
          opaqueCorners++;
          if (r < 50 && g < 50 && b < 50) {
            darkCorners++;
          }
        }
      }

      if (opaqueCorners >= 2 && darkCorners >= 2) {
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
          if (a > 0) {
            const maxVal = Math.max(r, g, b);
            if (maxVal < 45) {
              data[i + 3] = 0;
            } else if (maxVal < 80) {
              data[i + 3] = Math.round(((maxVal - 45) / 35) * a);
            }
          }
        }
        ctx.putImageData(imgData, 0, 0);
        const cleanPng = canvas.toDataURL("image/png");
        img.dataset.bgCleaned = "true";
        img.src = cleanPng;

        try {
          const saved = localStorage.getItem("preksha_site_config");
          if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed.companyLogoUrl && parsed.companyLogoUrl.startsWith("data:image")) {
              parsed.companyLogoUrl = cleanPng;
              localStorage.setItem("preksha_site_config", JSON.stringify(parsed));
            }
          }
        } catch (e) {}
      } else {
        img.dataset.bgCleaned = "true";
      }
    } catch (err) {}
  };

  if (img.complete && img.naturalWidth > 0) {
    checkAndClean();
  } else {
    img.addEventListener("load", checkAndClean, { once: true });
  }
}

// the rest of script continues... we intentionally keep the existing code unchanged below
