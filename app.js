const menuRoot = document.getElementById("menu-sections");
const navRoot = document.getElementById("category-nav");
const hero = document.getElementById("hero");
const heroMediaShell = document.querySelector(".hero-media-shell");
const heroSlideVideo = document.getElementById("hero-slide-video");
const heroSlideCaption = document.getElementById("hero-slide-caption");
const galleryGrid = document.getElementById("gallery-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");

const langButtons = Array.from(document.querySelectorAll(".lang-btn"));
const themeToggle = document.getElementById("theme-toggle");
const themeText = themeToggle.querySelector(".theme-text");

const mapEmbed = document.getElementById("map-embed");
const hoursList = document.getElementById("hours-list");
const openNowNode = document.getElementById("open-now");

const categoryLabelMap = {
  Wok: { fi: "Wokit", sv: "Wok" },
  "Smash Burgers": { fi: "Smash-hampurilaiset", sv: "Smashburgare" },
  "Chicken Burgers": { fi: "Kanahampurilaiset", sv: "Kycklingburgare" },
  "Halloumi Burgers": { fi: "Halloumihampurilaiset", sv: "Halloumiburgare" },
  "Earth Burgers": { fi: "Earth-hampurilaiset", sv: "Earthburgare" },
  "Combo Meals": { fi: "Combo-ateriat", sv: "Kombomenyer" },
  "Side Dishes": { fi: "Lisukkeet", sv: "Tillbehor" }
};

const ui = {
  en: {
    googleBtn: "Google Reviews",
    facebookBtn: "Facebook",
    foodoraBtn: "Foodora",
    woltBtn: "Order on Wolt",
    heroTop: "TURKU • BURGERS & WOK",
    heroExtra: "Fresh wok heat, smashed burger comfort, and quick service in central Turku.",
    rating: "Rating",
    address: "Address",
    phone: "Phone",
    menuEyebrow: "FULL PITSTOP MENU",
    menuTitle: "Original Menu Prices + Full Wolt Photos",
    updatedPrefix: "Prices aligned to Pitstop original menu • Updated",
    items: "items",
    galleryEyebrow: "PITSTOP GALLERY",
    galleryTitle: "Food Gallery",
    locationEyebrow: "VISIT PITSTOP",
    locationTitle: "Location & Opening Hours",
    locationStamp: "Hours source: Wolt listing",
    whereTitle: "Where to Find Us",
    hoursTitle: "Opening Hours",
    mapLink: "Open in Google Maps",
    callLink: "Call Restaurant",
    official: "Official Website",
    aboutFacebook: "Facebook",
    reviewsTitle: "Google Reviews",
    reviewsLink: "See all Google reviews",
    openNow: "Open now",
    closedNow: "Closed now",
    until: "until",
    footer: "Ravintola Pitstop 2026",
    lightMode: "Light Mode",
    darkMode: "Dark Mode"
  },
  fi: {
    googleBtn: "Google-arvostelut",
    facebookBtn: "Facebook",
    foodoraBtn: "Foodora",
    woltBtn: "Tilaa Woltista",
    heroTop: "TURKU • HAMPURILAISET & WOK",
    heroExtra: "Tuoretta wokkia, smash-burgereita ja nopeaa palvelua Turun keskustassa.",
    rating: "Arvosana",
    address: "Osoite",
    phone: "Puhelin",
    menuEyebrow: "PITSTOPIN KOKO MENU",
    menuTitle: "Alkuperaiset hinnat + kaikki Wolt-kuvat",
    updatedPrefix: "Hinnat alkuperaisen menun mukaan • Paivitetty",
    items: "tuotetta",
    galleryEyebrow: "PITSTOP GALLERIA",
    galleryTitle: "Ruokagalleria",
    locationEyebrow: "VIERAILE PITSTOPISSA",
    locationTitle: "Sijainti ja aukioloajat",
    locationStamp: "Aukioloajat lahteesta: Wolt",
    whereTitle: "Loydat meidat tasta",
    hoursTitle: "Aukioloajat",
    mapLink: "Avaa Google Mapsissa",
    callLink: "Soita ravintolaan",
    official: "Virallinen sivusto",
    aboutFacebook: "Facebook",
    reviewsTitle: "Google-arvostelut",
    reviewsLink: "Katso kaikki Google-arvostelut",
    openNow: "Avoinna nyt",
    closedNow: "Suljettu nyt",
    until: "asti",
    footer: "Ravintola Pitstop 2026",
    lightMode: "Vaalea tila",
    darkMode: "Tumma tila"
  },
  sv: {
    googleBtn: "Google-recensioner",
    facebookBtn: "Facebook",
    foodoraBtn: "Foodora",
    woltBtn: "Bestall via Wolt",
    heroTop: "ABO • BURGARE & WOK",
    heroExtra: "Farsk wok, smashburgare och snabb service i centrala Abo.",
    rating: "Betyg",
    address: "Adress",
    phone: "Telefon",
    menuEyebrow: "PITSTOPS HELA MENY",
    menuTitle: "Originalpriser + alla Wolt-bilder",
    updatedPrefix: "Priser enligt originalmeny • Uppdaterad",
    items: "artiklar",
    galleryEyebrow: "PITSTOP GALLERI",
    galleryTitle: "Matgalleri",
    locationEyebrow: "BESOK PITSTOP",
    locationTitle: "Plats och oppettider",
    locationStamp: "Oppettider fran: Wolt",
    whereTitle: "Hitta oss",
    hoursTitle: "Oppettider",
    mapLink: "Oppna i Google Maps",
    callLink: "Ring restaurangen",
    official: "Officiell webbplats",
    aboutFacebook: "Facebook",
    reviewsTitle: "Google-recensioner",
    reviewsLink: "Se alla Google-recensioner",
    openNow: "Oppet nu",
    closedNow: "Stangt nu",
    until: "till",
    footer: "Ravintola Pitstop 2026",
    lightMode: "Ljust lage",
    darkMode: "Morkt lage"
  }
};

