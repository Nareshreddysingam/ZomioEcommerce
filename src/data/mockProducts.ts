import { Product } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const mockProducts: Product[] = [
  {
    id: uuidv4(),
    name: "Traditional Rose Milk",
    description: "Rich, creamy milk infused with authentic rose flavor, made with locally sourced ingredients. A refreshing drink for hot days!",
    image: "https://images.pexels.com/photos/6210774/pexels-photo-6210774.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 25,
    category: "beverages",
    sizes: ["200ml", "500ml"],
    featured: true,
    inStock: true,
    areas: ["Chittoor", "Tirupati", "Chandragiri"]
  },
  {
    id: uuidv4(),
    name: "Spicy Samosa",
    description: "Crispy triangle pastries filled with spiced potatoes, peas, and aromatic spices. Freshly made and served hot!",
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 15,
    category: "snacks",
    sizes: ["Regular (2 pcs)", "Family Pack (6 pcs)"],
    featured: true,
    inStock: true,
    areas: ["Chittoor", "Tirupati", "Chandragiri", "Renigunta"]
  },
  {
    id: uuidv4(),
    name: "Mango Lassi",
    description: "Refreshing yogurt-based drink blended with sweet mangoes and a hint of cardamom. Perfect for summer!",
    image: "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 40,
    category: "beverages",
    sizes: ["300ml", "500ml"],
    featured: true,
    inStock: true,
    areas: ["Chittoor", "Tirupati"]
  },
  {
    id: uuidv4(),
    name: "Masala Chai",
    description: "Traditional Indian spiced tea with ginger, cardamom, cinnamon and cloves. Served hot and fresh!",
    image: "https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 20,
    category: "beverages",
    sizes: ["Small", "Large"],
    featured: false,
    inStock: true,
    areas: ["Chittoor", "Tirupati", "Renigunta", "Chandragiri"]
  },
  {
    id: uuidv4(),
    name: "Butter Chicken",
    description: "Tender chicken cooked in a rich, tomato-based gravy with butter and cream. Served with naan bread.",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 180,
    category: "meals",
    sizes: ["Single", "Family Pack"],
    featured: true,
    inStock: true,
    areas: ["Chittoor", "Tirupati"]
  },
  {
    id: uuidv4(),
    name: "Mirchi Bajji",
    description: "Spicy green chillies stuffed with a tangy filling, dipped in chickpea batter and deep fried until golden. A local favorite!",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 20,
    category: "snacks",
    sizes: ["Regular (2 pcs)", "Large (4 pcs)"],
    featured: false,
    inStock: true,
    areas: ["Chittoor", "Tirupati", "Chandragiri"]
  },
  {
    id: uuidv4(),
    name: "Fresh Coconut Water",
    description: "Natural, refreshing coconut water straight from local farms. Served chilled in its original form.",
    image: "https://images.pexels.com/photos/1162455/pexels-photo-1162455.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 30,
    category: "beverages",
    sizes: ["Regular"],
    featured: false,
    inStock: true,
    areas: ["Chittoor", "Tirupati", "Renigunta", "Chandragiri"]
  },
  {
    id: uuidv4(),
    name: "Veg Biryani",
    description: "Fragrant basmati rice cooked with mixed vegetables, aromatic spices, and herbs. A delightful vegetarian option!",
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 120,
    category: "meals",
    sizes: ["Single", "Family Pack"],
    featured: false,
    inStock: true,
    areas: ["Chittoor", "Tirupati"]
  },
  {
    id: uuidv4(),
    name: "Kesar Kulfi",
    description: "Traditional Indian ice cream made with condensed milk, flavored with saffron and garnished with pistachios.",
    image: "https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 35,
    category: "desserts",
    sizes: ["Single", "Pack of 3"],
    featured: true,
    inStock: true,
    areas: ["Chittoor", "Tirupati"]
  },
  {
    id: uuidv4(),
    name: "Aloo Paratha",
    description: "Whole wheat flatbread stuffed with spiced potato filling, served with yogurt and pickle.",
    image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 50,
    category: "breakfast",
    sizes: ["Regular (2 pcs)", "Large (4 pcs)"],
    featured: false,
    inStock: true,
    areas: ["Chittoor", "Tirupati"]
  },
  {
    id: uuidv4(),
    name: "Mango Pickle",
    description: "Tangy and spicy traditional mango pickle made with raw mangoes, oil, and aromatic spices. Perfect accompaniment for meals!",
    image: "https://images.pexels.com/photos/6541810/pexels-photo-6541810.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 70,
    category: "condiments",
    sizes: ["100g", "250g"],
    featured: false,
    inStock: true,
    areas: ["Chittoor", "Tirupati", "Chandragiri", "Renigunta"]
  },
  {
    id: uuidv4(),
    name: "Sweet Jalebi",
    description: "Crispy, juicy, spiral-shaped sweet made by deep-frying batter and soaking in sugar syrup. A perfect sweet treat!",
    image: "https://images.pexels.com/photos/12737166/pexels-photo-12737166.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 60,
    category: "desserts",
    sizes: ["250g", "500g"],
    featured: true,
    inStock: true,
    areas: ["Chittoor", "Tirupati", "Chandragiri"]
  }
];

export const areas = [
  "Chittoor",
  "Tirupati",
  "Chandragiri",
  "Renigunta"
];

export const categories = [
  "beverages",
  "snacks",
  "meals",
  "desserts",
  "breakfast",
  "condiments"
];