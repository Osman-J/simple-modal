const closeButton = document.querySelector("#close-btn");
const openButton = document.querySelector("#open-btn");
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Event listener for close button
closeButton.addEventListener("click", () => {
  modal.classList.remove("modal-opened");
  modal.classList.add("modal-closed");
  overlay.classList.remove("overlay-on");
});

// Event listener for open button
openButton.addEventListener("click", () => {
  modal.classList.remove("modal-closed");
  overlay.classList.add("overlay-on");
  modal.classList.add("modal-opened");
})