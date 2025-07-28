# Amigo Secreto - Challenge Alura

Este projeto foi desenvolvido como parte do Challenge do curso de Lógica de Programação da Alura. O objetivo é criar uma aplicação simples de sorteio de "Amigo Secreto" utilizando HTML, CSS e JavaScript puro, reforçando conceitos fundamentais de lógica e manipulação do DOM.

## Descrição do Sistema

O sistema permite que o usuário cadastre nomes de amigos, visualize a lista de participantes e realize o sorteio aleatório de um nome, simulando a brincadeira do Amigo Secreto.

### Funcionalidades Implementadas

- **Adicionar nomes:**
  - O usuário digita o nome de um amigo em um campo de texto e clica em "Adicionar".
  - O sistema valida se o campo não está vazio. Caso esteja, exibe um alerta solicitando um nome válido.
  - O nome é adicionado a um array e exibido em uma lista na tela.
  - O campo de texto é limpo após a adição.

- **Visualizar lista de amigos:**
  - Todos os nomes cadastrados aparecem em uma lista logo abaixo do campo de entrada.
  - A lista é atualizada automaticamente a cada novo nome inserido.

- **Sortear amigo secreto:**
  - Ao clicar em "Sortear Amigo", o sistema verifica se há nomes cadastrados.
  - Um nome é sorteado aleatoriamente usando `Math.random()` e `Math.floor()`.
  - O resultado do sorteio é exibido na tela para o usuário.

### Estrutura dos Arquivos

- `index.html`: Estrutura da página e elementos visuais.
- `style.css`: Estilização da interface.
- `app.js`: Lógica de funcionamento do sistema (adicionar nomes, atualizar lista e sortear amigo).
- `assets/`: Imagens utilizadas na interface.

## Como funciona

1. Digite o nome de um amigo no campo de texto e clique em "Adicionar".
2. Repita o processo para todos os participantes.
3. Clique em "Sortear Amigo" para ver o resultado do sorteio.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (puro)

## Sobre o Challenge
Este projeto faz parte do Challenge proposto pela Alura no curso de Lógica de Programação, com o objetivo de praticar e consolidar os conhecimentos adquiridos sobre variáveis, arrays, funções, validação de dados e manipulação do DOM.

---
Desenvolvido para fins educacionais.
