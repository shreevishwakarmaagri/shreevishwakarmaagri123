import { useEffect, useState, useCallback } from "react";
import reaper1 from "./assets/reaper/reaper_1.JPG";
import reaper2 from "./assets/reaper/reaper_2.jpg";
import reaper3 from "./assets/reaper/reaper_3.JPG";
import reaper4 from "./assets/reaper/reaper_4.JPG";
import reaper5 from "./assets/reaper/reaper_5.jpg";
import reaper6 from "./assets/reaper/reaper_6.png";
import reaper7 from "./assets/reaper/reaper_7.png";
import reaper8 from "./assets/reaper/reaper_8.png";
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
        if (e.key === "ArrowLeft")  setLightbox((p) => (p! - 1 + reaperImages.length) % reaperImages.length);
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

/* ================= MAIN APP ================= */
function App() {

  const [activeSection, setActiveSection] = useState("home");
  const [showReaper, setShowReaper] = useState(false);

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

  if (showReaper) {
    return <ReaperPage onBack={() => { setShowReaper(false); setTimeout(() => { document.getElementById("agriculture")?.scrollIntoView({ behavior: "smooth" }); }, 100); }} />;
  }

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
                <button className="machine-view-btn" onClick={() => setShowReaper(true)}>
                  View Reaper <span>→</span>
                </button>
              ) : (
                <a href="#contact">
                  Enquire Now <span>→</span>
                </a>
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

              <a href="#contact">
                View Equipment <span>→</span>
              </a>

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