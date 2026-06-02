import { motion } from "framer-motion";
import { Phone, MapPin, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import logoPng from "@/assets/magic-food-logo.png";
import heroPoster from "@/assets/hero-burger-poster.png";
import burger from "@/assets/food-burger.jpg";
import tost from "@/assets/food-tost.jpg";
import salad from "@/assets/food-salad.jpg";
import drinks from "@/assets/food-drinks.jpg";

type Lang = "SQ" | "EN" | "MK";

const MENU = [
  {
    category: { SQ: "Hamburger", EN: "Burgers", MK: "Хамбургери" },
    image: burger,
    items: [
      { name: { SQ: "Hamburger", EN: "Hamburger", MK: "Хамбургер" }, price: "140" },
      { name: { SQ: "Cheeseburger", EN: "Cheeseburger", MK: "Чизбургер" }, price: "170" },
      { name: { SQ: "Hamburger shtëpie", EN: "Homemade Burger", MK: "Домашен бургер" }, desc: { SQ: "(veze, kashkavall, djathë)", EN: "(egg, kashkaval, cheese)", MK: "(јајце, кашкавал, сирење)" }, price: "200" },
      { name: { SQ: "Magic Burger", EN: "Magic Burger", MK: "Меџик Бургер" }, desc: { SQ: "(proshut & kashkavall)", EN: "(ham & kashkaval)", MK: "(шунка и кашкавал)" }, price: "220" },
      { name: { SQ: "Suxhuk Burger", EN: "Sujuk Burger", MK: "Суџук Бургер" }, price: "140" },
      { name: { SQ: "Qebap", EN: "Kebab", MK: "Ќебап" }, price: "250/270" },
      { name: { SQ: "Qofte shtëpie", EN: "Homemade Meatballs", MK: "Домашни ќофтиња" }, price: "270" },
      { name: { SQ: "Pljeskavic Sharri", EN: "Pljeskavica Sharri", MK: "Плескавица Шарри" }, price: "270" },
      { name: { SQ: "File Pule", EN: "Chicken Fillet", MK: "Пилешко филе" }, price: "170" },
      { name: { SQ: "File Pule Porcion", EN: "Chicken Fillet Plate", MK: "Порција пилешко филе" }, price: "190/300" },
      { name: { SQ: "Hamburger Porcion", EN: "Burger Plate", MK: "Порција хамбургер" }, price: "160" },
    ],
  },
  {
    category: { SQ: "Tost", EN: "Toast", MK: "Тост" },
    image: tost,
    items: [
      { name: { SQ: "Tost", EN: "Toast", MK: "Тост" }, desc: { SQ: "(sallam, pule, kashkavall)", EN: "(salami, chicken, kashkaval)", MK: "(салама, пилешко, кашкавал)" }, price: "100" },
      { name: { SQ: "Tost Përshut", EN: "Ham Toast", MK: "Тост со шунка" }, desc: { SQ: "(kashkavall)", EN: "(kashkaval)", MK: "(кашкавал)" }, price: "150" },
    ],
  },
  {
    category: { SQ: "Sallata", EN: "Salads", MK: "Салати" },
    image: salad,
    items: [
      { name: { SQ: "Sallat Shope", EN: "Shopska Salad", MK: "Шопска салата" }, price: "120" },
      { name: { SQ: "Sallat e përzier", EN: "Mixed Salad", MK: "Мешана салата" }, price: "120" },
    ],
  },
  {
    category: { SQ: "Pije", EN: "Drinks", MK: "Пијалаци" },
    image: drinks,
    items: [
      { name: { SQ: "Coca Cola", EN: "Coca Cola", MK: "Кока Кола" }, price: "60/70" },
      { name: { SQ: "Fanta", EN: "Fanta", MK: "Фанта" }, price: "60/70" },
      { name: { SQ: "Fanta Tropikal", EN: "Fanta Tropical", MK: "Фанта Тропик" }, price: "60/70" },
      { name: { SQ: "Sprite", EN: "Sprite", MK: "Спрајт" }, price: "60/70" },
      { name: { SQ: "Schweppes", EN: "Schweppes", MK: "Швепс" }, price: "60/70" },
      { name: { SQ: "Ujë me gaze", EN: "Sparkling Water", MK: "Газирана вода" }, price: "50" },
      { name: { SQ: "Ujë Mineral", EN: "Mineral Water", MK: "Минерална вода" }, price: "40/50" },
      { name: { SQ: "Pepsi", EN: "Pepsi", MK: "Пепси" }, price: "70" },
      { name: { SQ: "Gazoz", EN: "Gazoz", MK: "Газоз" }, price: "70" },
      { name: { SQ: "Golden Eagle", EN: "Golden Eagle", MK: "Golden Eagle" }, price: "70" },
    ],
  },
];

const PHONE_NUMBER = "070-488-300";
const PHONE_TEL = "+38970488300";
const LOCATION = "Kumanovë";
const YELLOW = "#FFB800";
const RED = "#CC0000";
const NAV_BG = "#0a0a0a";

const T = {
  navMenu: { SQ: "Menuja", EN: "Menu", MK: "Мени" },
  navContact: { SQ: "Kontakt", EN: "Contact", MK: "Контакт" },
  heroLine1: { SQ: "MAGIC", EN: "MAGIC", MK: "MAGIC" },
  heroLine2a: { SQ: "FOOD", EN: "FOOD", MK: "FOOD" },
  heroLine2b: { SQ: "", EN: "", MK: "" },
  heroSub: {
    SQ: "I freskët. I lëngshëm. I shijshëm. Bërë posaçërisht për ty.",
    EN: "Fresh. Juicy. Delicious. Made just for you.",
    MK: "Свежо. Сочно. Вкусно. Направено посебно за тебе.",
  },
  orderNow: { SQ: "Porosit tani", EN: "Order now", MK: "Нарачај сега" },
  seeMenu: { SQ: "Shiko menunë", EN: "See menu", MK: "Види мени" },
  topBadge: { SQ: "KUMANOVË · USHQIM I SHPEJTË", EN: "KUMANOVË · FAST FOOD", MK: "КУМАНОВО · БРЗА ХРАНА" },
  topBadge2: { SQ: "I NXEHTË & I FRESKËT", EN: "HOT & FRESH", MK: "ТОПЛО И СВЕЖО" },
  menuKicker: { SQ: "Shijet tona", EN: "Our Delicious", MK: "Нашите вкусови" },
  menuTitle: { SQ: "Menuja", EN: "Menu", MK: "Мени" },
  hungry: { SQ: "I uritur?", EN: "Hungry?", MK: "Гладен?" },
  orderHeading: { SQ: "Porosit Tani", EN: "Order Now", MK: "Нарачај сега" },
  call: { SQ: "Telefono", EN: "Call", MK: "Јави се" },
  open: { SQ: "Hapur 08:00 — 24:00", EN: "Open 08:00 — 24:00", MK: "Отворено 08:00 — 24:00" },
} as const;

/* ---------------- NAVBAR ---------------- */
function Navbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navItems = [
    { id: "menu", label: T.navMenu[lang] },
    { id: "contact", label: T.navContact[lang] },
  ];

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
          <div className="font-condensed font-black text-lg sm:text-xl uppercase tracking-wider leading-none flex gap-1">
            <span className="text-white">MAGIC</span>
            <span style={{ color: YELLOW }}>FOOD</span>
          </div>
        </button>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-condensed font-bold uppercase tracking-[0.18em]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white/85 hover:text-[color:var(--accent-yellow)] transition-colors"
              style={{ ["--accent-yellow" as string]: YELLOW }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:flex items-center rounded-full p-1 bg-white/5 border border-white/10 text-[11px] font-condensed font-bold tracking-wider">
            {(["SQ", "EN", "MK"] as const).map((code, i) => (
              <span key={code} className="flex items-center">
                {i > 0 && <span className="px-1 text-white/30">|</span>}
                <button
                  onClick={() => setLang(code)}
                  className="px-2.5 py-1 rounded-full transition"
                  style={{
                    background: lang === code ? YELLOW : "transparent",
                    color: lang === code ? "#000" : "rgba(255,255,255,0.7)",
                  }}
                >
                  {code}
                </button>
              </span>
            ))}
          </div>


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

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/15 text-white"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-white/10"
          style={{ background: NAV_BG }}
        >
          <div className="flex flex-col px-5 py-3 gap-1 text-sm font-condensed font-bold uppercase tracking-[0.18em]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-3 text-white/90 active:bg-white/5 rounded"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-3 sm:hidden">
              {(["SQ", "EN", "MK"] as const).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className="px-3 py-1.5 rounded-full text-xs font-bold"
                  style={{
                    background: lang === code ? YELLOW : "rgba(255,255,255,0.08)",
                    color: lang === code ? "#000" : "#fff",
                  }}
                >
                  {code}
                </button>
              ))}
            </div>

          </div>
        </motion.nav>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ lang }: { lang: Lang }) {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const tickerItems =
    lang === "SQ"
      ? [
          "Hamburger i Freskët",
          "Qebap Tradicional",
          "Magic Burger",
          "Tost i Nxehtë",
          "Porosit: 070-488-300",
          "Good Food · Pure Magic",
        ]
      : [
          "Fresh Burgers",
          "Traditional Kebab",
          "Magic Burger",
          "Hot Toast",
          "Order: 070-488-300",
          "Good Food · Pure Magic",
        ];
  const tickerLine = tickerItems.join("  🔥  ");

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col"
      style={{ minHeight: "100vh", background: "#000" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-no-repeat"
        style={{
          backgroundImage: `url(${heroPoster})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Top badges */}
      <div className="relative z-10 w-full pt-20 sm:pt-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-start justify-between gap-3">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-[11px] font-condensed font-bold uppercase tracking-[0.2em] text-white border border-white/15 backdrop-blur-md"
            style={{ background: "rgba(0,0,0,0.55)" }}
          >
            <span>🔥</span>
            <span>{T.topBadge[lang]}</span>
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-condensed font-bold uppercase tracking-[0.2em] text-white border border-white/15 backdrop-blur-md"
            style={{ background: "rgba(0,0,0,0.55)" }}
          >
            <span style={{ color: YELLOW }}>★</span>
            <span>{T.topBadge2[lang]}</span>
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
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-condensed font-black uppercase leading-[0.88] tracking-tight"
              style={{
                fontSize: "clamp(64px, 11vw, 124px)",
                color: YELLOW,
                textShadow:
                  "0 6px 30px rgba(0,0,0,0.85), 0 0 28px rgba(255,184,0,0.5)",
              }}
            >
              {T.heroLine1[lang]}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="font-condensed font-black uppercase leading-[0.88] tracking-tight mt-1"
              style={{
                fontSize: "clamp(64px, 11vw, 124px)",
                color: RED,
                textShadow:
                  "0 6px 30px rgba(0,0,0,0.85), 0 0 28px rgba(204,0,0,0.55)",
              }}
            >
              {T.heroLine2a[lang]}
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 origin-left"
              style={{
                width: "200px",
                height: "4px",
                background: `linear-gradient(90deg, ${RED}, ${YELLOW})`,
                borderRadius: "2px",
                boxShadow: "0 0 14px rgba(204,0,0,0.55)",
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-6 text-white max-w-md font-body font-semibold"
              style={{
                fontSize: "18px",
                lineHeight: 1.5,
                letterSpacing: "0.015em",
                textShadow: "0 2px 14px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.6)",
              }}
            >
              {T.heroSub[lang]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <motion.a
                href={`tel:${PHONE_TEL}`}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[13px] sm:text-sm font-condensed font-black uppercase tracking-[0.15em]"
                style={{
                  background: YELLOW,
                  color: "#0a0a0a",
                  boxShadow:
                    "0 14px 34px -10px rgba(255,184,0,0.65), inset 0 1px 0 rgba(255,255,255,0.4)",
                }}
              >
                <Phone className="h-4 w-4" />
                <span>{T.orderNow[lang]}</span>
              </motion.a>

              <motion.button
                type="button"
                onClick={scrollToMenu}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[13px] sm:text-sm font-condensed font-black uppercase tracking-[0.15em] text-white border border-white/25 backdrop-blur-md transition-colors hover:bg-white/10"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <span>{T.seeMenu[lang]}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </motion.button>
            </motion.div>
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
function MenuCategory({
  category,
  index,
  lang,
}: {
  category: (typeof MENU)[number];
  index: number;
  lang: Lang;
}) {
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
          alt={category.category[lang]}
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
          {category.category[lang]}
        </h3>
      </div>

      <ul className="space-y-2">
        {category.items.map((item) => (
          <li key={item.name.SQ} className="flex items-baseline gap-2 text-sm sm:text-base">
            <div className="flex-1 min-w-0">
              <span className="text-white/95 font-medium">{item.name[lang]}</span>
              {"desc" in item && item.desc && (
                <span className="block text-[11px] text-white/55 italic">{item.desc[lang]}</span>
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

function MenuSection({ lang }: { lang: Lang }) {
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
          {T.menuKicker[lang]}
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
          {T.menuTitle[lang]}
        </h2>
        <div className="mx-auto mt-3 h-[2px] w-20" style={{ background: "var(--gradient-gold)" }} />
      </motion.div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4 sm:gap-6">
        {MENU.map((cat, i) => (
          <MenuCategory key={cat.category.SQ} category={cat} index={i} lang={lang} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA / CONTACT ---------------- */
function CTASection({ lang }: { lang: Lang }) {
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
          {T.hungry[lang]}
        </p>
        <h2 className="font-display text-3xl sm:text-5xl tracking-[0.15em] uppercase text-white leading-tight">
          {T.orderHeading[lang]}
        </h2>

        <motion.a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-xl font-bold text-white"
          style={{ background: "var(--gradient-cta)", boxShadow: "var(--shadow-cta)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <Phone className="h-5 w-5" />
          <span className="tracking-wider uppercase">{T.call[lang]}</span>
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
          <span>⏰ {T.open[lang]}</span>
        </div>
      </motion.div>
    </section>
  );
}

export function MagicFoodPromo() {
  const [lang, setLang] = useState<Lang>("SQ");
  return (
    <main className="font-body bg-background text-foreground">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <MenuSection lang={lang} />
      <CTASection lang={lang} />
    </main>
  );
}
