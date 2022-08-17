const btnNama = document.getElementById("btnNama");
const fieldNama = document.getElementById("nama");
document.getElementById("desc").innerText = "From async-await.js";

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

async function mainFunction() {
  const name = await getName();
  const organisasi = await getOrganisasi();
  fieldNama.innerText = name + " " + organisasi;
}
