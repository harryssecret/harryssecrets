const hamburgerMenu = document.querySelector("#burger-menu");

hamburgerMenu?.addEventListener("click", (event) => {
  document.querySelector("nav ul")?.classList.toggle("toggled");
});
