const { MongoClient } = require('mongodb');

// Conectar ao MongoDB
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log('Conectado ao MongoDB');

        // Criar e selecionar o banco de dados
        const db = client.db('controle_estoque');

        // Criar e selecionar coleções
        const produtos = db.collection('produtos');
        const categorias = db.collection('categorias');

        // Inserir dados
        await categorias.insertMany([
            { nome: 'Eletrônicos' },
            { nome: 'Roupas' }
        ]);

        await produtos.insertMany([
            { nome: 'Smartphone', quantidade: 10, preco: 1999.99, categoria: 'Eletrônicos' },
            { nome: 'Camiseta', quantidade: 50, preco: 29.99, categoria: 'Roupas' }
        ]);

        // Consultar e exibir dados
        console.log("Produtos:");
        const produtosList = await produtos.find().toArray();
        console.log(produtosList);

        console.log("\nCategorias:");
        const categoriasList = await categorias.find().toArray();
        console.log(categoriasList);

    } finally {
        // Fechar a conexão
        await client.close();
    }
}

main().catch(console.error);
