const burgerBtn = document.querySelector("#burger");
const mobileNav = document.querySelector(".collapsed_cta");

burgerBtn.addEventListener("click", () => {
  mobileNav.classList.contains("hide_cta")
    ? mobileNav.classList.remove("hide_cta")
    : mobileNav.classList.add("hide_cta");
});
