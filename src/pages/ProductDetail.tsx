import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Minus, Plus, Bike, Store, Percent } from "lucide-react";
import { products, formatPrice } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery"
  );
  const [isFavorite, setIsFavorite] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Producto no encontrado</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    navigate("/carrito");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Product Image */}
      <div className="relative h-[45vh]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 w-10 h-10 bg-card/80 backdrop-blur rounded-full flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-6 right-4 w-10 h-10 bg-card/80 backdrop-blur rounded-full flex items-center justify-center"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-hooy-pink text-hooy-pink" : "text-foreground"
            }`}
          />
        </button>
      </div>

      {/* Product Info Sheet */}
      <div className="bg-card rounded-t-3xl -mt-6 relative z-10 pb-32">
        <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-3 mb-4" />
        <div className="px-4">
          <h1 className="text-xl font-bold mb-2 text-foreground">
            {product.name}
          </h1>
          <p className="text-muted-foreground mb-4">{product.description}</p>

          {/* Delivery Options */}
          <div className="bg-muted rounded-2xl p-1 mb-3">
            <p className="text-xs text-center text-muted-foreground mb-2 pt-1">
              Aplica descuento para entrega
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setDeliveryType("delivery")}
                className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-colors ${
                  deliveryType === "delivery"
                    ? "bg-card text-primary shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                <Bike className="w-4 h-4" />
                Domicilio
              </button>
              <button
                onClick={() => setDeliveryType("pickup")}
                className={`flex-1 py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-colors ${
                  deliveryType === "pickup"
                    ? "bg-card text-primary shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                <Store className="w-4 h-4" />
                Recoger en tienda
              </button>
            </div>
          </div>

          {product.discount && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-hooy-purple-light px-3 py-2 rounded-xl mb-4">
              <Percent className="w-4 h-4 text-primary" />
              No aplica sobre los ingredientes con valor adicional
            </div>
          )}

          <div className="border-t border-border my-4" />

          <h2 className="font-semibold text-foreground mb-4">
            ¿Deseas adicionar borde de queso?
          </h2>
          {/* Add-ons would go here */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-4 z-50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 bg-muted rounded-xl px-3 py-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground hover:bg-border transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-semibold text-foreground w-4 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-foreground hover:bg-border transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-hooy-purple-dark transition-colors"
          >
            Agregar {formatPrice(product.price * quantity)}
          </button>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
