const input = document.querySelector("input");
const ul = document.querySelector(".todo-container");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);

    li.addEventListener("click", (event) => {
      event.target.classList.toggle("checked");
    });

    input.value = "";
  }
});

input.addEventListener("input", (event) => {
  if (event.target.value.trim() !== "") {
    // btn.disabled = true;
    btn.removeAttribute("disabled");
  }
});
