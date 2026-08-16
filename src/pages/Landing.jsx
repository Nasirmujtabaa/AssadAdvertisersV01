import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  Search,
  Megaphone,
  Palette,
  Clapperboard,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";import { Counter, TiltCard, Parallax } from "@/components/effects";
import {
  CaseStudyChart,
  CommercialsSection,
  ReelsSection,
  PhotographySection,
} from "@/components/sections/ShowcaseSections";

const LOGO_URL = "/assadlogo.PNG";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
 

  { label: "About", href: "#about" },
];

const SERVICES = [
  {
    id: "01",
    title: "Digital Advertising",
    icon: Search,
    desc:
      "Specializes in Facebook Ads, Google Ads, Instagram Ads, and Snapchat Ads.",
    tags: ["Instagram", "Meta Ads", "Content Calendar", "Influencer"],
  },
  {
    id: "02",
    title: "Traditional Advertising",
    icon: Megaphone,
    desc:
      "Offers outdoor, TV, and radio advertising solutions.",
    tags: ["Newspaper", "News Channel"],
  },
  {
    id: "03",
    title: "Branding",
    icon: Palette,
    desc:
      "Provides strategies to build a strong and recognizable brand identity in this crowded market.",
    tags: ["Logo", "Identity", "Guidelines", "Print"],
  },
  {
    id: "04",
    title: "Multimedia & Video",
    icon: Clapperboard,
    desc:
      "Cinematic ad films, product shoots, motion graphics and explainer videos shot and edited in-house with cinema grade gear.",
    tags: ["Ad Films", "Product Shoots", "Motion Graphics", "Reels"],
  },
];

const PROCESS = [
  { n: "01", title: "Discovery", desc: "We sit down with you to deeply understand your brand, audience and ambitions before a single pixel moves." },
  { n: "02", title: "Strategy",  desc: "A clear, channel by channel roadmap , what we will say, where, when, and how we will measure success." },
  { n: "03", title: "Create",    desc: "Designers, copywriters, videographers and ad specialists collaborate to produce work that stops the scroll." },
  { n: "04", title: "Scale",     desc: "We launch, learn and optimise weekly turning data into compounding growth for your business." },
];

const WORK = [
  {
    title: "Qaswa Foods",
    tags: ["Video Ad", "SEO Optimisation", "News Ads"],
    img: "/imgc.png",
    position: "5%",
    desc: "Got a production Level TVC (Television Commercial) up and Running and telecasted it over multiple major News channels across J&K",
  },
  {
    title: "Badshah Foods",
    tags: ["Social Media", "Reels", "Photography"],
    img: "/imga.jpg",
    position: "50%",
    desc: "Got a cinematic short film and Creative Reels filmed for the Brand, and ran SEO optimised ads over Meta and Google ads",
  },
  {
    title: "Asawir Jewellers",
    tags: ["Video", "Newspaper", "Advertisements"],
    img: "/imgf.png",
    position: "70%",
    desc: "A 5 minute Informational video was filmed for the brand about a German gold testing machine, and got an Ad posted in a leading newspaper.",
  },
];

const STATS = [
  { n: 30,      suffix: "+",   label: "Brands shaped" },
  { n: 7,        suffix: " yrs", label: "In the game" },
  { n: 4700000, suffix: "+",   label: "Impressions delivered" },
  { n: 50,       suffix: "★",   label: "Avg. client rating", divide: 10 },
];

const MARQUEE_WORDS = [
  "SEO", "Branding", "Social Media", "Ad Films", "Photography",
  "Web Design", "Content", "Paid Ads", "Reels", "Motion Graphics",
];

/* Reveal variants */
const reveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show:   { opacity: 1, y: 0,  filter: "blur(0px)", transition: { duration: 0.8, ease: [0.2, 0.7, 0.3, 1] } },
};
const stagger = { show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

const Landing = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeWork, setActiveWork] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

