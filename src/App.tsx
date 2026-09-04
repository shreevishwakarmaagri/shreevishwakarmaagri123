import { useEffect, useState, useCallback } from "react";
import reaper1 from "./assets/reaper/reaper_1.jpg";
import reaper2 from "./assets/reaper/reaper_2.jpg";
import reaper3 from "./assets/reaper/reaper_3.jpg";
import reaper4 from "./assets/reaper/reaper_4.jpg";
import reaper5 from "./assets/reaper/reaper_5.jpg";
import reaper6 from "./assets/reaper/reaper_6.png";
import reaper7 from "./assets/reaper/reaper_7.png";
import reaper8 from "./assets/reaper/reaper_8.png";
// Chaff Cutter
import chaffCutter1 from "./assets/chaff cutter/chaff_cutter_1.jpg";
import chaffCutter2 from "./assets/chaff cutter/chaff_cutter_2.jpg";
import chaffCutter3 from "./assets/chaff cutter/chaff_cutter_3.png";
import chaffCutter4 from "./assets/chaff cutter/chaff_cutter_4.png";
import chaffCutter5 from "./assets/chaff cutter/chaff_cutter_5.png";
import chaffCutter6 from "./assets/chaff cutter/chaff_cutter_6.png";
// Seed Drill
import seedDrill1 from "./assets/seed drill/seed_drill_1.png";
import seedDrill2 from "./assets/seed drill/seed_drill_2.png";
import seedDrill3 from "./assets/seed drill/seed_drill_3.png";
import seedDrill4 from "./assets/seed drill/seed_drill_4.png";
// Blower
import blower1 from "./assets/blower/blower_1.png";
import blower2 from "./assets/blower/blower_2.png";
import blower3 from "./assets/blower/blower_3.png";
// Road Cleaner
import roadCleaner1 from "./assets/road cleaner/road_cleaner_1.png";
import roadCleaner2 from "./assets/road cleaner/road_cleaner_2.png";
import roadCleaner3 from "./assets/road cleaner/road_cleaner_3.png";
import roadCleaner4 from "./assets/road cleaner/road_cleaner_4.png";
// Road Widener
import roadWidener1 from "./assets/road widener/road_widener_1.jpeg";
import roadWidener2 from "./assets/road widener/road_widener_2.jpeg";
import roadWidener3 from "./assets/road widener/road_widener_3.jpeg";
import roadWidener4 from "./assets/road widener/road_widener_4.jpeg";
import roadWidener5 from "./assets/road widener/road_widener_5.jpeg";
import roadWidener6 from "./assets/road widener/road_widener_6.jpeg";
import roadWidener7 from "./assets/road widener/road_widener_7.jpeg";
import roadWidener8 from "./assets/road widener/road_widener_8.jpeg";
import roadWidener9 from "./assets/road widener/road_widener_9.jpeg";
import "./index.css";

const phone1 = "9925051462";
const phone2 = "8140003809";
const whatsapp = "919925051462";
const email = "shreevishwakarmaagri@gmail.com";
const instagram = "https://www.instagram.com/shreevishwakarmaagri/";

const agricultureMachines = [
  {
    icon: "🌾",
    title: "Reaper",
    text: "Efficient crop harvesting machine designed to save time and reduce manual labour.",
  },
  {
    icon: "⚙️",
    title: "Chaff Cutter",
    text: "Powerful and reliable machine for fast and efficient fodder cutting.",
  },
  {
    icon: "🌱",
    title: "Seed Drill",
    text: "Modern seed sowing equipment for accurate and efficient agricultural operations.",
  },
  {
    icon: "💨",
    title: "Blower",
    text: "High-performance blower equipment suitable for different agricultural applications.",
  },
];

const roadMachines = [
  {
    icon: "🧹",
    title: "Road Cleaner",
    text: "Efficient road cleaning equipment designed for professional road maintenance.",
  },
  {
    icon: "🚧",
    title: "Road Widener",
    text: "Reliable road widening equipment built for efficient infrastructure work.",
  },
];

const whatWeDo = [
  {
    icon: "🌾",
    title: "Agricultural Machinery",
    text: "Modern machines designed to improve farming productivity.",
  },
  {
    icon: "🚜",
    title: "Road Equipment",
    text: "Professional equipment for road and infrastructure work.",
  },
  {
    icon: "🔧",
    title: "Machine Support",
    text: "Reliable guidance and support for your equipment.",
  },
  {
    icon: "🏛️",
    title: "Government Subsidy",
    text: "Guidance for eligible agricultural machinery subsidy schemes.",
  },
];

const reasons = [
  {
    icon: "✅",
    title: "Reliable Equipment",
    text: "Quality-focused machinery built for dependable performance.",
  },
  {
    icon: "👨‍🌾",
    title: "Farmer Focused",
    text: "Solutions designed around practical farming requirements.",
  },
  {
    icon: "🇮🇳",
    title: "Made for India",
    text: "Equipment selected and designed for Indian working conditions.",
  },
  {
    icon: "🤝",
    title: "Customer Support",
    text: "Friendly assistance before and after your purchase.",
  },
];

/* ================= REAPER PAGE COMPONENT ================= */
const reaperImages = [
  { src: reaper1, alt: "Reaper Machine - Front View" },
  { src: reaper2, alt: "Reaper Machine - Side View" },
  { src: reaper3, alt: "Reaper Machine - Working in Field" },
  { src: reaper4, alt: "Reaper Machine - Harvesting" },
  { src: reaper5, alt: "Reaper Machine - Close Up" },
  { src: reaper6, alt: "Reaper Machine - Detail View" },
  { src: reaper7, alt: "Reaper Machine - Full View" },
  { src: reaper8, alt: "Reaper Machine - Field Operation" },
];

