import Home from "./home.page";
import About from "./about.page";
import Contact from "./contact.page";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/contact",
    element: Contact,
  },
];
