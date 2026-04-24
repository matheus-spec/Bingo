// Estado do aplicativo
class BingoGame {
    constructor() {
        this.allNumbers = this.initializeNumbers();
        this.drawnNumbers = [];
        this.setupEventListeners();
        this.updateUI();
    }

    // Inicializar números de 1 a 90
    initializeNumbers() {
        const numbers = [];
        for (let i = 1; i <= 90; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    // Configurar listeners dos botões
    setupEventListeners() {
        document.getElementById('drawBtn').addEventListener('click', () => this.drawNumber());
        document.getElementById('resetBtn').addEventListener('click', () => this.resetGame());
    }

    // Sortear um número aleatório
    drawNumber() {
        const availableNumbers = this.allNumbers.filter(n => !this.drawnNumbers.includes(n));

        if (availableNumbers.length === 0) {
            alert('🎉 Todos os números foram sorteados!');
            return;
        }

        // Sortear um número aleatório da lista disponível
        const randomIndex = Math.floor(Math.random() * availableNumbers.length);
        const selectedNumber = availableNumbers[randomIndex];

        this.drawnNumbers.push(selectedNumber);
        this.drawnNumbers.sort((a, b) => a - b);

        // Animar o número atual
        const currentNumberDiv = document.getElementById('currentNumber');
        currentNumberDiv.textContent = selectedNumber;
        currentNumberDiv.classList.remove('new');
        // Trigger animation
        void currentNumberDiv.offsetWidth;
        currentNumberDiv.classList.add('new');

        // Tocar um som (opcional)
        this.playSound();

        // Atualizar UI
        this.updateUI();
    }

    // Reiniciar a partida
    resetGame() {
        if (this.drawnNumbers.length === 0) {
            alert('A partida ainda não começou!');
            return;
        }

        if (confirm('Tem certeza que deseja reiniciar a partida? Todos os números serão apagados.')) {
            this.drawnNumbers = [];
            document.getElementById('currentNumber').textContent = '-';
            this.updateUI();
        }
    }

    // Atualizar interface
    updateUI() {
        // Atualizar contagem
        document.getElementById('drawnCount').textContent = this.drawnNumbers.length;
        document.getElementById('remainingCount').textContent = this.allNumbers.length - this.drawnNumbers.length;

        // Atualizar grade de histórico
        this.updateHistoryGrid();

        // Desabilitar botão de sorteio se todos foram sorteados
        const drawBtn = document.getElementById('drawBtn');
        drawBtn.disabled = this.drawnNumbers.length === this.allNumbers.length;
    }

    // Atualizar grade de números sorteados
    updateHistoryGrid() {
        const historyGrid = document.getElementById('historyGrid');
        historyGrid.innerHTML = '';

        this.drawnNumbers.forEach(number => {
            const ball = document.createElement('div');
            ball.className = 'number-ball';
            ball.textContent = number;
            historyGrid.appendChild(ball);
        });

        // Se nenhum número foi sorteado, mostrar mensagem
        if (this.drawnNumbers.length === 0) {
            historyGrid.innerHTML = '<p style="grid-column: 1/-1; color: #999; padding: 20px; text-align: center;">Nenhum número sorteado ainda</p>';
        }
    }

    // Tocar som de sorteio (usando Web Audio API)
    playSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // Som curto e agradável
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (e) {
            // Som pode não funcionar em alguns navegadores, mas não é crítico
            console.log('Som não disponível');
        }
    }
}

// Inicializar app quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new BingoGame();
});
