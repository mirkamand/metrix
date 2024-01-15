const main_container = document.querySelector(".main_container");
const hamburger_menu = document.querySelector(".hamburger_menu");
const menu_overlay = document.querySelector(".menu_overlay");
const search_overlay = document.querySelector(".search_overlay");
const search_btn = document.querySelector(".search_btn");
const primary_nav_wrapper = document.querySelector(".primary_nav_wrapper");

hamburger_menu.addEventListener("click", () => {
  hamburger_menu.classList.toggle("active");
  menu_overlay.classList.toggle("show");
  primary_nav_wrapper.classList.toggle("sticky_search");
});

window.addEventListener("scroll", function () {
  primary_nav_wrapper.classList.toggle("sticky", window.scrollY > 70);
});

search_btn.addEventListener("click", () => {
  main_container.classList.toggle("overflow_hidden");
  search_overlay.classList.toggle("show");
  primary_nav_wrapper.classList.toggle("sticky_search");
  search_btn.classList.toggle("active");
});

window.addEventListener("click", function (e) {
  if (e.target.classList.value == "search_overlay show") {
    search_overlay.classList.toggle("show");
    search_btn.classList.toggle("active");
    primary_nav_wrapper.classList.toggle("sticky_search");
  }
});

window.addEventListener("touchstart", function (e) {
  if (e.target.classList.value == "search_overlay show") {
    search_overlay.classList.toggle("show");
    search_btn.classList.toggle("active");
    primary_nav_wrapper.classList.toggle("sticky_search");
  }
});
