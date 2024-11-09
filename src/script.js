
const menu = document.getElementById("menu");
const menuContent = document.getElementById("menuContent");

menu.addEventListener("click", function () {
  if (menuContent.style.height === "0px" || menuContent.style.height === "") {
    menuContent.style.height = "150px";
  } else {
    menuContent.style.height = "0px";
  }
});

const fixedMenu = document.getElementById("fixedMenu");
const fixedMenuContent = document.getElementById("fixedMenuContent");

fixedMenu.addEventListener("click", function () {
  console.log("fixed button is clicked");
  if (
    fixedMenuContent.style.height === "0px" ||
    fixedMenuContent.style.height === ""
  ) {
    fixedMenuContent.style.height = "150px";
  } else {
    fixedMenuContent.style.height = "0px";
  }
});

window.addEventListener("scroll", function () {
  const navbarLg = document.getElementById("navbar-lg");
  const navbarSm = document.getElementById("navbar-sm");
  const scrollHeight = window.innerHeight;

  if (window.scrollY >= scrollHeight) {
    if (navbarLg) {
      navbarLg.classList.remove("-translate-y-full");
      navbarLg.classList.add("translate-y-0");
    }
    if (navbarSm) {
      navbarSm.classList.remove("-translate-y-full");
      navbarSm.classList.add("translate-y-0");
    }
  } else {
    if (navbarLg) {
      navbarLg.classList.add("-translate-y-full");
      navbarLg.classList.remove("translate-y-0");
    }
    if (navbarSm) {
      navbarSm.classList.add("-translate-y-full");
      navbarSm.classList.remove("translate-y-0");
    }
  }
});
let myContainer1 = document.querySelector("#container");
let myContainer2 = document.querySelector("#container2");  // Fixed selector
let myContainer3 = document.querySelector("#container3");
let myContainer4 = document.querySelector("#container4");

let myButton = document.querySelector("#clickme");
let myButton2 = document.querySelector("#clickme2");
let myButton3 = document.querySelector("#clickme3");
let myButton4 = document.querySelector("#clickme4");

let arrowIcon = document.querySelectorAll("#arrowIcon")

let condition1 = true;
let condition2 = true;
let condition3 = true;
let condition4 = true;

myButton.addEventListener("click", function () {
  if (condition1) {
    myContainer1.style.transition = "height 0.5s ease";
    myContainer1.style.height = "100px";
    condition1 = false;
  } else {
    myContainer1.style.height = "33px";
    condition1 = true;
  }
});

myButton2.addEventListener("click", function () {
  if (condition2) {
    myContainer2.style.transition = "height 0.5s ease";
    myContainer2.style.height = "100px";
    condition2 = false;
  } else {
    myContainer2.style.height = "33px";
    condition2 = true;
  }
});

myButton3.addEventListener("click", function () {
  if (condition3) {
    myContainer3.style.transition = "height 0.5s ease";
    myContainer3.style.height = "100px";
    condition3 = false;
  } else {
    myContainer3.style.height = "33px";
    condition3 = true;
  }
});

myButton4.addEventListener("click", function () {
  if (condition4) {
    myContainer4.style.transition = "height 0.5s ease";
    myContainer4.style.height = "100px";
    condition4 = false;
  } else {
    myContainer4.style.height = "33px";
    condition4 = true;
  }
});


arrowIcon.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("button was clicked by khaista rahman")
  if (btn.classList.contains("fa-chevron-down")) {
    btn.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else {
    btn.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
  })
})