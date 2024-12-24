let valorTotalCarrinho;
limpar();

function adicionar () {

    // recupera os valores do produto, quantidade, valor, nome
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    // calcula o preço total do item adicionado
    let valorTotal = quantidade * valorUnitario;

    //adiciona no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;

    //atualiza valor total do carrinho 
    valorTotalCarrinho = valorTotalCarrinho + valorTotal;
    
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotalCarrinho}`;

    document.getElementById('quantidade').value = 0;
    
}

function limpar (){

    valorTotalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}