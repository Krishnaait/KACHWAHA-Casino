/* ===========================
   ROULETTE GAME
   Classic Casino Roulette
   =========================== */

class Roulette {
    constructor() {
        this.numbers = Array.from({ length: 37 }, (_, i) => i); // 0-36
        this.colors = this.generateColors();
        this.currentBet = 0;
        this.betType = null;
        this.betValue = null;
        this.isSpinning = false;
        this.initGame();
    }

    generateColors() {
        const colors = { 0: 'green' };
        for (let i = 1; i <= 36; i++) {
            colors[i] = (i % 2 === 0) ? 'black' : 'red';
        }
        return colors;
    }

    initGame() {
        this.renderRoulette();
    }

    setupEventListeners() {
        const spinBtn = document.getElementById('spin-roulette');
        const betInput = document.getElementById('roulette-bet');

        if (spinBtn) {
            spinBtn.addEventListener('click', () => this.spin());
        }

        // Number betting
        document.querySelectorAll('.roulette-number').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.selectBet('number', parseInt(e.target.textContent));
            });
        });

        // Color betting
        document.querySelectorAll('.roulette-color').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const color = e.target.dataset.color;
                this.selectBet('color', color);
            });
        });

        // Odd/Even betting
        document.querySelectorAll('.roulette-oddeven').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.target.dataset.type;
                this.selectBet('oddeven', type);
            });
        });
    }

    renderRoulette() {
        const container = document.getElementById('roulette-container');
        if (!container) return;

        let html = `
            <div class="roulette-layout">
                <div class="roulette-wheel">
                    <canvas id="roulette-canvas" width="300" height="300"></canvas>
                </div>

                <div class="betting-area">
                    <h3>Place Your Bets</h3>
                    
                    <div class="bet-input-group">
                        <label>Bet Amount:</label>
                        <input type="number" id="roulette-bet" min="10" max="1000" value="50" placeholder="Enter bet amount">
                    </div>

                    <div class="bet-section">
                        <h4>Numbers (0-36)</h4>
                        <div class="numbers-grid">
        `;

        for (let i = 0; i <= 36; i++) {
            const color = this.colors[i];
            html += `<button class="roulette-number number-${color}" data-number="${i}">${i}</button>`;
        }

        html += `
                        </div>
                    </div>

                    <div class="bet-section">
                        <h4>Color & Odd/Even</h4>
                        <div class="color-betting">
                            <button class="roulette-color color-red" data-color="red">🔴 Red</button>
                            <button class="roulette-color color-black" data-color="black">⚫ Black</button>
                            <button class="roulette-oddeven" data-type="odd">Odd</button>
                            <button class="roulette-oddeven" data-type="even">Even</button>
                        </div>
                    </div>

                    <div class="current-bet">
                        <p>Selected Bet: <span id="bet-display">None</span></p>
                        <p>Bet Amount: <span id="bet-amount-display">0</span> Credits</p>
                    </div>

                    <button class="btn btn-primary" id="spin-roulette" style="width: 100%; margin-top: 1rem;">SPIN THE WHEEL</button>
                </div>
            </div>

            <div id="roulette-result" class="result-box" style="display: none; margin-top: 2rem;"></div>
        `;

        container.innerHTML = html;
        this.drawWheel();
        
        // Setup event listeners AFTER HTML is rendered
        setTimeout(() => this.setupEventListeners(), 100);
    }

    drawWheel() {
        const canvas = document.getElementById('roulette-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const radius = 140;

        // Draw wheel
        for (let i = 0; i < 37; i++) {
            const angle = (i / 37) * Math.PI * 2;
            const nextAngle = ((i + 1) / 37) * Math.PI * 2;

            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, angle, nextAngle);
            ctx.lineTo(centerX, centerY);
            ctx.fillStyle = this.getNumberColor(i);
            ctx.fill();

            // Draw number
            const textAngle = (angle + nextAngle) / 2;
            const textX = centerX + Math.cos(textAngle) * (radius - 30);
            const textY = centerY + Math.sin(textAngle) * (radius - 30);

            ctx.fillStyle = 'white';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(i, textX, textY);
        }

        // Draw center circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, 15, 0, Math.PI * 2);
        ctx.fillStyle = '#d4af37';
        ctx.fill();

        // Draw pointer
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - radius - 20);
        ctx.lineTo(centerX - 10, centerY - radius);
        ctx.lineTo(centerX + 10, centerY - radius);
        ctx.fillStyle = '#d4af37';
        ctx.fill();
    }

    getNumberColor(num) {
        const color = this.colors[num];
        if (color === 'red') return '#e74c3c';
        if (color === 'black') return '#2c3e50';
        return '#27ae60'; // green
    }

    selectBet(type, value) {
        this.betType = type;
        this.betValue = value;

        const betInput = document.getElementById('roulette-bet');
        this.currentBet = parseInt(betInput.value) || 50;

        let betDisplay = '';
        if (type === 'number') {
            betDisplay = `Number ${value}`;
        } else if (type === 'color') {
            betDisplay = `${value.charAt(0).toUpperCase() + value.slice(1)}`;
        } else if (type === 'oddeven') {
            betDisplay = value.charAt(0).toUpperCase() + value.slice(1);
        }

        document.getElementById('bet-display').textContent = betDisplay;
        document.getElementById('bet-amount-display').textContent = this.currentBet;

        soundSystem.playSound('click');
    }

    spin() {
        if (this.isSpinning) return;

        if (!this.betType) {
            soundSystem.playSound('loss');
            window.creditSystem.showNotification('Please select a bet first!', 'error');
            return;
        }

        if (!window.creditSystem.deductCredits(this.currentBet)) {
            soundSystem.playSound('loss');
            window.creditSystem.showNotification('Insufficient credits!', 'error');
            return;
        }

        this.isSpinning = true;
        soundSystem.playSound('click');

        const winningNumber = Math.floor(Math.random() * 37);
        this.animateSpin(winningNumber);
    }

    animateSpin(winningNumber) {
        const canvas = document.getElementById('roulette-canvas');
        if (!canvas) return;

        let rotation = 0;
        const targetRotation = (winningNumber / 37) * 360 + 720; // 2 full rotations + target
        const duration = 3000; // 3 seconds
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            rotation = targetRotation * easeProgress;

            canvas.style.transform = `rotate(${rotation}deg)`;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.showResult(winningNumber);
            }
        };

        animate();
    }

    showResult(winningNumber) {
        this.isSpinning = false;

        let won = false;
        let winnings = 0;

        if (this.betType === 'number' && this.betValue === winningNumber) {
            won = true;
            winnings = this.currentBet * 36; // 36:1 payout
        } else if (this.betType === 'color' && this.colors[winningNumber] === this.betValue) {
            won = true;
            winnings = this.currentBet * 2; // 2:1 payout
        } else if (this.betType === 'oddeven') {
            const isOdd = winningNumber % 2 === 1;
            if ((this.betValue === 'odd' && isOdd) || (this.betValue === 'even' && !isOdd)) {
                won = true;
                winnings = this.currentBet * 2; // 2:1 payout
            }
        }

        const resultArea = document.getElementById('roulette-result');
        let message = '';

        if (won) {
            window.creditSystem.addCredits(winnings);
            message = `🎉 You Won! Winning Number: ${winningNumber} | +${winnings} Credits`;
            soundSystem.playSound('win');
        } else {
            message = `😔 You Lost! Winning Number: ${winningNumber}. Better luck next time!`;
            soundSystem.playSound('loss');
        }

        resultArea.innerHTML = `
            <h3>${message}</h3>
            <button class="btn btn-primary" onclick="location.reload()">Play Again</button>
        `;
        resultArea.style.display = 'block';
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('roulette-container')) {
        window.roulette = new Roulette();
    }
});

