mobileBottomShadow = () => {
  const $mobileNavBtn = document.querySelector(".mobile-bottom-area");

  if (
    document.documentElement.scrollTop + window.innerHeight >=
    document.body.scrollHeight
  ) {
    $mobileNavBtn.classList.add("no-shadow");
  } else {
    $mobileNavBtn.classList.remove("no-shadow");
  }

  //window.removeEventListener("scroll", mobileBottomShadow);
};
window.addEventListener("scroll", mobileBottomShadow);
