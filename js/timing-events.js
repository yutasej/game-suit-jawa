// Set Timeout
// const tes = setTimeout(function () {
//   console.log("hello");
// }, 3000);

// Stop Set Timeout
// const button = document.getElementById("stop");
// button.addEventListener("click", function () {
//   clearTimeout(tes);
// });

// Set Interval
// const tes = setInterval(function () {
//   console.log("ok");
// }, 1000);

// Stop Set Interval
// button.addEventListener("click", function () {
//   clearInterval(tes);
// });

const hitungMundur = setInterval(function () {
  const now = new Date().getTime();
  const goalDate = new Date("Sep 29 2024 19:45:00").getTime();
  const difference = goalDate - now;
  const day = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hour = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const second = Math.floor((difference % (1000 * 60)) / 1000);
  const h1 = document.querySelector("h1");

  h1.innerHTML = `Waktu Anda Sisa : ${day} hari ${hour} jam ${minute} menit ${second} detik`;

  if (difference <= 0) {
    clearInterval(hitungMundur);
    h1.innerHTML = `Waktu Anda Sisa : 0 hari 0 jam 0 menit 0 detik`;
  }
}, 1000);
