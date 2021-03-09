const btn = document.querySelector(".btn");
const desc = document.querySelector(".desc");
const modalBtn = document.querySelector(".modal-btn");
const modalBody = document.querySelector(".modal");

btn.addEventListener("click", (target) => {
  console.log(target);
  desc.style.color = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${
    Math.random() * 100
  })`;
});

modalBtn.addEventListener("click", () => {
  modalBody.classList.toggle("modal-active");
});