function ReaperPage({ onBack }: { onBack: () => void }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (lightbox !== null) {
        if (e.key === "ArrowRight") setLightbox((p) => (p! + 1) % reaperImages.length);
        if (e.key === "ArrowLeft") setLightbox((p) => (p! - 1 + reaperImages.length) % reaperImages.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox]);

  return (
    <div className="reaper-page">

      {/* ---- TOP BAR ---- */}
      <header className="rp-header">
        <button className="rp-back" onClick={onBack}>
          ← Back
        </button>
        <div className="brand">
          <div className="brand-logo">🌾</div>
          <div>
            <strong>Shree Vishwakarma</strong>
            <small>Agricultural &amp; Road Equipment</small>
          </div>
        </div>
        <a href="#rp-contact" className="rp-header-cta">Enquire Now</a>
      </header>

      {/* ---- HERO BANNER ---- */}
      <section className="rp-hero">
        <div className="rp-hero-inner">
          <div className="rp-tag">🌾 AGRICULTURE EQUIPMENT</div>
          <h1>Reaper Machine</h1>
          <p className="rp-subtitle">
            High-performance crop harvesting machine built for Indian farming conditions.
            Saves time, reduces labour cost and increases field productivity.
          </p>
          <div className="rp-badges">
            <span>⚡ High Speed</span>
            <span>🔧 Low Maintenance</span>
            <span>🌾 Multi-Crop</span>
            <span>🇮🇳 Made for India</span>
          </div>
        </div>
        <div className="rp-hero-img">
          <img src={reaper1} alt="Reaper Machine" />
        </div>
      </section>

      {/* ---- DESCRIPTION ---- */}
      <section className="rp-about">
        <div className="rp-about-inner">

          <div className="rp-about-text">
            <div className="rp-section-tag">ABOUT THE MACHINE</div>
            <h2>Efficient Harvesting,<span> Zero Compromise.</span></h2>
            <p>
              The Reaper is a powerful agricultural machine designed to harvest crops like wheat,
              paddy, and other standing crops quickly and efficiently. It replaces the heavy manual
              labour required during harvest season, helping farmers complete their harvest in a
              fraction of the time.
            </p>
            <p>
              Our Reaper machines are selected and tested for Indian soil and crop conditions —
              delivering consistent performance season after season.
            </p>
          </div>

          <div className="rp-features">
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🌾</span>
              <div>
                <strong>Multi-Crop Compatible</strong>
                <small>Works on wheat, paddy, soybean &amp; more</small>
              </div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">⚡</span>
              <div>
                <strong>High-Speed Harvesting</strong>
                <small>Harvests up to 1 acre per hour</small>
              </div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🔧</span>
              <div>
                <strong>Easy Maintenance</strong>
                <small>Simple parts, easy to service locally</small>
              </div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">💰</span>
              <div>
                <strong>Government Subsidy</strong>
                <small>May qualify for agricultural subsidy</small>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---- GALLERY ---- */}
      <section className="rp-gallery-section">
        <div className="rp-section-heading">
          <div className="rp-section-tag">PHOTO GALLERY</div>
          <h2>See the Machine<span> in Action</span></h2>
          <p>Click any photo to view full size</p>
        </div>

        <div className="rp-gallery">
          {reaperImages.map((img, i) => (
            <div
              className="rp-gallery-item"
              key={i}
              onClick={() => setLightbox(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="rp-gallery-overlay">
                <span>🔍 View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- CONTACT ---- */}
      <section id="rp-contact" className="rp-contact">
        <div className="rp-contact-inner">
          <div className="rp-section-tag">GET IN TOUCH</div>
          <h2>Interested in the<span> Reaper Machine?</span></h2>
          <p>Contact us today for pricing, demo, or subsidy information.</p>
          <div className="rp-contact-btns">
            <a href="tel:9925051462" className="rp-btn-primary">📞 Call Now</a>
            <a
              href="https://wa.me/919925051462"
              target="_blank"
              rel="noreferrer"
              className="rp-btn-whatsapp"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ---- FOOTER ---- */}
      <footer className="rp-footer">
        <button className="rp-back-footer" onClick={onBack}>← Back to Main Site</button>
        <p>© {new Date().getFullYear()} Shree Vishwakarma Agricultural &amp; Road Equipment</p>
      </footer>

      {/* ---- LIGHTBOX ---- */}
      {lightbox !== null && (
        <div className="rp-lightbox" onClick={closeLightbox}>
          <button className="rp-lb-close" onClick={closeLightbox}>✕</button>
          <button
            className="rp-lb-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! - 1 + reaperImages.length) % reaperImages.length); }}
          >‹</button>
          <img
            src={reaperImages[lightbox].src}
            alt={reaperImages[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="rp-lb-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! + 1) % reaperImages.length); }}
          >›</button>
          <p className="rp-lb-counter">{lightbox + 1} / {reaperImages.length}</p>
        </div>
      )}

    </div>
  );
}

/* ================= CHAFF CUTTER PAGE ================= */
const chaffCutterImages = [
  { src: chaffCutter1, alt: "Chaff Cutter - View 1" },
  { src: chaffCutter2, alt: "Chaff Cutter - View 2" },
  { src: chaffCutter3, alt: "Chaff Cutter - View 3" },
  { src: chaffCutter4, alt: "Chaff Cutter - View 4" },
  { src: chaffCutter5, alt: "Chaff Cutter - View 5" },
  { src: chaffCutter6, alt: "Chaff Cutter - View 6" },
];

function ChaffCutterPage({ onBack }: { onBack: () => void }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (lightbox !== null) {
        if (e.key === "ArrowRight") setLightbox((p) => (p! + 1) % chaffCutterImages.length);
        if (e.key === "ArrowLeft") setLightbox((p) => (p! - 1 + chaffCutterImages.length) % chaffCutterImages.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox]);

  return (
    <div className="reaper-page">
      <header className="rp-header">
        <button className="rp-back" onClick={onBack}>← Back</button>
        <div className="brand">
          <div className="brand-logo">🌾</div>
          <div><strong>Shree Vishwakarma</strong><small>Agricultural &amp; Road Equipment</small></div>
        </div>
        <a href="#rp-contact" className="rp-header-cta">Enquire Now</a>
      </header>

      <section className="rp-hero">
        <div className="rp-hero-inner">
          <div className="rp-tag">🌾 AGRICULTURE EQUIPMENT</div>
          <h1>Chaff Cutter Machine</h1>
          <p className="rp-subtitle">
            Powerful and reliable machine for fast, efficient fodder cutting.
            Reduces manual effort and increases cattle feed productivity on your farm.
          </p>
          <div className="rp-badges">
            <span>⚡ High Power</span>
            <span>🔧 Easy to Operate</span>
            <span>🐄 Cattle Friendly</span>
            <span>🇮🇳 Made for India</span>
          </div>
        </div>
        <div className="rp-hero-img">
          <img src={chaffCutter1} alt="Chaff Cutter Machine" />
        </div>
      </section>

      <section className="rp-about">
        <div className="rp-about-inner">
          <div className="rp-about-text">
            <div className="rp-section-tag">ABOUT THE MACHINE</div>
            <h2>Fast Fodder Cutting,<span> Every Time.</span></h2>
            <p>
              The Chaff Cutter is designed to cut green or dry fodder into small pieces for
              cattle feeding. It dramatically reduces the time and effort needed to prepare
              animal feed, making daily farm operations easier and more efficient.
            </p>
            <p>
              Our Chaff Cutters are robust, easy to maintain and built to deliver consistent
              output under heavy daily use in Indian farm conditions.
            </p>
          </div>
          <div className="rp-features">
            <div className="rp-feature-card">
              <span className="rp-feat-icon">⚙️</span>
              <div><strong>Heavy Duty Motor</strong><small>High-power motor for continuous operation</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🌿</span>
              <div><strong>Multi-Fodder</strong><small>Cuts green & dry fodder efficiently</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🔧</span>
              <div><strong>Easy Maintenance</strong><small>Simple blade replacement & servicing</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">💰</span>
              <div><strong>Government Subsidy</strong><small>May qualify for agricultural subsidy</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="rp-gallery-section">
        <div className="rp-section-heading">
          <div className="rp-section-tag">PHOTO GALLERY</div>
          <h2>See the Machine<span> in Action</span></h2>
          <p>Click any photo to view full size</p>
        </div>
        <div className="rp-gallery">
          {chaffCutterImages.map((img, i) => (
            <div className="rp-gallery-item" key={i} onClick={() => setLightbox(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="rp-gallery-overlay"><span>🔍 View</span></div>
            </div>
          ))}
        </div>
      </section>

      <section id="rp-contact" className="rp-contact">
        <div className="rp-contact-inner">
          <div className="rp-section-tag">GET IN TOUCH</div>
          <h2>Interested in the<span> Chaff Cutter?</span></h2>
          <p>Contact us today for pricing, demo, or subsidy information.</p>
          <div className="rp-contact-btns">
            <a href="tel:9925051462" className="rp-btn-primary">📞 Call Now</a>
            <a href="https://wa.me/919925051462" target="_blank" rel="noreferrer" className="rp-btn-whatsapp">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="rp-footer">
        <button className="rp-back-footer" onClick={onBack}>← Back to Main Site</button>
        <p>© {new Date().getFullYear()} Shree Vishwakarma Agricultural &amp; Road Equipment</p>
      </footer>

      {lightbox !== null && (
        <div className="rp-lightbox" onClick={closeLightbox}>
          <button className="rp-lb-close" onClick={closeLightbox}>✕</button>
          <button className="rp-lb-prev" onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! - 1 + chaffCutterImages.length) % chaffCutterImages.length); }}>‹</button>
          <img src={chaffCutterImages[lightbox].src} alt={chaffCutterImages[lightbox].alt} onClick={(e) => e.stopPropagation()} />
          <button className="rp-lb-next" onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! + 1) % chaffCutterImages.length); }}>›</button>
          <p className="rp-lb-counter">{lightbox + 1} / {chaffCutterImages.length}</p>
        </div>
      )}
    </div>
  );
}

