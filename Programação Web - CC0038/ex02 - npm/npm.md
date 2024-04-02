# NPM - Node Package Manager

## O que é o npm?

- **npm** significa **Node Package Manager** (Gerenciador de Pacotes do Node).
- É o **maior Gerenciado de software** para desenvolvedores JavaScript.
- O npm permite que você **instale**, **gerencie** e **compartilhe** pacotes JavaScript reutilizáveis (também conhecidos como módulos ou bibliotecas) com facilidade.

## Principais Recursos do npm:

1. **Gerenciamento de Pacotes:**
    - O npm oferece uma vasta coleção de pacotes de código aberto que você pode usar em seus projetos.
    - Você pode pesquisar por pacotes, instalá-los e acompanhar suas versões.
2. **Gerenciamento de Dependências:**
    - Ao construir aplicativos Node.js, você frequentemente depende de bibliotecas externas.
    - O npm ajuda a gerenciar as dependências, instalando automaticamente os pacotes necessários e suas dependências.
3. **Controle de Versão:**
    - Cada pacote tem um número de versão (por exemplo, **`1.2.3`**).
    - O npm garante que seu projeto utilize as versões corretas dos pacotes.
4. **Scripts:**
    - Você pode definir scripts personalizados em seu arquivo **`package.json`**.
    - Esses scripts podem ser executados com **`npm run <nome-do-script>`**.

## Primeiros Passos com o npm:

1. **Instale o Node.js:**
    - Antes de usar o npm, certifique-se de ter o Node.js instalado.
    - Baixe a versão LTS mais recente do Node.js no site oficial.
2. **Crie um Novo Projeto:**
    - Abra o terminal e navegue até o diretório do seu projeto.
    - Execute o seguinte comando para criar um arquivo **`package.json`**:
        
        **`npm init -y`**
        
3. **Instale Pacotes:**
    - Para instalar um pacote, use:
        
        **`npm install <nome-do-pacote>`**
        
    - Exemplo: **`npm install express`** instala o framework Express.
4. **Use Pacotes em Seu Código:**
    - Em seus arquivos JavaScript, importe os pacotes instalados:**JavaScript**
        
        **`const express = require('express');`**
        
5. **Gerencie Dependências:**
    - Adicione dependências ao seu **`package.json`** usando:
        
        **`npm install <nome-do-pacote> --save`**
        
    - Adicione dependências de desenvolvimento (para fins de desenvolvimento) usando:
        
        **`npm install <nome-do-pacote> --save-dev`**
        
6. **Execute Scripts:**
    - Defina scripts personalizados em seu **`package.json`**:**JSON**
        
        
        ```json
        **"scripts": {
          "start": "node index.js",
          "test": "mocha"
        }**
        ```
        
    - Execute-os com:
        
        **`npm run start`**
