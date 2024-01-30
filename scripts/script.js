window.addEventListener("DOMContentLoaded", (e) => {
  const main_container = document.querySelector(".main_container");
  const hamburger_menu = document.querySelector(".hamburger_menu");
  const menu_overlay = document.querySelector(".menu_overlay");
  const search_overlay = document.querySelector(".search_overlay");
  const search_btn = document.querySelector(".search_btn");
  const primary_nav_wrapper = document.querySelector(".primary_nav_wrapper");
  const btns_toggle = document.querySelectorAll("[data-toggle]");
  const active_page = window.location.href;
  const projects_tabs = document.querySelectorAll(".projects .tab_btn");
  const all_projects = document.querySelectorAll(
    ".projects .projects_container"
  );

  const nav_links = document.querySelectorAll(".nav_items a");

  nav_links.forEach((link) => {
    if (link.href === active_page) {
      link.classList.add("active");
    }
  });

  window.addEventListener("scroll", function () {
    primary_nav_wrapper.classList.toggle("sticky", window.scrollY > 60);
  });

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

  projects_tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
      projects_tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");

      var line = document.querySelector(".projects .line");
      line.style.width = e.target.offsetWidth + "px";
      line.style.left = e.target.offsetLeft + "px";

      all_projects.forEach((project) => {
        project.classList.remove("show");
      });
      all_projects[index].classList.add("show");
    });
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

  // Swiper Projects

  var swiper = new Swiper(".swiper_projects", {
    grid: {
      rows: 2,
    },
    spaceBetween: 5,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        // slidesOffsetAfter: 80,
      },
      900: {
        slidesPerView: 2,
      },
      1350: {
        slidesPerView: 3,
      },
    },
  });
});
