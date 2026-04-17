import logo from "@/assets/magic-food-logo.png";
import burger from "@/assets/food-burger.jpg";
import pizza from "@/assets/food-pizza.jpg";
import fries from "@/assets/food-fries.jpg";
import hotdog from "@/assets/food-hotdog.jpg";

// Easy to edit: change names, prices, or images here
const MENU_ITEMS = [
  { name: "Burger", price: "150 den", image: burger },
  { name: "Pizza", price: "300 den", image: pizza },
  { name: "Fries", price: "100 den", image: fries },
  { name: "Hot Dog", price: "120 den", image: hotdog },
];

const PHONE_NUMBER = "+389 XX XXX XXX";

export function MagicFoodPromo() {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4 sm:p-6 md:p-8 font-body overflow-hidden relative">
      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-[120px] opacity-30"
        style={{ background: "var(--brand-orange)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full blur-[120px] opacity-20"
        style={{ background: "var(--brand-red)" }}
      />

      {/* Square card — 1080x1080 friendly, scales for all sizes */}
      <article
        className="relative w-full max-w-[1080px] aspect-square bg-surface rounded-3xl overflow-hidden flex flex-col items-center justify-between p-6 sm:p-10 md:p-14"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {/* Inner radial glow */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, oklch(0.75 0.19 55 / 0.18), transparent 60%)",
          }}
        />

        {/* Logo */}
        <header className="relative z-10 flex flex-col items-center gap-2">
          <img
            src={logo}
            alt="Magic Food logo"
            className="w-40 sm:w-52 md:w-64 h-auto drop-shadow-[0_0_30px_oklch(0.75_0.19_55/0.5)]"
            width={512}
            height={460}
          />
          <p
            className="text-xs sm:text-sm tracking-[0.4em] uppercase"
            style={{ color: "var(--brand-yellow)" }}
          >
            Taste the Magic
          </p>
        </header>

        {/* Menu grid */}
        <section className="relative z-10 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full max-w-2xl my-6">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col items-center gap-3 rounded-2xl bg-surface-elevated/60 backdrop-blur-sm p-4 sm:p-5 transition-[transform,box-shadow] duration-500 hover:-translate-y-1"
              style={{
                boxShadow:
                  "0 10px 30px -10px oklch(0 0 0 / 0.5), inset 0 1px 0 oklch(0.88 0.18 95 / 0.08)",
              }}
            >
              <div
                className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full overflow-hidden ring-2"
                style={{
                  boxShadow: "var(--glow-warm)",
                  // @ts-expect-error css var
                  "--tw-ring-color": "oklch(0.75 0.19 55 / 0.4)",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  width={300}
                  height={300}
                />
              </div>
              <div className="text-center">
                <h3
                  className="font-display text-xl sm:text-2xl md:text-3xl tracking-wide leading-none"
                  style={{ color: "var(--brand-yellow)" }}
                >
                  {item.name}
                </h3>
                <p
                  className="mt-1 text-base sm:text-lg md:text-xl font-semibold"
                  style={{ color: "var(--brand-orange)" }}
                >
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <footer className="relative z-10 flex flex-col items-center gap-3 w-full">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="group relative inline-flex items-center justify-center gap-3 rounded-full px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl md:text-2xl font-bold text-white transition-transform duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "var(--gradient-cta)",
              boxShadow: "var(--shadow-cta)",
            }}
          >
            <span className="text-2xl sm:text-3xl">📞</span>
            <span className="tracking-wide">Call Now</span>
          </a>
          <p
            className="text-sm sm:text-base md:text-lg font-medium tracking-wider"
            style={{ color: "var(--brand-yellow)" }}
          >
            {PHONE_NUMBER}
          </p>
        </footer>
      </article>
    </div>
  );
}
