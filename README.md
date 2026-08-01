# 🚀 Nylox Tech - Versão Moderna

**Site profissional com React, TypeScript, Tailwind CSS e Vite - Apresentação de serviços digitais, automação para WhatsApp e presença online moderna.**

---

## ✨ Recursos

- ⚡ **Vite** - Build tool ultrarrápido
- ⚛️ **React 18** - UI library moderna
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type safety
- 🔍 **ESLint** - Linting e code quality
- 💅 **Prettier** - Code formatting
- 📱 **Responsivo** - Mobile-first design
- 🎯 **Componentes** - Reutilizáveis e tipados
- ⚙️ **Automação** - Integração com WhatsApp
- 🎬 **Animações** - Suaves e modernas

---

## 🛠️ Tecnologias

- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3 + PostCSS
- **Routing**: React Router DOM
- **Linting**: ESLint + TypeScript
- **Formatting**: Prettier
- **Package Manager**: npm/yarn/pnpm

---

## 📦 Instalação

### Pré-requisitos
- Node.js 16+ 
- npm, yarn ou pnpm

### Setup

```bash
# Clone o repositório
git clone https://github.com/nildoglopes-max/new-on-tech.git
cd new-on-tech

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

---

## 🚀 Comandos

```bash
# Desenvolvimento (hot reload)
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Lint e verificação de código
npm run lint

# Formatar código
npm run format
```

---

## 📂 Estrutura do Projeto

```
new-on-tech/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Cabeçalho com navegação
│   │   ├── Hero.tsx            # Seção hero principal
│   │   ├── Services.tsx        # Catálogo de serviços
│   │   ├── WhatsAppCTA.tsx     # Call-to-action WhatsApp
│   │   └── Footer.tsx          # Rodapé
│   ├── App.tsx                 # Componente principal
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind imports
├── index.html                  # HTML principal
├── vite.config.ts              # Configuração Vite
├── tsconfig.json               # Configuração TypeScript
├── tailwind.config.js          # Configuração Tailwind
├── postcss.config.js           # Configuração PostCSS
├── .eslintrc.cjs               # Configuração ESLint
├── .prettierrc.json            # Configuração Prettier
├── package.json                # Dependências
└── README.md                   # Este arquivo
```

---

## 🎨 Personalização

### Alterar cores

Edite `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#3b82f6', // Altere aqui
    },
  },
}
```

### Atualizar WhatsApp

Em `src/components/WhatsAppCTA.tsx`:

```typescript
const whatsappLink = 'https://wa.me/SEU_NUMERO_AQUI'
```

---

## 📱 Responsividade

O projeto utiliza Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px (padrão)
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🚀 Deploy

### GitHub Pages

```bash
# Build
npm run build

# Commit e push
git add .
git commit -m "Deploy para produção"
git push origin main
```

### Vercel

```bash
npm i -g vercel
vercel
```

---

## 📝 Licença

MIT License - veja LICENSE.md

---

## 👨‍💻 Autor

Desenvolvido com ❤️ por **nildoglopes-max**

**Contribuições são bem-vindas!** 🤝
