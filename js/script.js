const jmlAngkot = 10;

for (let noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot != 5) {
    console.log("Angkot No. " + noAngkot + " Sedang Beroperasi.");
  } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
    console.log("Angkot No. " + noAngkot + " Sedang Lembur.");
  } else {
    console.log("Angkot No. " + noAngkot + " Sedang Tidak Beroperasi");
  }
}