const fiNameReplacements = [
  ["Combo Burger", "Combo-burgeri"],
  ["Loaded fries", "Loaded ranskalaiset"],
  ["Sweet potato", "Bataattiranskalaiset"],
  ["Chicken nuggets", "Kananugetit"],
  ["Mozzarella sticks", "Mozzarellatikut"],
  ["Onion rings", "Sipulirenkaat"],
  ["Double", "Tupla"],
  ["Single", "Yksi"],
  ["Beef", "Nauta"],
  ["Chicken", "Kana"],
  ["Prawn", "Katkarapu"],
  ["Veg", "Kasvis"],
  ["Garlic", "Valkosipuli"],
  ["Fries", "Ranskalaiset"]
];

const svNameReplacements = [
  ["Combo Burger", "Combo-burgare"],
  ["Loaded fries", "Loaded fries"],
  ["Sweet potato", "Sotpotatispommes"],
  ["Chicken nuggets", "Kycklingnuggets"],
  ["Mozzarella sticks", "Mozzarellasticks"],
  ["Onion rings", "Lokringar"],
  ["Double", "Dubbel"],
  ["Single", "Enkel"],
  ["Beef", "Not"],
  ["Chicken", "Kyckling"],
  ["Prawn", "Raka"],
  ["Veg", "Veg"],
  ["Garlic", "Vitlok"],
  ["Fries", "Pommes"]
];

const fiDescReplacements = [
  ["One piece of fried chicken", "Yksi pala friteerattua kanaa"],
  ["One piece of halloumi", "Yksi pala halloumia"],
  ["One piece of veggie patty", "Yksi kasvispihvi"],
  ["Beef patty", "Naudanlihapihvi"],
  ["cheddar cheese", "cheddarjuusto"],
  ["potato bun", "perunasampyla"],
  ["classic mayonnaise", "klassinen majoneesi"],
  ["BBQ mayonnaise", "BBQ-majoneesi"],
  ["masala mayonnaise", "masala-majoneesi"],
  ["chipotle mayonnaise", "chipotle-majoneesi"],
  ["sriracha mayonnaise", "sriracha-majoneesi"],
  ["garlic mayonnaise", "valkosipulimajoneesi"],
  ["red onion", "punasipuli"],
  ["iceberg lettuce", "jaavuorisalaatti"],
  ["pickles", "suolakurkut"],
  ["tomato", "tomaatti"],
  ["carrot", "porkkana"],
  ["cabbage", "kaali"],
  ["onion", "sipuli"],
  ["noodles", "nuudelit"],
  ["rice", "riisi"],
  ["sauces of choice", "valitsemasi kastikkeet"],
  ["vegetable and toppings if you like to add", "vihanneksia ja lisukkeita halutessasi"],
  ["Meal-1", "Ateria-1"],
  ["Meal -2", "Ateria-2"],
  ["Double Smash burger", "Double Smash -burgeri"],
  ["Single Smash burger", "Single Smash -burgeri"],
  ["Fries", "Ranskalaiset"],
  ["fried onion", "paistettu sipuli"],
  ["Chicken or halloumi", "Kana tai halloumi"],
  ["lettuce", "salaatti"],
  ["Shitake mushroom", "Shiitake-sieni"],
  ["button mushroom", "herkkusieni"],
  ["paprika mix", "paprikasekoitus"]
];

