var angkaMaksimal,
  angkaSebelumnya = 0;
var angkaAwal = 1;

alert("Selamat Datang di Program Sederhana Deret Fibonacci");
angkaMaksimal = parseInt(prompt("Masukkan Angka!"));
alert("Deret Fibonacci dengan deret angka " + angkaMaksimal);

for (var i = 0; i < angkaMaksimal; i++) {
  alert(angkaAwal);

  var fn = angkaAwal + angkaSebelumnya;
  angkaSebelumnya = angkaAwal;
  angkaAwal = fn;
}
