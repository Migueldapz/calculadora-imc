function tempoatual() {
  const DataAtual = document.querySelector(".datatual");
  const data = new Date();
  let mes = data.getMonth() + 1;
  let dia = data.getDate();
  let horas = data.getHours();
  let minutos = data.getMinutes();

  if (dia <= 9) {
    dia = "0" + dia;
  }
  if (horas <= 9) {
    horas = "0" + horas;
  }
  if (minutos <= 9) {
    minutos = "0" + minutos;
  }
  if (mes <= 9) {
    mes = "0" + mes;
  }
  let fulldata = `${dia}/${mes}/${data.getFullYear()} às ${horas}:${minutos}`;
  DataAtual.innerHTML = fulldata;
}

function RecebeEventoForm(evento) {
  evento.preventDefault();
  const style = document.querySelector(".style");
  const Form = document.querySelector(".form");
  const Peso = document.querySelector(".input-valor");
  const Resultado = document.querySelector(".resultado");
  const Altura = document.querySelector(".input-valor1");

  let calcula = Number(Peso.value) / Number(Altura.value) ** 2;

  let grau = [
    "Abaixo do peso",
    "Normal",
    "Sobrepeso",
    "Obesidade nivel 1",
    "Obesidade nivel 2",
    "Obesidade nivel 3",
  ];

  let grauDefinitivo;

  if (calcula <= 18.5) {
    grauDefinitivo = grau[0];
  } else if (calcula > 18.5 && calcula <= 24.9) {
    grauDefinitivo = grau[1];
  } else if (calcula > 24.9 && calcula <= 29.9) {
    grauDefinitivo = grau[2];
  } else if (calcula > 29.9 && calcula <= 34.9) {
    grauDefinitivo = grau[3];
  } else if (calcula > 34.9 && calcula <= 39.9) {
    grauDefinitivo = grau[4];
  } else {
    grauDefinitivo = grau[5];
  }

  if (Peso.value > 0 && Altura.value > 0 && !isNaN(calcula)) {
    Resultado.innerHTML = `Seu IMC é igual a ${calcula.toFixed(2)} e você está classificado em ${grauDefinitivo}`;
  } else {
    Resultado.innerHTML = "Algo está errado";
  }
}
addEventListener("submit", RecebeEventoForm);
tempoatual();