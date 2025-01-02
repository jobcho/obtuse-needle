const $mobileNavBtn = document.querySelector(".mobile-bottom-area");
const $dimmedLayer = document.querySelector(".dimmed-layer");
const $body = document.querySelector("body");
$mobileNavBtn.addEventListener("click", () => {
  const $mobileAllProject = document.querySelector(".mobile-all-project");
  $body.classList.add("modal-open");
  $mobileAllProject.style.display = "block";
  $dimmedLayer.style.display = "block";
});

$dimmedLayer.addEventListener("click", () => {
  const $mobileAllProject = document.querySelector(".mobile-all-project");
  $body.classList.remove("modal-open");

  $mobileAllProject.style.display = "none";
  $dimmedLayer.style.display = "none";
});
