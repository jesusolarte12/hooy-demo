import { Product, formatPrice } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { Plus, Percent } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className="bg-card rounded-2xl shadow-sm overflow-hidden border border-border cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => navigate(`/producto/${product.id}`)}
    >
      <div className="relative h-32">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-hooy-pink text-primary-foreground text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <Percent className="w-3 h-3" />
            -{product.discount}%
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm line-clamp-2 mb-1 text-foreground">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through ml-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product);
            }}
            className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-hooy-purple-dark transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
