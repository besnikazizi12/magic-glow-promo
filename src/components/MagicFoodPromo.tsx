import { motion } from "framer-motion";
import logo from "@/assets/magic-food-logo.png";
import burger from "@/assets/food-burger.jpg";
import pizza from "@/assets/food-pizza.jpg";
import fries from "@/assets/food-fries.jpg";
import hotdog from "@/assets/food-hotdog.jpg";

// Easy to edit: menu categories, items, prices
const MENU = [
  {
    category: "Burgers",
    image: burger,
    items: [
      { name: "Classic Burger", price: "150" },
      { name: "Double Cheese", price: "200" },
      { name: "Magic Special", price: "250" },
    ],
  },
  {
    category: "Pizza",
    image: pizza,
    items: [
      { name: "Margherita", price: "250" },
      { name: "Pepperoni", price: "300" },
      { name: "Magic Supreme", price: "350" },
    ],
  },
  {
    category: "Sides",
    image: fries,
    items: [
      { name: "French Fries", price: "100" },
      { name: "Onion Rings", price: "120" },
      { name: "Cheese Sticks", price: "150" },
    ],
  },
  {
    category: "Hot Dogs",
    image: hotdog,
    items: [
      { name: "Classic Dog", price: "120" },
      { name: "Chili Dog", price: "150" },
      { name: "Magic Dog", price: "180" },
    ],
  },
];

const PHONE_NUMBER = "+389 XX XXX XXX";

