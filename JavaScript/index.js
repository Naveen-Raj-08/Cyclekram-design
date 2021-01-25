$("#Product-carousel").owlCarousel({
  nav: false,
  items: 1,
  loop: true,
  dots: true,
  autoHeight: true,
  autoplay: true,
  autoplaySpeed: 1500,
  autoplayTimeout: 7000,
  slideTransition: "linear",
});

document.getElementById("search-btn").addEventListener("click", searchSubmit);

function searchSubmit() {
  alert("there is no item in the search list..!");
}
