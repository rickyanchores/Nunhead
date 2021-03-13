let dark = document.querySelector("#dark");
let light = document.querySelector("#light");

dark.addEventListener("click", () => {
	document.body.style.background = "black";
  document.body.style.color = "#ccc";
  document.body.style.transition = "0.5s ease-in";
})

light.addEventListener("click", () => {
	document.body.style.background = "";
  document.body.style.color = "";
  document.body.style.transition = "0.5s ease-in";
})