/* ===========================
   BINGO GAME
   Classic Bingo Card Game
   =========================== */

class Bingo {
    constructor() {
        this.cardNumbers = [];
        this.drawnNumbers = [];
        this.gameState = 'idle'; // idle, playing, won
        this.currentBet = 0;
        this.initGame();
    }

    initGame() {
        this.generateCard();
        this.renderGame();
        this.setupEventListeners();
    }

    generateCard() {
        this.cardNumbers = [];
        const ranges = [
            { min: 1, max: 15 },    // B
            { min: 16, max: 30 },   // I
            { min: 31, max: 45 },   // N
            { min: 46, max: 60 },   // G
            { min: 61, max: 75 }    // O
        ];

        for (let col = 0; col < 5; col++) {
            this.cardNumbers[col] = [];
            const range = ranges[col];
            const numbers = [];

            for (let i = range.min; i <= range.max; i++) {
                numbers.push(i);
            }

            // Shuffle and pick 5
            for (let row = 0; row < 5; row++) {
                const randomIdx = Math.floor(Math.random() * numbers.length);
                this.cardNumbers[col][row] = numbers.splice(randomIdx, 1)[0];
            }
        }

        // Free space in center
        this.cardNumbers[2][2] = 'FREE';
    }

    renderGame() {
        const container = document.getElementById('bingo-container');
        if (!container) return;

        let html = `
            <div class="bingo-layout">
                <div class="bingo-card-section">
                    <h3>Your Bingo Card</h3>
                    <div class="bingo-card">
                        <div class="bingo-header">
                            <div class="bingo-letter">B</div>
                            <div class="bingo-letter">I</div>
                            <div class="bingo-letter">N</div>
                            <div class="bingo-letter">G</div>
                            <div class="bingo-letter">O</div>
                        </div>
                        <div class="bingo-grid" id="bingo-grid">
        `;

        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                const number = this.cardNumbers[col][row];
                const isFree = number === 'FREE';
                const isMarked = isFree;

                html += `
                    <div class="bingo-cell ${isMarked ? 'marked' : ''}" data-col="${col}" data-row="${row}">
                        <span>${isFree ? '🎁' : number}</span>
                    </div>
                `;
            }
        }

        html += `
                        </div>
                    </div>

                    <div class="bingo-info">
                        <p>Numbers Drawn: <strong id="drawn-count">0</strong>/75</p>
                        <p>Matches: <strong id="match-count">0</strong>/25</p>
                    </div>
                </div>

                <div class="bingo-control-section">
                    <h3>Game Controls</h3>

                    <div class="bet-input-group">
                        <label>Bet Amount:</label>
                        <input type="number" id="bingo-bet" min="10" max="500" value="50" placeholder="Enter bet amount">
                    </div>

                    <button class="btn btn-primary" id="start-bingo" style="width: 100%; margin-bottom: 1rem;">
                        Start Game
                    </button>

                    <div class="drawn-numbers-section">
                        <h4>Drawn Numbers</h4>
                        <div class="drawn-numbers" id="drawn-numbers"></div>
                    </div>

                    <button class="btn btn-secondary" id="draw-btn" style="width: 100%; margin-top: 1rem; display: none;">
                        Draw Next Number
                    </button>

                    <button class="btn btn-secondary" id="new-card-btn" style="width: 100%; margin-top: 0.5rem;">
                        New Card
                    </button>

                    <div id="bingo-result" class="result-box" style="display: none; margin-top: 1rem;"></div>
                </div>
            </div>
        `;

        container.innerHTML = html;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const startBtn = document.getElementById('start-bingo');
        const drawBtn = document.getElementById('draw-btn');
        const newCardBtn = document.getElementById('new-card-btn');

        if (startBtn) {
            startBtn.addEventListener('click', () => this.startGame());
        }

        if (drawBtn) {
            drawBtn.addEventListener('click', () => this.drawNumber());
        }

        if (newCardBtn) {
            newCardBtn.addEventListener('click', () => {
                this.generateCard();
                this.renderGame();
            });
        }

        // Cell click to mark
        document.querySelectorAll('.bingo-cell').forEach(cell => {
            cell.addEventListener('click', (e) => {
                if (this.gameState === 'playing') {
                    e.target.closest('.bingo-cell').classList.toggle('marked');
                    this.checkWin();
                }
            });
        });
    }

    startGame() {
        const betInput = document.getElementById('bingo-bet');
        const bet = parseInt(betInput.value) || 50;

        if (bet <= 0) {
            soundSystem.playSound('loss');
            window.creditSystem.showNotification('Please enter a valid bet amount', 'error');
            return;
        }

        if (!window.creditSystem.deductCredits(bet)) {
            soundSystem.playSound('loss');
            window.creditSystem.showNotification('Insufficient credits!', 'error');
            return;
        }

        this.currentBet = bet;
        this.gameState = 'playing';
        this.drawnNumbers = [];

        soundSystem.playSound('click');

        // Reset card marking except free space
        document.querySelectorAll('.bingo-cell').forEach(cell => {
            const col = parseInt(cell.dataset.col);
            const row = parseInt(cell.dataset.row);
            if (col === 2 && row === 2) {
                cell.classList.add('marked');
            } else {
                cell.classList.remove('marked');
            }
        });

        // Update UI
        document.getElementById('start-bingo').style.display = 'none';
        document.getElementById('draw-btn').style.display = 'block';
        document.getElementById('bingo-bet').disabled = true;

        this.updateStats();
    }

    drawNumber() {
        if (this.drawnNumbers.length >= 75) {
            window.creditSystem.showNotification('All numbers have been drawn!', 'error');
            return;
        }

        let number;
        do {
            number = Math.floor(Math.random() * 75) + 1;
        } while (this.drawnNumbers.includes(number));

        this.drawnNumbers.push(number);
        soundSystem.playSound('click');

        this.markMatchingNumbers(number);
        this.displayDrawnNumbers();
        this.updateStats();
        this.checkWin();
    }

    markMatchingNumbers(number) {
        const ranges = [
            { min: 1, max: 15 },    // B
            { min: 16, max: 30 },   // I
            { min: 31, max: 45 },   // N
            { min: 46, max: 60 },   // G
            { min: 61, max: 75 }    // O
        ];

        for (let col = 0; col < 5; col++) {
            const range = ranges[col];
            if (number >= range.min && number <= range.max) {
                for (let row = 0; row < 5; row++) {
                    if (this.cardNumbers[col][row] === number) {
                        const cell = document.querySelector(`[data-col="${col}"][data-row="${row}"]`);
                        if (cell) {
                            cell.classList.add('marked');
                        }
                    }
                }
            }
        }
    }

    displayDrawnNumbers() {
        const container = document.getElementById('drawn-numbers');
        if (!container) return;

        container.innerHTML = this.drawnNumbers.map(num => 
            `<span class="drawn-number">${num}</span>`
        ).join('');
    }

    updateStats() {
        document.getElementById('drawn-count').textContent = this.drawnNumbers.length;
        
        let matchCount = 0;
        document.querySelectorAll('.bingo-cell.marked').forEach(cell => {
            matchCount++;
        });
        document.getElementById('match-count').textContent = matchCount;
    }

    checkWin() {
        // Check rows
        for (let row = 0; row < 5; row++) {
            let rowComplete = true;
            for (let col = 0; col < 5; col++) {
                const cell = document.querySelector(`[data-col="${col}"][data-row="${row}"]`);
                if (!cell.classList.contains('marked')) {
                    rowComplete = false;
                    break;
                }
            }
            if (rowComplete) {
                this.winGame();
                return;
            }
        }

        // Check columns
        for (let col = 0; col < 5; col++) {
            let colComplete = true;
            for (let row = 0; row < 5; row++) {
                const cell = document.querySelector(`[data-col="${col}"][data-row="${row}"]`);
                if (!cell.classList.contains('marked')) {
                    colComplete = false;
                    break;
                }
            }
            if (colComplete) {
                this.winGame();
                return;
            }
        }

        // Check diagonals
        let diagonal1 = true, diagonal2 = true;
        for (let i = 0; i < 5; i++) {
            const cell1 = document.querySelector(`[data-col="${i}"][data-row="${i}"]`);
            const cell2 = document.querySelector(`[data-col="${4-i}"][data-row="${i}"]`);
            
            if (!cell1.classList.contains('marked')) diagonal1 = false;
            if (!cell2.classList.contains('marked')) diagonal2 = false;
        }

        if (diagonal1 || diagonal2) {
            this.winGame();
        }
    }

    winGame() {
        if (this.gameState !== 'playing') return;

        this.gameState = 'won';
        const winnings = this.currentBet * 5; // 5x payout
        window.creditSystem.addCredits(winnings);

        soundSystem.playSound('win');

        const resultArea = document.getElementById('bingo-result');
        resultArea.innerHTML = `
            <h3>🎉 BINGO! You Won! 🎉</h3>
            <p>Congratulations! You completed a line/diagonal/full card!</p>
            <p class="win-amount">+${winnings} Credits (${this.currentBet} × 5)</p>
            <button class="btn btn-primary" onclick="location.reload()">Play Again</button>
        `;
        resultArea.style.display = 'block';

        document.getElementById('draw-btn').disabled = true;
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('bingo-container')) {
        window.bingo = new Bingo();
    }
});