const svDescReplacements = [
  ["One piece of fried chicken", "En bit friterad kyckling"],
  ["One piece of halloumi", "En bit halloumi"],
  ["One piece of veggie patty", "En vegopattie"],
  ["Beef patty", "Notpatty"],
  ["cheddar cheese", "cheddarost"],
  ["potato bun", "potatisbrod"],
  ["classic mayonnaise", "klassisk majonnas"],
  ["BBQ mayonnaise", "BBQ-majonnas"],
  ["masala mayonnaise", "masala-majonnas"],
  ["chipotle mayonnaise", "chipotle-majonnas"],
  ["sriracha mayonnaise", "sriracha-majonnas"],
  ["garlic mayonnaise", "vitloksmajonnas"],
  ["red onion", "rodlok"],
  ["iceberg lettuce", "isbergssallad"],
  ["pickles", "pickles"],
  ["tomato", "tomat"],
  ["carrot", "morot"],
  ["cabbage", "kal"],
  ["onion", "lok"],
  ["noodles", "nudlar"],
  ["rice", "ris"],
  ["sauces of choice", "valda sasar"],
  ["vegetable and toppings if you like to add", "gronsaker och tillagg om du vill"],
  ["Meal-1", "Maltid-1"],
  ["Meal -2", "Maltid-2"],
  ["Double Smash burger", "Dubbel Smash-burgare"],
  ["Single Smash burger", "Enkel Smash-burgare"],
  ["Fries", "Pommes"],
  ["fried onion", "friterad lok"],
  ["Chicken or halloumi", "Kyckling eller halloumi"],
  ["lettuce", "sallad"],
  ["Shitake mushroom", "shiitakesvamp"],
  ["button mushroom", "champinjon"],
  ["paprika mix", "paprikamix"]
];

const state = {
  lang: localStorage.getItem("pitstop_lang") || "en",
  theme: localStorage.getItem("pitstop_theme") || "dark",
  menu: null,
  content: null,
  heroSlideIndex: 0,
  statusTimer: null,
  heroFallbackTimeout: null
};

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceAll(text, replacements) {
  let out = text || "";
  for (let i = 0; i < replacements.length; i += 1) {
    const from = replacements[i][0];
    const to = replacements[i][1];
    const re = new RegExp(escapeRegExp(from), "gi");
    out = out.replace(re, to);
  }
  return out;
}

function translateCategoryName(name, lang) {
  if (lang === "en") return name;
  if (categoryLabelMap[name] && categoryLabelMap[name][lang]) return categoryLabelMap[name][lang];
  return name;
}

function translateName(name, lang) {
  if (!name || lang === "en") return name;
  return replaceAll(name, lang === "fi" ? fiNameReplacements : svNameReplacements);
}

function translateDescription(text, lang) {
  if (!text || lang === "en") return text;
  return replaceAll(text, lang === "fi" ? fiDescReplacements : svDescReplacements);
}

function formatPrice(cents, lang) {
  if (!Number.isFinite(cents)) return "-";
  const locale = lang === "fi" ? "fi-FI" : lang === "sv" ? "sv-SE" : "en-GB";
  return new Intl.NumberFormat(locale, { style: "currency", currency: "EUR" }).format(cents / 100);
}

function getUI() {
  return ui[state.lang] || ui.en;
}

