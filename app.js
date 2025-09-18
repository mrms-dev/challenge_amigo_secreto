let amigos = [];

function adicionar() {
  let input = document.getElementById("nomeAmigo");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, digite um nome válido!");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado!");
    input.value = "";
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortear() {
  if (amigos.length < 2) {
    alert("É necessário pelo menos 2 amigos para sortear!");
    return;
  }

  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").innerText = 
    "🎉 O amigo secreto sorteado foi: " + sorteado + "!";
}