"use strict";

const signInBtn = document.getElementById("signIn");

const areaSignIn = document.querySelector(".area");

const closeArea = document.querySelector(".btnClose");

const addArea = signInBtn.addEventListener("click", () => {
  areaSignIn.classList.remove("hidden");
});

const removeArea = closeArea.addEventListener("click", () => {
  areaSignIn.classList.add("hidden");
});