return (
  <div>
 {/* NAVBAR */}
<header
  data-testid="navbar"
  className={`fixed top-0 left-0 right-0 z-[9999] h-16 transition-all duration-500
  backdrop-blur-2xl bg-[var(--aa-bg-dark)]/80
  `}
>
  <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between relative">

  {/* LOGO */}
  <a
    href="#home"
    data-testid="nav-logo"
    className="flex items-center gap-1 group"
  >
    <div className="w-10 h-10 flex items-center justify-center">
      <img
        src="/assadlogo.PNG"
        alt="Assad Advertisers"
        className="w-9 h-9 object-contain"
      />
    </div>

    <span className="hidden sm:block font-semibold tracking-tight text-[15px]">
      Assad Advertisers
    </span>
  </a>

  {/* DESKTOP NAV */}
  <nav className="hidden md:flex items-center gap-9">
    {NAV.map((n) => (
      <a
        key={n.label}
        href={n.href}
        data-testid={`nav-link-${n.label.toLowerCase()}`}
        className="aa-nav-link text-sm"
      >
        {n.label}
      </a>
    ))}
  </nav>

  {/* DESKTOP CONTACT */}
  <a
    href="#contact"
    data-testid="nav-contact-btn"
    className="aa-acc-pill nav-contact-btn text-sm flex items-center gap-2"
  >
    Contact Us <ArrowUpRight size={16} />
  </a>

  {/* MOBILE MENU BUTTON */}
  <button
    type="button"
    className="mobile-menu-button"
    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
    aria-expanded={mobileMenuOpen}
    onClick={() => setMobileMenuOpen((prev) => !prev)}
  >
    <span className={mobileMenuOpen ? "line line-1 open" : "line line-1"} />
    <span className={mobileMenuOpen ? "line line-2 open" : "line line-2"} />
    <span className={mobileMenuOpen ? "line line-3 open" : "line line-3"} />
  </button>
</div>

<AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.22 }}
      className="mobile-menu-panel"
    >
      {NAV.map((n) => (
        <a
          key={n.label}
          href={n.href}
          className="mobile-menu-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          {n.label}
          <ArrowUpRight size={15} />
        </a>
      ))}

      {/* CONTACT US INSIDE MOBILE MENU */}
      <a
        href="#contact"
        className="mobile-menu-contact"
        onClick={() => setMobileMenuOpen(false)}
      >
        Contact Us
        <ArrowUpRight size={15} />
      </a>
    </motion.div>
  )}
</AnimatePresence>

</header>

      {/* HERO */}
      <section
        id="home"
        ref={heroRef}
        data-testid="hero-section"
        className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 aa-grid-bg overflow-hidden"
      >
        {/* Floating blobs */}
        <div className="aa-blob aa-blob-1" style={{ width: 520, height: 520, top: "-160px", left: "-120px", background: "radial-gradient(circle, #1a3f37 0%, transparent 70%)" }} />
        <div className="aa-blob aa-blob-2" style={{ width: 460, height: 460, top: "20%",   right: "-160px", background: "radial-gradient(circle, #2a3a55 0%, transparent 70%)" }} />
        <div className="aa-blob aa-blob-3" style={{ width: 600, height: 600, bottom: "-260px", left: "30%", background: "radial-gradient(circle, #3a2a3f 0%, transparent 70%)" }} />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={reveal} className="flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase aa-muted mb-8">
              <span className="aa-star" />
              <span>Build Your Audience</span>
              <span className="aa-star" />
            </motion.div>

            <h1 className="aa-display text-center text-[42px] sm:text-[58px] lg:text-[76px]">
  <motion.span variants={reveal} className="block">
    <span className="text-[var(--aa-accent)]" data-cursor="grow">
  <span
    className="bg-cover bg-center bg-clip-text text-transparent inline-block"
    style={{
      backgroundImage: "url('/mountains.jpg')",
    }}
  >
    Assad
  </span>
  
</span>{" "}
    <span
    className="bg-cover bg-[position:45%_-133%] bg-clip-text text-transparent inline-block"
    style={{
      backgroundImage: "url('/mountains.jpg')",
    }}
  >
    Advertisers
  </span>
  
  </motion.span>

 <motion.span
  variants={reveal}
  className="block mt-3 text-[28px] sm:text-[38px] lg:text-[48px]"
