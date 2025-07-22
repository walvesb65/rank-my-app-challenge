# 📱 App Manager — Desafio Técnico RankMyApp

Aplicação desenvolvida para o desafio técnico da **RankMyApp**, com foco na construção de uma aplicação front-end moderna, utilizando React, TypeScript, Ant Design e Zustand, seguindo boas práticas de arquitetura e desenvolvimento orientado a domínio (DDD + SOLID).

---

## 🚀 Demonstração

👉 [Link da aplicação](https://rank-my-app-challenge.vercel.app/)

---

## 🧠 Visão Geral

O objetivo do projeto é criar uma aplicação capaz de:

- Cadastrar novos aplicativos
- Filtrar, listar, editar e remover os aplicativos
- Persistir os dados no navegador (localStorage)
- Seguir boas práticas de componentização, responsividade, acessibilidade e arquitetura limpa

---

## 🗂️ Estrutura de Pastas

```bash
src/
├── assets/ # Arquivos estáticos (imagens, ícones, etc.)
├── core/ # Domínio da aplicação (DDD)
│ ├── entities/ # Entidades de domínio
│ ├── repositories/ # Interfaces dos repositórios
│ ├── theme/ # Tema e design tokens
│ └── useCases/ # Casos de uso (regras de negócio)
├── infrastructure/ # Implementações técnicas (ex: APIs, armazenamento)
│ └── repositories/ # Implementações dos repositórios definidos em core
├── presentation/ # Camada de apresentação
│ └── components/ # Componentes compartilhados
├── shared/ # Utilitários e configurações globais
│ ├── router/ # Rotas da aplicação
│ └── styles/ # Estilos globais
├── ui/ # Interface do usuário
│ ├── components/ # Componentes visuais reutilizáveis
│ ├── hooks/ # Hooks customizados
│ └── pages/ # Páginas da aplicação
├── App.tsx # Componente raiz da aplicação
└── main.tsx # Ponto de entrada da aplicação
```

---

## 📌 Funcionalidades

### ✅ Cadastro de Aplicativos

- Formulário com validação para adicionar um novo App
- Reaproveitamento do formulário para edição

### ✅ Edição

- Página dedicada para edição com feedback visual
- Pré-preenchimento de dados via `initialValues`

### ✅ Exclusão

- Confirmação de deleção com `Popconfirm` do Ant Design
- Atualização do estado e localStorage

### ✅ Filtro

- Filtro por nome, categoria e plataforma
- Componente responsivo com `useBreakpoint()`

### ✅ Listagem

- Exibição em cards
- Informações como nome, plataforma, categoria e link

### ✅ Persistência

- Toda a base de dados é salva no `localStorage`

---

## 🧱 Tecnologias Utilizadas

- ⚛️ React 18
- 🔠 TypeScript
- 💅 TailwindCSS (para ajustes de layout)
- 🎨 Ant Design (UI moderna e acessível)
- 📦 Zustand (gestão de estado)
- 🧠 Arquitetura DDD + SOLID
- 🧪 Testes E2E (Playwright)

---

## 🧭 Como Rodar o Projeto

### 🔧 Localmente (sem Docker)

1. **Clone o repositório**

```bash
git clone git@github.com:walvesb65/rank-my-app-challenge.git
cd app-manager-rankmyapp
```

2. **Instale as dependências**

```bash
npm install
```

3. **Rode o projeto localmente**

```bash
npm run dev
```

---

## 🐳 Rodando com Docker

Se preferir executar a aplicação isoladamente com Docker, siga os passos abaixo:

### 1. **Pré-requisitos**

- Docker instalado: [`https://www.docker.com`](https://www.docker.com)

> Verifique:

```bash
docker -v
docker compose version
```

### 2. **Build e execução**

No diretório raiz do projeto, execute:

```bash
docker compose up --build -d
```

A aplicação ficará disponível em:

```
http://localhost:3000
```

### 3. **Parar containers**

```bash
docker compose down
```

> ℹ️ **Nota:** a Vercel não utiliza Docker para deploy, mas a configuração foi adicionada para facilitar testes locais e atender aos requisitos do desafio técnico.

---

## 🧪 Testes End-to-End (E2E) com Playwright

A aplicação conta com um teste E2E utilizando Playwright para simular o cadastro de um novo aplicativo.

### 📦 Instalação do Playwright

Caso ainda não tenha instalado os navegadores do Playwright:

```bash
npx playwright install
```

### ▶️ Como rodar os testes

1. Execute o projeto localmente:

```bash
npm run dev
```

2. Em outro terminal, execute os testes:

```bash
npx playwright test
```

3. Visualize o relatório dos testes:

```bash
npx playwright show-report
```

---

## 🛠️ Scripts Disponíveis

| Comando | Ação                                 |
| ------- | ------------------------------------ |
| `dev`   | Inicia o servidor de desenvolvimento |
| `build` | Gera a build de produção             |

---

## 📋 Roadmap de Melhorias

🚀 Funcionalidade gerais

- [ ] Paginação na listagem
- [ ] Melhorias de acessibilidade (ARIA, navegação por teclado)
- [ ] Ordenação por nome, categoria ou plataforma
- [ ] Adicionar busca por nome com debounce
- [ ] Exibir total de apps cadastrados
- [ ] Modal de confirmação para exclusão com opção de desfazer
- [ ] Autenticação fictícia (login/logout com dados mockados)

🧑‍🦯 Acessibilidade

- [ ] Melhorias de acessibilidade com ARIA roles e labels
- [ ] Suporte completo a navegação por teclado (TAB, ENTER, ESC)
- [ ] Mensagens de erro acessíveis com aria-live

🎨 UI/UX

- [ ] Dark Mode

🧪 Testes

- [ ] Cobertura com testes unitários (Vitest ou Jest)
- [ ] Testes de integração para fluxo de cadastro e edição

🧑‍🏫 Experiência do Desenvolvedor

- [ ] Storybook com os principais componentes
- [ ] Adicionar um gerador de dados mock (ex: Faker.js)

---

## 📎 Autor

Feito por [Willian Alves](https://www.linkedin.com/in/willianalmeidaalves) para o desafio técnico da RankMyApp.
