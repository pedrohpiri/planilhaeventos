# ControleEventos

Projeto frontend desenvolvido com Vue 3 e Vite para controle e visualização de eventos e participantes.

## Tecnologias Utilizadas

- Vue 3 (Composition API)
- Vite (ferramenta de build e dev server)
- JavaScript moderno (ES6+)

## Estrutura do Projeto

- `src/` - Código fonte da aplicação
  - `components/` - Componentes Vue reutilizáveis, como `EventTable.vue`, `Hierarchy.vue`, `PerformanceRules.vue`
  - `App.vue` - Componente raiz da aplicação
  - `main.js` - Ponto de entrada da aplicação

- `index.html` - Arquivo HTML principal
- `package.json` - Gerenciador de dependências e scripts
- `vite.config.js` - Configurações do Vite

## Como Rodar o Projeto

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o navegador no endereço:

```
http://localhost:5173/
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot reload
- `npm run build` - Gera a versão otimizada para produção
- `npm run serve` - Serve a versão otimizada localmente para testes

## Componentes Principais

- **EventTable.vue**: Exibe uma tabela com os participantes e seus eventos em datas específicas, com destaque visual baseado na quantidade de eventos.
- **Hierarchy.vue**: Componente para visualização hierárquica (detalhes no código).
- **PerformanceRules.vue**: Componente para regras de performance (detalhes no código).

## Contato

Para dúvidas ou contribuições, entre em contato com o mantenedor do projeto.

---
Este README foi gerado automaticamente para facilitar o entendimento e uso do projeto ControleEventos.