/* ================= SEED DRILL PAGE ================= */
const seedDrillImages = [
  { src: seedDrill1, alt: "Seed Drill - View 1" },
  { src: seedDrill2, alt: "Seed Drill - View 2" },
  { src: seedDrill3, alt: "Seed Drill - View 3" },
  { src: seedDrill4, alt: "Seed Drill - View 4" },
];

function SeedDrillPage({ onBack }: { onBack: () => void }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (lightbox !== null) {
        if (e.key === "ArrowRight") setLightbox((p) => (p! + 1) % seedDrillImages.length);
        if (e.key === "ArrowLeft") setLightbox((p) => (p! - 1 + seedDrillImages.length) % seedDrillImages.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox]);

  return (
    <div className="reaper-page">
      <header className="rp-header">
        <button className="rp-back" onClick={onBack}>← Back</button>
        <div className="brand">
          <div className="brand-logo">🌾</div>
          <div><strong>Shree Vishwakarma</strong><small>Agricultural &amp; Road Equipment</small></div>
        </div>
        <a href="#rp-contact" className="rp-header-cta">Enquire Now</a>
      </header>

      <section className="rp-hero">
        <div className="rp-hero-inner">
          <div className="rp-tag">🌾 AGRICULTURE EQUIPMENT</div>
          <h1>Seed Drill Machine</h1>
          <p className="rp-subtitle">
            Modern seed sowing equipment for accurate and efficient agricultural operations.
            Ensures uniform seed placement for better germination and crop yield.
          </p>
          <div className="rp-badges">
            <span>🌱 Accurate Sowing</span>
            <span>📏 Uniform Spacing</span>
            <span>⛽ Fuel Efficient</span>
            <span>🇮🇳 Made for India</span>
          </div>
        </div>
        <div className="rp-hero-img">
          <img src={seedDrill1} alt="Seed Drill Machine" />
        </div>
      </section>

      <section className="rp-about">
        <div className="rp-about-inner">
          <div className="rp-about-text">
            <div className="rp-section-tag">ABOUT THE MACHINE</div>
            <h2>Precise Sowing,<span> Better Yield.</span></h2>
            <p>
              The Seed Drill machine ensures seeds are sown at the right depth and spacing,
              maximizing germination rates and crop productivity. It replaces manual broadcasting
              methods with precision planting that saves seeds and improves output.
            </p>
            <p>
              Suitable for wheat, mustard, gram and other row crops — our Seed Drills are
              tested and trusted for Indian field conditions.
            </p>
          </div>
          <div className="rp-features">
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🌱</span>
              <div><strong>Multi-Crop Sowing</strong><small>Wheat, mustard, gram & more</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">📏</span>
              <div><strong>Uniform Row Spacing</strong><small>Precise depth & seed placement</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">⛽</span>
              <div><strong>Fuel Efficient</strong><small>Low operating cost per acre</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">💰</span>
              <div><strong>Government Subsidy</strong><small>May qualify for agricultural subsidy</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="rp-gallery-section">
        <div className="rp-section-heading">
          <div className="rp-section-tag">PHOTO GALLERY</div>
          <h2>See the Machine<span> in Action</span></h2>
          <p>Click any photo to view full size</p>
        </div>
        <div className="rp-gallery">
          {seedDrillImages.map((img, i) => (
            <div className="rp-gallery-item" key={i} onClick={() => setLightbox(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="rp-gallery-overlay"><span>🔍 View</span></div>
            </div>
          ))}
        </div>
      </section>

      <section id="rp-contact" className="rp-contact">
        <div className="rp-contact-inner">
          <div className="rp-section-tag">GET IN TOUCH</div>
          <h2>Interested in the<span> Seed Drill?</span></h2>
          <p>Contact us today for pricing, demo, or subsidy information.</p>
          <div className="rp-contact-btns">
            <a href="tel:9925051462" className="rp-btn-primary">📞 Call Now</a>
            <a href="https://wa.me/919925051462" target="_blank" rel="noreferrer" className="rp-btn-whatsapp">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="rp-footer">
        <button className="rp-back-footer" onClick={onBack}>← Back to Main Site</button>
        <p>© {new Date().getFullYear()} Shree Vishwakarma Agricultural &amp; Road Equipment</p>
      </footer>

      {lightbox !== null && (
        <div className="rp-lightbox" onClick={closeLightbox}>
          <button className="rp-lb-close" onClick={closeLightbox}>✕</button>
          <button className="rp-lb-prev" onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! - 1 + seedDrillImages.length) % seedDrillImages.length); }}>‹</button>
          <img src={seedDrillImages[lightbox].src} alt={seedDrillImages[lightbox].alt} onClick={(e) => e.stopPropagation()} />
          <button className="rp-lb-next" onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! + 1) % seedDrillImages.length); }}>›</button>
          <p className="rp-lb-counter">{lightbox + 1} / {seedDrillImages.length}</p>
        </div>
      )}
    </div>
  );
}

