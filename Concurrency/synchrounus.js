const btnNama = document.getElementById('btnNama');
const fieldNama = document.getElementById('nama');
document.getElementById("desc").innerText = "From synchrounus.js";

btnNama.addEventListener('click', mainFunction);

function mainFunction() {
    const name = "John";
    const organisasi = "ITC";
    fieldNama.innerText = name + " " + organisasi;
}