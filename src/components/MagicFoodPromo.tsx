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
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-10">
      {/* Animated gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-warm)" }}
      />
      {/* Rotating glow ring */}
      <motion.div
        aria-hidden
        className="absolute h-[800px] w-[800px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, oklch(0.62 0.23 27), oklch(0.92 0.18 95), oklch(0.75 0.19 55), oklch(0.62 0.23 27))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{
            background: "var(--brand-yellow)",
            top: `${10 + Math.random() * 80}%`,
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

      {/* BIG Logo with glowing frame */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.6, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer rotating glow */}
        <motion.div
          aria-hidden
          className="absolute -inset-8 rounded-[2.5rem] blur-2xl opacity-80"
          style={{
            background:
              "conic-gradient(from 0deg, oklch(0.62 0.23 27 / 0.6), oklch(0.92 0.18 95 / 0.6), oklch(0.75 0.19 55 / 0.6), oklch(0.62 0.23 27 / 0.6))",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Logo frame (square) */}
        <motion.div
          className="relative rounded-[2rem] p-6 sm:p-8 md:p-10"
          style={{
            background:
              "linear-gradient(160deg, oklch(0.18 0.05 40), oklch(0.08 0.02 30))",
            boxShadow:
              "0 30px 80px -20px oklch(0 0 0 / 0.8), inset 0 0 0 2px oklch(0.92 0.18 95 / 0.5), inset 0 0 60px oklch(0.62 0.23 27 / 0.3)",
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Inner pulse halo */}
          <motion.div
            aria-hidden
            className="absolute inset-4 rounded-[1.5rem] blur-xl"
            style={{ background: "oklch(0.75 0.19 55 / 0.4)" }}
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <img
            src={logo}
            alt="Magic Food"
            width={500}
            height={460}
            className="relative w-64 sm:w-80 md:w-[26rem] h-auto"
            style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
          />
          {/* Corner sparkles */}
          {[
            { top: "0", left: "0" },
            { top: "0", right: "0" },
            { bottom: "0", left: "0" },
            { bottom: "0", right: "0" },
          ].map((pos, i) => (
            <motion.span
              key={i}
              className="absolute h-3 w-3 rounded-full"
              style={{
                ...pos,
                background: "var(--brand-yellow)",
                boxShadow: "0 0 20px oklch(0.92 0.18 95)",
                transform: "translate(-50%, -50%)",
              }}
              animate={{ scale: [0, 1.3, 0], opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Shining wordmark */}
      <motion.div
        className="relative z-10 mt-8 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <span
          className="font-script text-3xl sm:text-4xl md:text-5xl leading-none -mb-1"
          style={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(90deg, oklch(0.92 0.18 95), oklch(0.75 0.19 55), oklch(0.95 0.16 95), oklch(0.62 0.23 27), oklch(0.92 0.18 95))",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            animation: "shimmer 3s linear infinite",
            filter: "drop-shadow(0 0 20px oklch(0.75 0.19 55 / 0.6))",
          }}
        >
          Magic
        </span>
        <span
          className="font-display text-5xl sm:text-7xl md:text-8xl tracking-[0.15em] uppercase"
          style={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(180deg, oklch(0.98 0.05 95) 0%, oklch(0.92 0.18 95) 40%, oklch(0.75 0.19 55) 70%, oklch(0.62 0.23 27) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            filter:
              "drop-shadow(0 4px 20px oklch(0.62 0.23 27 / 0.6)) drop-shadow(0 0 30px oklch(0.92 0.18 95 / 0.4))",
            WebkitTextStroke: "1px oklch(0.62 0.23 27 / 0.3)",
          }}
        >
          Food
        </span>
      </motion.div>

      <motion.p
        className="relative z-10 mt-5 text-[10px] sm:text-xs tracking-[0.5em] uppercase font-semibold"
        style={{ color: "var(--brand-yellow)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        ✦ Taste the Magic ✦
      </motion.p>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">
          Menu
        </span>
        <motion.div
          className="h-8 w-5 rounded-full border-2 flex items-start justify-center pt-1.5"
          style={{ borderColor: "oklch(0.92 0.18 95 / 0.6)" }}
        >
          <motion.span
            className="block h-1 w-1 rounded-full"
            style={{ background: "var(--brand-yellow)" }}
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
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
