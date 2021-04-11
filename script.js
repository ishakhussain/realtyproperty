"use strict";

const openModal = document.querySelector(".open-modal");
const signUpBtn = document.querySelector(".btn");
signUpBtn.addEventListener("click", function () {
  openModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", function () {
  console.log("button");
  openModal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// Close modal when pressing esc

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !openModal.classList.contains("hidden")) {
    openModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
