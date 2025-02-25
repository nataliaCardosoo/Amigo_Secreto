// Array para armazenar os amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();

    if (!nome || amigos.includes(nome)) {
        alert(nome ? "Este nome já foi adicionado." : "Por favor, insira um nome válido.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    nomeInput.value = "";
    nomeInput.focus();
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos.map(nome => `<li>${nome}</li>`).join('');
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos à lista antes de sortear.");
        return;
    }

    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoSorteado);
}

// Função para mostrar o resultado do sorteio
function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
