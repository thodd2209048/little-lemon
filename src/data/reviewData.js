const { default: images } = require("~/assets/images");

const reviewData = [
  {
    name: "Emma Johnson",
    address: "Sydney, Australia",
    img: images.cus001,
    rating: 5,
    comment:
      "I had a fantastic dining experience at this restaurant! The ambiance was trendy and inviting, the staff was friendly and attentive, and the food was absolutely delicious. I highly recommend this place for a memorable and enjoyable dining outing.",
  },
  {
    name: "Liam Wilson",
    address: "Evanston, US",
    img: images.cus002,
    rating: 4,
    comment:
      "I had an amazing dining experience at Little Lemon. The food was delectable, the service was exceptional, and the atmosphere was cozy. Highly recommended!",
  },
  {
    name: "Ethan Thompson",
    address: "Toronto, Canada",
    img: images.cus003,
    rating: 4,
    comment:
      "Little Lemon provides a decent Greek dining experience. The food is good, but the service falls short of expectations. Not outstanding, but not terrible either.",
  },
];

export default reviewData;