function normalizeText(text) {
  return String(text || "").trim().toLowerCase();
}

function getOriginalPriceOverride(itemName, categoryName, fallbackPrice) {
  const name = normalizeText(itemName);
  const category = normalizeText(categoryName);

  if (category.includes("wok")) {
    if (name.includes("beef")) return 1140;
    if (name.includes("chicken")) return 1090;
    if (name.includes("prawn")) return 1140;
    if (name.includes("tofu")) return 1040;
    if (name.includes("veg")) return 790;
  }

  if (category.includes("smash")) {
    if (name.includes("masala")) return 1290;
    if (name.includes("bbq")) return 1090;
    if (name.includes("chipotle")) return 1090;
    if (name.includes("sriracha") || name.includes("blaze")) return 1090;
    if (name.includes("og")) return 990;
  }

  if (category.includes("chicken burgers")) {
    return 990;
  }

  if (category.includes("halloumi") || category.includes("earth")) {
    return 990;
  }

  if (category.includes("side")) {
    if (name.includes("loaded fries") && name.includes("large")) return 850;
    if (name.includes("loaded fries")) return 650;
    if (name.includes("wrap")) return 950;
  }

  return fallbackPrice;
}

function getMapEmbedUrl(location) {
  const lat = Number(location.lat);
  const lng = Number(location.lng);
  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return "https://maps.google.com/maps?q=" + lat + "," + lng + "&z=15&output=embed";
  }
  const q = encodeURIComponent(location.address_line_1 + " " + location.postal_city);
  return "https://maps.google.com/maps?q=" + q + "&output=embed";
}

function timeStringToMinutes(value) {
  const bits = String(value || "").split(":");
  const h = Number(bits[0]);
  const m = Number(bits[1]);
  if (!Number.isFinite(h) || !Number.isFinite(m)) return null;
  return h * 60 + m;
}

function getHelsinkiNow() {
  const date = new Date();
  const day = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Helsinki",
    weekday: "short"
  })
    .format(date)
    .toLowerCase()
    .slice(0, 3);

  const hour = Number(
    new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Helsinki", hour: "2-digit", hour12: false }).format(date)
  );
  const minute = Number(
    new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Helsinki", minute: "2-digit" }).format(date)
  );

  return { day, minutes: hour * 60 + minute };
}

function getHoursStatus(location) {
  const rows = location.opening_hours || [];
  const now = getHelsinkiNow();
  const dayIndexMap = { mon: 0, tue: 1, wed: 2, thu: 3, fri: 4, sat: 5, sun: 6 };
  const reverseDay = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const todayIdx = dayIndexMap[now.day];
  if (!Number.isFinite(todayIdx)) return { isOpen: false, activeKey: null, close: null };

  const today = rows.find(function (r) {
    return r.key === now.day;
  });

  if (today) {
    const openM = timeStringToMinutes(today.open);
    const closeM = timeStringToMinutes(today.close);

    if (openM !== null && closeM !== null) {
      if (closeM > openM && now.minutes >= openM && now.minutes < closeM) {
        return { isOpen: true, activeKey: today.key, close: today.close };
      }
      if (closeM < openM && (now.minutes >= openM || now.minutes < closeM)) {
        return { isOpen: true, activeKey: today.key, close: today.close };
      }
    }
  }

  const prevKey = reverseDay[(todayIdx + 6) % 7];
  const prev = rows.find(function (r) {
    return r.key === prevKey;
  });

  if (prev) {
    const prevOpen = timeStringToMinutes(prev.open);
    const prevClose = timeStringToMinutes(prev.close);
    if (prevOpen !== null && prevClose !== null && prevClose < prevOpen && now.minutes < prevClose) {
      return { isOpen: true, activeKey: prev.key, close: prev.close };
    }
  }

  return { isOpen: false, activeKey: now.day, close: null };
}

async function loadMenuData() {
  if (window.__PITSTOP_MENU__) return window.__PITSTOP_MENU__;
  try {
    const res = await fetch("data/pitstop-menu.json");
    if (!res.ok) throw new Error("HTTP " + res.status);
    return await res.json();
  } catch (e) {
    return null;
  }
}

