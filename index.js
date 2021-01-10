window.addEventListener("click", function (e) {
  console.log(e)
  window.target = e.target
  if (e.target.id == "menu") toggleMenu();
  if (e.target.tagName == "A") toggleMenu();
  if (e.target.classList.contains("bgImage")) openLightBox(e);
  if (["lightBox", "closeLightBox"].includes(e.target.id)) closeLightBox();
});

function toggleMenu() {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.classList.add("unShow");
  } else {
    menu.classList.add("show");
    menu.classList.remove("unShow");
  }
}

function openLightBox(e) {
  let image = e.target.style.backgroundImage.replace(`url("`,"").replace(`")`,"")
  console.log(image);
  lightBox.classList.add("show");
  lightBoxImage.src = image;
}

function closeLightBox() {
  lightBox.classList.remove("show");
}


