// ////////////////////////////////////////////////////
// Make mobile nav work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".nav-wrap");
const navLinksEl = document.querySelectorAll(".links");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

navLinksEl.forEach(function (link) {
  link.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
});

// ////////////////////////////////////////////////////
//  Sticky nav
const sectionHomeEl = document.querySelector(".section-home");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.querySelector(".header").classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHomeEl);

// ////////////////////////////////////////////////////
// Scroll effect setting 이미지 떠오르는 효과
// Google search scrollreveal
const scrollRevealOperation = {
  distance: "5rem",
  origin: "bottom",
  duration: 1000, // 1s
};

// Header container scroll effect
ScrollReveal().reveal(".profile-img", {
  ...scrollRevealOperation,
  interval: 500, //간격
});

// News container scroll effect
ScrollReveal().reveal(".project-img", {
  ...scrollRevealOperation,
  interval: 500,
});

// ////////////////////////////////////////////////////
// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation
    // if (link.classList.contains("main-nav-link"))
    //   headerEL.classList.toggle("nav-open");
  });
});

// ////////////////////////////////////////////////////
// Project hover

const ProjectImgWrap = document.querySelectorAll(".project-img-wrap");
const forHover = document.querySelectorAll(".for-hover");

ProjectImgWrap.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    this.querySelector(".for-hover").classList.add("show-hover");
  });

  element.addEventListener("mouseout", function () {
    this.querySelector(".for-hover").classList.remove("show-hover");
  });
});
///////////////////////////////////////////////////////////
// set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;