// Add CSS for roulette
const rouletteStyles = document.createElement('style');
rouletteStyles.textContent = `
    .roulette-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: 2rem 0;
    }

    .roulette-wheel {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--primary-dark);
        padding: 2rem;
        border-radius: 12px;
        border: 3px solid var(--accent-gold);
    }

    #roulette-canvas {
        max-width: 100%;
        height: auto;
        transition: transform 0.1s linear;
    }

    .betting-area {
        background: var(--primary-light);
        padding: 2rem;
        border-radius: 12px;
        border: 2px solid var(--accent-purple);
    }

    .betting-area h3 {
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

    .bet-section {
        margin-bottom: 1.5rem;
    }

    .bet-section h4 {
        color: var(--accent-gold);
        margin-bottom: 0.8rem;
        font-size: 0.95rem;
    }

    .numbers-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 0.5rem;
    }

    .roulette-number {
        padding: 0.6rem;
        border: 2px solid var(--accent-purple);
        border-radius: 6px;
        background: var(--primary-dark);
        color: var(--text-light);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .roulette-number:hover {
        transform: scale(1.1);
        border-color: var(--accent-gold);
    }

    .roulette-number.number-red {
        border-color: #e74c3c;
    }

    .roulette-number.number-black {
        border-color: #2c3e50;
    }

    .roulette-number.number-green {
        border-color: #27ae60;
    }

    .color-betting {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.8rem;
    }

    .roulette-color, .roulette-oddeven {
        padding: 0.8rem;
        border: 2px solid var(--accent-purple);
        border-radius: 8px;
        background: var(--primary-dark);
        color: var(--text-light);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .roulette-color:hover, .roulette-oddeven:hover {
        transform: scale(1.05);
        border-color: var(--accent-gold);
    }

    .color-red {
        border-color: #e74c3c !important;
        color: #e74c3c;
    }

    .color-black {
        border-color: #2c3e50 !important;
        color: #2c3e50;
    }

    .current-bet {
        background: var(--primary-dark);
        padding: 1rem;
        border-radius: 8px;
        border: 1px solid var(--accent-gold);
        margin-top: 1rem;
    }

    .current-bet p {
        margin: 0.5rem 0;
        color: var(--text-muted);
    }

    .current-bet span {
        color: var(--accent-gold);
        font-weight: 700;
    }

    @media (max-width: 768px) {
        .roulette-layout {
            grid-template-columns: 1fr;
        }

        .numbers-grid {
            grid-template-columns: repeat(4, 1fr);
        }

        .color-betting {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`;
document.head.appendChild(rouletteStyles);
