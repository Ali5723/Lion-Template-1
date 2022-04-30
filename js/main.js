var icon = document.getElementById("icon");
onload = function () {
    alert("This Website Not Responsive");
};
var menu = document.getElementById("menu");
icon.onclick = function () {
    if (menu.id == "show") {
        menu.id = "";
    }
    else {
        menu.id = "show";
    }
};
var Scroll = document.getElementById("scroll");
Scroll.onclick = function () {
    scrollTo(0, 0);
};
onscroll = function () { scrollFunction(); };
function scrollFunction() {
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
        Scroll.style.display = "flex";
    }
    else {
        Scroll.style.display = "none";
    }
}
