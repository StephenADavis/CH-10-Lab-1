/*
  Student Name: Stephen Davis
  File Name: script:js
  Date: November 15, 2002
*/

//Hamburger menu Function
function hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
