function getPilihanKomputer() {
  const comp = Math.round(Math.random() * 2);

  if (comp == 0) return "semut";
  if (comp == 1) return "orang";

  return "gajah";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!!!";
  if (player == "gajah") return comp == "orang" ? "MENANG!!!" : "KALAH!!!";
  if (player == "semut") return comp == "orang" ? "KALAH!!!" : "MENANG!!!";
  if (player == "orang") return comp == "semut" ? "MENANG!!!" : "KALAH!!!";
}

function putar() {
  const gambarKomputer = document.querySelector(".box-1 img");
  const image = ["gajah", "orang", "semut", "white"];
  let i = 0;
  const startTime = new Date().getTime();

  setInterval(function () {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }
    gambarKomputer.setAttribute("src", "img/" + image[i++] + ".jpg");
    if (i == gambar.length) i = 0;
  }, 200);
}

const pilihGambar = document.querySelectorAll(".box-2 img");
pilihGambar.forEach(function (items) {
  items.addEventListener("click", function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = items.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const gambarKomputer = document.querySelector(".box-1 img");
      gambarKomputer.setAttribute("src", `img/${pilihanKomputer}.jpg`);

      const info = document.querySelector(".hasil");
      info.innerHTML = hasil;
    }, 1000);
  });
});
