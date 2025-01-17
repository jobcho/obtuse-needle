const $mobileNavBtn = document.querySelector(".mobile-bottom-area");
const $dimmedLayer = document.querySelector(".dimmed-layer");
const $mobileBtmArrowBtn = document.querySelector(".mobile-bottom-arrow");
const $body = document.querySelector("body");
$mobileNavBtn.addEventListener("click", () => {
  const $mobileAllProject = document.querySelector(".mobile-all-project");
  $body.classList.add("modal-open");
  $mobileBtmArrowBtn.classList.add("down");
  $mobileAllProject.style.display = "block";
  $dimmedLayer.style.display = "block";
});

$dimmedLayer.addEventListener("click", () => {
  const $mobileAllProject = document.querySelector(".mobile-all-project");
  $body.classList.remove("modal-open");
  $mobileBtmArrowBtn.classList.remove("down");
  $mobileAllProject.style.display = "none";
  $dimmedLayer.style.display = "none";
});
