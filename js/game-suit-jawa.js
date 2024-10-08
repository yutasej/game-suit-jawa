// Membuat Game Suit Jawa
let lagi = true;
breakme: while (lagi) {
  // Menentukan Pilihan Player
  let player = prompt("Silahkan Pilih : gajah, semut, orang");

  // Menentukan Pilihan Komputer
  let computer = Math.random();
  if (computer <= 0.33) {
    computer = "gajah";
  } else if (computer > 0.33 && computer <= 0.66) {
    computer = "semut";
  } else {
    computer = "orang";
  }

  // Melakukan Perbandingan Antara Pilihan Komputer dan Player
  let hasil = "";

  if (player == computer) {
    hasil = "Seri";
  } else if (player == "gajah") {
    if (computer == "orang") {
      hasil = "Menang";
    } else {
      hasil = "kalah";
    }
  } else if (player == "semut") {
    if (computer == "orang") {
      hasil = "Kalah";
    } else {
      hasil = "Menang";
    }
  } else if (player == "orang") {
    if (computer == "semut") {
      hasil = "Menang";
    } else {
      hasil = "Kalah";
    }
  } else {
    alert("Silahkan Masukkan Pilihan Yang Benar!");
    break breakme;
  }

  // Hasil
  alert(
    "Anda Memilih " +
      player +
      " dan Komputer Memilih " +
      computer +
      "\nHasilnya Adalah " +
      hasil
  );
  lagi = confirm("Lagi?");
}
