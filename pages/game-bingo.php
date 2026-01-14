<?php
// BINGO GAME PAGE
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bingo - KACHWAHA Casino</title>
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
            <h1>🎯 Bingo</h1>
            <p>Classic Bingo Card Game - Mark and Win!</p>
        </div>

        <!-- GAME EXPLANATION -->
        <div class="game-explanation">
            <h2>How to Play Bingo</h2>
            <p><strong>Bingo</strong> is a classic game of chance where players mark numbers on their card as they are drawn. The first player to complete a pattern (row, column, diagonal, or full card) wins!</p>
            
            <h3>Game Rules:</h3>
            <ol>
                <li>Enter your bet amount (minimum 10 credits).</li>
                <li>Click "Start Game" to begin playing.</li>
                <li>A random bingo card with 25 numbers will be generated for you.</li>
                <li>Click "Draw Next Number" to draw numbers from 1-75.</li>
                <li>Numbers matching your card will be automatically marked with a purple highlight.</li>
                <li>The center square is a free space and is automatically marked.</li>
                <li>Complete one of these patterns to win:
                    <ul>
                        <li>Any complete row (horizontal line)</li>
                        <li>Any complete column (vertical line)</li>
                        <li>Any diagonal line</li>
                    </ul>
                </li>
                <li>When you complete a pattern, you win 5x your bet!</li>
            </ol>

            <h3>Bingo Card Layout:</h3>
            <ul>
                <li><strong>B Column:</strong> Numbers 1-15</li>
                <li><strong>I Column:</strong> Numbers 16-30</li>
                <li><strong>N Column:</strong> Numbers 31-45 (with FREE space in center)</li>
                <li><strong>G Column:</strong> Numbers 46-60</li>
                <li><strong>O Column:</strong> Numbers 61-75</li>
            </ul>

            <h3>Winning Patterns:</h3>
            <ul>
                <li>✅ <strong>Horizontal Line:</strong> All 5 numbers in a row marked</li>
                <li>✅ <strong>Vertical Line:</strong> All 5 numbers in a column marked</li>
                <li>✅ <strong>Diagonal Line:</strong> All 5 numbers diagonally marked</li>
                <li>✅ <strong>Full Card:</strong> All 25 squares marked (if you continue playing)</li>
            </ul>

            <h3>Payout:</h3>
            <ul>
                <li><strong>Win Payout:</strong> 5x your bet</li>
                <li>Example: Bet 50 credits → Win 250 credits</li>
            </ul>

            <h3>Strategy Tips:</h3>
            <ul>
                <li>The free space in the center is automatically marked, giving you a head start.</li>
                <li>Rows and columns are easier to complete than diagonals.</li>
                <li>Keep track of drawn numbers to anticipate patterns.</li>
                <li>Play multiple games to increase your chances of winning.</li>
            </ul>
        </div>

        <!-- GAME AREA -->
        <div class="game-canvas-container">
            <div id="bingo-container"></div>
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
    <script src="../assets/js/game-bingo.js"></script>
</body>
</html>
