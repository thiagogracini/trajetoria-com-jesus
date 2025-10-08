# Newsletter Trajetória com Jesus

Este é o repositório da minha newsletter.

## Descrição

Este é um projeto pessoal, vou utiliza-lo para aprender a programar.

## Fundação

Aqui vou descrever todos os passos necessários para construir a fundação do projeto.

- Criar o repositório no github já com o arquivo `README.md`
- Criar o arquivo `.nvmrc` na raíz do projeto e especificar a versão do node.
- Executar o comando `nvm install` para instalar a versão especificada no `.nvmrc`
- Executar o comando `npm init` para iniciar o repositório.
- Instalar o `nextjs`
- Instalar o `react`
- Instalar o `react-dom`
- Criar o script `"dev": "next dev"` no `package.json`
- Criar o diretório `app`
- Criar o arquivo `app/page.js` e adicionar uma mensagem "Página em construção"
- Criar o arquivo `.gitignore` e adicionar nele os diretórios `.next` e `node_modules`
- Commitar e empurrar o arquivo `.gitignore` com `git add`, `git commit` e `git push`
- Commitar e empurrar o arquivo `.nvmrc` com `git add`, `git commit` e `git push`
- Commitar e empurrar os arquivos `.package.json` e `package-lock.json` com `git add`, `git commit` e `git push`
- Commitar e empurrar o diretório `app` com `git add`, `git commit` e `git push`
- Criar o arquivo `.editorconfig`, o vscode não interpreta esse arquivo automaticamente então vamos usar a extensão `EditorConfig for VSCode`
- Commitar e empurrar o arquivo `.editorconfig` com `git add`, `git commit` e `git push`
- Instalar o `Prettier` com `npm install prettier -D` e Configurar
- Criar o script `"lint:check": "prettier --check ."`
- Criar o script `"lint:fix": "prettier --write ."`
- Instalar a extensão `Prettier - Code formatter`
- Instalar e configurar o `tailwindcss` e o `@tailwindcss/postcss`

## Comandos úteis

- `node -v`: Exibe a versão do node.
- `nvm install lts/jod`: Instala o node na versão lts/jod, se nenhuma versão for especificada o nvm vai buscar pelo arquivo `.nvmrc` na raíz do projeto e instalar a versão especificada nele.
- `nvm alias default lts/jod`: Define a versão lts/jod como padrão do node.
- `npm init`: Inicia o node no repositório criando o arquivo `package.json`
- `git log`: Exibe o log de commits
- `git log --stat`: Exibe o log de commits com as alterações realizadas nos commits.
- `git log --oneline`: Exibe o log de commits de forma resumida.
- `git status`: Exibe os arquivos alterados e criados desde o último commit
- `git diff`: Exibe as alterações realizadas em um arquivo desde o último commit
- `git commit --amend`: Altera o último commit realizado, **não recomendado** utilizar.
- `git branch`: Exibe a branch que estamos trabalhando
- `git push`: Empurra as alterações para o repositório remoto.
- `git push -f`: Empurra com "força" sobreescrevendo o diretório remoto. **NÃO RECOMENDADO**

## Boas Práticas

- Sempre que for realizar um commit seguir os passos:
  - git status
  - git add
  - git commit -m 'mensagem curta e objetiva'
