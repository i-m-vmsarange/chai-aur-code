import React from "react";
import { createRoot } from "react-dom/client";
import { createElement } from "react";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit me
  </a>
);
const username = " | Chai aur code";
const reactElement2 = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  username,
);

createRoot(document.getElementById("root")).render(reactElement2);
