const nome = document.querySelector("#nome");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const btn = document.querySelector("#btn");
const res = document.querySelector("#resultado");

$(document).ready(function () {
  $("#altura").mask("0.00");
  $("#peso").mask("000");
});

btn.addEventListener("click", () => {
  let alt = Number(altura.value);
  let pso = Number(peso.value);
  let imc = pso / (alt * alt);
  let IMC = imc.toFixed(1);

  if (IMC < 17) {
    res.innerHTML = `${nome.value} seu  <strong>IMC</strong> é <strong>${IMC}</strong>. Você está muito abaixo do peso. Precisa ganhar uns quilinhos!`;
  } else if (IMC < 18.5) {
    res.innerHTML = `${nome.value} seu <strong>IMC</strong> é <strong>${IMC}</strong>. Você está abaixo do peso.`;
  } else if (IMC < 25) {
    res.innerHTML = `${nome.value} seu <strong>IMC</strong> é <strong>${IMC}</strong>. Você está com o peso ideal. Parabêns!`;
  } else if (IMC < 30) {
    res.innerHTML = `${nome.value} seu <strong>IMC</strong> é <strong>${IMC}</strong>. Você está acima do peso.`;
  } else if (IMC < 35) {
    res.innerHTML = `${nome.value} seu <strong>IMC</strong> é <strong>${IMC}</strong>. Você está com obesidade grau I.`;
  } else if (IMC < 40) {
    res.innerHTML = `${nome.value} seu <strong>IMC</strong> é <strong>${IMC}</strong>. Você está com obesidade grau II.`;
  } else {
    res.innerHTML = `${nome.value} seu <strong>IMC</strong> é <strong>${IMC}</strong>. Você está com obesidade grau III. Melhor fazer uma dieta!`;
  }
});
