import HomePage from "~/layout/pages/HomePage/HomePage";
import MenuPage from "~/layout/pages/MenuPage/MenuPage";

// Public routes
const publicRoutes = [
  { path: "/", component: HomePage },
  {
    path: "/menu",
    component: MenuPage,
  },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
