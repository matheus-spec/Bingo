# 🎰 App de Bingo - Sorteio de Números

Um aplicativo de bingo moderno e responsivo para sorteio de números (1 a 90). **Agora é um PWA (Progressive Web App)** - pode ser instalado como app nativo no celular!

## 🚀 Características

✅ **Sorteio Aleatório** - Sorteia números de 1 a 90 sem repetição  
✅ **Histórico Visual** - Mostra todos os números já sorteados em bolinhas coloridas  
✅ **Responsive Design** - Funciona perfeitamente em celular, tablet e desktop  
✅ **Sem Dependências Externas** - HTML, CSS e JavaScript puro  
✅ **PWA - Instalável** - Instale como app nativo no Android e iOS  
✅ **Funciona Offline** - Continua funcionando sem internet  
✅ **Interface Intuitiva** - Fácil de usar  
✅ **Efeitos Visuais** - Animações suaves e sons ao sortear  
✅ **Reiniciar Partida** - Botão para começar uma nova partida  

## 📱 Como Instalar como App

### No Android:
1. Abra o navegador (Chrome, Firefox, Edge, etc.)
2. Acesse o arquivo `index.html` ou hospede em um servidor
3. Toque no ícone de menu (⋮) do navegador
4. Selecione "Instalar app" ou "Adicionar à tela inicial"
5. Pronto! O app aparecerá na sua tela inicial

### No iPhone/iPad (iOS):
1. Abra em Safari
2. Toque no botão Compartilhar (↑)
3. Role para baixo e clique em "Adicionar à Tela Inicial"
4. Escolha um nome e toque em "Adicionar"
5. Pronto! O app aparecerá na sua tela inicial

### No Computador:
1. Abra em Chrome, Edge ou navegador moderno
2. Clique no ícone de instalação na barra de endereço (↓)
3. Clique em "Instalar"
4. O app abrirá em janela separada

## 💻 Como Usar Localmente

1. **Baixe os arquivos** ou clone o repositório
2. **Abra `index.html`** em seu navegador (clique duplo no arquivo)
3. **Ou use um servidor local**:
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js
   npx http-server
   ```
   Então acesse: `http://localhost:8000`

## 🎮 Como Jogar

1. **Clique em "SORTEAR NÚMERO"** para começar
2. **Acompanhe** o histórico de números sorteados
3. **Reinicie** quando alguém fizer bingo

## 📋 Funcionalidades

### Sorteio de Números
- Sorteia números de 1 a 90 sem repetição
- Cada número só aparece uma vez por partida
- Som e animação ao sortear (experiência imersiva)

### Exibição do Histórico
- Os números sorteados aparecem em uma grade com design moderno
- Cada número está em uma "bolinha" colorida
- Os números aparecem em ordem crescente

### Estatísticas
- **Números Sorteados**: Quantidade de números já sorteados
- **Números Restantes**: Quantos números ainda faltam sortear

### Reiniciar Partida
- Botão dedicado para limpar tudo e começar do zero
- Confirmação de segurança para evitar acidentes

## 📱 Compatibilidade

- ✅ Android (Chrome, Firefox, Edge, Samsung Internet, etc.)
- ✅ iPhone/iPad (Safari)
- ✅ Tablets
- ✅ Computadores (Windows/Mac/Linux)
- ✅ Todos os navegadores modernos

## 🌐 Deploy (Hospedagem Gratuita)

Você pode fazer deploy em:
- **Netlify** - [Grátis, com suporte PWA](https://stalwart-treacle-dba7cf.netlify.app)

## 🎨 Design

- Gradientes modernos em roxo e rosa
- Interface limpa e profissional
- Animações suaves
- Totalmente responsivo
- Ícone personalizado

## 📝 Arquivos

- `index.html` - Estrutura HTML do aplicativo
- `styles.css` - Estilos e design responsivo
- `script.js` - Lógica do jogo em JavaScript
- `manifest.json` - Configuração do PWA
- `service-worker.js` - Suporte offline

## 💡 Personalizações Possíveis

Você pode facilmente customizar:
- Cores (alterar gradientes em `styles.css`)
- Número máximo de bolas (alterar valor em `script.js`)
- Sons e animações
- Textos e idioma
- Ícone do app (no `manifest.json`)

## 🔊 Notas

- O som ao sortear funciona em navegadores com suporte a Web Audio API
- Em alguns navegadores/dispositivos, o som pode estar desativado por padrão
- O app funciona offline após ser instalado e carregado pela primeira vez
- Os dados do jogo não são salvos entre sessões (por design)

## 🛠 Requisitos Técnicos

- Navegador web moderno com suporte a PWA
- HTTPS (quando hospedado online - já que PWA requer segurança)
- Nenhuma outra dependência!

---

**Desenvolvido para ser simples, eficiente, sem dependências e 100% instalável!** 🎯
