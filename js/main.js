var button_light = document.getElementById("light");
const body_document = document.getElementById("body");

var state_of_dark_theme;
state_of_dark_theme = false;
var root = document.documentElement;
function loge() {
  console.log(localStorage.getItem("Dark_mode"));
}
if (localStorage.getItem("Dark_mode") == "light") {
  button_light.style.left = 1 + "px";
  state_of_dark_theme = false;
  root.style.setProperty("--page-bg", "#fff");
  root.style.setProperty("--color-text", "#000");
  console.log(localStorage.getItem("Dark_mode"));
} else if (localStorage.getItem("Dark_mode") == "dark") {
  button_light.style.left = 27 + "px";
  state_of_dark_theme = true;
  root.style.setProperty("--page-bg", "#252526");
  root.style.setProperty("--color-text", "#fff");
}

function themeChanger() {
  if (button_light.style.left == 27 + "px") {
    button_light.style.left = 1 + "px";
    state_of_dark_theme = false;
    root.style.setProperty("--page-bg", "#fff");
    root.style.setProperty("--color-text", "#000");
    localStorage.setItem("Dark_mode", "light");
    loge();
  } else {
    button_light.style.left = 27 + "px";
    state_of_dark_theme = true;
    root.style.setProperty("--page-bg", "#252526");
    root.style.setProperty("--color-text", "#fff");
    localStorage.setItem("Dark_mode", "dark");
    loge();
  }
}
