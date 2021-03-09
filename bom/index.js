console.log("BOM Started!");

if (window.location.pathname.includes("/bom")) {
  console.log("HAS BOM SUBPATH!");
}

console.log(window.location.search);
const queryString = window.location.search;

console.log(
  queryString
    .substr(1)
    .split("&")
    .map((s) => {
      const [key, value] = s.split("=");
      return { [key]: value };
    })
);
