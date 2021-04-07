const produtos = [
    { nome: 'celular', preco: 1099.00, id: 1 },
    { nome: 'tv', preco: 999.00, id: 2 },
    { nome: 'notebook', preco: 4099.00, id: 3 },
    { nome: 'celular', preco: 1099.00, id: 4 },
    { nome: 'tv', preco: 999.00, id: 5 },
    { nome: 'notebook', preco: 4099.00, id: 6 },
    { nome: 'celular', preco: 1099.00, id: 7 },
    { nome: 'tv', preco: 999.00, id: 8 },
    { nome: 'notebook', preco: 4099.00, id: 9 },
];

const productTemplateEL = document.getElementById('productTemplate');
const productTemplate = productTemplateEL.innerHTML;

const productListEL = document.querySelector('#produtos');
const carrinhoEL = document.querySelector('#carrinho');

const htmls = produtos.map(produto => {
    return productTemplate
        .replace('{{NOME}}', produto.nome)
        .replace('{{PRECO}}', produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
        .replace('{{ID}}', produto.id);
});

productListEL.innerHTML = htmls.join('\n');

productListEL.addEventListener('click', evt => {

    if (evt.target.nodeName === 'BUTTON') {

        const produto = produtos.find(p => p.id === parseInt(evt.target.getAttribute('data-id')));
        const html = productTemplate
            .replace('{{NOME}}', produto.nome)
            .replace('{{PRECO}}', produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
            .replace('{{ID}}', produto.id);

        carrinhoEL.innerHTML = carrinhoEL.innerHTML + html;

    }

});

