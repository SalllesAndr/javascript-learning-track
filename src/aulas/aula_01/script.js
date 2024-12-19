alert("Olá, Mundo!");
window.alert("Minha primeira mensagem");

if (window.confirm("Você está gostando de JavaScript?")) {
  const nome = window.prompt("Qual é o seu nome?");
  if (nome) {
    alert(`Prazer em conhecê-lo, ${nome}!`);
  } else {
    alert("Você não informou seu nome!");
  }
} else {
  alert("Que pena! Espero que passe a gostar em breve!");
}