function bindLinks() {
  const sources = state.content.sources;
  document.getElementById("google-btn").href = sources.google_reviews_map;
  document.getElementById("facebook-btn").href = sources.facebook;
  document.getElementById("foodora-btn").href = sources.foodora;
  document.getElementById("wolt-btn").href = sources.wolt;

  document.getElementById("official-link").href = sources.official_site;
  document.getElementById("about-facebook-link").href = sources.facebook;
  document.getElementById("google-link").href = sources.google_reviews_map;
  document.getElementById("map-link").href = sources.google_reviews_map;

  const phone = state.menu && state.menu.restaurant ? state.menu.restaurant.phone : "+358453282140";
  document.getElementById("call-link").href = "tel:" + phone;
}

function updateStaticTexts() {
  const t = getUI();
  document.documentElement.lang = state.lang;

  document.getElementById("google-btn").textContent = t.googleBtn;
  document.getElementById("facebook-btn").textContent = t.facebookBtn;
  document.getElementById("foodora-btn").textContent = t.foodoraBtn;
  document.getElementById("wolt-btn").textContent = t.woltBtn;

  document.getElementById("hero-top").textContent = t.heroTop;
  document.getElementById("hero-extra").textContent = t.heroExtra;
  document.getElementById("lbl-rating").textContent = t.rating;
  document.getElementById("lbl-address").textContent = t.address;
  document.getElementById("lbl-phone").textContent = t.phone;

  document.getElementById("menu-eyebrow").textContent = t.menuEyebrow;
  document.getElementById("menu-title").textContent = t.menuTitle;
  document.getElementById("gallery-eyebrow").textContent = t.galleryEyebrow;
  document.getElementById("gallery-title").textContent = t.galleryTitle;

  document.getElementById("location-eyebrow").textContent = t.locationEyebrow;
  document.getElementById("location-title").textContent = t.locationTitle;
  document.getElementById("location-stamp").textContent = t.locationStamp;
  document.getElementById("where-title").textContent = t.whereTitle;
  document.getElementById("hours-title").textContent = t.hoursTitle;
  document.getElementById("map-link").textContent = t.mapLink;
  document.getElementById("call-link").textContent = t.callLink;

  document.getElementById("official-link").textContent = t.official;
  document.getElementById("about-facebook-link").textContent = t.aboutFacebook;
  document.getElementById("reviews-title").textContent = t.reviewsTitle;
  document.getElementById("google-link").textContent = t.reviewsLink;
  document.getElementById("footer-text").textContent = t.footer;

  themeText.textContent = state.theme === "dark" ? t.lightMode : t.darkMode;

  for (let i = 0; i < langButtons.length; i += 1) {
    const btn = langButtons[i];
    const isActive = btn.dataset.lang === state.lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  }
}

function getHeroCaption(item) {
  if (state.lang === "fi") return item.caption_fi;
  if (state.lang === "sv") return item.caption_sv;
  return item.caption_en;
}

function stopHeroVideo() {
  heroSlideVideo.pause();
  if (state.heroFallbackTimeout) {
    clearTimeout(state.heroFallbackTimeout);
    state.heroFallbackTimeout = null;
  }
}

function setHeroSlide(index) {
  const media = state.content.hero_media;
  if (!media || media.length === 0) return;
  state.heroSlideIndex = (index + media.length) % media.length;
  const item = media[state.heroSlideIndex];

  heroSlideCaption.textContent = getHeroCaption(item);
  heroMediaShell.classList.add("is-video");
  stopHeroVideo();
  heroSlideVideo.currentTime = 0;
  heroSlideVideo.src = item.src;
  heroSlideVideo.muted = true;
  heroSlideVideo.playsInline = true;
  heroSlideVideo.autoplay = true;
  heroSlideVideo.loop = false;
  const playPromise = heroSlideVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(function () {
      // Ignore autoplay interruptions on strict browsers.
    });
  }

  // Fallback in case "ended" event is blocked.
  state.heroFallbackTimeout = setTimeout(function () {
    setHeroSlide(state.heroSlideIndex + 1);
  }, 35000);
}

function startHeroSlideshow() {
  heroSlideVideo.onended = function () {
    setHeroSlide(state.heroSlideIndex + 1);
  };
  setHeroSlide(state.heroSlideIndex);
}

