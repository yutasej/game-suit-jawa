// 1. looping
// const mhs = [
//   {
//     nama: "yutase",
//     email: "yutase@gmail.com",
//   },
//   {
//     nama: "helsa",
//     email: "helsa@gmail.com",
//   },
//   {
//     nama: "sabdo",
//     email: "sabdo@gmail.com",
//   },
// ];
// const html = `<div class="mhs">
//     ${mhs
//       .map(
//         (m) => `<ul>
//             <li>${m.nama}</li>
//             <li>${m.email}</li>
//         </ul>`
//       )
//       .join("")}
// </div>`;

// 2. condition
// const lagu = {
//   penyanyi: "slipknot",
//   judul: "all hope is gone",
//   feat: "bmth",
// };
// const html = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
//     </ul>
// </div>`;

// 3. nested
const mhs = {
  nama: "Yutase Jordan Amrullah",
  semester: 5,
  mataKuliah: [
    "Pemrograman Sisi Klien",
    "Pemrograman Sisi Server",
    "Pemrograman Perangkat Bergerak",
  ],
};

const html = `<div>
    <p>Nama: ${mhs.nama}</p>
    <p>Semester: ${mhs.nama}</p>
    <ol>
        ${mhs.mataKuliah
          .map(
            (matkul) => `<li>
                ${matkul}
            </li>`
          )
          .join("")}
    </ol>
</div>`;

document.body.innerHTML = html;
