Aqui está uma explicação do código do CRUD de ações e preços, bem como as ferramentas utilizadas e como você pode utilizá-lo como projeto no seu currículo.

Ferramentas Utilizadas
Flask: Flask é um micro framework web para Python. Ele é leve e fácil de usar, ideal para construir APIs e aplicativos web simples.

Como foi usado: O Flask foi usado para criar as rotas HTTP (GET e POST) que controlam o fluxo da aplicação. Cada rota manipula uma operação de CRUD.
SQLite: SQLite é um banco de dados relacional leve que é ótimo para aplicações pequenas ou que não exigem um servidor de banco de dados separado.

Como foi usado: SQLite foi utilizado como o banco de dados para armazenar as informações das ações e seus preços.
HTML/CSS: Embora o CSS não esteja presente no exemplo, HTML é utilizado para criar a interface web que o usuário interage para criar, visualizar, atualizar e deletar ações.

Como foi usado: O HTML foi usado para renderizar as páginas que exibem as ações e para criar os formulários de criação e edição de registros.
Jinja2: Jinja2 é o motor de templates padrão do Flask.

Como foi usado: Jinja2 foi utilizado para renderizar as variáveis Python diretamente nos arquivos HTML, como as listas de ações.
SQLite3 (módulo Python): O módulo sqlite3 do Python é usado para se conectar ao banco de dados SQLite.

Como foi usado: A função get_db_connection() utiliza esse módulo para abrir uma conexão com o banco de dados.
