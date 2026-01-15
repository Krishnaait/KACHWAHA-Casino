<?php
// ROULETTE GAME PAGE
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roulette - KACHWAHA Casino</title>
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
            <h1>🎡 Roulette</h1>
            <p>Classic Casino Roulette - Spin and Win!</p>
        </div>

        <!-- GAME EXPLANATION -->
        <div class="game-explanation">
            <h2>How to Play Roulette</h2>
            <p><strong>Roulette</strong> is a classic casino game where players predict where a spinning ball will land on a numbered wheel. The wheel has 37 numbers (0-36), with 0 being green and numbers 1-36 alternating between red and black.</p>
            
            <h3>Betting Options:</h3>
            <ol>
                <li><strong>Straight (Number Bet):</strong> Bet on a specific number (0-36). Payout: 36:1 (36x your bet)</li>
                <li><strong>Color Bet:</strong> Bet on Red or Black. Payout: 2:1 (2x your bet)</li>
                <li><strong>Odd/Even:</strong> Bet on whether the number will be odd or even. Payout: 2:1 (2x your bet)</li>
            </ol>

            <h3>Game Rules:</h3>
            <ol>
                <li>Enter your bet amount (minimum 10 credits).</li>
                <li>Select your betting option:
                    <ul>
                        <li>Click on a number (0-36) for a straight bet</li>
                        <li>Click Red or Black for a color bet</li>
                        <li>Click Odd or Even for an odd/even bet</li>
                    </ul>
                </li>
                <li>Once you've selected your bet, click "SPIN THE WHEEL".</li>
                <li>The wheel will spin and stop at a random number.</li>
                <li>If your prediction matches the result, you win! Otherwise, you lose your bet.</li>
            </ol>

            <h3>Payout Table:</h3>
            <ul>
                <li><strong>Straight Bet:</strong> Win 36x your bet</li>
                <li><strong>Color Bet (Red/Black):</strong> Win 2x your bet</li>
                <li><strong>Odd/Even Bet:</strong> Win 2x your bet</li>
            </ul>

            <h3>Strategy Tips:</h3>
            <ul>
                <li>Color and Odd/Even bets have better odds (2:1) but lower payouts.</li>
                <li>Straight bets have higher payouts (36:1) but lower probability of winning.</li>
                <li>Remember: Roulette is a game of chance. Play responsibly and within your budget!</li>
            </ul>
        </div>

        <!-- GAME AREA -->
        <div class="game-canvas-container">
            <div id="roulette-container"></div>
        </div>

        <!-- GAME RESULT -->
        <div id="roulette-result" class="game-result"></div>

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
                        <li>Bokaro, Jharkhand, India</li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2025 KACHWAHA ENGINEERING SERVICES (OPC) PRIVATE LIMITED. All rights reserved.</p>
                <p>This is a social casino platform for entertainment purposes only. No real money gambling is involved.</p>
            </div>
        </div>
    </footer>

    <!-- SCRIPTS -->
    <script src="../assets/js/main.js"></script>
    <script src="../assets/js/game-roulette.js"></script>
</body>
</html>
