import Home from "./home.page";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "*",
    element: Home,
  },
];
