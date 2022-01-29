// Header
const header = document.querySelector("header");
const h1 = document.createElement("h1");
h1.innerHTML = "U";
const img = document.createElement("img");
img.src = "/assets/starling.svg";
img.alt = "Starling";
header.appendChild(h1);
header.appendChild(img);

// Nav
const nav = document.querySelector("nav");
const selectedChild = location.pathname.split("/").pop().split(".")[0];
console.log(selectedChild);
const getStarted = ["Usage", "Colors", "Typography"];
const components = [
  "Avatar",
  "Badge",
  "Alert",
  "Button",
  "Card",
  "Image",
  "Input",
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
