const showBtn = document.querySelector("#sui-show-modal");
const closeBtn = document.querySelector("#sui-close-modal");
const modal = document.querySelector("#sui-modal");

showBtn.addEventListener("click", () => {
  modal.classList.add("visible");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("visible");
});
