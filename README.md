# Projeto Integrador - Desenvolvedor Full Stack SENAC

## Nome do Projeto: Sangue Bom

## Descrição
Sangue Bom é um projeto desenvolvido por alunos do curso de Desenvolvedor Full Stack do SENAC, com o objetivo de criar um site para incentivar a doação de sangue na cidade de Bauru. O site disponibiliza informações gerais sobre a doação de sangue, um teste de aptidão para doação, locais de doação, e um feed para postagens das instituições e usuários, possibilitando interação dentro do site e com redes sociais.

## Funcionalidades
- **Informações Gerais sobre Doação**: Seção dedicada a explicar o processo de doação de sangue, benefícios, requisitos e cuidados necessários.
- **Teste de Aptidão para Doação**: Ferramenta que permite ao usuário verificar se está apto a doar sangue com base em um questionário simples.
- **Locais de Doação**: Mapa e lista de locais onde é possível doar sangue na cidade de Bauru.
- **Feed de Postagens**: Espaço onde instituições e usuários podem postar notícias, eventos e experiências relacionadas à doação de sangue.
- **Interação Social**: Funcionalidade que permite aos usuários interagir com postagens dentro do site e compartilhar conteúdo nas redes sociais.

## Tecnologias Utilizadas
- **Frontend**: React, HTML5, CSS3, JavaScript, TypeScript
- **Backend**: Node.js, Nest.js
- **Controle de Versionamento**: Git e GitHub
- **Mapas**: Google Maps API
<!-- 
- **Banco de Dados**: 
- **Autenticação**: 
- **Hospedagem**: 
- **Gerenciamento de Estado**: -->

## Instalação e Configuração
1. **Clone o repositório**
   ```bash
   git clone https://github.com/guspavanelli/projetointegrador
   cd projetointegrador
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

<!--3. **Configuração do Banco de Dados**
   - Configure a conexão com o MongoDB no arquivo `.env`:
     ```
     MONGODB_URI=sua_uri_do_mongodb
     JWT_SECRET=sua_chave_secreta
     ```
-->
3. **Inicialize o servidor**
   ```bash
   npm start
   ```

4. **Acesse a aplicação**
   - Abra seu navegador e vá para `http://localhost:3000`

## Descrição das Pastas e Arquivos

- **public/**: Contém arquivos públicos que serão servidos diretamente pelo servidor.
  - `index.html`: Documento HTML principal.
  - `favicon.ico`: Ícone da aplicação.
  - `manifest.json`: Arquivo de manifesto para aplicativos web progressivos (PWA).

- **src/**: Diretório principal do código-fonte.
  - **assets/**: Contém recursos estáticos como imagens, fontes, etc.
  - **components/**: Componentes reutilizáveis da aplicação.
    - **Cabecalho/**: Componente de cabeçalho.
    - **Cabecalho-log-cad/**: Componente de cabeçalho para as páginas de Login e Cadastro.
    - **Footer/**: Componente de rodapé.
    - **coments/**: Componente de comentários.
    - **linhas/**: Componente de linha de divisão.
    - **Buttons/**: Componentes de botões.
  - **pages/**: Contém as páginas da aplicação.

    - **home.tsx/**: Página inicial.
    - **sobre.tsx/**: Página sobre.
    - **teste.tsx/**: Página de teste de aptidão.
    - **perfil.tsx/**: Página de perfil do usuário.
    - **page_login.tsx/**: Página de Login.
    - **page_cadastro.tsx/**: Página de Cadastro.
    - **locais.tsx/**: Página de Localização dos pontos de doação.
    - **info.tsx/**: Página de informações gerais sobre doação.
    - **checkin.tsx/**: Página de CheckIn.
    - **erro404.tsx/**: Página de erro 404 (NotFound).
<!-- **services/**: Módulos para interação com APIs e serviços externos.
    - `api.ts`: Configuração e chamadas de API.
    - `auth.ts`: Funções de autenticação.
  - **utils/**: Funções utilitárias e constantes.
    - `helpers.ts`: Funções auxiliares.
    - `constants.ts`: Constantes da aplicação.-->
  - `App.tsx`: Componente principal da aplicação.
  - `index.tsx`: Ponto de entrada da aplicação React.
  - `Routes.tsx`: Configuração de rotas.
  <!-- **store/**: Gerenciamento de estado com Redux (se aplicável).
    - `actions.ts`: Ações do Redux.
    - `reducers.ts`: Redutores do Redux.
    - `store.ts`: Configuração da store do Redux.-->
  - **style/**: Arquivos de estilos globais.
    - `style.css`: Estilos globais da aplicação.

- **.gitignore**: Arquivo para ignorar arquivos no controle de versão.
- **package.json**: Dependências e scripts do projeto.
- **tsconfig.json**: Configuração do TypeScript.
- **README.md**: Documentação do projeto.

## Equipe
- **Alexandre De Paula Angelo**
- **Daniel Izidoro Vieira Da Silva** 
- **Gabriel Martielo Da Silva**
- **Gustavo Pavanelli De Araujo Linhari**

## Contribuição
Contribuições são bem-vindas! Por favor, siga os passos abaixo para contribuir:

1. **Fork o repositório**

2. **Crie uma branch para sua feature ou correção de bug**
   ```bash
   git checkout -b minha-feature
   ```
3. **Commit suas alterações**
   ```bash
   git commit -m 'Adicionei minha feature'
   ```
4. **Push para a branch**
   ```bash
   git push origin minha-feature
   ```
5. **Abra um Pull Request**

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato
Para mais informações, entre em contato com a equipe do projeto pelo email: `contato@sanguebombauru.com.br`.

---

    Sangue Bom - Salvando vidas uma doação de cada vez.