/* ================= BLOWER PAGE ================= */
const blowerImages = [
  { src: blower1, alt: "Blower - View 1" },
  { src: blower2, alt: "Blower - View 2" },
  { src: blower3, alt: "Blower - View 3" },
];

function BlowerPage({ onBack }: { onBack: () => void }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (lightbox !== null) {
        if (e.key === "ArrowRight") setLightbox((p) => (p! + 1) % blowerImages.length);
        if (e.key === "ArrowLeft") setLightbox((p) => (p! - 1 + blowerImages.length) % blowerImages.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox]);

  return (
    <div className="reaper-page">
      <header className="rp-header">
        <button className="rp-back" onClick={onBack}>← Back</button>
        <div className="brand">
          <div className="brand-logo">🌾</div>
          <div><strong>Shree Vishwakarma</strong><small>Agricultural &amp; Road Equipment</small></div>
        </div>
        <a href="#rp-contact" className="rp-header-cta">Enquire Now</a>
      </header>

      <section className="rp-hero">
        <div className="rp-hero-inner">
          <div className="rp-tag">🌾 AGRICULTURE EQUIPMENT</div>
          <h1>Blower Machine</h1>
          <p className="rp-subtitle">
            High-performance blower equipment suitable for different agricultural applications.
            Ideal for grain cleaning, field ventilation and crop processing.
          </p>
          <div className="rp-badges">
            <span>💨 High Airflow</span>
            <span>🌾 Grain Cleaning</span>
            <span>🔧 Low Maintenance</span>
            <span>🇮🇳 Made for India</span>
          </div>
        </div>
        <div className="rp-hero-img">
          <img src={blower1} alt="Blower Machine" />
        </div>
      </section>

      <section className="rp-about">
        <div className="rp-about-inner">
          <div className="rp-about-text">
            <div className="rp-section-tag">ABOUT THE MACHINE</div>
            <h2>Powerful Airflow,<span> Reliable Performance.</span></h2>
            <p>
              The Blower machine is a versatile agricultural equipment used for grain cleaning,
              removing husk and dust from harvested crops, and field ventilation during storage.
              It saves significant manual labour during post-harvest operations.
            </p>
            <p>
              Compact, easy to operate and durable — our Blowers are designed to handle
              the demands of daily agricultural use in Indian conditions.
            </p>
          </div>
          <div className="rp-features">
            <div className="rp-feature-card">
              <span className="rp-feat-icon">💨</span>
              <div><strong>High Airflow Output</strong><small>Powerful fan for fast cleaning</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🌾</span>
              <div><strong>Grain Cleaning</strong><small>Removes husk, dust & debris</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🔧</span>
              <div><strong>Low Maintenance</strong><small>Durable build, easy to service</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">💰</span>
              <div><strong>Government Subsidy</strong><small>May qualify for agricultural subsidy</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="rp-gallery-section">
        <div className="rp-section-heading">
          <div className="rp-section-tag">PHOTO GALLERY</div>
          <h2>See the Machine<span> in Action</span></h2>
          <p>Click any photo to view full size</p>
        </div>
        <div className="rp-gallery">
          {blowerImages.map((img, i) => (
            <div className="rp-gallery-item" key={i} onClick={() => setLightbox(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="rp-gallery-overlay"><span>🔍 View</span></div>
            </div>
          ))}
        </div>
      </section>

      <section id="rp-contact" className="rp-contact">
        <div className="rp-contact-inner">
          <div className="rp-section-tag">GET IN TOUCH</div>
          <h2>Interested in the<span> Blower Machine?</span></h2>
          <p>Contact us today for pricing, demo, or subsidy information.</p>
          <div className="rp-contact-btns">
            <a href="tel:9925051462" className="rp-btn-primary">📞 Call Now</a>
            <a href="https://wa.me/919925051462" target="_blank" rel="noreferrer" className="rp-btn-whatsapp">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="rp-footer">
        <button className="rp-back-footer" onClick={onBack}>← Back to Main Site</button>
        <p>© {new Date().getFullYear()} Shree Vishwakarma Agricultural &amp; Road Equipment</p>
      </footer>

      {lightbox !== null && (
        <div className="rp-lightbox" onClick={closeLightbox}>
          <button className="rp-lb-close" onClick={closeLightbox}>✕</button>
          <button className="rp-lb-prev" onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! - 1 + blowerImages.length) % blowerImages.length); }}>‹</button>
          <img src={blowerImages[lightbox].src} alt={blowerImages[lightbox].alt} onClick={(e) => e.stopPropagation()} />
          <button className="rp-lb-next" onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! + 1) % blowerImages.length); }}>›</button>
          <p className="rp-lb-counter">{lightbox + 1} / {blowerImages.length}</p>
        </div>
      )}
    </div>
  );
}

