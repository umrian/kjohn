import "./styles/main.scss";
import TagCloud from "TagCloud";

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
  "git",
  "REST API",
];
const options = {
  radius: 170,
  maxSpeed: "normal",
  initSpeed: "slow",
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
