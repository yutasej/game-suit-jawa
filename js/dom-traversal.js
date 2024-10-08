const remove = document.querySelectorAll(".close");
const cards = document.querySelectorAll(".card");

for (let i = 0; i < remove.length; i++) {
  remove[i].addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
}

remove.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
    e.stopPropagation;
  });
});

cards.forEach(function (item) {
  item.addEventListener("click", function (e) {
    alert("ok");
  });
});

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault;
  }
});