/* ================= ROAD CLEANER PAGE ================= */
const roadCleanerImages = [
  { src: roadCleaner1, alt: "Road Cleaner - View 1" },
  { src: roadCleaner2, alt: "Road Cleaner - View 2" },
  { src: roadCleaner3, alt: "Road Cleaner - View 3" },
  { src: roadCleaner4, alt: "Road Cleaner - View 4" },
];

function RoadCleanerPage({ onBack }: { onBack: () => void }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (lightbox !== null) {
        if (e.key === "ArrowRight") setLightbox((p) => (p! + 1) % roadCleanerImages.length);
        if (e.key === "ArrowLeft") setLightbox((p) => (p! - 1 + roadCleanerImages.length) % roadCleanerImages.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox]);

  return (
    <div className="reaper-page">
      <header className="rp-header">
        <button className="rp-back" onClick={onBack}>
          ← Back to Main Site
        </button>
        <div className="brand">
          <span className="rp-header-logo">🚜</span>
          <div>
            <strong>Shree Vishwakarma</strong>
            <small>Road Equipment</small>
          </div>
        </div>
        <a href="#rp-contact" className="rp-header-cta">
          Enquire Now
        </a>
      </header>

      <section className="rp-hero">
        <div className="rp-hero-inner">
          <div className="rp-tag">ROAD EQUIPMENT</div>
          <h1>
            Heavy Duty<br />
            <span>Road Cleaner</span> Machine
          </h1>
          <p className="rp-subtitle">
            Tractor-operated high-performance road sweeping machine engineered
            for rapid surface cleaning, dust removal, and highway maintenance.
          </p>
          <div className="rp-badges">
            <span>🧹 Fast Sweeping Speed</span>
            <span>🚜 Tractor Coupling</span>
            <span>🛡️ Heavy Duty Build</span>
            <span>🇮🇳 Made for India</span>
          </div>
        </div>
        <div className="rp-hero-img">
          <img src={roadCleaner1} alt="Road Cleaner Machine" />
        </div>
      </section>

      <section className="rp-about">
        <div className="rp-about-inner">
          <div className="rp-about-text">
            <div className="rp-section-tag">ABOUT THE MACHINE</div>
            <h2>Powerful Surface Sweeping,<span> Built for Roads &amp; Sites.</span></h2>
            <p>
              The Road Cleaner (Tractor Road Sweeper) is specialized equipment designed for cleaning debris,
              loose soil, sand, dust, and gravel from highways, municipal roads, and construction sites.
              Mounted on standard tractors, it delivers powerful sweeping performance with low maintenance costs.
            </p>
            <p>
              Equipped with high-density abrasion-resistant bristles and a sturdy steel chassis, it ensures rapid
              surface preparation prior to bitumen spraying, asphalt laying, or routine highway cleanliness.
            </p>
          </div>
          <div className="rp-features">
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🧹</span>
              <div><strong>Durable Brush Rollers</strong><small>High-density bristles for long life</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🚜</span>
              <div><strong>Tractor Coupled</strong><small>Simple 3-point linkage or drawbar hitch</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🛡️</span>
              <div><strong>Robust Steel Chassis</strong><small>Withstands harsh road site conditions</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">⚡</span>
              <div><strong>Fast Surface Prep</strong><small>Cleans kilometers of road in hours</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="rp-gallery-section">
        <div className="rp-section-heading">
          <div className="rp-section-tag">PHOTO GALLERY</div>
          <h2>See the Machine<span> in Action</span></h2>
          <p>Click any photo to view full size ({roadCleanerImages.length} photos)</p>
        </div>
        <div className="rp-gallery">
          {roadCleanerImages.map((img, i) => (
            <div className="rp-gallery-item" key={i} onClick={() => setLightbox(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="rp-gallery-overlay"><span>🔍 View</span></div>
            </div>
          ))}
        </div>
      </section>

      <section id="rp-contact" className="rp-contact">
        <div className="rp-contact-inner">
          <div className="rp-section-tag">GET IN TOUCH</div>
          <h2>Interested in the<span> Road Cleaner?</span></h2>
          <p>Contact us today for pricing, technical specifications, or custom order.</p>
          <div className="rp-contact-btns">
            <a href="tel:9925051462" className="rp-btn-primary">📞 Call Now</a>
            <a href="https://wa.me/919925051462" target="_blank" rel="noreferrer" className="rp-btn-whatsapp">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="rp-footer">
        <button className="rp-back-footer" onClick={onBack}>← Back to Main Site</button>
        <p>© {new Date().getFullYear()} Shree Vishwakarma Agricultural &amp; Road Equipment</p>
      </footer>

      {lightbox !== null && (
        <div className="rp-lightbox" onClick={closeLightbox}>
          <button className="rp-lb-close" onClick={closeLightbox}>✕</button>
          <button className="rp-lb-prev" onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! - 1 + roadCleanerImages.length) % roadCleanerImages.length); }}>‹</button>
          <img src={roadCleanerImages[lightbox].src} alt={roadCleanerImages[lightbox].alt} onClick={(e) => e.stopPropagation()} />
          <button className="rp-lb-next" onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! + 1) % roadCleanerImages.length); }}>›</button>
          <p className="rp-lb-counter">{lightbox + 1} / {roadCleanerImages.length}</p>
        </div>
      )}
    </div>
  );
}

/* ================= ROAD WIDENER PAGE ================= */
const roadWidenerImages = [
  { src: roadWidener1, alt: "Road Widener - View 1" },
  { src: roadWidener2, alt: "Road Widener - View 2" },
  { src: roadWidener3, alt: "Road Widener - View 3" },
  { src: roadWidener4, alt: "Road Widener - View 4" },
  { src: roadWidener5, alt: "Road Widener - View 5" },
  { src: roadWidener6, alt: "Road Widener - View 6" },
  { src: roadWidener7, alt: "Road Widener - View 7" },
  { src: roadWidener8, alt: "Road Widener - View 8" },
  { src: roadWidener9, alt: "Road Widener - View 9" },
];