>
  <span

  >
    Srinagar     
  </span>{" "}
   Based
</motion.span>

  <motion.span variants={reveal} className="block text-[32px] sm:text-[42px] lg:text-[52px]">
    Marketing Company
    <span className="aa-cursor text-[var(--aa-accent)]">.</span>
  </motion.span>
</h1>

            <motion.p variants={reveal} className="aa-body max-w-2xl mx-auto text-center mt-10 text-base sm:text-lg aa-soft">
              Assad Advertisers is a leading advertising and digital marketing agency based in Srinagar, 
              offering a wide range of services to help businesses grow and succeed. Known for its creative and data-driven approach, the agency provides solutions in digital campaigns, traditional media, branding, and more.
            </motion.p>

            <motion.div variants={reveal} className="mt-10 flex items-center justify-center gap-4">
              <a href="#services" data-testid="hero-cta-services" className="aa-acc-pill flex items-center gap-2 text-sm">
                Explore Services <ArrowRight size={16} />
              </a>
              <a href="#work" data-testid="hero-cta-work" className="aa-outline-pill flex items-center gap-2 text-sm">
                See Our Work
              </a>
            </motion.div>
          </motion.div>

          {/* Interactive tilted polaroid showcase with parallax */}
<Parallax
  speed={0.08}
  className="hero-polaroids relative mt-24 h-[260px] sm:h-[320px] lg:h-[360px]"
