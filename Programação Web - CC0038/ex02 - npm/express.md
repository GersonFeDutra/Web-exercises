# Express: Construindo Aplicações Web

## O que é o Express.js?

O **Express.js** é um framework web  flexível para o **Node.js**. Ele simplifica o processo de criação de aplicações web robustas e eficientes, fornecendo recursos essenciais prontos para uso. Aqui estão alguns motivos pelos quais os desenvolvedores adoram o Express:

- **Rápido e Minimalista**: O Express é leve e não impõe convenções rígidas. Ele permite que você construa aplicativos do seu jeito.
- **Roteamento**: Defina facilmente rotas para diferentes URLs e manipule métodos HTTP (GET, POST, PUT, DELETE).
- **Middleware**: Funções de middleware para processar solicitações antes que elas cheguem aos seus manipuladores de rota.
- **Tratamento de Erros**: O Express fornece middleware para tratamento de erros, garantindo respostas de erro elegantes.
- **Extensível**: Adicione middleware de terceiros ou crie middleware personalizado para aprimorar a funcionalidade.
- **Autenticação e Segurança**: Implemente estratégias de autenticação e proteja seu aplicativo.

## Primeiros Passos

1. **Instale o Node.js**: Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em nodejs.org.
2. **Crie um Novo Projeto**:
    - Crie um diretório para o seu projeto.
    - Abra um terminal e navegue até a pasta do seu projeto.
    - Execute **`npm init`** para inicializar um novo projeto Node.js. Siga as instruções.
3. **Instale o Express**: Instale o Express usando o npm:
    
    **`npm install express --save`**
    
4. **Crie o Ponto de Entrada**: Crie um arquivo **`app.js`** ou **`server.js`** para começar a construir sua aplicação Express.

## Exemplo Básico

Vamos criar um aplicativo Express simples que responde com “Olá, Express!” quando você visita a página inicial:

**JavaScript**

```jsx
// app.js
const express = require('express');
const app = express();
const porta = 3000;

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
```

## Roteamento

- Defina rotas usando **`app.get()`**, **`app.post()`**, **`app.put()`** e **`app.delete()`**.
- Organize suas rotas de forma lógica.
- Exemplo:**JavaScript**

```jsx
**app.get('/sobre', (req, res) => {
    res.send('Página Sobre');
});**
```

## Middleware

- Funções de middleware são executadas antes de lidar com as solicitações.
- Use middleware embutido ou crie middleware personalizado.
- Exemplo: **JavaScript**

```jsx
**app.use(express.json()); // Analisa solicitações JSON
app.use(express.static('public')); // Serve arquivos estáticos**
```

## Tratamento de Erros

- O Express fornece middleware para tratamento de erros.
- Exemplo:**JavaScript**

```jsx
**app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});**
```
