import { ArrowLeft, Trash2, Minus, Plus, Bike, Store, Percent, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { formatPrice, products } from "@/data/mockData";
import WhatsAppButton from "@/components/WhatsAppButton";

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeItem, clearCart, subtotal, totalSavings } = useCart();

  const deliveryFee = 1000;
  const minOrderForDeliveryDiscount = 19900;
  const hasDeliveryDiscount = subtotal >= minOrderForDeliveryDiscount;

  // Get suggested products (products not in cart)
  const suggestedProducts = products
    .filter((p) => !items.find((item) => item.id === p.id))
    .slice(0, 3);

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-card px-4 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate(-1)}>
              <ArrowLeft className="w-6 h-6 text-foreground" />
            </button>
            <h1 className="text-lg font-semibold text-foreground">Canasta</h1>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center h-[60vh] px-4">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <Trash2 className="w-12 h-12 text-muted-foreground" />
          </div>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Tu canasta está vacía
          </h2>
          <p className="text-muted-foreground text-center mb-6">
            Agrega productos para comenzar tu pedido
          </p>
          <button
            onClick={() => navigate("/restaurantes")}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold"
          >
            Explorar restaurantes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-48">
      {/* Header */}
      <header className="bg-card px-4 py-4 border-b border-border flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-lg font-semibold text-foreground">Canasta</h1>
        </div>
        <button
          onClick={clearCart}
          className="text-primary font-medium text-sm"
        >
          Vaciar
        </button>
      </header>

      <div className="p-4">
        {/* Restaurant Info */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-border">
            <img
              src={items[0].image}
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-semibold text-foreground">Zirus Pizza y Panzarotti</h2>
            <p className="text-sm text-primary">Añadir más productos</p>
          </div>
        </div>

        {/* Delivery Options */}
        <div className="flex gap-2 mb-4">
          <button className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium flex items-center gap-2">
            <Bike className="w-4 h-4" />
            Domicilio
          </button>
          <button className="px-4 py-2 rounded-full text-muted-foreground text-sm font-medium flex items-center gap-2 hover:bg-muted">
            <Store className="w-4 h-4" />
            Recoger en tienda
          </button>
        </div>

        {/* Delivery Address */}
        <div className="flex items-center gap-3 py-3 border-b border-border">
          <MapPin className="w-5 h-5 text-muted-foreground" />
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Entregar en</p>
            <p className="font-medium text-foreground">
              3V6F+GJ Floridablanca, Santander, Colombia
            </p>
          </div>
          <ArrowLeft className="w-5 h-5 rotate-180 text-muted-foreground" />
        </div>

        <div className="border-b border-border my-4" />

        {/* Cart Items */}
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 py-4 border-b border-border">
            <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{item.name}</h3>
              <p className="text-xs text-muted-foreground line-clamp-2 mb-1">
                {item.description}
              </p>
              <button className="text-sm text-primary font-medium">
                Leer más
              </button>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold text-foreground">
                  {formatPrice(item.price)}
                </span>
                {item.originalPrice && (
                  <>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(item.originalPrice)}
                    </span>
                    <span className="text-xs text-hooy-pink font-medium flex items-center gap-1">
                      <Percent className="w-3 h-3" />-{item.discount}%
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted"
                >
                  {item.quantity === 1 ? (
                    <Trash2 className="w-4 h-4" />
                  ) : (
                    <Minus className="w-4 h-4" />
                  )}
                </button>
                <span className="font-medium text-foreground w-4 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-foreground hover:bg-muted"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Suggested Products */}
        {suggestedProducts.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-foreground mb-4">
              ¿Un último antojo? Pide también
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {suggestedProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-28 cursor-pointer"
                  onClick={() => navigate(`/producto/${product.id}`)}
                >
                  <div className="w-28 h-28 rounded-xl overflow-hidden mb-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-medium text-foreground line-clamp-2">
                    {product.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Payment Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-4 z-50">
        {hasDeliveryDiscount && (
          <div className="flex items-center gap-2 text-sm text-primary mb-3 bg-hooy-purple-light px-3 py-2 rounded-xl">
            <Percent className="w-4 h-4" />
            <span>Domicilio por {formatPrice(deliveryFee)}</span>
          </div>
        )}
        <p className="text-xs text-muted-foreground mb-2">
          Compra mínima de {formatPrice(minOrderForDeliveryDiscount)} para aplicar.
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Subtotal</p>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-foreground">
                {formatPrice(subtotal)}
              </span>
              {totalSavings > 0 && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(subtotal + totalSavings)}
                </span>
              )}
            </div>
          </div>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-hooy-purple-dark transition-colors">
            Ir a pagar
          </button>
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default Cart;
