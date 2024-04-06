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
  {
    path: "/faq",
    element: FAQ,
  },
  {
    path: "/what-to-expect",
    element: WhatToExpect,
  },
  {
    path: "/specialties",
    element: Specialties,
  },
  {
    path: "/services",
    element: Services,
  },
];
