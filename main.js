const navTitle = document.getElementsByClassName("nav-heading");
const subItem = document.getElementsByClassName("sub-item");
const navBar = document.querySelector(".navbar");
const hamburgerMenu = document.querySelector(".hamburger-menu");

// Make the Hamburger menu work
hamburgerMenu.addEventListener("click", function () {
    navBar.classList.toggle("burger");
});

// Only in mobile design
if (window.innerWidth < 768) {
  for (let i = 0; i < navTitle.length; i++) {
    navTitle[i].addEventListener("click", function () {
      // Showing the contents of the menu and changing the arrow icon Upwards
      navTitle[i].nextElementSibling.classList.toggle("show");
      navTitle[i].classList.toggle("active");
      }
    );
  }
}
