showPrjDetail = () => {
  const $mobilePrjMoreBtn = document.querySelector(".mobile-prj-more-btn");
  const $mobilePrjCloseBtn = document.querySelector(".mobile-prj-close-btn");
  const $mobilePrjDetail = document.querySelector(".mobile-prj-detail-wrapper");
  const $body = document.querySelector("body");
  $body.classList.add("modal-open");
  $mobilePrjMoreBtn.classList.add("clicked");
  $mobilePrjCloseBtn.classList.add("clicked");
  $mobilePrjDetail.classList.add("view");
};
closePrjDetail = () => {
  const $mobilePrjMoreBtn = document.querySelector(".mobile-prj-more-btn");
  const $mobilePrjCloseBtn = document.querySelector(".mobile-prj-close-btn");
  const $mobilePrjDetail = document.querySelector(".mobile-prj-detail-wrapper");
  $body.classList.remove("modal-open");
  $mobilePrjMoreBtn.classList.remove("clicked");
  $mobilePrjCloseBtn.classList.remove("clicked");
  $mobilePrjDetail.classList.remove("view");
};
