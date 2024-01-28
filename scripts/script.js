const main_container = document.querySelector(".main_container");
const hamburger_menu = document.querySelector(".hamburger_menu");
const menu_overlay = document.querySelector(".menu_overlay");
const search_overlay = document.querySelector(".search_overlay");
const search_btn = document.querySelector(".search_btn");
const primary_nav_wrapper = document.querySelector(".primary_nav_wrapper");
const btns_toggle = document.querySelectorAll("[data-toggle]");
const active_page = window.location.pathname;

const nav_links = document.querySelectorAll(".nav_items a");

nav_links.forEach((link) => {
  if (link.href.includes(`${active_page}`)) {
    link.classList.add("active");
    console.log(active_page);
  }
});

window.addEventListener("scroll", function () {
  primary_nav_wrapper.classList.toggle("sticky", window.scrollY > 60);
});

// let active_btn = null;

// btns_toggle.forEach((btn_toggle) => {
//   btn_toggle.addEventListener("click", (e) => {
//     if (active_btn === btn_toggle) {
//       active_btn.classList.toggle("active");
//       active_btn = btn_toggle.classList.contains("active") ? btn_toggle : null;
//       console.log(`if is done`);
//     } else {
//       btns_toggle.forEach((other_btn) => {
//         other_btn.classList.remove("active");
//         console.log(`else is done}`);
//       });
//       btn_toggle.classList.add("active");
//       active_btn = btn_toggle;
//     }
//   });
// });

// btns_toggle[0].addEventListener("click", (e) => {
//   search_overlay.classList.add("show");
//   menu_overlay.classList.remove("show");
//   primary_nav_wrapper.classList.add("sticky_search");
// });

// btns_toggle[1].addEventListener("click", (e) => {
//   search_overlay.classList.remove("show");
//   menu_overlay.classList.add("show");
//   primary_nav_wrapper.classList.add("sticky_search");
// });

hamburger_menu.addEventListener("click", () => {
  hamburger_menu.classList.toggle("active");
  if (hamburger_menu.classList.contains("active")) {
    menu_overlay.classList.add("show");
    primary_nav_wrapper.classList.add("sticky_search");
  } else {
    menu_overlay.classList.remove("show");
    primary_nav_wrapper.classList.remove("sticky_search");
  }
});

search_btn.addEventListener("click", () => {
  search_btn.classList.toggle("active");
  if (search_btn.classList.contains("active")) {
    main_container.classList.add("overflow_hidden");
    search_overlay.classList.add("show");
    primary_nav_wrapper.classList.add("sticky_search");
  } else {
    main_container.classList.remove("overflow_hidden");
    search_overlay.classList.remove("show");
    primary_nav_wrapper.classList.remove("sticky_search");
  }
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

// Swiper Slide Section

var swiper = new Swiper(".banner_slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".swiper_blogs", {
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 10,
      slidesOffsetAfter: 80,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
