const navBurgerBtn = document.querySelector("#nav-burger");
const mobileNav = document.querySelector(".collapsed_cta");

navBurgerBtn.addEventListener("click", () => {
  mobileNav.classList.contains("hide_cta")
    ? mobileNav.classList.remove("hide_cta")
    : mobileNav.classList.add("hide_cta");
});
