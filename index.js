window.addEventListener("click", function (e) {
  console.log(e)
  window.target = e.target
  if (e.target.id == "menu") toggleMenu();
  if (e.target.tagName == "A") closeMenu();
  if (e.target.classList.contains("bgImage")) openLightBox(e);
  if (["lightBox", "closeLightBox"].includes(e.target.id)) closeLightBox();
  if(e.target.id="openSignup") openPlaytestSignup();
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

function closeMenu(){
  menu.classList.remove("show");
  menu.classList.add("unShow");
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

function openPlaytestSignup(){
  let html = `<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSepksc_J3nV8gVws4z7ygCzyyWdTB2zMZJJlZqII5L_b6AUnQ/viewform?embedded=true" width="640" height="852" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`
  signup.innerHTML = html;
}

