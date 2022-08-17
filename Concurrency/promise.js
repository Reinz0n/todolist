const btnNama = document.getElementById("btnNama");
const fieldNama = document.getElementById("nama");
document.getElementById("desc").innerText = "From promise.js";

btnNama.addEventListener("click", mainFunction);

function getName() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const name = "John";
      resolve(name);
    }, 1000);
  });
}

function getOrganisasi() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const organisasi = "ITC";
      resolve(organisasi);
    }, 1000);
  });
}

// function mainFunction() {
//   getName().then(function (name) {
//     return getOrganisasi(name);
//   }).then(function (organisasi) {
//     fieldNama.innerText = organisasi;
//   });
// }

function mainFunction() {
  Promise.all([getName(), getOrganisasi()]).then(function ([name, organisasi]) {
    fieldNama.innerText = name + " " + organisasi;
  });
}
