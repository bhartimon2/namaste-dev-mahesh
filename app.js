/**
 *
 * <div id="parent">
 *  <div id="child1">
 *      <h1 id="heading">hello react</h1>
 *      <h2 id="heading">hello sibling element</h2>
 *   </div>
 * *  <div id="child2">
 *      <h1 id="heading">hello react</h1>
 *      <h2 id="heading">hello sibling element</h2>
 *   </div>
 * </div>
 *
 *
 * reactElement(object) ====> HTMl(Browser understand)
 *
 *
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
[
    React.createElement("div", { id: "child1" }, [
        React.createElement(
          "h1",
          { id: "heading" },
          "Nested tag ===> Hello guys!! welcome to react"
        ),
        React.createElement(
          "h2",
          { id: "heading" },
          "Nested tag ===> Hello guys!! welcome to react"
        ),
      ]),
      React.createElement("div", { id: "child2" }, [
        React.createElement(
          "h1",
          { id: "heading" },
          "Nested tag ===> Hello guys!! welcome to react"
        ),
        React.createElement(
          "h2",
          { id: "heading" },
          "Nested tag ===> Hello guys!! welcome to react"
        ),
      ])
]
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello guys!! welcome to react..."
);
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // this will convert object into heading and render in dom
