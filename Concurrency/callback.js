const btnNama = document.getElementById("btnNama");
const fieldNama = document.getElementById("nama");
document.getElementById("desc").innerText = "From callback.js";

btnNama.addEventListener("click", mainFunction);

function getName(callback) {
  setTimeout(function () {
    const name = "John";
    callback(name);
  }, 1000);
}

function getOrganisasi(callback) {
  setTimeout(function () {
    const organisasi = "ITC";
    callback(organisasi);
  }, 1000);
}

function getUniversity(callback) {
  setTimeout(function () {
    const university = "UPN";
    callback(university);
  } , 1000);
}

function mainFunction() {
  getName(function (name) {
    getOrganisasi(function (organisasi) {
        getUniversity(function (university) {
            fieldNama.innerText = name + " " + organisasi + " " + university;
        } );
    });
  });
}
