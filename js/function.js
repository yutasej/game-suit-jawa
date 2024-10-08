alert("Kalkulator Sederhana \n1. Tambah 2. Kurang 3. Kali 4. Bagi");

function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  return a / b;
}

let lagi = true;
while (lagi) {
  var pilih = parseInt(prompt("Pilih Operasi Perhitungan! (1-4)"));

  if (pilih === 1) {
    var a = parseInt(prompt("Masukkan Angka Pertama:"));
    var b = parseInt(prompt("Masukkan Angka Kedua:"));
    alert("Hasilnya Adalah " + tambah(a, b));
  } else if (pilih === 2) {
    var a = parseInt(prompt("Masukkan Angka Pertama:"));
    var b = parseInt(prompt("Masukkan Angka Kedua:"));
    alert("Hasilnya Adalah " + kurang(a, b));
  } else if (pilih === 3) {
    var a = parseInt(prompt("Masukkan Angka Pertama:"));
    var b = parseInt(prompt("Masukkan Angka Kedua:"));
    alert("Hasilnya Adalah " + kali(a, b));
  } else if (pilih === 4) {
    var a = parseInt(prompt("Masukkan Angka Pertama:"));
    var b = parseInt(prompt("Masukkan Angka Kedua:"));
    alert("Hasilnya Adalah " + bagi(a, b));
  } else {
    alert("Masukkan Operasi Perhitungan Yang Benar!");
  }

  lagi = confirm("Lagi ?");
}
