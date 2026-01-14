/* ===========================
   3 PATTI GAME
   Traditional Indian Card Game
   =========================== */

class ThreePatti {
    constructor() {
        this.deck = [];
        this.playerHand = [];
        this.dealerHand = [];
        this.playerBet = 0;
        this.gameState = 'betting'; // betting, playing, result
        this.initGame();
    }

    initGame() {
        this.createDeck();
        this.setupEventListeners();
    }

    createDeck() {
        const suits = ['♠', '♥', '♦', '♣'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        this.deck = [];
        for (let suit of suits) {
            for (let rank of ranks) {
                this.deck.push({ rank, suit });
            }
        }
        this.shuffleDeck();
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    setupEventListeners() {
        const playBtn = document.getElementById('play-3patti');
        const betInput = document.getElementById('bet-amount');
        const callBtn = document.getElementById('call-btn');
        const raiseBtn = document.getElementById('raise-btn');
        const foldBtn = document.getElementById('fold-btn');

        if (playBtn) {
            playBtn.addEventListener('click', () => this.startGame());
        }

        if (callBtn) {
            callBtn.addEventListener('click', () => this.call());
        }

        if (raiseBtn) {
            raiseBtn.addEventListener('click', () => this.raise());
        }

        if (foldBtn) {
            foldBtn.addEventListener('click', () => this.fold());
        }
    }

    startGame() {
        const betInput = document.getElementById('bet-amount');
        const bet = parseInt(betInput.value) || 10;

        if (bet <= 0) {
            soundSystem.playSound('loss');
            creditSystem.showNotification('Please enter a valid bet amount', 'error');
            return;
        }

        if (!creditSystem.deductCredits(bet)) {
            soundSystem.playSound('loss');
            creditSystem.showNotification('Insufficient credits!', 'error');
            return;
        }

        this.playerBet = bet;
        this.gameState = 'playing';
        soundSystem.playSound('click');

        // Deal cards
        this.playerHand = [this.deck.pop(), this.deck.pop(), this.deck.pop()];
        this.dealerHand = [this.deck.pop(), this.deck.pop(), this.deck.pop()];

        this.displayGame();
        this.showGameControls();
    }

    displayGame() {
        const gameArea = document.getElementById('game-area');
        if (!gameArea) return;

        gameArea.innerHTML = `
            <div class="game-play-area">
                <div class="player-section">
                    <h3>Your Hand</h3>
                    <div class="cards-display">
                        ${this.playerHand.map(card => this.renderCard(card)).join('')}
                    </div>
                    <div class="hand-rank">${this.getHandRank(this.playerHand)}</div>
                </div>

                <div class="dealer-section">
                    <h3>Dealer's Hand</h3>
                    <div class="cards-display">
                        ${this.dealerHand.map((card, idx) => 
                            idx === 0 ? this.renderCard(card) : '<div class="card card-hidden">?</div>'
                        ).join('')}
                    </div>
                </div>

                <div class="bet-info">
                    <p>Current Bet: <strong>${this.playerBet} Credits</strong></p>
                </div>
            </div>
        `;
    }

    renderCard(card) {
        const isRed = card.suit === '♥' || card.suit === '♦';
        return `
            <div class="card ${isRed ? 'red' : 'black'}">
                <div class="card-rank">${card.rank}</div>
                <div class="card-suit">${card.suit}</div>
            </div>
        `;
    }

    getHandRank(hand) {
        // Check for Trail (Three of a kind)
        if (hand[0].rank === hand[1].rank && hand[1].rank === hand[2].rank) {
            return 'Trail (Three of a Kind) - Highest!';
        }

        // Check for Pure Sequence (Straight Flush)
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const values = hand.map(c => ranks.indexOf(c.rank)).sort((a, b) => a - b);

        if (hand[0].suit === hand[1].suit && hand[1].suit === hand[2].suit) {
            if (values[2] - values[1] === 1 && values[1] - values[0] === 1) {
                return 'Pure Sequence (Straight Flush)';
            }
            return 'Flush (Same Suit)';
        }

        // Check for Sequence
        if (values[2] - values[1] === 1 && values[1] - values[0] === 1) {
            return 'Sequence (Straight)';
        }

        // Check for Pair
        if (hand[0].rank === hand[1].rank || hand[1].rank === hand[2].rank || hand[0].rank === hand[2].rank) {
            return 'Pair';
        }

        return 'High Card';
    }

    showGameControls() {
        const controlsArea = document.getElementById('game-controls');
        if (!controlsArea) return;

        controlsArea.style.display = 'flex';
        controlsArea.style.gap = '1rem';
        controlsArea.style.flexWrap = 'wrap';
        controlsArea.style.justifyContent = 'center';
        controlsArea.style.marginTop = '1.5rem';

        controlsArea.innerHTML = `
            <button class="btn btn-primary" id="call-btn" style="flex: 1; min-width: 150px;">Call (Match Bet)</button>
            <button class="btn btn-secondary" id="raise-btn" style="flex: 1; min-width: 150px;">Raise (2x Bet)</button>
            <button class="btn" id="fold-btn" style="flex: 1; min-width: 150px; background: #ef4444; color: white;">Fold (Give Up)</button>
        `;

        // Re-attach event listeners for the new buttons
        const callBtn = document.getElementById('call-btn');
        const raiseBtn = document.getElementById('raise-btn');
        const foldBtn = document.getElementById('fold-btn');

        if (callBtn) callBtn.addEventListener('click', () => this.call());
        if (raiseBtn) raiseBtn.addEventListener('click', () => this.raise());
        if (foldBtn) foldBtn.addEventListener('click', () => this.fold());
    }

    call() {
        this.endGame(true);
    }

    raise() {
        const raiseAmount = this.playerBet * 2;
        if (!creditSystem.deductCredits(raiseAmount)) {
            soundSystem.playSound('loss');
            creditSystem.showNotification('Insufficient credits for raise!', 'error');
            return;
        }

        this.playerBet += raiseAmount;
        soundSystem.playSound('click');
        this.endGame(true);
    }

    fold() {
        soundSystem.playSound('loss');
        this.endGame(false);
    }

    endGame(playerWins) {
        const resultArea = document.getElementById('game-result');
        if (!resultArea) return;

        let winnings = 0;
        let message = '';

        if (playerWins) {
            const playerRank = this.getHandRank(this.playerHand);
            const dealerRank = this.getHandRank(this.dealerHand);

            const playerScore = this.getHandScore(this.playerHand);
            const dealerScore = this.getHandScore(this.dealerHand);

            if (playerScore > dealerScore) {
                winnings = this.playerBet * 2;
                creditSystem.addCredits(winnings);
                message = `🎉 You Win! ${playerRank} beats ${dealerRank}! +${winnings} Credits`;
                soundSystem.playSound('win');
            } else {
                message = `😔 You Lose! ${dealerRank} beats ${playerRank}. Dealer wins!`;
                soundSystem.playSound('loss');
            }
        } else {
            message = `😔 You Folded! Dealer wins the ${this.playerBet} Credits.`;
            soundSystem.playSound('loss');
        }

        resultArea.innerHTML = `
            <div class="result-box">
                <h3>${message}</h3>
                <button class="btn btn-primary" onclick="location.reload()">Play Again</button>
            </div>
        `;

        resultArea.style.display = 'block';
    }

    getHandScore(hand) {
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
        // Trail
        if (hand[0].rank === hand[1].rank && hand[1].rank === hand[2].rank) {
            return 1000 + ranks.indexOf(hand[0].rank);
        }

        // Pure Sequence
        const values = hand.map(c => ranks.indexOf(c.rank)).sort((a, b) => a - b);
        if (hand[0].suit === hand[1].suit && hand[1].suit === hand[2].suit) {
            if (values[2] - values[1] === 1 && values[1] - values[0] === 1) {
                return 800 + values[2];
            }
            return 700 + values[2];
        }

        // Sequence
        if (values[2] - values[1] === 1 && values[1] - values[0] === 1) {
            return 600 + values[2];
        }

        // Pair
        for (let i = 0; i < 3; i++) {
            for (let j = i + 1; j < 3; j++) {
                if (hand[i].rank === hand[j].rank) {
                    return 500 + ranks.indexOf(hand[i].rank);
                }
            }
        }

        // High Card
        return values[2];
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('play-3patti')) {
        window.threePatti = new ThreePatti();
    }
});

// Add CSS for cards
const cardStyles = document.createElement('style');
cardStyles.textContent = `
    .game-play-area {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin: 2rem 0;
    }

    .player-section, .dealer-section {
        background: var(--primary-dark);
        padding: 1.5rem;
        border-radius: 12px;
        border: 2px solid var(--accent-gold);
        text-align: center;
    }

    .cards-display {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin: 1.5rem 0;
        flex-wrap: wrap;
    }

    .card {
        width: 80px;
        height: 120px;
        background: white;
        border: 2px solid #333;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2rem;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .card:hover {
        transform: translateY(-10px);
    }

    .card.red {
        color: #e74c3c;
    }

    .card.black {
        color: #000;
    }

    .card-rank {
        font-size: 1.5rem;
        font-weight: 900;
    }

    .card-suit {
        font-size: 1.2rem;
    }

    .card-hidden {
        background: linear-gradient(135deg, var(--accent-purple), var(--accent-purple-dark));
        color: var(--accent-gold);
        font-weight: bold;
        font-size: 1.5rem;
    }

    .hand-rank {
        background: var(--accent-purple);
        padding: 0.8rem;
        border-radius: 8px;
        font-weight: 600;
        color: var(--accent-gold);
    }

    .bet-info {
        grid-column: 1 / -1;
        background: var(--accent-purple);
        padding: 1rem;
        border-radius: 8px;
        font-size: 1.1rem;
    }

    #game-controls {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
        margin: 2rem 0;
    }

    .btn-danger {
        background: var(--danger);
    }

    .btn-danger:hover {
        background: #dc2626;
    }

    .result-box {
        background: var(--primary-dark);
        padding: 2rem;
        border-radius: 12px;
        border: 2px solid var(--accent-gold);
        text-align: center;
    }

    .result-box h3 {
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
        color: var(--accent-gold);
    }

    @media (max-width: 768px) {
        .game-play-area {
            grid-template-columns: 1fr;
        }

        .card {
            width: 70px;
            height: 100px;
            font-size: 1rem;
        }

        .card-rank {
            font-size: 1.2rem;
        }

        #game-controls {
            flex-direction: column;
        }

        .btn {
            width: 100%;
        }
    }
`;
document.head.appendChild(cardStyles);
