import type { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    title: "E-Book: Learn Nuxt 3",
    description:
      "A comprehensive guide to mastering Nuxt 3 for web development.",
    price: "$29.99",
    quantity: 0,
    image: "https://via.placeholder.com/200x200.png?text=E-Book",
  },
  {
    id: 2,
    title: "Web Design Template",
    description: "A responsive web design template for modern websites.",
    price: "$49.99",
    quantity: 0,
    image: "https://via.placeholder.com/200x200.png?text=Template",
  },
  {
    id: 3,
    title: "Stock Photos Bundle",
    description: "A collection of high-quality stock photos for your projects.",
    price: "$19.99",
    quantity: 0,
    image: "https://via.placeholder.com/200x200.png?text=Photos",
  },
];
