const stdBtn = document.querySelector("#sui-toast-btn");
const v1Btn = document.querySelector("#sui-toast-btn-v1");
const v2Btn = document.querySelector("#sui-toast-btn-v2");
const v3Btn = document.querySelector("#sui-toast-btn-v3");

const toastWrapper = document.querySelector(".sui_toast_wrapper");
const stdToast = document.querySelector("#toast-std");
const v1Toast = document.querySelector("#toast-v1");
const v2Toast = document.querySelector("#toast-v2");
const v3Toast = document.querySelector("#toast-v3");

stdBtn.addEventListener("click", () => {
  showWrapper();
  stdToast.classList.add("show");
  setTimeout(() => {
    hideWrapper();
    stdToast.classList.remove("show");
  }, 3000);
});
v1Btn.addEventListener("click", () => {
  showWrapper();
  v1Toast.classList.add("show");
  setTimeout(() => {
    hideWrapper();
    v1Toast.classList.remove("show");
  }, 3000);
});
v2Btn.addEventListener("click", () => {
  showWrapper();
  v2Toast.classList.add("show");
  setTimeout(() => {
    hideWrapper();
    v2Toast.classList.remove("show");
  }, 3000);
});
v3Btn.addEventListener("click", () => {
  showWrapper();
  v3Toast.classList.add("show");
  setTimeout(() => {
    hideWrapper();
    v3Toast.classList.remove("show");
  }, 3000);
});
function showWrapper() {
  toastWrapper.classList.add("show");
}
function hideWrapper() {
  toastWrapper.classList.remove("show");
}
