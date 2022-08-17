const btnNama = document.getElementById("btnNama");
const fieldNama = document.getElementById("nama");
document.getElementById("desc").innerText = "From fetch.js";

btnNama.addEventListener("click", mainFunction);

function getName() {
  return new Promise(function (resolve, reject) {
    fetch("https://mocki.io/v1/fee39220-e6cc-4d97-ac6d-14a65f4fbcdb")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        resolve(data.name);
      })
      .catch(function (error) {
        reject(error);
      });
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