function RoadWidenerPage({ onBack }: { onBack: () => void }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (lightbox !== null) {
        if (e.key === "ArrowRight") setLightbox((p) => (p! + 1) % roadWidenerImages.length);
        if (e.key === "ArrowLeft") setLightbox((p) => (p! - 1 + roadWidenerImages.length) % roadWidenerImages.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, closeLightbox]);

  return (
    <div className="reaper-page">
      <header className="rp-header">
        <button className="rp-back" onClick={onBack}>
          ← Back to Main Site
        </button>
        <div className="brand">
          <span className="rp-header-logo">🚧</span>
          <div>
            <strong>Shree Vishwakarma</strong>
            <small>Road Equipment</small>
          </div>
        </div>
        <a href="#rp-contact" className="rp-header-cta">
          Enquire Now
        </a>
      </header>

      <section className="rp-hero">
        <div className="rp-hero-inner">
          <div className="rp-tag">ROAD EQUIPMENT</div>
          <h1>
            Professional<br />
            <span>Road Widener</span> Equipment
          </h1>
          <p className="rp-subtitle">
            Engineered for efficient shoulder paving, trench filling, and material spreading.
            Saves significant manual labor and speeds up highway development.
          </p>
          <div className="rp-badges">
            <span>🚧 Shoulder Widening</span>
            <span>📐 Adjustable Width</span>
            <span>🚜 Tractor Compatible</span>
            <span>🇮🇳 Made for India</span>
          </div>
        </div>
        <div className="rp-hero-img">
          <img src={roadWidener1} alt="Road Widener Equipment" />
        </div>
      </section>

      <section className="rp-about">
        <div className="rp-about-inner">
          <div className="rp-about-text">
            <div className="rp-section-tag">ABOUT THE EQUIPMENT</div>
            <h2>Engineered for Fast &amp; Accurate<span> Road Shoulder Work.</span></h2>
            <p>
              The Road Widener is designed to lay and spread gravel, aggregate, asphalt, and soil efficiently
              along road shoulders and widening trenches. It drastically reduces manual labor, eliminates material wastage,
              and significantly accelerates road widening projects.
            </p>
            <p>
              Built with heavy-duty structural steel and precision flow control, it provides adjustable laying width
              and depth control to meet the rigorous quality standards of national and state highway engineering.
            </p>
          </div>
          <div className="rp-features">
            <div className="rp-feature-card">
              <span className="rp-feat-icon">📐</span>
              <div><strong>Adjustable Width &amp; Depth</strong><small>Precise material placement control</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🚜</span>
              <div><strong>Tractor / Loader Hitch</strong><small>Seamless attachment &amp; smooth towing</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">🏗️</span>
              <div><strong>Heavy Duty Build</strong><small>Built for aggregate, gravel &amp; asphalt</small></div>
            </div>
            <div className="rp-feature-card">
              <span className="rp-feat-icon">⚡</span>
              <div><strong>Labor &amp; Time Saving</strong><small>Covers long road stretches in single day</small></div>
            </div>
          </div>
        </div>
      </section>

      <section className="rp-gallery-section">
        <div className="rp-section-heading">
          <div className="rp-section-tag">PHOTO GALLERY</div>
          <h2>See the Machine<span> in Action</span></h2>
          <p>Click any photo to view full size ({roadWidenerImages.length} photos)</p>
        </div>
        <div className="rp-gallery">
          {roadWidenerImages.map((img, i) => (
            <div className="rp-gallery-item" key={i} onClick={() => setLightbox(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="rp-gallery-overlay"><span>🔍 View</span></div>
            </div>
          ))}
        </div>
      </section>

      <section id="rp-contact" className="rp-contact">
        <div className="rp-contact-inner">
          <div className="rp-section-tag">GET IN TOUCH</div>
          <h2>Interested in the<span> Road Widener?</span></h2>
          <p>Contact us today for pricing, technical details, or a live demo.</p>
          <div className="rp-contact-btns">
            <a href="tel:9925051462" className="rp-btn-primary">📞 Call Now</a>
            <a href="https://wa.me/919925051462" target="_blank" rel="noreferrer" className="rp-btn-whatsapp">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="rp-footer">
        <button className="rp-back-footer" onClick={onBack}>← Back to Main Site</button>
        <p>© {new Date().getFullYear()} Shree Vishwakarma Agricultural &amp; Road Equipment</p>
      </footer>

      {lightbox !== null && (
        <div className="rp-lightbox" onClick={closeLightbox}>
          <button className="rp-lb-close" onClick={closeLightbox}>✕</button>
          <button className="rp-lb-prev" onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! - 1 + roadWidenerImages.length) % roadWidenerImages.length); }}>‹</button>
          <img src={roadWidenerImages[lightbox].src} alt={roadWidenerImages[lightbox].alt} onClick={(e) => e.stopPropagation()} />
          <button className="rp-lb-next" onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p! + 1) % roadWidenerImages.length); }}>›</button>
          <p className="rp-lb-counter">{lightbox + 1} / {roadWidenerImages.length}</p>
        </div>
      )}
    </div>
  );
}

