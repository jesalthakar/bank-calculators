import { elements } from "chart.js";
import React from "react";
import Cards from "../Cards";
import { useRoutes } from "react-router-dom";

const CardsRoute = () => {
  const ROUTES = [
    {
      path: "/",
      element: <Cards />,
    },
  ];
  let routes = useRoutes(ROUTES);
  return routes;
};

export default CardsRoute;