function renderAboutAndReviews() {
  const about = state.content.about[state.lang];
  const reviewsBlock = state.content.google_reviews;

  document.getElementById("about-title").textContent = about.title;
  document.getElementById("about-p1").textContent = about.p1;
  document.getElementById("about-p2").textContent = about.p2;
  document.getElementById("facebook-stats").textContent = about.facebook_stats;

  document.getElementById("google-rating").textContent =
    reviewsBlock.rating.toFixed(1) + " / 5 (" + reviewsBlock.count + ")";

  document.getElementById("reviews-note").textContent =
    state.lang === "fi"
      ? reviewsBlock.note_fi
      : state.lang === "sv"
        ? reviewsBlock.note_sv
        : reviewsBlock.note_en;

  const reviewsRoot = document.getElementById("reviews-list");
  const template = document.getElementById("review-card-template");
  reviewsRoot.innerHTML = "";

  for (let i = 0; i < reviewsBlock.reviews.length; i += 1) {
    const review = reviewsBlock.reviews[i];
    const fragment = template.content.cloneNode(true);
    fragment.querySelector(".review-author").textContent = review.author;
    fragment.querySelector(".review-meta").textContent = review.rating + "/5 • " + review.date;
    fragment.querySelector(".review-text").textContent =
      state.lang === "fi" ? review.text_fi : state.lang === "sv" ? review.text_sv : review.text_en;
    reviewsRoot.appendChild(fragment);
  }
}

function renderGallery() {
  const images = state.content.gallery_images || [];
  galleryGrid.innerHTML = "";

  for (let i = 0; i < images.length; i += 1) {
    const src = images[i];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "gallery-item reveal";
    button.setAttribute("aria-label", "Open gallery image");
    button.dataset.src = src;

    const img = document.createElement("img");
    img.src = src;
    img.alt = "Pitstop gallery photo";
    img.loading = "lazy";

    button.appendChild(img);
    galleryGrid.appendChild(button);
  }
}

function renderLocationSection() {
  const t = getUI();
  const location = state.content.location;

  document.getElementById("location-address-text").textContent =
    location.address_line_1 + ", " + location.postal_city;

  mapEmbed.src = getMapEmbedUrl(location);

  const status = getHoursStatus(location);
  openNowNode.classList.toggle("open", status.isOpen);
  openNowNode.textContent = status.isOpen
    ? t.openNow + (status.close ? " • " + t.until + " " + status.close : "")
    : t.closedNow;

  const rows = location.opening_hours || [];
  hoursList.innerHTML = "";
  for (let i = 0; i < rows.length; i += 1) {
    const row = rows[i];
    const li = document.createElement("li");
    li.className = "hours-item" + (row.key === status.activeKey ? " active" : "");

    const day = document.createElement("span");
    day.textContent = state.lang === "fi" ? row.fi : state.lang === "sv" ? row.sv : row.en;

    const span = document.createElement("strong");
    span.textContent = row.open + " - " + row.close;

    li.appendChild(day);
    li.appendChild(span);
    hoursList.appendChild(li);
  }
}

function startStatusClock() {
  if (state.statusTimer) clearInterval(state.statusTimer);
  state.statusTimer = setInterval(function () {
    renderLocationSection();
  }, 60000);
}

function buildCategoryNav(categories) {
  navRoot.innerHTML = "";
  for (let i = 0; i < categories.length; i += 1) {
    const category = categories[i];
    const link = document.createElement("a");
    link.className = "category-link";
    link.href = "#" + (category.slug || category.id);
    link.textContent = translateCategoryName(category.name, state.lang);
    navRoot.appendChild(link);
  }
}

