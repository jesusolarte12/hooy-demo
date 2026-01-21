import iconRestaurante from "@/assets/icon-restaurante.png";
import iconSupermercado from "@/assets/icon-supermercado.png";
import iconMascotas from "@/assets/icon-mascotas.png";
import iconSpa from "@/assets/icon-spa.png";
import iconModa from "@/assets/icon-moda.png";
import pizzaCombinada from "@/assets/pizza-combinada.jpg";
import empanadas from "@/assets/empanadas.jpg";
import burger from "@/assets/burger.jpg";
import sushi from "@/assets/sushi.jpg";

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  restaurantId: string;
}

export interface Restaurant {
  id: string;
  name: string;
  logo: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  categories: string[];
}

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  image: string;
  restaurantName: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export const categories: Category[] = [
  { id: "1", name: "Restaurante", icon: iconRestaurante },
  { id: "2", name: "Supermercado", icon: iconSupermercado },
  { id: "3", name: "Mascotas", icon: iconMascotas },
  { id: "4", name: "Spa & Bienestar", icon: iconSpa },
  { id: "5", name: "Moda", icon: iconModa },
];

export const foodCategories = [
  { id: "1", name: "Empanadas", image: empanadas },
  { id: "2", name: "Hamburguesas", image: burger },
  { id: "3", name: "Sushi", image: sushi },
  { id: "4", name: "Pizza", image: pizzaCombinada },
];

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Zirus Pizza y Panzarotti",
    logo: pizzaCombinada,
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 1000,
    categories: ["Pizza", "Italiana"],
  },
  {
    id: "2",
    name: "Burger Shop",
    logo: burger,
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: 2000,
    categories: ["Hamburguesas", "Americana"],
  },
  {
    id: "3",
    name: "Sushi Express",
    logo: sushi,
    rating: 4.9,
    deliveryTime: "35-45 min",
    deliveryFee: 3000,
    categories: ["Sushi", "Japonesa"],
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Pizza Combinada Hawaiana y Pepperoni",
    description: "Pizza de 6 porciones y sabores combinada entre Hawaiana y Pepperoni",
    price: 19900,
    originalPrice: 27000,
    discount: 26,
    image: pizzaCombinada,
    restaurantId: "1",
  },
  {
    id: "2",
    name: "Empanada de Carne",
    description: "Deliciosa empanada de carne molida con especias colombianas",
    price: 3500,
    image: empanadas,
    restaurantId: "1",
  },
  {
    id: "3",
    name: "Burger Doble Queso",
    description: "Hamburguesa doble con queso cheddar, bacon, lechuga y tomate",
    price: 24900,
    originalPrice: 29900,
    discount: 17,
    image: burger,
    restaurantId: "2",
  },
  {
    id: "4",
    name: "Combo Sushi Premium",
    description: "20 piezas variadas de sushi con salmón, atún y camarón",
    price: 45900,
    originalPrice: 55000,
    discount: 17,
    image: sushi,
    restaurantId: "3",
  },
];

export const offers: Offer[] = [
  {
    id: "1",
    title: "Almuerzo Personal",
    subtitle: "ANTES $25.000",
    price: 19900,
    originalPrice: 25000,
    image: pizzaCombinada,
    restaurantName: "Casa China",
  },
  {
    id: "2",
    title: "Combo Familiar",
    subtitle: "ANTES $45.000",
    price: 35900,
    originalPrice: 45000,
    image: burger,
    restaurantName: "Burger Shop",
  },
  {
    id: "3",
    title: "Sushi Night",
    subtitle: "ANTES $60.000",
    price: 49900,
    originalPrice: 60000,
    image: sushi,
    restaurantName: "Sushi Express",
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
