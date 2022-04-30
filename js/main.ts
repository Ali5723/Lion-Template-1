let icon: HTMLElement = document.getElementById("icon");
onload = () => {
  alert("This Website Not Responsive")
}
let menu: HTMLElement = document.getElementById("menu");
icon.onclick = () => {
  if (menu.id == "show") {
    menu.id = "";
  } else {
    menu.id = "show";
  }
};

let Scroll: HTMLElement = document.getElementById("scroll");
Scroll.onclick = () => {
  scrollTo(0, 0);
};
onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
    Scroll.style.display = "flex";
  } else {
    Scroll.style.display = "none";
  }
}