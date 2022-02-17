// Header
const header = document.querySelector("header");
const logoWrapper = document.createElement("div");
const h1 = document.createElement("h1");
h1.innerHTML = "U";
const img = document.createElement("img");
img.src = "/assets/starling.svg";
img.alt = "Starling";
logoWrapper.appendChild(h1);
logoWrapper.appendChild(img);
logoWrapper.style = "cursor: pointer";
logoWrapper.addEventListener("click", () => (window.location = "/"));
header.appendChild(logoWrapper);
const ctaWrapper = document.createElement("div");
const ih =
  '<button id="mode" class="sui_btn btn_icon_fa"><i id="mode-btn" class="fas fa-lightbulb"></i></button><button id="github" class="sui_btn btn_icon_fa"><i class="fab fa-github"></i></button><button id="twitter" class="sui_btn btn_icon_fa"><i class="fab fa-twitter"></i></button><button id="burger" class="sui_btn btn_icon_fa"><i class="fas fa-bars"></i></button>';
ctaWrapper.innerHTML = ih;
header.appendChild(ctaWrapper);

// Nav
const nav = document.querySelector("nav");
const selectedChild = location.pathname.split("/").pop().split(".")[0];
const getStarted = ["Usage", "Colors", "Typography"];
const components = [
  "Avatar",
  "Badge",
  "Alert",
  "Button",
  "Card",
  "Image",
  "Input",
  "Lists",
  "Navigation",
  "Modal",
  "Rating",
  "Toast",
  "Grid",
];
createNavElement("Get Started", false, true);
getStarted.forEach((item) => createNavElement(item, false, false));
createNavElement("Components", false, true);
components.forEach((item) => createNavElement(item, true, false));

function createNavElement(item, component, title) {
  const child = document.createElement("div");
  title
    ? (child.className = "starling_nav_title")
    : (child.className = "starling_nav_item");
  item.toLowerCase() === selectedChild
    ? child.classList.add("selected")
    : addListener(item, child, component);
  child.innerHTML = item;

  nav.appendChild(child);
}

function addListener(item, child, component) {
  child.addEventListener("click", () => {
    const lowerCasedItem = item.toLowerCase();
    const path = component
      ? `/pages/components/${lowerCasedItem}/${lowerCasedItem}.html`
      : `/pages/getting-started/${lowerCasedItem}.html`;
    location = path;
  });
}

const burger = document.querySelector("#burger");
burger.addEventListener("click", () => toggleNav());

const vwListener = window.matchMedia("(max-width: 768px)");
vwListener.addEventListener("change", () => {
  toggleNav();
  toggleBurger();
});

const weAreAtRoot =
  location.pathname == "/" || window.location.href.indexOf("Index") > -1;

if (window.innerWidth < 769) {
  nav.className = "collapsed";
  if (weAreAtRoot) {
    burger.classList.add("collapsed");
  }
} else {
  burger.classList.add("collapsed");
}

function toggleNav() {
  if (!weAreAtRoot) {
    nav.classList.contains("collapsed")
      ? (nav.className = "")
      : (nav.className = "collapsed");
  }
}
function toggleBurger() {
  if (!weAreAtRoot) {
    burger.classList.contains("collapsed")
      ? burger.classList.remove("collapsed")
      : burger.classList.add("collapsed");
  }
}

document
  .querySelector("#github")
  .addEventListener("click", () =>
    window.open(
      "https://github.com/iRohitGaur/StarlingUI",
      "_blank",
      "noopener,noreferrer"
    )
  );
document
  .querySelector("#twitter")
  .addEventListener("click", () =>
    window.open(
      "https://twitter.com/iRohitGaur",
      "_blank",
      "noopener,noreferrer"
    )
  );

// DARK MODE
const modeBtn = document.querySelector("#mode-btn");

if (localStorage.getItem("sui-mode") === "dark") {
  setLightmode(false);
} else {
  setLightmode(true);
}

document.querySelector("#mode").addEventListener("click", () => {
  if (modeBtn.classList.contains("fa-moon")) {
    setLightmode(true);
    localStorage.setItem("sui-mode", "light");
  } else {
    setLightmode(false);
    localStorage.setItem("sui-mode", "dark");
  }
});

function setLightmode(light) {
  if (light) {
    modeBtn.className = "fas fa-lightbulb";
    document.documentElement.setAttribute("sui-mode", "light");
  } else {
    modeBtn.className = "fas fa-moon";
    document.documentElement.setAttribute("sui-mode", "dark");
  }
}
