const { default: images } = require("~/assets/images");

const dishes = [
  {
    name: "Greek Salad",
    price: 12.99,
    description:
      "Indulge in the flavors of Greece with our Greek Salad, a vibrant medley of fresh vegetables, feta cheese, and tangy olives.",
    img: images.dish001,
    special: true,
  },
  {
    name: "Moussaka",
    price: 5.5,
    description:
      "Experience the rich and hearty flavors of Greece with our Moussaka, a delicious layered casserole of eggplant, potatoes, and savory meat.",
    img: images.dish002,
    special: true,
  },
  {
    name: "Spanakopita",
    price: 5,
    description:
      "Discover the culinary delight of Greece with our Spanakopita, a savory pastry filled with spinach, feta cheese, and aromatic herbs.",
    img: images.dish003,
    special: true,
  },
];

export default dishes;
