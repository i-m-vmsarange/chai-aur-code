function customRender(reactElement, mainContainer) {
  const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children;

  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  mainContainer.appendChild(domElement);
}

const mainContainer = document.querySelector("#root");
/**
 * Now we want to render anchor tag exactly how it will be rendered in React
 */

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

/**
 * Now we need a method which will inject our reactElement in our root element in Dom
 */

customRender(reactElement, mainContainer);
