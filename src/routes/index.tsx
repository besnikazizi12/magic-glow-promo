import { createFileRoute } from "@tanstack/react-router";
import { MagicFoodPromo } from "@/components/MagicFoodPromo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Magic Food — Taste the Magic" },
      {
        name: "description",
        content:
          "Magic Food fast food promo: Burger, Pizza, Fries, Hot Dog. Call now to order.",
      },
    ],
  }),
});

function Index() {
  return <MagicFoodPromo />;
}
