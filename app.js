const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");

const internet = document.getElementById("internet");
const luz = document.getElementById("luz");
const agua = document.getElementById("agua");
const gas = document.getElementById("gas");
const alquiler = document.getElementById("alquiler");

function calcular() {

    let total =
        Number(internet.value) +
        Number(luz.value) +
        Number(agua.value) +
        Number(gas.value) +
        Number(alquiler.value);

    let nombreCompleto = nombre.value + " " + apellido.value;

      fetch("http://localhost:3000/gastos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombreCompleto,
            total: total
        })
    });


    document.getElementById("totalGastos").textContent =
        nombreCompleto + ": Tu gasto fijo total es de " + total + " euros.";
}