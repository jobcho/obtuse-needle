const $mobileNavBtn = document.querySelector(".mobile-bottom-area");
const $dimmedLayer = document.querySelector(".dimmed-layer");
$mobileNavBtn.addEventListener("click", () => {
  console.log("dee");
  const $mobileAllProject = document.querySelector(".mobile-all-project");

  $mobileAllProject.style.display = "block";
  $dimmedLayer.style.display = "block";
});

$dimmedLayer.addEventListener("click", () => {
  console.log("close");
  const $mobileAllProject = document.querySelector(".mobile-all-project");

  $mobileAllProject.style.display = "none";
  $dimmedLayer.style.display = "none";
});