function renderMenu() {
  const t = getUI();
  const payload = state.menu;
  const restaurant = payload.restaurant;
  const categories = payload.categories;
  const source = payload.source;
  const template = document.getElementById("item-card-template");

  document.getElementById("restaurant-name").textContent = restaurant.name || "Pitstop";
  document.getElementById("restaurant-description").textContent =
    state.lang === "fi"
      ? "Wok- ja smash-hampurilaisia"
      : state.lang === "sv"
        ? "Wok och smashburgare"
        : restaurant.description || "Wok and smashed burgers";

  document.getElementById("rating").textContent = restaurant.rating_score || "-";
  document.getElementById("address").textContent = restaurant.address || "-";
  document.getElementById("phone").textContent = restaurant.phone || "-";

  document.getElementById("menu-stamp").textContent = t.updatedPrefix + " " + source.extracted_date;

  buildCategoryNav(categories);
  menuRoot.innerHTML = "";

  for (let c = 0; c < categories.length; c += 1) {
    const category = categories[c];

    const section = document.createElement("section");
    section.className = "category-section";
    section.id = category.slug || category.id;

    const titleWrap = document.createElement("div");
    titleWrap.className = "category-title-wrap";

    const title = document.createElement("h3");
    title.className = "category-title";
    title.textContent = translateCategoryName(category.name, state.lang);

    const count = document.createElement("p");
    count.className = "category-count";
    count.textContent = category.items.length + " " + t.items;

    titleWrap.appendChild(title);
    titleWrap.appendChild(count);
    section.appendChild(titleWrap);

    const grid = document.createElement("div");
    grid.className = "items-grid";

    for (let i = 0; i < category.items.length; i += 1) {
      const item = category.items[i];
      const fragment = template.content.cloneNode(true);
      const image = fragment.querySelector(".item-image");
      const price = fragment.querySelector(".price-pill");
      const name = fragment.querySelector(".item-name");
      const desc = fragment.querySelector(".item-description");

      name.textContent = translateName(item.name, state.lang);
      desc.textContent = translateDescription(item.description || "", state.lang) || "-";
      const displayPrice = getOriginalPriceOverride(item.name, category.name, item.price);
      price.textContent = formatPrice(displayPrice, state.lang);

      const imageUrl = item.image || item.fallback_image || category.image || restaurant.hero_image;
      if (imageUrl) {
        image.src = imageUrl;
        image.alt = item.name;
      } else {
        image.remove();
      }

      grid.appendChild(fragment);
    }

    section.appendChild(grid);
    menuRoot.appendChild(section);
  }
}

function animateElements() {
  const observer = new IntersectionObserver(
    function (entries) {
      for (let i = 0; i < entries.length; i += 1) {
        const entry = entries[i];
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 }
  );

  const nodes = document.querySelectorAll(".reveal");
  for (let i = 0; i < nodes.length; i += 1) {
    nodes[i].classList.remove("in-view");
    nodes[i].style.transitionDelay = Math.min(i * 16, 280) + "ms";
    observer.observe(nodes[i]);
  }
}

function applyTheme() {
  document.body.setAttribute("data-theme", state.theme);
  localStorage.setItem("pitstop_theme", state.theme);
  updateStaticTexts();
}

function rerender() {
  updateStaticTexts();
  renderMenu();
  renderLocationSection();
  renderAboutAndReviews();
  renderGallery();
  setHeroSlide(state.heroSlideIndex);
  animateElements();
}

function attachEvents() {
  for (let i = 0; i < langButtons.length; i += 1) {
    langButtons[i].addEventListener("click", function () {
      const nextLang = this.dataset.lang;
      if (!nextLang || nextLang === state.lang) return;
      state.lang = nextLang;
      localStorage.setItem("pitstop_lang", state.lang);
      rerender();
    });
  }

  themeToggle.addEventListener("click", function () {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
  });

  galleryGrid.addEventListener("click", function (event) {
    const trigger = event.target.closest(".gallery-item");
    if (!trigger) return;
    const src = trigger.dataset.src;
    if (!src) return;
    lightboxImage.src = src;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  });

  lightboxClose.addEventListener("click", function () {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    }
  });
}

async function init() {
  state.menu = await loadMenuData();
  state.content = window.__PITSTOP_SITE_CONTENT__ || null;

  if (!state.menu || !state.content) {
    menuRoot.innerHTML =
      "<p>Failed to load menu. Reload once. If it still fails, confirm data/pitstop-menu.js and data/site-content.js exist.</p>";
    return;
  }

  if (!["en", "fi", "sv"].includes(state.lang)) state.lang = "en";
  if (!["dark", "light"].includes(state.theme)) state.theme = "dark";

  bindLinks();
  attachEvents();
  applyTheme();
  rerender();
  startHeroSlideshow();
  startStatusClock();
}

init();
