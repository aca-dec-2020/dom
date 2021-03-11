document.querySelector(".card").addEventListener(
  "click",
  () => {
    console.log("card");
  },
  { capture: true }
);

document.querySelector(".header").addEventListener(
  "click",
  () => {
    console.log("header");
  },
  { capture: true }
);

document.querySelector(".img").addEventListener("click", (event) => {
  // event.stopPropagation();
  console.log("img");
});
