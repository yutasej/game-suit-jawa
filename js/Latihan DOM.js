const button = document.querySelector(".btn");

// click ubah warna

button.addEventListener("click", function () {
  document.body.style.backgroundColor = "lightblue";
});

// toggle ubah warna

button.addEventListener("click", function () {
  document.body.classList.toggle("ubah-warna");
});

// membuat button baru untuk mengubah warna random

const buttonBaru = document.createElement("button");
const teksButton = document.createTextNode("warna acak!");

buttonBaru.appendChild(teksButton);
button.after(buttonBaru);

// ketika tombol baru di klik maka warna background berubah secara acak
buttonBaru.addEventListener("click", function () {
  let r = Math.round(Math.random() * 256);
  let g = Math.round(Math.random() * 256);
  let b = Math.round(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// membuat slider warna rgb
const slider = document.getElementsByClassName("slider");

for (let i = 0; i < slider.length; i++) {
  slider[i].addEventListener("input", function () {
    const r = slider[0].value;
    const g = slider[1].value;
    const b = slider[2].value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  });
}

// warna berdasarkan koordinat mouse
// document.addEventListener("mousemove", function (e) {
//   const xPos = Math.round((e.clientX / window.innerWidth) * 255);
//   const yPos = Math.round((e.clientY / window.innerHeight) * 255);

//   document.body.style.backgroundColor = `rgb(${xPos},${yPos}, 100)`;
// });
