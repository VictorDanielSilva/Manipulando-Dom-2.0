// Método simples: Adicionando um título ao site
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.textContent = 'Bem-vindo ao Meu Site!';
document.body.appendChild(titulo);

// Método complexo: Adicionando um produto à venda
const produto = document.createElement('div');

// Criando e adicionando o nome do produto
const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto Exemplo';
produto.appendChild(nomeProduto);

// Criando e adicionando a descrição do produto
const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Este é um produto de exemplo com várias características interessantes.';
produto.appendChild(descricaoProduto);

// Criando e adicionando o preço do produto
const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 99,99';
produto.appendChild(precoProduto);

// Adicionando o produto ao body
document.body.appendChild(produto);
