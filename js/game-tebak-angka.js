let angkaRandom = Math.floor(Math.random() * 11);
let tebak;
let percobaan = 0;
let percobaanMax = 3;

alert(
  "Selamat Datang Di Permainan Tebak Angka \nKesempatan Anda Adalah 3 Kali"
);

while (percobaan < percobaanMax) {
  tebak = prompt(
    "Masukkan Tebakan Anda (Percobaan ke " + (percobaan + 1) + " dari 3)"
  );

  if (tebak == angkaRandom) {
    alert("Tebakan Anda Benar \nAngka Yang Dicari Adalah " + angkaRandom);
    alert("Terima Kasih");
    break;
  } else if (tebak < angkaRandom && !(tebak < 0) && !(tebak > 10)) {
    alert("Angka Terlalu Rendah");
  } else if (tebak > angkaRandom && !(tebak > 10) && !(tebak < 0)) {
    alert("Angka Terlalu Besar");
  } else {
    alert("Masukkan Angka dari 1 - 10!");
  }

  percobaan++;
  if (percobaan === percobaanMax) {
    alert(
      "Maaf Kesempatan Anda Sudah Habis \nAngka Yang Dicari Adalah " +
        angkaRandom
    );
    alert("Terima Kasih");
  }
}
