import dropDown from "./dropDown";
import { nextFrame, previousFrame, selectFrame } from "./carousel";
import "./style.css";

const dropDownButton = document.getElementById("drop-down-button");
dropDownButton.addEventListener("click", () => dropDown());

const scrollLeft = document.getElementById("scroll-left");
scrollLeft.addEventListener("click", () => {
  nextFrame();
});

const scrollRight = document.getElementById("scroll-right");
scrollRight.addEventListener("click", () => {
  previousFrame();
});

const frameButtons = document.querySelectorAll(".carousel-select");
frameButtons.forEach((frame) => {
  frame.addEventListener("click", () => {
    const id = parseInt(frame.textContent);
    selectFrame(id);
  });
});

setInterval(() => {
  nextFrame();
}, 5000);
