Configuração do MongoDB
Certifique-se de que o MongoDB está em execução em sua máquina local. O MongoDB deve estar disponível na URL padrão: mongodb://localhost:27017.

Executando o Projeto
Para executar o sistema, execute o comando:

bash
Copiar código
node index.js
O script irá:

Conectar-se ao MongoDB.
Criar o banco de dados controle_estoque.
Criar as coleções produtos e categorias.
Inserir alguns dados de exemplo nas coleções.
Exibir os dados inseridos no terminal.
Estrutura do Projeto
index.js: Script principal que conecta ao MongoDB, insere e consulta os dados.
package.json: Arquivo de configuração do Node.js com as dependências.
Funcionalidades
Inserir Categorias: Insere categorias como "Eletrônicos" e "Roupas" na coleção categorias.
Inserir Produtos: Insere produtos como "Smartphone" e "Camiseta" na coleção produtos.
Consultar Dados: Recupera e exibe todos os produtos e categorias armazenados no banco de dados.
Exemplo de Saída
Ao executar o script, a saída será algo como:

bash
Copiar código
Conectado ao MongoDB
Produtos:
[
  {
    _id: ObjectId("..."),
    nome: 'Smartphone',
    quantidade: 10,
    preco: 1999.99,
    categoria: 'Eletrônicos'
  },
  {
    _id: ObjectId("..."),
    nome: 'Camiseta',
    quantidade: 50,
    preco: 29.99,
    categoria: 'Roupas'
  }
]

Categorias:
[
  { _id: ObjectId("..."), nome: 'Eletrônicos' },
  { _id: ObjectId("..."), nome: 'Roupas' }
]
Fechando a Conexão
O sistema irá automaticamente fechar a conexão com o MongoDB ao final da execução.
