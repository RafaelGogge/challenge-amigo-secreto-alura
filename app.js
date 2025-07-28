
// Lista para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    if (!nome) {
        alert('Por favor, digite um nome válido!');
        return;
    }
    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

// Atualiza a lista de nomes na tela
function atualizarLista() {
    var lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (var i = 0; i < amigos.length; i++) {
        var li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear!');
        return;
    }
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado foi: <strong>${sorteado}</strong></li>`;
}