// Add CSS for bingo
const bingoStyles = document.createElement('style');
bingoStyles.textContent = `
    .bingo-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: 2rem 0;
    }

    .bingo-card-section {
        background: var(--primary-light);
        padding: 2rem;
        border-radius: 12px;
        border: 2px solid var(--accent-gold);
    }

    .bingo-card-section h3 {
        color: var(--accent-gold);
        margin-bottom: 1.5rem;
    }

    .bingo-card {
        background: var(--primary-dark);
        padding: 1rem;
        border-radius: 8px;
        border: 3px solid var(--accent-purple);
    }

    .bingo-header {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .bingo-letter {
        background: var(--accent-purple);
        padding: 0.8rem;
        border-radius: 6px;
        text-align: center;
        font-weight: 900;
        font-size: 1.2rem;
        color: white;
    }

    .bingo-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
    }

    .bingo-cell {
        aspect-ratio: 1;
        background: var(--primary-light);
        border: 2px solid var(--accent-gold);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.1rem;
    }

    .bingo-cell:hover {
        transform: scale(1.05);
        border-color: var(--accent-purple);
    }

    .bingo-cell.marked {
        background: var(--accent-purple);
        color: white;
        border-color: var(--accent-gold);
        box-shadow: 0 0 10px var(--accent-gold);
    }

    .bingo-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .bingo-info p {
        background: var(--primary-dark);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid var(--accent-purple);
        text-align: center;
        color: var(--text-muted);
    }

    .bingo-info strong {
        color: var(--accent-gold);
        font-size: 1.2rem;
    }

    .bingo-control-section {
        background: var(--primary-light);
        padding: 2rem;
        border-radius: 12px;
        border: 2px solid var(--accent-purple);
    }

    .bingo-control-section h3 {
        color: var(--accent-gold);
        margin-bottom: 1.5rem;
    }

    .bet-input-group {
        margin-bottom: 1.5rem;
    }

    .bet-input-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: var(--text-muted);
    }

    .bet-input-group input {
        width: 100%;
        padding: 0.8rem;
        border: 1px solid var(--accent-purple);
        border-radius: 8px;
        background: var(--primary-dark);
        color: var(--text-light);
        font-size: 1rem;
    }

    .drawn-numbers-section {
        background: var(--primary-dark);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid var(--accent-gold);
        margin: 1rem 0;
    }

    .drawn-numbers-section h4 {
        color: var(--accent-gold);
        margin-bottom: 0.8rem;
        font-size: 0.95rem;
    }

    .drawn-numbers {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .drawn-number {
        background: var(--accent-purple);
        color: white;
        padding: 0.4rem 0.8rem;
        border-radius: 6px;
        font-weight: 600;
        font-size: 0.85rem;
    }

    .win-amount {
        color: var(--success) !important;
        font-weight: 700;
        font-size: 1.2rem !important;
    }

    @media (max-width: 768px) {
        .bingo-layout {
            grid-template-columns: 1fr;
        }

        .bingo-cell {
            font-size: 0.9rem;
        }

        .bingo-info {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(bingoStyles);
