import { motion } from "framer-motion";
import { Phone, MapPin, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import logoPng from "@/assets/magic-food-logo.png";
import heroPoster from "@/assets/hero-burger-poster.png";
import burger from "@/assets/food-burger.jpg";
import tost from "@/assets/food-tost.jpg";
import salad from "@/assets/food-salad.jpg";
import drinks from "@/assets/food-drinks.jpg";

const MENU = [
  {
    category: "Hamburger",
    image: burger,
    items: [
      { name: "Hamburger", price: "140" },
      { name: "Cheeseburger", price: "170" },
      { name: "Hamburger shtëpie", desc: "(veze, kashkavall, djathë)", price: "200" },
      { name: "Magic Burger", desc: "(proshut & kashkavall)", price: "220" },
      { name: "Suxhuk Burger", price: "140" },
      { name: "Qebap", price: "250/270" },
      { name: "Qofte shtëpie", price: "270" },
      { name: "Pljeskavic Sharri", price: "270" },
      { name: "File Pule", price: "170" },
      { name: "File Pule Porcion", price: "190/300" },
      { name: "Hamburger Porcion", price: "160" },
    ],
  },
  {
    category: "Tost",
    image: tost,
    items: [
      { name: "Tost", desc: "(sallam, pule, kashkavall)", price: "100" },
      { name: "Tost Përshut", desc: "(kashkavall)", price: "150" },
    ],
  },
  {
    category: "Sallata",
    image: salad,
    items: [
      { name: "Sallat Shope", price: "120" },
      { name: "Sallat e përzier", price: "120" },
    ],
  },
  {
    category: "Pije",
    image: drinks,
    items: [
      { name: "Coca Cola", price: "60/70" },
      { name: "Fanta", price: "60/70" },
      { name: "Fanta Tropikal", price: "60/70" },
      { name: "Sprite", price: "60/70" },
      { name: "Schweppes", price: "60/70" },
      { name: "Ujë", price: "70" },
      { name: "Ujë me gaze", price: "50" },
      { name: "Ujë Mineral", price: "40/50" },
      { name: "Pepsi", price: "70" },
      { name: "Gazoz", price: "70" },
      { name: "Golden Eagle", price: "70" },
    ],
  },
];

const PHONE_NUMBER = "070-488-300";
const PHONE_TEL = "+38970488300";
const LOCATION = "Kumanovë";
const YELLOW = "#FFB800";
const RED = "#CC0000";
const NAV_BG = "#0a0a0a";

const NAV_ITEMS = [
  { id: "hero", label: "Kreu" },
  { id: "menu", label: "Menuja" },
  { id: "galeria", label: "Galeria" },
  { id: "rreth", label: "Rreth Nesh" },
  { id: "contact", label: "Kontakt" },
];

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [lang, setLang] = useState<"SQ" | "EN">("SQ");

  const scrollTo = (id: string) => {
    setOpen(false);
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/5"
      style={{ background: NAV_BG }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group shrink-0"
          aria-label="Magic Food home"
        >
          <img
            src={logoPng}
            alt="Magic Food"
            className="h-10 w-10 rounded-full object-contain"
          />
          <div
            className="font-condensed font-black text-lg sm:text-xl uppercase tracking-wider leading-none flex gap-1"
          >
            <span className="text-white">MAGIC</span>
            <span style={{ color: YELLOW }}>FOOD</span>
          </div>
        </button>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-condensed font-bold uppercase tracking-[0.15em]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="transition-colors"
              style={{
                color: active === item.id ? YELLOW : "rgba(255,255,255,0.85)",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side: lang switcher + call */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Lang switcher */}
          <div className="hidden sm:flex items-center rounded-full p-1 bg-white/5 border border-white/10 text-[11px] font-condensed font-bold tracking-wider">
            <button
              onClick={() => setLang("SQ")}
              className="px-2.5 py-1 rounded-full transition"
              style={{
                background: lang === "SQ" ? YELLOW : "transparent",
                color: lang === "SQ" ? "#000" : "rgba(255,255,255,0.7)",
              }}
            >
              SQ
            </button>
            <span className="px-1 text-white/30">|</span>
            <button
              onClick={() => setLang("EN")}
              className="px-2.5 py-1 rounded-full transition"
              style={{
                background: lang === "EN" ? YELLOW : "transparent",
                color: lang === "EN" ? "#000" : "rgba(255,255,255,0.7)",
              }}
            >
              EN
            </button>
          </div>

          {/* Call pill */}
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-white text-[12px] sm:text-[13px] font-condensed font-black uppercase tracking-wider"
            style={{
              background: RED,
              boxShadow: "0 6px 18px -4px rgba(204,0,0,0.6)",
            }}
          >
            <Phone className="h-3.5 w-3.5" />
            <span>{PHONE_NUMBER}</span>
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/15 text-white"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-white/10"
          style={{ background: NAV_BG }}
        >
          <div className="flex flex-col px-5 py-3 gap-1 text-sm font-condensed font-bold uppercase tracking-[0.15em]">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-3 active:bg-white/5 rounded"
                style={{ color: active === item.id ? YELLOW : "rgba(255,255,255,0.9)" }}
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-3 sm:hidden">
              <button
                onClick={() => setLang("SQ")}
                className="px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: lang === "SQ" ? YELLOW : "rgba(255,255,255,0.08)",
                  color: lang === "SQ" ? "#000" : "#fff",
                }}
              >
                SQ
              </button>
              <button
                onClick={() => setLang("EN")}
                className="px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: lang === "EN" ? YELLOW : "rgba(255,255,255,0.08)",
                  color: lang === "EN" ? "#000" : "#fff",
                }}
              >
                EN
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const tickerItems = [
    "Hamburger i Freskët",
    "Qebap Tradicional",
    "Magic Burger",
    "Tost i Nxehtë",
    "Porosit: 070-488-300",
    "Good Food · Pure Magic",
  ];
  const tickerLine = tickerItems.join("  🔥  ");

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col"
      style={{ minHeight: "100vh", background: "#000" }}
    >
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${heroPoster})`,
          backgroundSize: "cover",
          backgroundPosition: "right top",
        }}
      />
      {/* Gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Top badges row */}
      <div className="relative z-10 w-full pt-20 sm:pt-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-start justify-between gap-3">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-condensed font-bold uppercase tracking-[0.18em] text-white border border-white/15 backdrop-blur-md"
            style={{ background: "rgba(0,0,0,0.55)" }}
          >
            <span>🔥</span>
            <span>KUMANOVË · USHQIM I SHPEJTË</span>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-condensed font-bold uppercase tracking-[0.18em] text-white border border-white/15 backdrop-blur-md"
            style={{ background: "rgba(0,0,0,0.55)" }}
          >
            <span style={{ color: YELLOW }}>★</span>
            <span>I NXEHTË & I FRESKËT</span>
          </motion.span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center px-4 sm:px-8 py-10 sm:py-14">
        <motion.div
          className="max-w-7xl mx-auto w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="max-w-2xl text-left">
            <h1
              className="font-condensed font-black uppercase leading-[0.92] tracking-tight"
              style={{
                fontSize: "clamp(60px, 10vw, 110px)",
                color: "#fff",
                textShadow: "0 4px 24px rgba(0,0,0,0.7)",
              }}
            >
              GOOD FOOD
            </h1>
            <h1
              className="font-condensed font-black uppercase leading-[0.92] tracking-tight mt-1"
              style={{ fontSize: "clamp(60px, 10vw, 110px)" }}
            >
              <span style={{ color: YELLOW, textShadow: "0 4px 24px rgba(0,0,0,0.6)" }}>
                PURE
              </span>{" "}
              <span style={{ color: RED, textShadow: "0 4px 24px rgba(0,0,0,0.6)" }}>
                MAGIC
              </span>
            </h1>

            {/* Red brush stroke */}
            <div
              className="mt-5"
              style={{
                width: "180px",
                height: "3px",
                background: RED,
                boxShadow: "0 0 10px rgba(204,0,0,0.6)",
              }}
            />

            <p
              className="mt-5 text-white max-w-md leading-relaxed"
              style={{ fontSize: "15px", opacity: 0.8 }}
            >
              I freskët. I lëngshëm. I shijshëm. Bërë posaçërisht për ty.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <motion.a
                href={`tel:${PHONE_TEL}`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] sm:text-sm font-condensed font-black uppercase tracking-wider"
                style={{
                  background: YELLOW,
                  color: "#000",
                  boxShadow: "0 12px 30px -8px rgba(255,184,0,0.55)",
                }}
              >
                <Phone className="h-4 w-4" />
                <span>Porosit · {PHONE_NUMBER}</span>
              </motion.a>

              <motion.button
                type="button"
                onClick={scrollToMenu}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[13px] sm:text-sm font-condensed font-black uppercase tracking-wider text-white border-2 border-white/30 backdrop-blur-sm"
                style={{ background: "rgba(0,0,0,0.35)" }}
              >
                <span>Shiko Menunë</span>
                <span>→</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ticker */}
      <div
        className="relative z-10 w-full overflow-hidden border-t border-white/5"
        style={{ background: "#111", height: "48px" }}
      >
        <div className="flex h-full items-center whitespace-nowrap animate-ticker">
          {[0, 1].map((k) => (
            <div
              key={k}
              className="flex shrink-0 items-center font-condensed font-bold uppercase text-white"
              style={{
                fontSize: "13px",
                letterSpacing: "2px",
                paddingRight: "3rem",
              }}
            >
              {tickerLine}
              <span className="px-6">🔥</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MENU ---------------- */
function MenuCategory({ category, index }: { category: (typeof MENU)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl p-4 sm:p-6"
      style={{
        background: "oklch(0.14 0.04 30 / 0.7)",
        border: "1px solid oklch(0.62 0.23 27 / 0.25)",
        boxShadow: "0 10px 30px -15px oklch(0 0 0 / 0.6)",
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={category.image}
          alt={category.category}
          loading="lazy"
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover shrink-0"
          style={{ boxShadow: "0 0 0 2px oklch(0.75 0.19 55), 0 0 20px oklch(0.62 0.23 27 / 0.5)" }}
        />
        <h3
          className="font-display text-base sm:text-2xl tracking-[0.15em] sm:tracking-[0.2em] uppercase px-3 py-1 rounded-md"
          style={{
            background: "var(--gradient-cta)",
            color: "white",
            boxShadow: "0 4px 12px -2px oklch(0.62 0.23 27 / 0.5)",
          }}
        >
          {category.category}
        </h3>
      </div>

      <ul className="space-y-2">
        {category.items.map((item) => (
          <li key={item.name} className="flex items-baseline gap-2 text-sm sm:text-base">
            <div className="flex-1 min-w-0">
              <span className="text-white/95 font-medium">{item.name}</span>
              {"desc" in item && item.desc && (
                <span className="block text-[11px] text-white/55 italic">{item.desc}</span>
              )}
            </div>
            <span
              className="flex-1 border-b border-dotted opacity-30 self-end mb-1.5"
              style={{ borderColor: "var(--brand-yellow)" }}
            />
            <span
              className="font-display tracking-wider whitespace-nowrap"
              style={{ color: "var(--brand-yellow)" }}
            >
              {item.price}
              <span className="text-[10px] opacity-70 ml-1">den</span>
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function MenuSection() {
  return (
    <section
      id="menu"
      className="relative py-12 sm:py-20 px-3 sm:px-8 scroll-mt-16"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.12 0.04 35) 0%, oklch(0.08 0.02 30) 100%)",
      }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-script text-xl sm:text-2xl mb-1" style={{ color: "var(--brand-orange)" }}>
          Our Delicious
        </p>
        <h2
          className="font-display text-4xl sm:text-7xl tracking-[0.15em] uppercase leading-none"
          style={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(180deg, oklch(0.98 0.05 95), oklch(0.92 0.18 95) 40%, oklch(0.75 0.19 55) 75%, oklch(0.62 0.23 27))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            filter: "drop-shadow(0 4px 20px oklch(0.62 0.23 27 / 0.5))",
          }}
        >
          Menu
        </h2>
        <div className="mx-auto mt-3 h-[2px] w-20" style={{ background: "var(--gradient-gold)" }} />
      </motion.div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4 sm:gap-6">
        {MENU.map((cat, i) => (
          <MenuCategory key={cat.category} category={cat} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA / CONTACT ---------------- */
function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-12 sm:py-14 px-4 scroll-mt-16"
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.4 0.18 35) 0%, oklch(0.12 0.04 30) 70%)",
      }}
    >
      <motion.div
        className="max-w-xl mx-auto text-center flex flex-col items-center gap-4 sm:gap-5 px-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="font-script text-2xl sm:text-3xl" style={{ color: "var(--brand-yellow)" }}>
          I uritur?
        </p>
        <h2 className="font-display text-3xl sm:text-5xl tracking-[0.15em] uppercase text-white leading-tight">
          Porosit Tani
        </h2>

        <motion.a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-xl font-bold text-white"
          style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Phone className="h-5 w-5" />
          <span className="tracking-wider uppercase">Telefono</span>
        </motion.a>

        <a
          href={`tel:${PHONE_TEL}`}
          className="text-base sm:text-base font-bold tracking-[0.25em] sm:tracking-[0.3em] underline-offset-4 hover:underline"
          style={{ color: "var(--brand-yellow)" }}
        >
          {PHONE_NUMBER}
        </a>

        <div className="flex items-center gap-2 text-white/80 text-sm">
          <MapPin className="h-4 w-4" style={{ color: "var(--brand-orange)" }} />
          <span className="uppercase tracking-[0.2em]">{LOCATION}</span>
        </div>

        <div className="flex items-center gap-2 mt-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/70">
          <span>⏰ Hapur 08:00 — 24:00</span>
        </div>
      </motion.div>
    </section>
  );
}

export function MagicFoodPromo() {
  return (
    <main className="font-body bg-background text-foreground">
      <Navbar />
      <Hero />
      <MenuSection />
      <CTASection />
    </main>
  );
}
