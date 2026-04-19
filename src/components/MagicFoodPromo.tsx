import { motion } from "framer-motion";
import { Phone, MapPin, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import logoPng from "@/assets/magic-food-logo.png";
import burger from "@/assets/food-burger.jpg";
import tost from "@/assets/food-tost.jpg";
import salad from "@/assets/food-salad.jpg";
import drinks from "@/assets/food-drinks.jpg";

// Menu data — taken from the Magic Food paper menu
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
const LOCATION = "Kumanovë";

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        background: "oklch(0.08 0.02 30 / 0.85)",
        borderColor: "oklch(0.62 0.23 27 / 0.3)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
          aria-label="Magic Food home"
        >
          <img
            src={logoPng}
            alt="Magic Food"
            className="h-12 w-12 object-contain transition-transform group-hover:scale-110"
            style={{ filter: "drop-shadow(0 0 8px oklch(0.92 0.18 95 / 0.5))" }}
          />
          <div className="flex items-baseline gap-1 leading-none">
            <span
              className="font-script text-xl"
              style={{ color: "var(--brand-yellow)" }}
            >
              Magic
            </span>
            <span
              className="font-display text-xl uppercase tracking-wider"
              style={{ color: "var(--brand-orange)" }}
            >
              Food
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm uppercase tracking-widest font-semibold text-white/90">
          <button onClick={() => scrollTo("hero")} className="hover:text-[oklch(0.92_0.18_95)] transition">Home</button>
          <button onClick={() => scrollTo("menu")} className="hover:text-[oklch(0.92_0.18_95)] transition">Menu</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-[oklch(0.92_0.18_95)] transition">Contact</button>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white"
            style={{ background: "var(--gradient-cta)", boxShadow: "0 4px 12px -2px oklch(0.62 0.23 27 / 0.6)" }}
          >
            <Phone className="h-4 w-4" /> Call
          </a>
        </nav>

        {/* Mobile call + burger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\D/g, "")}`}
            aria-label="Call now"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full text-white"
            style={{ background: "var(--gradient-cta)", boxShadow: "0 4px 12px -2px oklch(0.62 0.23 27 / 0.6)" }}
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border text-white"
            style={{ borderColor: "oklch(0.92 0.18 95 / 0.4)" }}
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
          className="md:hidden border-t"
          style={{ borderColor: "oklch(0.62 0.23 27 / 0.3)", background: "oklch(0.08 0.02 30 / 0.95)" }}
        >
          <div className="flex flex-col px-4 py-3 gap-1 text-sm uppercase tracking-widest font-semibold text-white/90">
            <button onClick={() => scrollTo("hero")} className="text-left py-2">Home</button>
            <button onClick={() => scrollTo("menu")} className="text-left py-2">Menu</button>
            <button onClick={() => scrollTo("contact")} className="text-left py-2">Contact</button>
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

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-8"
    >
      <div aria-hidden className="absolute inset-0" style={{ background: "var(--gradient-warm)" }} />
      <motion.div
        aria-hidden
        className="absolute h-[900px] w-[900px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, oklch(0.62 0.23 27), oklch(0.92 0.18 95), oklch(0.75 0.19 55), oklch(0.62 0.23 27))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{
            background: "var(--brand-yellow)",
            top: `${5 + Math.random() * 90}%`,
            left: `${5 + Math.random() * 90}%`,
            boxShadow: "0 0 12px oklch(0.92 0.18 95)",
          }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.4, 0], y: [0, -40, 0] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3 }}
        />
      ))}

      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl px-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.span
          className="font-script text-2xl sm:text-3xl mb-3"
          style={{ color: "var(--brand-yellow)", textShadow: "0 0 20px oklch(0.92 0.18 95 / 0.6)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          ✦ Magic Food ✦
        </motion.span>

        <motion.h1
          className="font-display text-4xl sm:text-6xl md:text-7xl uppercase leading-[1.05] tracking-tight"
          style={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(180deg, #fff5a3 0%, #ffd24a 35%, #ff8a3d 65%, #ff3d3d 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            filter:
              "drop-shadow(0 4px 24px oklch(0.62 0.23 27 / 0.6)) drop-shadow(0 0 30px oklch(0.92 0.18 95 / 0.4))",
          }}
        >
          Ushqim Magjik,
          <br />
          <span className="block mt-1">Shije e Paharrueshme</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-white/85 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Burgera të freskët, tosta të shijshme, sallata dhe pije —
          të gjitha të përgatitura me dashuri në Kumanovë.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <motion.button
            type="button"
            onClick={scrollToMenu}
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base sm:text-lg font-bold text-white uppercase tracking-wider"
            style={{
              background: "var(--gradient-cta)",
              boxShadow: "var(--shadow-cta)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            animate={{
              boxShadow: [
                "0 20px 50px -10px oklch(0.62 0.23 27 / 0.7)",
                "0 25px 70px -10px oklch(0.62 0.23 27 / 0.95)",
                "0 20px 50px -10px oklch(0.62 0.23 27 / 0.7)",
              ],
            }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
          >
            🍔 Porosit Tani
          </motion.button>

          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              scrollToMenu();
            }}
            className="text-sm uppercase tracking-[0.3em] font-semibold px-6 py-3 rounded-full border transition hover:bg-white/5"
            style={{
              color: "var(--brand-yellow)",
              borderColor: "oklch(0.92 0.18 95 / 0.4)",
            }}
          >
            Shiko Menun
          </a>
        </motion.div>
      </motion.div>
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
      className="rounded-2xl p-5 sm:p-6"
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
          className="h-14 w-14 rounded-full object-cover shrink-0"
          style={{ boxShadow: "0 0 0 2px oklch(0.75 0.19 55), 0 0 20px oklch(0.62 0.23 27 / 0.5)" }}
        />
        <h3
          className="font-display text-xl sm:text-2xl tracking-[0.2em] uppercase px-3 py-1 rounded-md"
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
      className="relative py-14 sm:py-20 px-4 sm:px-8 scroll-mt-16"
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
          className="font-display text-5xl sm:text-7xl tracking-[0.15em] uppercase leading-none"
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

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
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
      className="relative py-14 px-4 scroll-mt-16"
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.4 0.18 35) 0%, oklch(0.12 0.04 30) 70%)",
      }}
    >
      <motion.div
        className="max-w-xl mx-auto text-center flex flex-col items-center gap-5"
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
          href={`tel:${PHONE_NUMBER.replace(/\D/g, "")}`}
          className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 text-lg sm:text-xl font-bold text-white"
          style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          animate={{
            boxShadow: [
              "0 20px 50px -10px oklch(0.62 0.23 27 / 0.7)",
              "0 25px 70px -10px oklch(0.62 0.23 27 / 0.95)",
              "0 20px 50px -10px oklch(0.62 0.23 27 / 0.7)",
            ],
          }}
          transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
        >
          <Phone className="h-5 w-5" />
          <span className="tracking-wider uppercase">Telefono</span>
        </motion.a>

        <p className="text-sm sm:text-base font-bold tracking-[0.3em]" style={{ color: "var(--brand-yellow)" }}>
          {PHONE_NUMBER}
        </p>

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
