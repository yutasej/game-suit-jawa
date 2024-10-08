function Angkot(namaSopir, rute, penumpang, kas) {
  this.namaSopir = namaSopir;
  this.rute = rute;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    if (this.penumpang.length === 0) {
      this.penumpang.push(namaPenumpang);

      return this.penumpang;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] === undefined) {
          this.penumpang[i] = namaPenumpang;

          return this.penumpang;
        } else if (this.penumpang[i] === namaPenumpang) {
          console.log(namaPenumpang + " sudah ada didalam angkot");

          return this.penumpang;
        } else if (i === this.penumpang.length - 1) {
          this.penumpang.push(namaPenumpang);

          return this.penumpang;
        }
      }
    }
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("angkot masih kosong!");

      return this.penumpang;
    } else {
      for (var i = 0; i < this.penumpang.length; i++) {
        if (this.penumpang[i] === namaPenumpang) {
          this.penumpang[i] = undefined;
          parseInt((this.kas += bayar));

          return this.penumpang;
        } else if (i === this.penumpang.length - 1) {
          console.log(namaPenumpang + " tidak ada didalam angkot");

          return this.penumpang;
        }
      }
    }
  };
}

var angkot1 = new Angkot("Yutase", ["Gayamsari", "Pucang Gading"], [], 0);
