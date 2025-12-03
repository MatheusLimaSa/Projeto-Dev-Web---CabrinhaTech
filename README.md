# Projeto-Dev-Web---CabrinhaTech

# 🖥️ Projeto: Loja Virtual CabrinhaTech

## 📋 Sobre o Projeto
**CabrinhaTech** é uma loja virtual especializada em placas de vídeo NVIDIA e AMD, desenvolvida como projeto acadêmico do segundo semestre de Ciência da Computação. O site possui navegação completa entre páginas, catálogo de produtos, detalhes individuais e design responsivo.

> **Bordão da loja:** *"Que aqui a gente Mééééééélhora o seu futuro!"*

---

## 🎯 Objetivos do Projeto
- Praticar desenvolvimento com **React.js**
- Implementar **React Router** para navegação entre páginas
- Trabalhar com **componentes reutilizáveis**
- Aplicar **CSS Modules** para estilização
- Criar uma aplicação web completa com funcionalidades reais

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **React.js 18** - Biblioteca principal
- **React Router DOM 6** - Navegação entre páginas
- **CSS Modules** - Estilização modularizada
- **JavaScript (ES6+)** - Lógica da aplicação

### Ferramentas de Desenvolvimento
- **Node.js** - Ambiente de execução
- **npm** - Gerenciador de pacotes
- **Git** - Controle de versão
- **VS Code** - Editor de código

---

## 📁 Estrutura do Projeto

```
src/
│
├── components/               # Componentes reutilizáveis
│   ├── NavBar.js            # Barra de navegação
│   ├── NavBar.module.css
│   ├── Footer.js            # Rodapé da página
│   ├── Footer.module.css
│   ├── ProductCard.js       # Card individual do produto
│   ├── ProductCard.module.css
│   ├── ProductList.js       # Lista/grid de produtos
│   └── ProductList.module.css
│
├── pages/                   # Páginas principais
│   ├── Home.js              # Página inicial
│   ├── Home.module.css
│   ├── Shop.js              # Catálogo de produtos
│   ├── Sobre.js             # Página "Sobre nós"
│   ├── Sobre.module.css
│   ├── Contato.js           # Página de contato
│   ├── Contato.module.css
│   ├── ProductDetail.js     # Detalhes do produto
│   ├── Produtos.js          # Página alternativa de produtos
│   └── Produtos.module.css
│
├── data/                    # Dados estáticos
│   └── products.js          # Array de produtos
│
├── assets/                  # Imagens e recursos
│   └── (arquivos de imagem)
│
├── App.js                   # Componente principal
├── App.css                  # Estilos globais
├── index.js                 # Ponto de entrada
└── index.css               # Estilos gerais
```

---

## 🔧 Funcionalidades Implementadas

### ✅ Concluídas
1. **Navegação Completa**
   - Barra de navegação fixa
   - Rotas para todas as páginas
   - Links funcionais

2. **Catálogo de Produtos**
   - Exibição em grid responsivo
   - Cards com informações completas
   - Filtragem por marca (NVIDIA/AMD)

3. **Páginas Informativas**
   - Home com bordão da loja
   - Sobre nós com descrição
   - Contato com informações

4. **Detalhes do Produto**
   - Página individual para cada produto
   - Parâmetros de rota dinâmicos
   - Link "Voltar" funcional

5. **Design Responsivo**
   - Adaptação para mobile/tablet
   - CSS Modules para estilização
   - Layout flexível

### 📋 Em Desenvolvimento
- Carrinho de compras
- Sistema de login
- Filtros avançados
- Página de checkout

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

---

## 📱 Rotas da Aplicação

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | Home | Página inicial com bordão |
| `/shop` | Shop | Catálogo de placas de vídeo |
| `/product/:id` | ProductDetail | Detalhes do produto |
| `/sobre` | Sobre | Informações sobre a loja |
| `/contato` | Contato | Dados para contato |
| `/produtos` | Produtos | Página alternativa de produtos |

---

## 🎨 Design e Estilização

### Paleta de Cores
- **Primária:** `#0f172a` (azul escuro)
- **Secundária:** `#00eaff` (azul ciano)
- **Background:** `#f8fafc` (cinza claro)
- **Texto:** `#1e293b` (cinza escuro)

