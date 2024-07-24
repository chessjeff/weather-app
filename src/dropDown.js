export default function dropDown() {
  const dropDown = document.getElementById("drop-down-container");
  if (dropDown.classList.contains("visible")) {
    dropDown.setAttribute("hidden", "");
    dropDown.classList.remove("visible");
  } else {
    dropDown.removeAttribute("hidden");
    dropDown.classList.add("visible");
  }
}
