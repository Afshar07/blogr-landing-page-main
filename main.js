const navTitle = document.getElementsByClassName("nav-heading");
const subItem = document.getElementsByClassName("sub-item");

if (window.innerWidth < 768) {
  for (let i = 0; i < navTitle.length; i++) {
    navTitle[i].addEventListener("click", function () {
      navTitle[i].nextElementSibling.classList.toggle("show");
    });
  }
}
