// const header = document.getElementsByTagName("h1");
// const paragraphs = document.getElementsByTagName("p");

// const header = document.getElementsByClassName("title");
// const paragraph = document.getElementsByClassName("text");

// const header = document.getElementById("header");

const header = document.querySelector("#header");
const paragraphs = document.querySelectorAll(".text");

// header.style.color = "rgba(0, 0, 0, 0.5)";
header.style.textAlign = "center";

if (window.location.pathname.includes("/intro")) {
  header.classList.add("blue");
}

header.classList.toggle("title");
