import { categories } from "@/data/mockData";
import { useNavigate } from "react-router-dom";

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 py-6">
      <h2 className="text-lg font-semibold mb-4 text-foreground">
        Elige la categoría que necesitas
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => category.id === "1" && navigate("/restaurantes")}
            className="flex flex-col items-center gap-2 p-3 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-border"
          >
            <div className="w-16 h-16 rounded-full overflow-hidden bg-secondary flex items-center justify-center">
              <img
                src={category.icon}
                alt={category.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <span className="text-xs font-medium text-center text-foreground">
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
