const container = document.querySelector(".container");
const bigImage = document.querySelector(".img");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    bigImage.src = e.target.src;
    bigImage.classList.add("fade");
    setTimeout(function () {
      bigImage.classList.remove("fade");
    }, 500);
    thumbs.forEach(function (thumb) {
      if (thumb.classList.contains("active")) {
        thumb.classList.remove("active");
      }
    });
    e.target.classList.add("active");
  }
});