/* ---------------- HERO ---------------- */
function Hero() {
  const scrollToMenu = () => {
    document
      .getElementById("menu")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-6">
      {/* Animated gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-warm)" }}
      />
      {/* Rotating glow ring */}
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

      {/* Floating sparkles */}
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
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* FULLSCREEN clickable logo */}
      <motion.button
        type="button"
        onClick={scrollToMenu}
        aria-label="View our menu"
        className="group relative z-10 flex items-center justify-center w-[min(92vw,92vh)] h-[min(92vw,92vh)] cursor-pointer outline-none bg-transparent border-0"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* Outer rotating glow */}
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-full blur-3xl opacity-90"
          style={{
            background:
              "conic-gradient(from 0deg, oklch(0.62 0.23 27 / 0.7), oklch(0.92 0.18 95 / 0.7), oklch(0.75 0.19 55 / 0.7), oklch(0.62 0.23 27 / 0.7))",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />

        {/* Logo + wordmark stack */}
        <motion.div
          className="relative flex flex-col items-center justify-center w-full h-full"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Inner soft halo */}
          <motion.div
            aria-hidden
            className="absolute inset-[15%] rounded-full blur-2xl"
            style={{ background: "oklch(0.75 0.19 55 / 0.55)" }}
            animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <img
            src={logo}
            alt="Magic Food — tap to view menu"
            width={1024}
            height={930}
            className="relative w-[78%] h-auto transition-all duration-500 group-hover:drop-shadow-[0_0_60px_oklch(0.92_0.18_95/0.9)]"
            style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
          />

          {/* Shining wordmark */}
          <div className="relative -mt-2 flex flex-col items-center pointer-events-none">
            <span
              className="font-script text-3xl sm:text-5xl md:text-6xl leading-none -mb-2"
              style={{
                color: "transparent",
                backgroundImage:
                  "linear-gradient(90deg, #fff5a3, #ffd24a, #ff8a3d, #ff3d3d, #ffd24a, #fff5a3, #ffd24a, #ff8a3d)",
                backgroundSize: "300% auto",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                animation: "shimmer 2.5s linear infinite",
                filter:
                  "drop-shadow(0 0 18px #ffb84a) drop-shadow(0 0 6px #fff5a3)",
              }}
            >
              Magic
            </span>
            <span
              className="font-display text-5xl sm:text-7xl md:text-8xl tracking-[0.18em] uppercase"
              style={{
                color: "transparent",
                backgroundImage:
                  "linear-gradient(180deg, #ffffff 0%, #fff5a3 25%, #ffd24a 50%, #ff8a3d 75%, #ff3d3d 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                filter:
                  "drop-shadow(0 4px 24px #ff3d3d) drop-shadow(0 0 30px #ffd24a) drop-shadow(0 0 8px #fff5a3)",
                WebkitTextStroke: "1px oklch(0.62 0.23 27 / 0.4)",
              }}
            >
              Food
            </span>
          </div>
        </motion.div>

        {/* Corner sparkles */}
        {[
          { top: "8%", left: "12%" },
          { top: "8%", right: "12%" },
          { bottom: "22%", left: "8%" },
          { bottom: "22%", right: "8%" },
          { top: "45%", left: "4%" },
          { top: "45%", right: "4%" },
        ].map((pos, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute h-3 w-3 rounded-full"
            style={{
              ...pos,
              background: "var(--brand-yellow)",
              boxShadow: "0 0 24px oklch(0.92 0.18 95), 0 0 8px white",
            }}
            animate={{ scale: [0, 1.4, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.35,
            }}
          />
        ))}
      </motion.button>

      {/* Tap hint */}
      <motion.p
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[10px] sm:text-xs tracking-[0.4em] uppercase font-semibold flex items-center gap-2"
        style={{ color: "var(--brand-yellow)" }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ✦ Tap logo for menu ✦
      </motion.p>
    </section>
  );
}

/* ---------------- COMPACT MENU (Lord Burger style) ---------------- */
function MenuColumn({
  category,
  index,
}: {
  category: (typeof MENU)[number];
  index: number;
}) {
  const imageOnLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex items-center gap-4 sm:gap-5"
    >
      {imageOnLeft && (
        <CategoryImage src={category.image} alt={category.category} />
      )}

      <div className="flex-1 min-w-0">
        {/* Category label */}
        <div
          className="inline-block px-3 py-1 rounded-md mb-2 font-display text-sm tracking-[0.2em] uppercase"
          style={{
            background: "var(--gradient-cta)",
            color: "white",
            boxShadow: "0 4px 12px -2px oklch(0.62 0.23 27 / 0.5)",
          }}
        >
          {category.category}
        </div>
        {/* Items */}
        <ul className="space-y-1">
          {category.items.map((item) => (
            <li
              key={item.name}
              className="flex items-baseline gap-2 text-sm sm:text-base"
            >
              <span className="text-white/90 font-medium">{item.name}</span>
              <span
                className="flex-1 border-b border-dotted opacity-30"
                style={{ borderColor: "var(--brand-yellow)" }}
              />
              <span
                className="font-display tracking-wider"
                style={{ color: "var(--brand-yellow)" }}
              >
                {item.price}
                <span className="text-[10px] opacity-70 ml-1">den</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {!imageOnLeft && (
        <CategoryImage src={category.image} alt={category.category} />
      )}
    </motion.div>
  );
}

function CategoryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="relative shrink-0 h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden"
      style={{
        boxShadow:
          "0 0 0 3px oklch(0.75 0.19 55), 0 0 30px oklch(0.62 0.23 27 / 0.6)",
      }}
      whileHover={{ scale: 1.05, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={300}
        height={300}
        className="h-full w-full object-cover"
      />
    </motion.div>
  );
}

function MenuSection() {
  return (
    <section
      className="relative py-14 sm:py-20 px-4 sm:px-8"
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
        <p
          className="font-script text-xl sm:text-2xl mb-1"
          style={{ color: "var(--brand-orange)" }}
        >
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
        <div
          className="mx-auto mt-3 h-[2px] w-20"
          style={{ background: "var(--gradient-gold)" }}
        />
      </motion.div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:gap-8">
        {MENU.map((cat, i) => (
          <MenuColumn key={cat.category} category={cat} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTASection() {
  return (
    <section
      className="relative py-14 px-4"
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
        <p
          className="font-script text-2xl sm:text-3xl"
          style={{ color: "var(--brand-yellow)" }}
        >
          Hungry?
        </p>
        <h2 className="font-display text-3xl sm:text-5xl tracking-[0.15em] uppercase text-white leading-tight">
          Order Now
        </h2>

        <motion.a
          href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
          className="inline-flex items-center justify-center gap-3 rounded-full px-10 py-5 text-lg sm:text-xl font-bold text-white"
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
          <span className="text-xl">📞</span>
          <span className="tracking-wider uppercase">Call Now</span>
        </motion.a>

        <p
          className="text-sm sm:text-base font-bold tracking-[0.3em]"
          style={{ color: "var(--brand-yellow)" }}
        >
          {PHONE_NUMBER}
        </p>

        <div className="flex items-center gap-4 mt-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/70">
          <span>🚀 Free Delivery</span>
          <span>•</span>
          <span>⏰ 24/7 Open</span>
        </div>
      </motion.div>
    </section>
  );
}

export function MagicFoodPromo() {
  return (
    <main className="font-body bg-background text-foreground">
      <Hero />
      <MenuSection />
      <CTASection />
    </main>
  );
}
