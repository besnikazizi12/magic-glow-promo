import logo from "@/assets/magic-food-logo.png";
import heroBurger from "@/assets/hero-burger.png";

// Easy to edit: change names, prices, descriptions here
const MENU_ITEMS = [
  {
    name: "Burger",
    tag: "classic double",
    desc: "Juicy beef patties, melted cheese, fresh lettuce & tomato in a sesame bun.",
    price: "150 den",
  },
  {
    name: "Pizza",
    tag: "stone-baked",
    desc: "Hand-stretched dough, rich tomato sauce, melted mozzarella & pepperoni.",
    price: "300 den",
  },
  {
    name: "Fries",
    tag: "golden crispy",
    desc: "Hand-cut potatoes fried to golden perfection, lightly salted.",
    price: "100 den",
  },
  {
    name: "Hot Dog",
    tag: "smoky grilled",
    desc: "Smoked sausage in a soft bun with mustard, ketchup and onions.",
    price: "120 den",
  },
];

const PHONE_NUMBER = "+389 XX XXX XXX";

function MenuItem({
  item,
  align,
}: {
  item: (typeof MENU_ITEMS)[number];
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col gap-1.5 ${
        align === "right" ? "lg:text-right lg:items-end" : "items-start"
      }`}
    >
      <div className="flex items-baseline gap-2 flex-wrap">
        <h3
          className="font-display text-2xl sm:text-3xl tracking-wide leading-none"
          style={{ color: "var(--brand-yellow)" }}
        >
          {item.name}
        </h3>
        <span className="text-xs sm:text-sm italic text-white/70">
          ({item.tag})
        </span>
      </div>
      <p
        className={`text-xs sm:text-[13px] leading-snug text-white/75 max-w-[260px] ${
          align === "right" ? "lg:ml-auto" : ""
        }`}
      >
        {item.desc}
      </p>
      <p
        className="font-display text-2xl tracking-wider mt-0.5"
        style={{ color: "var(--brand-orange)" }}
      >
        {item.price}
      </p>
    </div>
  );
}

export function MagicFoodPromo() {
  const left = MENU_ITEMS.slice(0, 2);
  const right = MENU_ITEMS.slice(2, 4);

  return (
    <main
      className="min-h-screen w-full flex items-center justify-center p-3 sm:p-6 md:p-10 font-body relative overflow-hidden"
      style={{ background: "var(--gradient-warm)" }}
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.7 0.2 50 / 0.4), transparent 60%)",
        }}
      />

      {/* Landscape menu card */}
      <article
        className="relative w-full max-w-[1200px] rounded-[2rem] overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, oklch(0.32 0.12 45), oklch(0.18 0.06 40))",
          boxShadow: "var(--shadow-card)",
        }}
      >
        {/* Subtle scribbled food pattern overlay */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
            backgroundSize: "60px 60px, 80px 80px",
          }}
        />

        <div className="relative z-10 px-5 sm:px-10 md:px-14 py-8 sm:py-10 md:py-14">
          {/* Ornate header frame */}
          <header className="relative flex flex-col items-center mb-6 sm:mb-10">
            <div
              className="relative px-6 sm:px-12 py-4 sm:py-5"
              style={{
                clipPath:
                  "polygon(8% 0, 92% 0, 100% 50%, 92% 100%, 8% 100%, 0 50%)",
                background:
                  "linear-gradient(180deg, oklch(0.22 0.06 40), oklch(0.14 0.04 40))",
                boxShadow: "inset 0 0 0 2px oklch(0.92 0.18 95 / 0.6)",
              }}
            >
              <img
                src={logo}
                alt="Magic Food"
                width={400}
                height={360}
                className="h-20 sm:h-24 md:h-28 w-auto drop-shadow-[0_0_25px_oklch(0.75_0.19_55/0.7)]"
              />
            </div>
            <p
              className="mt-3 text-[10px] sm:text-xs tracking-[0.5em] uppercase font-semibold"
              style={{ color: "var(--brand-yellow)" }}
            >
              Fast Food Restaurant
            </p>
          </header>

          {/* Menu grid: items left | hero | items right */}
          <section className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 sm:gap-8 lg:gap-6 items-center">
            {/* Left items */}
            <div className="flex flex-col gap-6 sm:gap-8 order-2 lg:order-1">
              {left.map((item) => (
                <MenuItem key={item.name} item={item} align="left" />
              ))}
            </div>

            {/* Hero burger */}
            <div className="relative order-1 lg:order-2 flex items-center justify-center">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full blur-3xl opacity-70"
                style={{ background: "var(--brand-orange)" }}
              />
              <img
                src={heroBurger}
                alt="Signature Magic Food burger with flying fries"
                width={1024}
                height={1024}
                className="relative w-56 sm:w-72 md:w-80 lg:w-[22rem] h-auto"
                style={{ filter: "drop-shadow(var(--glow-hero))" }}
              />
            </div>

            {/* Right items */}
            <div className="flex flex-col gap-6 sm:gap-8 order-3">
              {right.map((item) => (
                <MenuItem key={item.name} item={item} align="right" />
              ))}
            </div>
          </section>

          {/* CTA */}
          <footer className="mt-8 sm:mt-12 flex flex-col items-center gap-3">
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
              className="group inline-flex items-center justify-center gap-3 rounded-full px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold text-white transition-transform duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "var(--gradient-cta)",
                boxShadow: "var(--shadow-cta)",
              }}
            >
              <span className="text-2xl">📞</span>
              <span className="tracking-wider uppercase">Call Now</span>
            </a>
            <p
              className="text-sm sm:text-base font-semibold tracking-[0.2em]"
              style={{ color: "var(--brand-yellow)" }}
            >
              {PHONE_NUMBER}
            </p>
          </footer>
        </div>
      </article>
    </main>
  );
}
