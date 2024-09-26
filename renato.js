
let inventario = [
    { nome: 'Arroz branco', preco: 25, emEstoque: true },
    { nome: 'Feijão Preto', preco: 10, emEstoque: false },
    { nome: 'Picanha', preco: 600, emEstoque: true },
    { nome: 'Alcatra' , preco: 65, emEstoque: true},
    { nome: 'Coxa Sobre Coxa' , preco: 40 , emEstoque: false},
    { nome: 'Leite Condesado' , preco: 15 , emEstoque: true},
    { nome: 'Caixa Com 12 Leites' , preco: 55 , emEstoque: false},
    { nome: 'Milho Enlatado' , preco: 23 , emEstoque: true},
    { nome: 'Bolacha Trakinas' , preco: 15 , emEstoque: false},
    { nome: 'Coca Cola 2 litros' , preco: 15 , emEstoque: true },
    { nome: 'Batata Frita Congelada' , preco: 34 , emEstoque: true },
    { nome: 'Maçã' , preco:12 , emEstoque: true },
    { nome: 'Cebola' , preco: 9 , emEstoque: false },
    { nome: 'Alho' , preco: 6 , emEstoque: true },
    { nome: 'Cenoura' , preco: 5 , emEstoque: false }

    ];
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].emEstoque) {
        console.log(inventario[i].nome + ' está em estoque.');
        }
        }
        let produtosEmEstoque = inventario.filter(produto => produto.emEstoque);
        console.log(produtosEmEstoque);