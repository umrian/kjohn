import "./styles/main.scss";
import TagCloud from "TagCloud";

//copyright date
document.getElementById("date").innerHTML = new Date().getFullYear();

// TAG CLOUD
const container = ".tagcloud";
const texts = [
  "React",
  "Nextjs",
  "Typescript",
  "CSS3",
  "HTML5",
  "Javascript",
  "SCSS",
  "Bootstrap",
  "Material UI",
  "Tailwind",
  "Vite",
  "Webpack",
  "NodeJS",
  "MongoDB",
  "ExpressJS",
  "Prisma",
  "tRPC",
  "Jest",
  "Redux",
  "GraphQL",
  "Figma",
  "Git",
  "REST API",
];
const options = {
  radius: 180,
  maxSpeed: "normal",
  initSpeed: "normal",
  direction: 145,
  keep: true,
};

const mqSmall = window.matchMedia("(min-width: 640px)");
const mqMedium = window.matchMedia("(min-width: 960px)");
const mqLarge = window.matchMedia("(min-width: 1440px)");

if (mqSmall.matches) {
  options.radius = 300;
}
if (mqMedium.matches) {
  options.radius = 340;
}
if (mqLarge.matches) {
  options.radius = 380;
}
TagCloud(container, texts, options);

// INTERACTION OBSERVER
const observerOptions = {
  threshold: 1,
  rootMargin: "0px 0px -10px 0px",
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) {
      return;
    } else {
      e.target.classList.add("show");
      observer.unobserve(e.target);
    }
  });
}, observerOptions);

const articles = document.querySelectorAll(".project-details");
const hiddenElements = Array.from(articles).map((article) =>
  Array.from(article.children)
);

hiddenElements.forEach((hiddenElement) =>
  hiddenElement.forEach((e) => observer.observe(e))
);
