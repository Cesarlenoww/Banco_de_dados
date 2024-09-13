from pymongo import MongoClient

# Conectar ao MongoDB
client = MongoClient('mongodb://localhost:27017/')

# Criar e selecionar o banco de dados
db = client['controle_estoque']

# Criar e selecionar coleções
produtos = db['produtos']
categorias = db['categorias']

# Inserir dados
categorias.insert_many([
    { 'nome': 'Eletrônicos' },
    { 'nome': 'Roupas' }
])

produtos.insert_many([
    { 'nome': 'Smartphone', 'quantidade': 10, 'preco': 1999.99, 'categoria': 'Eletrônicos' },
    { 'nome': 'Camiseta', 'quantidade': 50, 'preco': 29.99, 'categoria': 'Roupas' }
])

# Consultar e exibir dados
print("Produtos:")
for produto in produtos.find():
    print(produto)

print("\nCategorias:")
for categoria in categorias.find():
    print(categoria)

# Fechar a conexão
client.close()
