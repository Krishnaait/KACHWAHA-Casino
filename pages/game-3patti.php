<?php
// 3 PATTI GAME PAGE
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3 Patti - KACHWAHA Casino</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <!-- HEADER -->
    <header>
        <div class="header-container">
            <a href="../index.php" class="logo"><img src="../assets/images/kachwaha-logo.webp" alt="KACHWAHA Casino" style="height: 50px;"></a>
            <nav>
                <ul>
                    <li><a href="../index.php">Home</a></li>
                    <li><a href="games.php">Games</a></li>
                    <li><a href="about.php">About Us</a></li>
                    <li><a href="how-to-play.php">How to Play</a></li>
                    <li><a href="faq.php">FAQ</a></li>
                    <li><a href="contact.php">Contact</a></li>
                </ul>
            </nav>
            <div class="credits-display">
                <span class="coin-icon">💰</span>
                <span>1000 Credits</span>
            </div>
            <button class="sound-toggle">🔊</button>
        </div>
    </header>

    <!-- GAME CONTAINER -->
    <div class="game-container">
        <div class="game-header">
            <h1>🃏 3 Patti</h1>
            <p>Traditional Indian Card Game - Beat the Dealer!</p>
        </div>

        <!-- GAME EXPLANATION -->
        <div class="game-explanation">
            <h2>How to Play 3 Patti</h2>
            <p><strong>3 Patti</strong> (also known as Teen Patti) is a traditional Indian card game played with a standard 52-card deck. The objective is to have the best three-card hand and beat the dealer.</p>
            
            <h3>Hand Rankings (Highest to Lowest):</h3>
            <ol>
                <li><strong>Trail (Three of a Kind):</strong> Three cards of the same rank (e.g., 7♠ 7♥ 7♦). Highest hand!</li>
                <li><strong>Pure Sequence (Straight Flush):</strong> Three consecutive cards of the same suit (e.g., 5♠ 6♠ 7♠).</li>
                <li><strong>Sequence (Straight):</strong> Three consecutive cards of different suits (e.g., 5♠ 6♥ 7♦).</li>
                <li><strong>Flush:</strong> Three cards of the same suit but not in sequence (e.g., 2♠ 5♠ 9♠).</li>
                <li><strong>Pair:</strong> Two cards of the same rank (e.g., K♠ K♥ 3♦).</li>
                <li><strong>High Card:</strong> Three cards of different ranks and suits (e.g., 2♠ 5♥ 9♦).</li>
            </ol>

            <h3>Game Rules:</h3>
            <ol>
                <li>Enter your bet amount and click "Play" to start the game.</li>
                <li>You will receive 3 cards, and the dealer will also receive 3 cards (one is hidden).</li>
                <li>You have three options:
                    <ul>
                        <li><strong>Call:</strong> Match the current bet and compare hands with the dealer.</li>
                        <li><strong>Raise:</strong> Double your bet to increase potential winnings.</li>
                        <li><strong>Fold:</strong> Give up and lose your bet.</li>
                    </ul>
                </li>
                <li>If you call or raise, your hand is compared with the dealer's hand.</li>
                <li>The player with the better hand wins the pot!</li>
            </ol>

            <h3>Payouts:</h3>
            <ul>
                <li><strong>Call (1x):</strong> Win 2x your bet if you beat the dealer.</li>
                <li><strong>Raise (2x):</strong> Win 4x your bet if you beat the dealer.</li>
            </ul>
        </div>

        <!-- GAME AREA -->
        <div class="game-canvas-container">
            <div id="game-area"></div>
        </div>

        <!-- GAME CONTROLS -->
        <div class="game-controls">
            <div style="width: 100%; display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
                <input type="number" id="bet-amount" min="10" max="500" value="50" placeholder="Bet amount" style="padding: 0.8rem; border: 1px solid #8b5cf6; border-radius: 8px; background: #1a1f3a; color: #e5e7eb; flex: 1; min-width: 150px;">
                <button class="btn btn-primary" id="play-3patti">Play Game</button>
            </div>
        </div>

        <!-- GAME CONTROLS (During Game) -->
        <div id="game-controls" style="display: none;"></div>

        <!-- GAME RESULT -->
        <div id="game-result" class="game-result"></div>

        <!-- CREDIT SECTION -->
        <div class="credit-section">
            <h2>Your Credits</h2>
            <div class="credit-info">
                <div class="credit-box">
                    <label>Current Balance</label>
                    <div class="amount" id="current-balance">1000</div>
                </div>
                <div class="credit-box">
                <div class="credit-box">
                    <label>Free Top-up</label>
                    <button class="btn btn-secondary btn-small" data-action="topup-credits" style="width: 100%; margin-top: 0.5rem;">Get +500</button>
                </div>
            </div>
        </div>

        <!-- BACK BUTTON -->
        <div style="text-align: center; margin-top: 2rem;">
            <a href="games.php" class="btn btn-secondary">← Back to Games</a>
        </div>
    </div>

    <!-- FOOTER -->
    <footer>
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>KACHWAHA</h3>
                    <p>Your trusted platform for free social casino games. Play responsibly and have fun!</p>
                </div>

                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="../index.php">Home</a></li>
                        <li><a href="games.php">Games</a></li>
                        <li><a href="about.php">About Us</a></li>
                        <li><a href="faq.php">FAQ</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="terms.php">Terms & Conditions</a></li>
                        <li><a href="privacy.php">Privacy Policy</a></li>
                        <li><a href="disclaimer.php">Disclaimer</a></li>
                        <li><a href="responsible-gaming.php">Responsible Gaming</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Contact</h3>
                    <ul>
                        <li><a href="contact.php">Contact Us</a></li>
                        <li><a href="mailto:info@kachwaha.com">Email: info@kachwaha.com</a></li>
                        <li style="line-height: 1.6;">C/O ASHA SINGH, CHAS BOKARO<br>PATEL NAGAR, Bokaro Steel City<br>Bokaro, Jharkhand, 827013</li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 KACHWAHA ENGINEERING SERVICES (OPC) PRIVATE LIMITED. All rights reserved.</p>
                <p>This is a social casino platform for entertainment purposes only. No real money gambling is involved.</p>
            </div>
        </div>
    </footer>

    <!-- SCRIPTS -->
    <script src="../assets/js/main.js"></script>
    <script src="../assets/js/game-3patti.js"></script>
</body>
</html>