/* ================= MAIN APP ================= */
function App() {

  const [activeSection, setActiveSection] = useState("home");
  const [showReaper, setShowReaper] = useState(false);
  const [showChaffCutter, setShowChaffCutter] = useState(false);
  const [showSeedDrill, setShowSeedDrill] = useState(false);
  const [showBlower, setShowBlower] = useState(false);
  const [showRoadCleaner, setShowRoadCleaner] = useState(false);
  const [showRoadWidener, setShowRoadWidener] = useState(false);

  const [stats, setStats] = useState({
    categories: 0,
    customers: 0,
    support: 0,
  });

  /* ACTIVE NAVBAR CODE - START */

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "agriculture",
        "road",
        "subsidy",
        "about",
        "why",
        "contact"
      ];

      let current = "home";

      sections.forEach((id) => {

        const section = document.getElementById(id);

        if (section) {

          const top = section.offsetTop - 150;

          if (window.scrollY >= top) {
            current = id;
          }

        }

      });

      setActiveSection(current);

    };


    window.addEventListener("scroll", handleScroll);

    handleScroll();


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  /* ACTIVE NAVBAR CODE - END */

  useEffect(() => {
    const duration = 1600;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);

      setStats({
        categories: Math.floor(progress * 6),
        customers: Math.floor(progress * 100),
        support: Math.floor(progress * 24),
      });

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const goBack = (section = "agriculture") => {
    setShowReaper(false);
    setShowChaffCutter(false);
    setShowSeedDrill(false);
    setShowBlower(false);
    setShowRoadCleaner(false);
    setShowRoadWidener(false);
    setTimeout(() => { document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }); }, 100);
  };

  if (showReaper) return <ReaperPage onBack={() => goBack("agriculture")} />;
  if (showChaffCutter) return <ChaffCutterPage onBack={() => goBack("agriculture")} />;
  if (showSeedDrill) return <SeedDrillPage onBack={() => goBack("agriculture")} />;
  if (showBlower) return <BlowerPage onBack={() => goBack("agriculture")} />;
  if (showRoadCleaner) return <RoadCleanerPage onBack={() => goBack("road")} />;
  if (showRoadWidener) return <RoadWidenerPage onBack={() => goBack("road")} />;

  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}
      <header className="navbar">
        <div className="nav-inner">

          <nav className="nav-links">

            <a href="#home" className={activeSection === "home" ? "active" : ""}>
              Home
            </a>

            <a href="#agriculture" className={activeSection === "agriculture" ? "active" : ""}>
              🌾 Agriculture
            </a>

            <a href="#road" className={activeSection === "road" ? "active" : ""}>
              🚧 Road Equipment
            </a>

            <a href="#subsidy" className={activeSection === "subsidy" ? "active" : ""}>
              🏛️ Subsidy
            </a>

            <a href="#about" className={activeSection === "about" ? "active" : ""}>
              About Us
            </a>

            <a href="#why" className={activeSection === "why" ? "active" : ""}>
              Why Us
            </a>

            <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
              Contact
            </a>

          </nav>
          <a href="#contact" className="nav-contact">
            <span>Let's Talk</span>
            <b>→</b>
          </a>

          <div className="brand">
            <div className="brand-logo">🌾</div>
            <div>
              <strong>Shree Vishwakarma</strong>
              <small>Agricultural & Road Equipment</small>
            </div>
          </div>

        </div>
      </header>


      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <div className="hero-left">

            <div className="eyebrow">
              <span>🌾</span>
              TRUSTED EQUIPMENT PARTNER
            </div>

            <h1>
              Powerful Machines.
              <span> Better Farming.</span>
            </h1>

            <p className="hero-description">
              Reliable agricultural and road equipment built to make
              farming, harvesting and infrastructure work easier,
              faster and more productive.
            </p>

            <div className="hero-buttons">
              <a href="#agriculture" className="btn btn-primary">
                Explore Machines →
              </a>

              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            <div className="hero-mini-info">
              <span>✓ Quality Equipment</span>
              <span>✓ Farmer Focused</span>
              <span>✓ Made for India</span>
            </div>

          </div>


          <div className="hero-right">

            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85"
                alt="Modern agriculture"
              />

              <div className="image-card">
                <div className="image-card-icon">🚜</div>
                <div>
                  <strong>Modern Farming</strong>
                  <span>Better agricultural solutions</span>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* ================= HERO HIGHLIGHTS ================= */}
        <div className="hero-highlights">

          <div className="highlight-card highlight-green">
            <div className="highlight-icon">⚙️</div>
            <div>
              <strong>{stats.categories}+</strong>
              <span>Equipment Categories</span>
            </div>
          </div>

          <div className="highlight-card highlight-green">
            <div className="highlight-icon">✓</div>
            <div>
              <strong>100%</strong>
              <span>Quality Focused</span>
            </div>
          </div>

          <div className="highlight-card highlight-green">
            <div className="highlight-icon">🇮🇳</div>
            <div>
              <strong>INDIA</strong>
              <span>Made for Indian Requirements</span>
            </div>
          </div>

        </div>

      </section>


      {/* ================= WHAT WE DO ================= */}
      <section className="section what-section">

        <div className="section-heading">
          <div className="section-tag">WHAT WE DO</div>

          <h2>
            Equipment that works
            <span> as hard as you do.</span>
          </h2>

          <p>
            From agriculture to infrastructure, we provide practical
            equipment and support for demanding working environments.
          </p>
        </div>

        <div className="what-grid">

          {whatWeDo.map((item, index) => (
            <div className="what-card" key={index}>

              <div className="card-top">
                <div className="big-icon">{item.icon}</div>
                <span className="card-number">
                  0{index + 1}
                </span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <a href="#contact">
                Learn More <span>→</span>
              </a>

            </div>
          ))}

        </div>

      </section>


      {/* ================= AGRICULTURE ================= */}
      <section id="agriculture" className="section equipment-section agriculture-section">

        <div className="section-heading equipment-heading">

          <div className="section-tag green-tag">
            🌾 AGRICULTURE EQUIPMENT
          </div>

          <div className="heading-row">
            <h2>
              Machines Built for
              <span> Modern Farming</span>
            </h2>

            <p>
              Reliable agricultural machinery developed to improve
              productivity and reduce manual effort.
            </p>
          </div>

        </div>


        <div className="machine-grid">

          {agricultureMachines.map((machine, index) => (
            <div className="machine-card" key={machine.title}>

              <div className="machine-number">
                0{index + 1}
              </div>

              <div className="machine-icon">
                {machine.icon}
              </div>

              <div className="machine-category">
                AGRICULTURE
              </div>

              <h3>{machine.title}</h3>

              <p>{machine.text}</p>

              {machine.title === "Reaper" ? (
                <button className="machine-view-btn" onClick={() => setShowReaper(true)}>View Reaper <span>→</span></button>
              ) : machine.title === "Chaff Cutter" ? (
                <button className="machine-view-btn" onClick={() => setShowChaffCutter(true)}>View Chaff Cutter <span>→</span></button>
              ) : machine.title === "Seed Drill" ? (
                <button className="machine-view-btn" onClick={() => setShowSeedDrill(true)}>View Seed Drill <span>→</span></button>
              ) : machine.title === "Blower" ? (
                <button className="machine-view-btn" onClick={() => setShowBlower(true)}>View Blower <span>→</span></button>
              ) : (
                <a href="#contact">Enquire Now <span>→</span></a>
              )}

            </div>
          ))}

        </div>

      </section>


      {/* ================= ROAD ================= */}
      <section id="road" className="section equipment-section road-section">

        <div className="section-heading equipment-heading">

          <div className="section-tag orange-tag">
            🚧 ROAD EQUIPMENT
          </div>

          <div className="heading-row">
            <h2>
              Equipment for
              <span> Better Roads</span>
            </h2>

            <p>
              Professional equipment for road cleaning,
              widening and infrastructure maintenance.
            </p>
          </div>

        </div>


        <div className="machine-grid road-grid">

          {roadMachines.map((machine, index) => (
            <div className="machine-card road-card" key={machine.title}>

              <div className="machine-number">
                0{index + 1}
              </div>

              <div className="machine-icon">
                {machine.icon}
              </div>

              <div className="machine-category">
                ROAD EQUIPMENT
              </div>

              <h3>{machine.title}</h3>

              <p>{machine.text}</p>

              {machine.title === "Road Cleaner" ? (
                <button className="machine-view-btn" onClick={() => setShowRoadCleaner(true)}>View Road Cleaner <span>→</span></button>
              ) : machine.title === "Road Widener" ? (
                <button className="machine-view-btn" onClick={() => setShowRoadWidener(true)}>View Road Widener <span>→</span></button>
              ) : (
                <a href="#contact">View Equipment <span>→</span></a>
              )}

            </div>
          ))}

        </div>

      </section>


      {/* ================= STATISTICS ================= */}
      <section className="stats-section">

        <div className="stats-heading">
          <span>OUR PERFORMANCE</span>
          <h2>Our Impact in Numbers</h2>
          <p>
            Trusted equipment, quality service and dependable support.
          </p>
        </div>

        <div className="stats-inner">

          <div className="stat">
            <strong>{stats.categories}+</strong>
            <span>Equipment Categories</span>
          </div>

          <div className="stat">
            <strong>1000+</strong>
            <span>Happy Customers</span>
          </div>

          <div className="stat">
            <strong>24/7</strong>
            <span>Customer Assistance</span>
          </div>

          <div className="stat">
            <strong>100%</strong>
            <span>Quality Focused</span>
          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section id="why" className="section why-section">

        <div className="section-heading">

          <div className="section-tag">
            WHY CHOOSE US
          </div>

          <h2>
            Built around
            <span> your needs.</span>
          </h2>

          <p>
            We believe good equipment should be dependable,
            practical and supported by people who understand your work.
          </p>

        </div>


        <div className="why-grid">

          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {reason.icon}
              </div>

              <div className="why-number">
                0{index + 1}
              </div>

              <h3>{reason.title}</h3>
              <p>{reason.text}</p>

            </div>
          ))}

        </div>

      </section>


      {/* ================= SUBSIDY ================= */}
      <section id="subsidy" className="subsidy-section">

        <div className="subsidy-content">

          <div className="subsidy-icon">🏛️</div>

          <div>
            <div className="section-tag subsidy-tag">
              GOVERNMENT SUPPORT
            </div>

            <h2>
              Government Subsidy
              <span> Assistance</span>
            </h2>

            <p>
              Eligible agricultural machinery may qualify for government
              subsidy schemes. Contact us to understand the available
              options and documentation process.
            </p>
          </div>

          <a href="#contact" className="subsidy-button">
            Ask About Subsidy →
          </a>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=85"
            alt="Agricultural field"
          />

          <div className="about-badge">
            🇮🇳
            <strong>Made for India</strong>
          </div>
        </div>

        <div className="about-content">

          <div className="section-tag">ABOUT US</div>

          <h2>
            Helping businesses and farmers
            <span> work better.</span>
          </h2>

          <p>
            Shree Vishwakarma Agricultural & Road Equipment provides
            practical machinery solutions for agriculture and road
            infrastructure requirements.
          </p>

          <p>
            Our focus is simple — dependable equipment, honest guidance
            and customer support that continues after the purchase.
          </p>

          <div className="about-points">
            <span>✓ Quality Focused</span>
            <span>✓ Practical Solutions</span>
            <span>✓ Customer Support</span>
            <span>✓ Indian Requirements</span>
          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section">

        <div className="contact-heading">

          <div className="section-tag contact-tag">
            CONTACT US
          </div>

          <h2>
            Let's find the right
            <span> machine for you.</span>
          </h2>

          <p>
            Have a machine requirement or want to know more about
            subsidy assistance? Get in touch with us.
          </p>

        </div>


        <div className="contact-grid">

          {/* PHONE 1 */}
          <a href={`tel:${phone1}`} className="contact-card">
            <div className="contact-icon">📞</div>
            <span>CALL US</span>
            <strong>{phone1}</strong>
            <small>Tap to call</small>
          </a>


          {/* PHONE 2 */}
          <a href={`tel:${phone2}`} className="contact-card">
            <div className="contact-icon">📱</div>
            <span>CALL US</span>
            <strong>{phone2}</strong>
            <small>Tap to call</small>
          </a>


          {/* WHATSAPP */}
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="contact-card whatsapp-card"
          >
            <div className="contact-icon">💬</div>
            <span>WHATSAPP</span>
            <strong>Chat With Us</strong>
            <small>Quick enquiry</small>
          </a>


          {/* EMAIL */}
          <a
            href={`mailto:${email}`}
            className="contact-card"
          >
            <div className="contact-icon">✉️</div>
            <span>EMAIL</span>
            <strong>Email Us</strong>
            <small>{email}</small>
          </a>


          {/* INSTAGRAM */}
          <a
            href={instagram}
            target="_blank"
            rel="noreferrer"
            className="contact-card instagram-card"
          >
            <div className="contact-icon">📸</div>
            <span>INSTAGRAM</span>
            <strong>Follow Us</strong>
            <small>@shreevishwakarmaagri</small>
          </a>

        </div>


        <div className="address-box">

          <div className="address-icon">📍</div>

          <div>
            <span>OUR LOCATION</span>

            <strong>
              Shree Vishwakarma Agriculture Repairing Works,
              Vijaynagar NH:58, Kadiyadra,
              Gujarat - 383440, India
            </strong>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Shree%20Vishwakarma%20Agriculture%20Repairing%20Works%2C%20Vijaynagar%20NH%2058%2C%20Kadiyadra%2C%20Gujarat%20383440"
            target="_blank"
            rel="noreferrer"
          >
            Open Maps →
          </a>

        </div>


      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-brand">
          <div className="brand-logo">🌾</div>
          <div>
            <strong>Shree Vishwakarma</strong>
            <span>Agricultural & Road Equipment</span>
          </div>
        </div>

        <p>
          Reliable equipment for agriculture and infrastructure.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#agriculture">Agriculture</a>
          <a href="#road">Road Equipment</a>
          <a href="#subsidy">Subsidy</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Shree Vishwakarma Agricultural & Road Equipment.
          All rights reserved.
        </div>

      </footer>


      {/* ================= FLOATING BUTTONS ================= */}
      <div className="floating-buttons">

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="float whatsapp"
          title="WhatsApp"
        >
          💬
        </a>

        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="float instagram"
          title="Instagram"
        >
          📸
        </a>

        <a
          href={`tel:${phone1}`}
          className="float call"
          title="Call"
        >
          📞
        </a>

      </div>

    </div>
  );
}

export default App;