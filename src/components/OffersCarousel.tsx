import { offers, formatPrice } from "@/data/mockData";
import { useRef } from "react";

const OffersCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-6">
      <h2 className="text-lg font-semibold mb-4 px-4 text-foreground">
        ¡Aprovecha solo por Hooy!
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex-shrink-0 w-72 rounded-2xl overflow-hidden shadow-md snap-start bg-gradient-to-br from-hooy-pink to-primary"
          >
            <div className="relative h-40">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-primary-foreground">
                <p className="text-xs opacity-80">{offer.restaurantName}</p>
                <h3 className="font-bold text-lg">{offer.title}</h3>
                <p className="text-xs line-through opacity-60">
                  {offer.subtitle}
                </p>
                <p className="text-xl font-bold text-hooy-yellow">
                  {formatPrice(offer.price)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersCarousel;
