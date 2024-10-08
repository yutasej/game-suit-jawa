// function init() {
//   let nama = "yutase";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }

// init();

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, Semoga Harimu Menyenangkan!`);
//   };
// }

// ucapkanSalam("pagi")("yutase");

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());
