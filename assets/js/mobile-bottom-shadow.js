mobileBottomShadow = () => {
  const $mobileNavBtn = document.querySelector(".mobile-bottom-area");

  if (
    document.documentElement.scrollTop + window.innerHeight + 0.5 >=
    document.body.scrollHeight
  ) {
    $mobileNavBtn.classList.add("no-shadow");
  } else {
    $mobileNavBtn.classList.remove("no-shadow");
  }
};
window.addEventListener("scroll", mobileBottomShadow);
