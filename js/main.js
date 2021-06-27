let mobileMenuBtn = document.querySelector("#mobileMenuBtn");
let mobileMenu = document.querySelector("#mobileMenu");
let body = document.querySelector("body");
const navButtons = ["#btnMenuProduct", "#btnMenuCompany", "#btnMenuConnect"];

function toggleSubMenu(selectedBtn) {
  navButtons.forEach((navButton) => {
    if (navButton != selectedBtn) {
        document
        .querySelector(navButton)
        .nextElementSibling.classList.remove("openSubMenu");
        document
        .querySelector(navButton)
        .classList.remove("rotate");
    } else {
        document
        .querySelector(selectedBtn)
        .nextElementSibling.classList.toggle("openSubMenu");
        document
        .querySelector(selectedBtn)
        .classList.toggle("rotate");
    }
  });
}

function toggleMobileMenu() {
  if (mobileMenuBtn.classList.contains("isOpen")) {
    console.log("closing");
    mobileMenuBtn.classList.remove("isOpen");
    mobileMenu.classList.remove("openedMenu");
    toggleSubMenu("closingSubs");
    body.classList.remove("overflowHidden");

  } else {
    console.log("opening");
    mobileMenuBtn.classList.add("isOpen");
    mobileMenu.classList.add("openedMenu");
    body.classList.add("overflowHidden");
  }
}

function init() {
  console.log("Hi");
  mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  document
    .querySelector("#btnMenuProduct")
    .addEventListener("click", function () {
      toggleSubMenu("#btnMenuProduct");
    });
  document
    .querySelector("#btnMenuCompany")
    .addEventListener("click", function () {
      toggleSubMenu("#btnMenuCompany");
    });
  document
    .querySelector("#btnMenuConnect")
    .addEventListener("click", function () {
      toggleSubMenu("#btnMenuConnect");
    });
}

window.onload = init();
