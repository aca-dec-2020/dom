console.log("Forms");

const userNameField = document.querySelector(".user-name");
const btn = document.querySelector(".user-submit-btn");
console.log(userNameField);
const error = document.querySelector(".error");

// version 1
// userNameField.addEventListener("input", (event) => {
//   const username = event.target.value;

//   if (username.trim() === "") {
//     console.log("empty value");
//   }

//   if (username.trim().length < 5) {
//     console.log("username is short");
//     error.style.display = "block";
//   } else {
//     error.style.display = "none";
//   }
// });

// version 2
document.querySelector(".user-submit-btn").addEventListener("click", () => {
  const username = userNameField.value;
  if (username.trim().length < 5) {
    console.log("username is short");
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});
