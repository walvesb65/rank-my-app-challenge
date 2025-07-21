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
├── core/                      # Camada de domínio (DDD)
│   ├── entities/             # Entidades puras (ex: App.ts)
│   ├── repositories/         # Interfaces de repositórios
│   └── useCases/             # Casos de uso (Create, Update, Remove)
│
├── infrastructure/           # Implementações externas
│   └── repositories/         # Ex: LocalAppRepository.ts
│
├── presentation/             # Camada de apresentação (UI)
│   ├── components/           # Componentes reutilizáveis (AppForm, AppCard, etc.)
│   └── pages/                # Páginas como Dashboard, Edit, Details
│
├── ui/                       # Hooks e UI State (Zustand)
│   └── hooks/                # Ex: useAppStore.ts
│
├── App.tsx                   # Ponto de entrada da aplicação
├── main.tsx                  # Setup do React + Router
└── index.css                 # Estilos globais
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

---

## 🧠 Decisões Técnicas

### 🧩 Arquitetura em Camadas (DDD)

A separação entre `core`, `infrastructure`, `presentation` e `ui` permite:

- Fácil testabilidade
- Baixo acoplamento
- Reutilização de código

### ⚙️ Zustand

Optamos por `zustand` para simplificar a gestão de estado global sem overhead de boilerplate.

### 🧱 Ant Design

Oferece:

- Sistema de grid responsivo
- Componentes ricos (inputs, selects, popconfirm, collapse, etc.)
- Boa experiência visual por padrão

---

## 🧭 Como Rodar o Projeto

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

## 🛠️ Scripts Disponíveis

| Comando   | Ação                                 |
| --------- | ------------------------------------ |
| `dev`     | Inicia o servidor de desenvolvimento |
| `build`   | Gera a build de produção             |
| `preview` | Pré-visualiza a build localmente     |

---

## 📋 Melhorias Futuras

- [ ] Testes unitários com `Vitest` ou `Jest`
- [ ] Paginação na listagem
- [ ] Melhorias de acessibilidade (ARIA, navegação por teclado)
- [ ] Deploy automático via Vercel ou Netlify

---

## 📎 Autor

Feito por [Willian Alves](https://www.linkedin.com/in/willianalmeidaalves) para o desafio técnico da RankMyApp.
