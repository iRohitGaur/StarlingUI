const stdBtn = document.querySelector("#sui-toast-btn");
const v1Btn = document.querySelector("#sui-toast-btn-v1");
const v2Btn = document.querySelector("#sui-toast-btn-v2");
const v3Btn = document.querySelector("#sui-toast-btn-v3");

const stdToast = document.querySelector("#toast-std");
const v1Toast = document.querySelector("#toast-v1");
const v2Toast = document.querySelector("#toast-v2");
const v3Toast = document.querySelector("#toast-v3");

stdBtn.addEventListener("click", () => {
  console.log("test");
  stdToast.classList.add("show");
  setTimeout(() => {
    stdToast.classList.remove("show");
  }, 3000);
});
v1Btn.addEventListener("click", () => {
  console.log("test");
  v1Toast.classList.add("show");
  setTimeout(() => {
    v1Toast.classList.remove("show");
  }, 3000);
});
v2Btn.addEventListener("click", () => {
  console.log("test");
  v2Toast.classList.add("show");
  setTimeout(() => {
    v2Toast.classList.remove("show");
  }, 3000);
});
v3Btn.addEventListener("click", () => {
  console.log("test");
  v3Toast.classList.add("show");
  setTimeout(() => {
    v3Toast.classList.remove("show");
  }, 3000);
});
