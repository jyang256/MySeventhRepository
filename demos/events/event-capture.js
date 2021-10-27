const section = document.querySelector("section");
const listItem = document.querySelector("ul>li:nth-child(2)");
const span = document.querySelector("span");
const anchor = document.querySelector("a");

section.addEventListener("click", () =>
  console.log("You clicked on the section")
);

listItem.addEventListener("click", () => {
  console.log("You clicked on the list item");
});

span.addEventListener("click", () => {
  console.log("You clicked on the span");
});

document.addEventListener("click", (event) => {
  console.log("You clicked in the document somewhere!");
  event.preventDefault();
});

anchor.addEventListener("click", (event) => {
  console.log("You might miss this, but you clicked on the anchor tag.");
  // event.preventDefault();
});