>
  {[
    { src: "/imgb.jpg", rot: 6, x: "10%", delay: 0.6 },
    { src: "/img2.jpg", rot: -13, x: "30%", delay: 0.6 },
    { src: "/img1.png", rot: 6, x: "50%", delay: 0.6 },
    { src: "/img4.png", rot: -8, x: "70%", delay: 0.6 },
  ].map((c, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: c.delay,
        type: "spring",
        stiffness: 60,
      }}
      className="hero-polaroid aa-tilt-wrap absolute top-0 w-[160px] sm:w-[200px] lg:w-[240px] h-[200px] sm:h-[260px] lg:h-[320px]"
      style={{
        left: c.x,
        transform: "translateX(-50%)",
      }}
      data-cursor="grow"
    >
                <TiltCard
                  max={60}
                  className="aa-tilt-card aa-img-zoom w-full h-full overflow-hidden"
                  style={{ baseTransform: `rotate(${c.rot}deg)` }}
                >
                  <img src={c.src} alt="" className="w-full h-full object-cover" />
                </TiltCard>
              </motion.div>
            ))}
          </Parallax>
        </div>
      </section>

      {/* BOLD THINKERS BAND */}
      <section className="bg-[var(--aa-bg-light)] py-24 relative overflow-hidden">
        <div className="aa-blob aa-blob-2" style={{ width: 460, height: 460, top: "10%", left: "-200px", background: "radial-gradient(circle, #1d3833 0%, transparent 70%)", opacity: 0.18 }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.h2 variants={reveal} className="aa-display text-4xl sm:text-5xl lg:text-6xl">
              Bold thinkers<br />
              <span>Outsized work</span>
            </motion.h2>
            <motion.p variants={reveal} className="aa-body text-lg aa-soft mt-2 max-w-xl">
              With a focus on both online and offline marketing, Assad Advertisers delivers customized campaigns designed to maximize return on investment. The agency has built a strong reputation for its creative excellence and ability to create impactful advertising experiences.
            </motion.p>
          </motion.div>

          {/* Stats with counters */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                data-testid={`stat-${i}`}
                className="border-t border-[var(--aa-line)] pt-6"
              >
                <div className="aa-display text-4xl sm:text-5xl">
                  {s.divide ? (
                    <CounterFloat value={s.n} divide={s.divide} suffix={s.suffix} />
                  ) : (
                    <Counter value={s.n} suffix={s.suffix} />
                  )}
                </div>
                <div className="aa-body text-sm aa-muted mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Marquee */}
          <div className="mt-24 border-y border-[var(--aa-line)] overflow-hidden">
            <div className="aa-marquee py-6">
              {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
                <span key={i} className="aa-display text-4xl sm:text-6xl mx-8 flex items-center gap-8">
                  {w}
                  <span className="w-3 h-3 rounded-full bg-[var(--aa-accent)]" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" data-testid="services-section" className="bg-[var(--aa-bg-dark)] aa-grid-bg pb-24 relative">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 flex relative">
          <div className="hidden lg:flex"><div className="aa-side-tag">WHAT WE DO ...</div></div>
          <div className="flex-1 lg:pl-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
              <motion.h2 variants={reveal} className="aa-display text-4xl sm:text-5xl lg:text-6xl">
                Our <span className="aa-acc-box" data-cursor="grow">Services</span>
              </motion.h2>
              <motion.p variants={reveal} className="aa-body mt-6 aa-soft max-w-md">
                A full multimedia marketing toolkit, tailored for businesses ready to grow online and offline.
              </motion.p>
            </motion.div>

            <div className="mt-12 grid lg:grid-cols-12 gap-8">
              {/* Service list */}
              <div className="lg:col-span-5 space-y-4">
                {SERVICES.map((s, i) => (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    data-testid={`service-tile-${s.id}`}
                    onClick={() => setActiveService(i)}
                    className={`aa-service-tile ${activeService === i ? "active" : ""}`}
                    data-cursor="grow"
                  >
                    <div className="flex items-center gap-6">
                      <span className="aa-num aa-display text-lg">{s.id}</span>
                      <span className="font-medium text-base sm:text-lg">{s.title}</span>
                    </div>
                    <ArrowRight size={18} />
                  </motion.div>
                ))}
              </div>

              {/* Service detail preview */}
              <div className="lg:col-span-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0 }}
animate={{ opacity: 1 }}

transition={{ duration: 0.15 }}
                    className="aa-card h-full aa-glass-card"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.055] border border-white/20 flex items-center justify-center text-white mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_25px_rgba(0,0,0,0.2)]">
                      {(() => { const Icon = SERVICES[activeService].icon; return <Icon size={24} />; })()}
                    </div>
                    <h3 className="aa-display text-3xl mb-4">{SERVICES[activeService].title}</h3>
                    <p className="aa-body aa-soft leading-relaxed">{SERVICES[activeService].desc}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {SERVICES[activeService].tags.map((t) => (
                        <span key={t} className="text-xs tracking-wider uppercase border border-[var(--aa-line-strong)] rounded-full px-3 py-1 aa-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Side CTAs */}
              <div className="lg:col-span-2 service-ctas">
                <a href="#process" data-testid="services-cta-process" className="aa-card flex flex-col justify-between min-h-[170px]">
                  <span className="aa-body text-sm leading-snug aa-soft">Curious how the magic happens?</span>
                  <span className="flex items-center justify-between mt-4 text-sm font-semibold">See process <ArrowUpRight size={18} /></span>
                </a>
                <a
  href="#contact"
  data-testid="services-cta-contact"
  className="aa-service-cta rounded-3xl p-7 flex flex-col justify-between min-h-[170px]"
>
  <span className="aa-body text-sm leading-snug font-medium">
    Looking to grow your audience?
  </span>

  <span className="flex items-center justify-between mt-4 text-sm font-semibold">
    Talk to us <ArrowUpRight size={18} />
  </span>
</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" data-testid="process-section" className="relative bg-[var(--aa-bg-light)] aa-grid-bg-lg py-28 overflow-hidden">
        <div className="aa-blob aa-blob-3" style={{ width: 540, height: 540, top: "30%", right: "-200px", background: "radial-gradient(circle, #18342d 0%, transparent 70%)", opacity: 0.22 }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="text-center">
            <motion.div variants={reveal} className="flex justify-center mb-4">
              <Sparkles className="text-[var(--aa-accent)]" size={20} />
            </motion.div>
           <motion.h2
  variants={reveal}
  className="aa-display font-bold text-4xl sm:text-5xl lg:text-6xl"
>
  How Our Process {" "}
  Works
</motion.h2>

<motion.p
  variants={reveal}
  className="aa-body max-w-xl mx-auto mt-6 aa-soft"
>
  From strategy and planning to creative production and marketing, our process is
  designed to turn ideas into measurable growth.
</motion.p>
          </motion.div>
<div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          
  {PROCESS.map((p, i) => (
    <div key={p.n} className="relative">

      {/* Creative flow connector */}
{i < PROCESS.length - 1 && (
  <div className="hidden lg:flex aa-process-connector">
    <div className="aa-process-dots" />
    <div className="aa-process-arrow">
      <ArrowRight size={17} />
    </div>
  </div>
)}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.08 }}
        data-testid={`process-card-${i}`}
        className="aa-process-card"
      >
        <div className="flex items-center justify-between">
          <span className="aa-display text-3xl text-white/30">
            {p.n}
          </span>

          <span className="w-2 h-2 rounded-full bg-white/50" />
        </div>

        <h4 className="aa-display text-xl mt-6">
          {p.title}
        </h4>

        <p className="aa-body text-sm aa-soft mt-2 leading-relaxed">
          {p.desc}
        </p>
      </motion.div>

    </div>
  ))}
</div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" data-testid="work-section" className="bg-[var(--aa-bg-dark)] aa-grid-bg py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex relative">
          <div className="hidden lg:flex"><div className="aa-side-tag">PORTFOLIO</div></div>
          <div className="flex-1 lg:pl-10">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger} className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
              <motion.h2 variants={reveal} className="aa-display text-4xl sm:text-5xl lg:text-6xl max-w-2xl">
                Our <span className="aa-acc-box" data-cursor="grow">Best Work</span> of
                <br />Successful Projects
              </motion.h2>
              <motion.a variants={reveal} href="#contact" data-testid="work-see-more" className="aa-outline-pill text-sm">
                See more →
              </motion.a>
            </motion.div>

            <div className="mt-14 grid lg:grid-cols-2 gap-6 items-start">
              <motion.div
                key={`work-img-${activeWork}`}
                initial={{ opacity: 0, scale: 0.97, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl overflow-hidden aspect-[4/5] aa-img-zoom border border-[var(--aa-line)]"
                data-cursor="grow"
              >
                <img
  src={WORK[activeWork].img}
  alt={WORK[activeWork].title}
  className="w-full h-full object-cover"
  style={{
    objectPosition: `${WORK[activeWork].position || "50%"} center`,
  }}
/>
              </motion.div>

              <div className="flex flex-col gap-6">
                {WORK.map((w, i) => (
                  <motion.button
                    key={w.title}
                    initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    data-testid={`work-tile-${i}`}
                    onClick={() => setActiveWork(i)}
                    className={`text-left border rounded-3xl p-6 transition-all duration-500 ${
  activeWork === i
    ? "border-[var(--aa-line-strong)] bg-[var(--aa-surface-2)]"
    : "border-[var(--aa-line)] bg-[var(--aa-surface)]/60 hover:bg-[var(--aa-surface)] hover:border-[var(--aa-line-strong)] hover:-translate-y-1"
}`}
                    data-cursor="grow"
                  >
                    <div className="flex gap-2 mb-3">
                      {w.tags.map((t) => (
                        <span key={t} className="text-[10px] uppercase tracking-widest bg-white/5 rounded-full px-2 py-1 aa-muted">{t}</span>
                      ))}
                    </div>
                    <h3 className="aa-display text-2xl flex items-center gap-2">
                      {w.title}
                     <span className="inline-flex w-7 h-7 rounded-full border border-white/20 text-white/80 items-center justify-center">
  <ArrowUpRight size={14} />
</span>
                    </h3>
                    <p className="aa-body text-sm aa-soft mt-2">{w.desc}</p>
                  </motion.button>
                ))}

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY · COMMERCIALS · REELS · PHOTOGRAPHY */}
      <CaseStudyChart />
      
      
      <PhotographySection />

      {/* CTA BAND */}
      <section id="contact" data-testid="contact-section" className="bg-[var(--aa-bg-light)] aa-grid-bg-lg py-28 relative overflow-hidden">
        <div className="aa-blob aa-blob-1" style={{ width: 700, height: 700, bottom: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, #1f4039 0%, transparent 70%)", opacity: 0.35 }} />
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center relative">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={stagger}>
            <motion.p variants={reveal} className="text-xs tracking-[0.3em] uppercase aa-muted mb-4">
              LET&apos;S BUILD YOUR AUDIENCE
            </motion.p>
            <motion.h2 variants={reveal} className="aa-display text-5xl sm:text-7xl lg:text-8xl">
              Got a <span className="aa-acc-box italic" data-cursor="grow">brief</span>?
              <br />Let&apos;s make it
              <br /><span className="italic font-light aa-soft">unmissable.</span>
            </motion.h2>

            <motion.div variants={reveal} className="mt-12 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <a href="tel:+919622684682" data-testid="contact-phone" className="aa-card flex items-center gap-3 justify-center">
                <Phone size={18} className="text-[var(--aa-accent)]" />
                <span className="text-sm">+91 9622684682</span>
              </a>
              <a href="mailto:hello@assadadvertisers.com" data-testid="contact-email" className="aa-card flex items-center gap-3 justify-center">
                <Mail size={18} className="text-[var(--aa-accent)]" />
                <span className="text-sm">assadadvertisers@hotmail.com</span>
              </a>
              <div data-testid="contact-address" className="aa-card flex items-center gap-3 justify-center">
                <MapPin size={18} className="text-[var(--aa-accent)]" />
                <span className="text-sm">Srinagar, J&amp;K</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="about" data-testid="footer" className="bg-[var(--aa-bg-darker)] border-t border-white/5 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
             <img
  src="/assadlogo.PNG"
  alt="Assad Advertisers"
  className="w-11 h-11 object-contain block"
  style={{
    width: "44px",
    height: "44px",
    display: "block",
    opacity: 1,
  }}
/>
              <span className="aa-display text-xl">Assad Advertisers</span>
            </div>
            <p className="aa-body aa-soft max-w-md">
              A Srinagar based multimedia marketing &amp; SEO studio helping ambitious brands tell
              better stories and reach bigger audiences.
            </p>
            <div className="flex items-center gap-3 mt-6">
  {[
    { icon: Instagram, url: "https://www.instagram.com/assadadvertisers/" },
    
    { icon: Linkedin, url: "https://www.linkedin.com/company/assad-advertisers/" },
    
  ].map(({ icon: Ic, url }, i) => (
    <a
      key={i}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={`footer-social-${i}`}
      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[var(--aa-accent)] hover:text-[#102b25] hover:border-transparent hover:scale-110 transition-all duration-300"
      aria-label={`Social media link ${i + 1}`}
    >
      <Ic size={16} />
    </a>
  ))}
</div>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.25em] aa-muted mb-5">Services</h5>
            <ul className="space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.title}><a href="#services" className="hover:text-[var(--aa-accent)] transition">{s.title}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs uppercase tracking-[0.25em] aa-muted mb-5">Get In Touch</h5>
            <ul className="space-y-3 text-sm aa-soft">
              <li className="flex items-center gap-2"><Phone size={14} /> +91 9622684682</li>
              <li className="flex items-center gap-2"><Mail size={14} /> assadadvertisers@hotmail.com</li>
              <li className="flex items-center gap-2"><MapPin size={14} /> Srinagar, Kashmir, India</li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-3 text-xs aa-muted">
          <span>© {new Date().getFullYear()} Assad Advertisers. All rights reserved.</span>
          <span>Build Your Audience.</span>
        </div>
      </footer>
    </div>
  );
};

/* Float counter — for rating like 4.9 */
const CounterFloat = ({ value, divide, suffix }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / 1600);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(value * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }),
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{(display / divide).toFixed(1)}{suffix}</span>;
};

export default Landing;
