import BookingPage from "~/pages/BookingPage/BookingPage";
import BookingPageDisplay2 from "~/pages/BookingPage/BookingPageDisplay2/BookingPageDisplay2";
import HomePage from "~/pages/HomePage/HomePage";
import MenuPage from "~/pages/MenuPage/MenuPage";

// Public routes
const publicRoutes = [
  { path: "/", component: HomePage },
  {
    path: "/menu",
    component: MenuPage,
  },
  {
    path: "/booking",
    component: BookingPage,
  },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
