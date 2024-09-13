Passo 1: Importar o MongoClient
javascript
Copiar código
const { MongoClient } = require('mongodb');
Primeiro, importamos o módulo MongoClient da biblioteca mongodb. Isso permite criar uma conexão com o servidor MongoDB e interagir com o banco de dados.

Conectar ao MongoDB
javascript
Copiar código
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
Aqui estamos definindo a URL do MongoDB local, que geralmente roda na porta padrão 27017. Em seguida, criamos uma nova instância de MongoClient usando essa URL, o que nos permite estabelecer a conexão com o banco de dados.

Passo 3: Função Principal
javascript
Copiar código
async function main() {
    try {
        await client.connect();
        console.log('Conectado ao MongoDB');
A função principal main() é declarada como async porque ela contém operações assíncronas, como conectar ao banco de dados e inserir dados. Usamos await para garantir que essas operações sejam concluídas antes de continuar. O método client.connect() faz a conexão com o MongoDB, e uma mensagem é exibida no console para confirmar a conexão.

Passo 4: Criar ou Selecionar o Banco de Dados
javascript
Copiar código
const db = client.db('controle_estoque');
Depois de conectar, usamos client.db() para selecionar o banco de dados controle_estoque. Se o banco de dados não existir, ele será criado automaticamente quando começarmos a inserir dados.

Passo 5: Criar ou Selecionar Coleções
javascript
Copiar código
const produtos = db.collection('produtos');
const categorias = db.collection('categorias');
Aqui estamos selecionando ou criando duas coleções no banco de dados: produtos e categorias. No MongoDB, coleções são equivalentes a tabelas em bancos de dados relacionais.

Passo 6: Inserir Dados
javascript
Copiar código
await categorias.insertMany([
    { nome: 'Eletrônicos' },
    { nome: 'Roupas' }
]);

await produtos.insertMany([
    { nome: 'Smartphone', quantidade: 10, preco: 1999.99, categoria: 'Eletrônicos' },
    { nome: 'Camiseta', quantidade: 50, preco: 29.99, categoria: 'Roupas' }
]);
Utilizamos o método insertMany() para inserir múltiplos documentos em cada coleção. Na coleção categorias, estamos inserindo duas categorias: "Eletrônicos" e "Roupas". Na coleção produtos, estamos inserindo dois produtos com campos como nome, quantidade, preco, e categoria.

Passo 7: Consultar e Exibir Dados
javascript
Copiar código
console.log("Produtos:");
const produtosList = await produtos.find().toArray();
console.log(produtosList);

console.log("\nCategorias:");
const categoriasList = await categorias.find().toArray();
console.log(categoriasList);
Aqui, usamos o método find() para buscar todos os documentos das coleções produtos e categorias. O find() retorna um cursor, então usamos o método toArray() para converter o cursor em um array que pode ser exibido no console.

Passo 8: Fechar a Conexão
javascript
Copiar código
await client.close();
Por fim, usamos client.close() para fechar a conexão com o MongoDB. Isso é uma boa prática para garantir que os recursos sejam liberados corretamente após o término das operações.
____________________________________________________________________________________________________________________________________________________________________________

Explicação em Python
Este código Python usa o MongoDB para criar e gerenciar um sistema simples de controle de estoque, com duas coleções: uma para produtos e outra para categorias.

Passo 1: Conectar ao MongoDB
python
Copiar código
from pymongo import MongoClient

# Conectar ao MongoDB
client = MongoClient('mongodb://localhost:27017/')
Aqui, usamos a biblioteca pymongo para conectar ao MongoDB local. MongoClient é o cliente que conecta ao servidor MongoDB rodando na porta padrão (27017).

Passo 2: Criar ou Selecionar o Banco de Dados
python
Copiar código
db = client['controle_estoque']
Com essa linha, estamos criando (ou selecionando, se já existir) o banco de dados chamado controle_estoque. O MongoDB cria o banco automaticamente na primeira inserção de dados.

Passo 3: Criar ou Selecionar Coleções
python
Copiar código
produtos = db['produtos']
categorias = db['categorias']
Criamos ou selecionamos duas coleções no banco de dados:

A coleção produtos para armazenar informações sobre os produtos.
A coleção categorias para armazenar as categorias dos produtos.
Passo 4: Inserir Dados
python
Copiar código
categorias.insert_many([
    { 'nome': 'Eletrônicos' },
    { 'nome': 'Roupas' }
])

produtos.insert_many([
    { 'nome': 'Smartphone', 'quantidade': 10, 'preco': 1999.99, 'categoria': 'Eletrônicos' },
    { 'nome': 'Camiseta', 'quantidade': 50, 'preco': 29.99, 'categoria': 'Roupas' }
])
Aqui usamos o método insert_many() para inserir vários documentos (objetos) de uma vez em cada coleção.

Na coleção categorias, inserimos duas categorias: "Eletrônicos" e "Roupas".
Na coleção produtos, inserimos dois produtos com as informações de nome, quantidade, preco e a respectiva categoria.
Passo 5: Consultar e Exibir os Dados
python
Copiar código
print("Produtos:")
for produto in produtos.find():
    print(produto)

print("\nCategorias:")
for categoria in categorias.find():
    print(categoria)
O método find() retorna todos os documentos da coleção. O código itera sobre os resultados e imprime os documentos.

Passo 6: Fechar a Conexão
python
Copiar código
client.close()
Após realizar todas as operações, é uma boa prática fechar a conexão com o MongoDB para liberar recursos.
