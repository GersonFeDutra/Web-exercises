# Módulos em JavaScript

Os módulos desempenham um papel fundamental na organização e reutilização de código em JavaScript. Vamos explorar as diferenças entre **`require`** e **`import`**, especialmente considerando o contexto do **ECMAScript 6 (ES6)**.

## 1. **`require`** (CommonJS)

- O **`require`** é uma função **built-in** no Node.js.
- É usado para carregar módulos no ambiente Node.js.
- Funciona com a sintaxe **CommonJS**.
- Permite exportar qualquer coisa (objetos, strings, funções etc.) usando **`module.exports`**.
- Exemplo:**JavaScript**

```jsx
// No arquivo "math.js"
module.exports = {
    sum(a, b) {
        return a + b;
    }
};
```

Importando:

```jsx
// Em um arquivo qualquer
const math = require('./module');

console.log(math.sum(1,2));
```

## 2. **`import`** (ES6)

- O **`import`** é uma **palavra-chave** do **ECMAScript 6 (ES6)**.
- É usado para importar módulos no JavaScript moderno (tanto no navegador quanto no Node.js).
- Funciona com a sintaxe **ES6**.
- Permite exportar várias funcionalidades e importar partes específicas.
- Exemplo: **JavaScript**

```jsx
**// module.js
export function getData() {
    return new Date();
}**
```

```jsx
// app.js
import { getData } from "./module.js";

console.log(getData());
```

```jsx
//package.json
{
    "type":"module"
}
```

## Diferenças e Vantagens

1. **Flexibilidade**:
    - O **`import`** é mais flexível e poderoso que o **`require`**.
    - Permite importar partes específicas de um módulo.
    - Pode usar tanto **`module.exports`** quanto **`export`**.
2. **Exportação Padrão**:
    - O **`import`** permite exportação padrão (usando **`export default`**).
    - Isso implica que só uma coisa é exportada por arquivo.
    - Facilita a importação direta sem chaves.
3. **Compatibilidade**:
    - Alguns navegadores ainda não suportam totalmente o ES6.
    - É necessário compilar o código ES6 para versões anteriores do JavaScript.

Em resumo, o **`require`** é usado principalmente no Node.js, enquanto o **`import`** é mais moderno e flexível, adequado para ambientes ES6. Escolha a abordagem com base no contexto do seu projeto e nas necessidades específicas de exportação/importação.