### Componentes Estilizados
- **NavBar:** Fixa no topo, responsiva
- **ProductCard:** Sombra, bordas arredondadas
- **Footer:** Fundo escuro, texto centralizado
- **Botões:** Gradientes e efeitos hover

---

## 📊 Dados dos Produtos

### Estrutura do Objeto Produto
```javascript
{
  id: string,
  name: string,
  brand: string,    // "NVIDIA" ou "AMD"
  price: number,
  desc: string,
  img: string
}
```

### Produtos Cadastrados
1. **RTX 4090 24GB** - NVIDIA - R$ 12.999,90
2. **RX 7900 XTX 24GB** - AMD - R$ 8.999,90
3. **RTX 4070 Ti 12GB** - NVIDIA - R$ 5.499,90
4. **RX 7800 XT 16GB** - AMD - R$ 4.299,90

---

## 🧪 Testes e Verificações

### Testes Realizados
- ✅ Navegação entre todas as páginas
- ✅ Responsividade em diferentes tamanhos de tela
- ✅ Carregamento dos dados dos produtos
- ✅ Links funcionais
- ✅ Parâmetros de rota dinâmicos

### Para Testar Manualmente
1. Clique em todos os links da navbar
2. Redimensione a janela para testar responsividade
3. Clique em "Detalhes" em algum produto
4. Verifique se a página de detalhes mostra o produto correto

---

## 📝 Aprendizados do Projeto

### Conhecimentos Adquiridos
1. **React Fundamentals**
   - Componentização
   - Props e estado
   - Ciclo de vida

2. **React Router**
   - Configuração de rotas
   - Parâmetros dinâmicos
   - Navegação programática

3. **CSS Modules**
   - Escopo de estilos
   - Organização modular
   - Reutilização de classes

4. **Arquitetura de Projeto**
   - Estrutura de pastas
   - Separação de responsabilidades
   - Import/export de módulos

---

## 🔮 Próximos Passos (Melhorias Futuras)

### Fase 2 - Planejada
1. **Carrinho de Compras**
   - Context API para estado global
   - LocalStorage para persistência
   - Botão "Adicionar ao carrinho"

2. **Backend Simulado**
   - JSON Server para API fake
   - Operações CRUD
   - Filtros e busca

3. **Funcionalidades Avançadas**
   - Sistema de avaliações
   - Comparador de produtos
   - Calculadora de frete

---

## 👥 Contribuidores

| Nome | RM | Contribuição |
|------|----|--------------|
| [Seu Nome] | [Seu RM] | Desenvolvimento full-stack |
| [Colega 1] | [RM] | Design/UI |
| [Colega 2] | [RM] | Documentação |

---

## 📚 Referências

### Documentações Oficiais
- [React Documentation](https://reactjs.org/docs)
- [React Router Docs](https://reactrouter.com/)
- [CSS Modules](https://github.com/css-modules/css-modules)

### Tutoriais
- [FreeCodeCamp React Course](https://www.freecodecamp.org/learn/front-end-development-libraries/)
- [React para Iniciantes](https://www.youtube.com/watch?v=ErjWNvP6mko)

---

## ⚠️ Possíveis Problemas e Soluções

### Problema 1: Imagens não carregam
**Solução:** Verifique se as imagens estão na pasta `/public/assets/`

### Problema 2: Rotas não funcionam no deploy
**Solução:** Configurar o HashRouter ou ajustar servidor para SPA

### Problema 3: CSS Modules não aplica estilos
**Solução:** Verificar nomes dos arquivos (deve terminar com `.module.css`)

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos como parte da disciplina de **Desenvolvimento Web** do segundo semestre de Ciência da Computação.

© 2025 - Projeto Acadêmico - **Fatec/Senac/Unip** (inserir sua instituição)

---

## 🌟 Destaques do Projeto

1. **Bordão único** que diferencia a marca
2. **Design coeso** com identidade visual
3. **Código organizado** e comentado
4. **Componentização eficiente**
5. **Totalmente responsivo**

---

**Desenvolvido com ❤️ por estudantes de Ciência da Computação**  
*"Que aqui a gente Bééééééélhora o seu futuro!"* 🚀
