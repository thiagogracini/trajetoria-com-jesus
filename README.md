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
- Instalar e configurar o `tailwindcss` e o `@tailwindcss/postcss` ambos devem ser instalados como DEV dependency.
- Criar arquivo `jsconfig.json`
- Instalar o `tailwind-merge`
- Instalar o `jest` com DEV dependency
- Criar os scripts `"test": "jest --runInBand"` e `"test:watch": "jest --watchAll --runInBand"`
- Criar o arquivo `.env.development`
- Instalar o `dotenv`

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
- `git mv old_file_name new_file_name`: renomeia um arquivo, esse é o jeito correto de renomear um arquivo que já foi commitado.
- `git branch`: Exibe as branches
- `git branch nova-branch` ou `git switch nova-branch`: cria uma nova branch com o nome "nova-branch"
- `git checkout nome-da-branch`: altera a branch de trabalho para a branch informada.
- `git rm nome-do-arquivo`: remove um arquivo que já foi commitado anteriormente.
- `git checkout primeiros-4-caracteres-do-commit`: vai para o commit especificado.
- `git checkout -b nova-branch`: cria a nova branch e já altera o ponteiro HEAD para ela.
- `git push --set-upstream origin nova-branch`: envia a branch local para o remoto e configura o tracking para que git push e git pull funcionem sem precisar repetir origin nome-da-branch. Esse comando serve para quando queremos fazer o commit de uma branch que não é a main e que será feito o merge no futuro.
- `git branch -d nome-da-branch`: Deleta uma branch
- `git branch -D nome-da-branch`: Força a remoção da branch, mesmo que ainda não tenha sido realizado o merge.
- `git reflog`: Exibe os logs de tudo que ocorreu no git.
- `git checkout -b nome-da-branch b54aeb9`: Cria uma branch apontando para um commit em específico.
- `git merge nome-da-branch`: Estando na branch main, esse comando mescla o conteúdo da branch `nome-da-branch` com a branch main. Em resumo a branch main passará a ter tudo que que existe na branch `nome-da-branch`
- `git log --graph`: Mostra o histórico de commits em formato de árvore gráfica, exibindo visualmente os ramos e merges do repositório.

## Boas Práticas

- Sempre que for realizar um commit seguir os passos:
  - git status
  - git add
  - git commit -m 'mensagem curta e objetiva'
- Para realizar a Fuzzy Search no vscode pressionar `Ctrl + P` e pesquisar.
  - Por exemplo `pk@scr` irá abrir o `package.json` já na seção `scripts`
