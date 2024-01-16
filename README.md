## Estácio Desenvolvimento Full Stack - Mundo 4 Nível 1

Aluno: **Fernando Rocha Fonteles Filho**

### Executando o projeto

- Para começar, instale o CLI do Expo executando ```npm install --global expo-cli``` no seu terminal/command line.
- Clone o repositório do projeto ou faça o download dos arquivos do projeto.
- No diretório raiz do projeto, instale as dependências do projeto executando o comando ```expo install```.
- Após a instalação das dependências, inicie o projeto com o comando ```expo start```.

### Funcionalidades e componentes

Este projeto é um aplicativo simples de gerenciamento de fornecedores. As funcionalidades e componentes principais
incluem:

- App.tsx
    - Este é o componente raiz do nosso aplicativo. Aqui, gerenciamos dois estados principais: o suppliers que mantém um
      array dos fornecedores atuais e o selectedTab que determina qual aba está atualmente selecionada (Formulário ou
      Lista). Ele também possui as funções para adicionar e deletar fornecedores.


- SupplierForm.tsx
    - Este componente é responsável por adicionar novos fornecedores ao aplicativo. Ele tem campos de input para o name,
      address, contact, categories, e imageUrl do fornecedor. Quando o botão "Add Supplier" é pressionado, a função
      addSupplier é executada, que é passada como props do componente App.


- SupplierList.tsx
    - Este componente lista todos os fornecedores atuais. Cada item da lista mostra o nome, o endereço, o contato, as
      categorias e a imagem do fornecedor. Também há um ícone de lixeira que, quando pressionado, deleta o fornecedor
      correspondente usando a função deleteSupplier, que é passada como prop do componente App.
