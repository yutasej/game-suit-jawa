// function mataKuliah(mataKuliah, selesai) {
//   console.log(`sedang melaksanakan mata kuliah ${mataKuliah}`);
//   selesai();
// }

// function selesai() {
//   setTimeout(() => {
//     alert("selesai mengerjakan tugas!");
//   }, 1000);
// }

// mataKuliah("Pemrograman Web", selesai);

// map, filter, reduce

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter
// mencari angka > 3
// const newAngka = angka.filter((a) => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan semua elemen pada array angka
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log(newAngka);

// method chaining
// const hasil = angka
//   .filter((a) => a > 5)
//   .map((a) => a * 3)
//   .reduce((acc, currVal) => acc + currVal);

// console.log(hasil);

// LATIHAN!!!!
const videos = Array.from(document.querySelectorAll("[data-duration]"));
let jsPlaylist = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT"))
  .map((item) => item.dataset.duration)
  .map((duration) => {
    const parts = duration.split(":").map((part) => parseFloat(part));

    return parts[0] * 60 + parts[1];
  })
  .reduce((acc, currValue) => acc + currValue);

const hour = Math.floor(jsPlaylist / 3600);
const minute = Math.floor((jsPlaylist % 3600) / 60);
const second = jsPlaylist % 60;

const totalDuration = document.querySelector(".total-durasi");
totalDuration.innerHTML = `${hour} jam, ${minute} menit, ${second} detik`;

const _totalVideo = document.querySelector(".jumlah-video");
const totalVideo = videos.filter((item) =>
  item.textContent.includes("JAVASCRIPT")
).length;

_totalVideo.textContent = `${totalVideo} video`;

console.log(jsPlaylist);
