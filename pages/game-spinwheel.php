<?php
// SPIN WHEEL GAME PAGE
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Spin Wheel - KACHWAHA Casino</title>
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
            <h1>🎡 Lucky Spin Wheel</h1>
            <p>Spin and Win Instant Credits!</p>
        </div>

        <!-- GAME EXPLANATION -->
        <div class="game-explanation">
            <h2>How to Play Spin Wheel</h2>
            <p><strong>Spin Wheel</strong> is a simple and exciting game where you spin a colorful wheel to win instant credits. Each segment of the wheel contains a different prize, and you have a chance to win any of them!</p>
            
            <h3>Game Rules:</h3>
            <ol>
                <li>Each spin costs <strong>50 credits</strong>.</li>
                <li>Click the "SPIN NOW" button to spin the wheel.</li>
                <li>The wheel will spin and randomly stop at one of the segments.</li>
                <li>Whatever segment the pointer lands on, you win that amount of credits!</li>
                <li>Your winnings are instantly added to your credit balance.</li>
            </ol>

            <h3>Prize Segments:</h3>
            <ul>
                <li>🔴 <strong>25 Credits</strong> - Small Prize</li>
                <li>🔵 <strong>50 Credits</strong> - Standard Prize</li>
                <li>🟢 <strong>75 Credits</strong> - Good Prize</li>
                <li>🟡 <strong>100 Credits</strong> - Great Prize</li>
                <li>🟣 <strong>125 Credits</strong> - Excellent Prize</li>
                <li>🟠 <strong>150 Credits</strong> - Outstanding Prize</li>
                <li>🌟 <strong>175 Credits</strong> - Fantastic Prize</li>
                <li>💎 <strong>200 Credits</strong> - Jackpot Prize</li>
            </ul>

            <h3>Strategy Tips:</h3>
            <ul>
                <li>Each spin costs 50 credits, so you need at least 50 credits to play.</li>
                <li>The average payout is around 112 credits, which is more than double your bet!</li>
                <li>Play multiple times to increase your chances of hitting the jackpot (200 credits).</li>
                <li>If you run out of credits, use the free top-up button to get 500 free credits.</li>
            </ul>

            <h3>Why Play Spin Wheel?</h3>
            <ul>
                <li>✅ Simple and easy to understand</li>
                <li>✅ Fast-paced and exciting</li>
                <li>✅ High average payout (2x+ your bet)</li>
                <li>✅ Chance to win big with the jackpot</li>
                <li>✅ Perfect for quick gaming sessions</li>
            </ul>
        </div>

        <!-- GAME AREA -->
        <div class="game-canvas-container">
            <div id="spinwheel-container"></div>
        </div>

        <!-- CREDIT SECTION -->
        <div class="credit-section">
            <h2>Your Credits</h2>
            <div class="credit-info">
                <div class="credit-box">
                    <label>Current Balance</label>
                    <div class="amount" id="current-balance">1000</div>
                </div>
                <div class="credit-box">
                    <label>Daily Bonus</label>
                    <button class="btn btn-secondary btn-small" data-action="daily-bonus" style="width: 100%; margin-top: 0.5rem;">Claim +200</button>
                </div>
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
    <script src="../assets/js/game-spinwheel.js"></script>
</body>
</html>
