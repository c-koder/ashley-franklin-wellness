import Home from "./home.page";
import About from "./about.page";
import Contact from "./contact.page";
import FAQ from "./faq.page";
import WhatToExpect from "./whattoexpect.page";
import Specialties from "./specialties.page";
import Services from "./services.page";

export const routes = [
  {
    path: "/",
    name: "Home",
    element: Home,
  },
  {
    path: "/about",
    name: "About",
    element: About,
  },
  {
    path: "/services",
    name: "Services",
    element: Services,
  },
  {
    path: "/specialties",
    name: "Specialties",
    element: Specialties,
  },
  {
    path: "/what-to-expect",
    name: "WhatToExpect",
    element: WhatToExpect,
  },
  {
    path: "/contact",
    name: "Contact",
    element: Contact,
  },
  {
    path: "/faq",
    name: "FAQ",
    element: FAQ,
  },
];
