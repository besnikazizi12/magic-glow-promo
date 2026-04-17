import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import logo from "@/assets/magic-food-logo.png";
import burger from "@/assets/food-burger.jpg";
import pizza from "@/assets/food-pizza.jpg";
import fries from "@/assets/food-fries.jpg";
import hotdog from "@/assets/food-hotdog.jpg";

// Easy to edit: change names, prices, descriptions, images here
const MENU_ITEMS = [
  {
    name: "Burger",
    tag: "Classic Double",
    desc: "Juicy beef, melted cheese & fresh greens.",
    price: "150",
    image: burger,
  },
  {
    name: "Pizza",
    tag: "Stone-Baked",
    desc: "Mozzarella, pepperoni & rich tomato.",
    price: "300",
    image: pizza,
  },
  {
    name: "Fries",
    tag: "Golden Crispy",
    desc: "Hand-cut, lightly salted to perfection.",
    price: "100",
    image: fries,
  },
  {
    name: "Hot Dog",
    tag: "Smoky Grilled",
    desc: "Smoked sausage, mustard & onions.",
    price: "120",
    image: hotdog,
  },
];

const PHONE_NUMBER = "+389 XX XXX XXX";

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-16">
      {/* Animated gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-warm)" }}
      />
      {/* Rotating glow ring */}
      <motion.div
        aria-hidden
        className="absolute h-[700px] w-[700px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, oklch(0.62 0.23 27), oklch(0.92 0.18 95), oklch(0.75 0.19 55), oklch(0.62 0.23 27))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating sparkles */}
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full"
          style={{
            background: "var(--brand-yellow)",
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
            boxShadow: "0 0 12px oklch(0.92 0.18 95)",
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Logo with glow + float */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Halo behind logo */}
        <motion.div
          aria-hidden
          className="absolute -inset-10 rounded-full blur-2xl"
          style={{ background: "oklch(0.75 0.19 55 / 0.5)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.img
          src={logo}
          alt="Magic Food"
          width={500}
          height={460}
          className="relative w-56 sm:w-72 md:w-80 h-auto"
          style={{ animation: "pulse-glow 2.5s ease-in-out infinite" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Shining "Magic Food" wordmark */}
      <motion.div
        className="relative z-10 mt-6 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <span
          className="font-script text-4xl sm:text-5xl md:text-6xl leading-none -mb-2"
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
          className="font-display text-6xl sm:text-7xl md:text-8xl tracking-[0.15em] uppercase"
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
        {/* Shining sweep overlay */}
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, oklch(1 0 0 / 0.4) 50%, transparent 60%)",
            mixBlendMode: "overlay",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="relative z-10 mt-6 text-xs sm:text-sm tracking-[0.5em] uppercase font-semibold"
        style={{ color: "var(--brand-yellow)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        ✦ Taste the Magic ✦
      </motion.p>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-[0.3em] text-white/70">
          Scroll
        </span>
        <motion.div
          className="h-10 w-6 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: "oklch(0.92 0.18 95 / 0.6)" }}
        >
          <motion.span
            className="block h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--brand-yellow)" }}
            animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- MENU ITEM CARD ---------------- */
function MenuCard({
  item,
  index,
}: {
  item: (typeof MENU_ITEMS)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, oklch(0.22 0.06 40), oklch(0.12 0.04 40))",
        boxShadow: "var(--shadow-card)",
      }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <motion.img
          src={item.image}
          alt={item.name}
          loading="lazy"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        {/* Glow ring on hover */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at center, transparent 50%, oklch(0.62 0.23 27 / 0.4))",
          }}
        />
        {/* Price badge */}
        <div
          className="absolute top-4 right-4 rounded-full px-4 py-2 font-display text-xl tracking-wider"
          style={{
            background: "var(--gradient-cta)",
            color: "white",
            boxShadow: "0 8px 20px -5px oklch(0.62 0.23 27 / 0.7)",
          }}
        >
          {item.price} <span className="text-xs opacity-80">den</span>
        </div>
      </div>

      {/* Text */}
      <div className="p-5 sm:p-6">
        <p
          className="font-script text-sm"
          style={{ color: "var(--brand-orange)" }}
        >
          {item.tag}
        </p>
        <h3
          className="font-display text-3xl sm:text-4xl tracking-wider uppercase leading-none mt-1"
          style={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(180deg, oklch(0.98 0.05 95), oklch(0.85 0.18 85))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {item.name}
        </h3>
        <p className="mt-2 text-sm text-white/70 leading-snug">{item.desc}</p>
      </div>
    </motion.article>
  );
}

/* ---------------- MENU SECTION ---------------- */
function MenuSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 px-4 sm:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.15 0.05 40) 0%, oklch(0.1 0.03 30) 100%)",
      }}
    >
      {/* Section heading */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12 sm:mb-16"
        style={{ y: titleY }}
      >
        <motion.p
          className="font-script text-2xl sm:text-3xl mb-2"
          style={{ color: "var(--brand-orange)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Delicious
        </motion.p>
        <motion.h2
          className="font-display text-5xl sm:text-7xl md:text-8xl tracking-[0.15em] uppercase leading-none"
          style={{
            color: "transparent",
            backgroundImage:
              "linear-gradient(180deg, oklch(0.98 0.05 95), oklch(0.92 0.18 95) 40%, oklch(0.75 0.19 55) 75%, oklch(0.62 0.23 27))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            filter: "drop-shadow(0 4px 20px oklch(0.62 0.23 27 / 0.5))",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Menu
        </motion.h2>
        <motion.div
          className="mx-auto mt-4 h-[2px] w-24"
          style={{ background: "var(--gradient-gold)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {MENU_ITEMS.map((item, i) => (
          <MenuCard key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ---------------- CTA SECTION ---------------- */
function CTASection() {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.45 0.18 35) 0%, oklch(0.15 0.05 30) 70%)",
      }}
    >
      <motion.div
        className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p
          className="font-script text-3xl sm:text-4xl"
          style={{ color: "var(--brand-yellow)" }}
        >
          Hungry?
        </p>
        <h2
          className="font-display text-4xl sm:text-6xl tracking-[0.15em] uppercase text-white leading-tight"
        >
          Order Now &<br />
          Taste the Magic
        </h2>

        <motion.a
          href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
          className="group relative inline-flex items-center justify-center gap-3 rounded-full px-10 sm:px-14 py-5 sm:py-6 text-xl sm:text-2xl font-bold text-white"
          style={{
            background: "var(--gradient-cta)",
            boxShadow: "var(--shadow-cta)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          animate={{
            boxShadow: [
              "0 20px 50px -10px oklch(0.62 0.23 27 / 0.7)",
              "0 25px 70px -10px oklch(0.62 0.23 27 / 0.9)",
              "0 20px 50px -10px oklch(0.62 0.23 27 / 0.7)",
            ],
          }}
          transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
        >
          <span className="text-2xl">📞</span>
          <span className="tracking-wider uppercase">Call Now</span>
        </motion.a>

        <p
          className="text-base sm:text-lg font-bold tracking-[0.3em]"
          style={{ color: "var(--brand-yellow)" }}
        >
          {PHONE_NUMBER}
        </p>

        <div className="flex items-center gap-6 mt-4 text-xs uppercase tracking-[0.25em] text-white/70">
          <span>🚀 Free Delivery</span>
          <span>•</span>
          <span>⏰ 24/7 Open</span>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- ROOT ---------------- */
export function MagicFoodPromo() {
  return (
    <main className="font-body bg-background text-foreground">
      <Hero />
      <MenuSection />
      <CTASection />
    </main>
  );
}
