console.log("hello");
const btn = document.querySelector(".submit-btn");
const input = document.querySelector(".search-input");
// const paragraph = document.querySelector(".paragraph");

btn.addEventListener("click", (event) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = input.value;
  // document.querySelector(".container").innerHTML = "<p>hello</p>";
  console.log("par::", paragraph);
  document.querySelector(".container").append(paragraph);

  input.value = "";
});

input.addEventListener("input", (event) => {
  const value = event.target.value;

  if (event.data === "+" && value.includes("+")) {
    event.target.value = value.slice(0, value.length - 1);
    return;
  }

  const normalizedValue = value
    .replace("+", "")
    .split("")
    .reduce((acc, el, index) => {
      if ((index + 1) % 4 === 0 && el !== " ") {
        return `${acc} ${el}`;
      }

      return `${acc}${el}`;
    }, "");
  event.target.value = `+${normalizedValue}`;
});

// 4 => +374 443 433
// 3 => +37
