document.getElementById("user-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Salvar localmente usando o localStorage (opcional)
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPhone", phone);

  // Exibir mensagem de agradecimento
  document.getElementById("welcome-message").classList.remove("hidden");

  // Aqui você pode integrar com MongoDB se quiser
  saveToDatabase({ email, phone });
});

function saveToDatabase(data) {
  // Exemplo: fazer uma chamada a um servidor local Node.js conectado ao MongoDB
  fetch("http://localhost:3000/save-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Dados salvos com sucesso!");
      } else {
        console.error("Erro ao salvar dados!");
      }
    })
    .catch((error) => console.error("Erro de rede:", error));
}

localStorage.setItem("key", "value");
console.log(localStorage.getItem("key"));
