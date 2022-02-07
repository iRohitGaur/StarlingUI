const logo = document.querySelector("#sui_logo");
const brandText = document.querySelector("#sui_brand_text");

if (window.innerWidth > 768) {
  setTimeout(() => shrink("Starling UI"), 5000);
}

function shrink(text) {
  if (text.length > 2) {
    const newTxt = text.slice(1);
    brandText.textContent = newTxt;
    setTimeout(() => shrink(newTxt), 5);
  } else if (text.length > 1) {
    brandText.textContent = "U";
    shrink("U");
  } else {
    logo.style.transform = "translateX(80px)";
    brandText.style.transform = "translateX(-150px)";
  }
}

document.querySelector("#getStarted").addEventListener("click", () => {
  window.location = "./pages/getting-started/usage.html";
});
document.querySelector("#docs").addEventListener("click", () => {
  window.location = "./pages/components/avatar/avatar.html";
});
