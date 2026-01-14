<?php
// GAMES LISTING PAGE
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Games - KACHWAHA Casino</title>
    <link rel="stylesheet" href="../assets/css/style.css">
</head>
<body>
    <!-- HEADER -->
    <header>
        <div class="header-container">
            <a href="../index.php" class="logo"><img src="../assets/images/kachwaha-logo.png" alt="KACHWAHA Casino" style="height: 50px;"></a>
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

    <!-- HERO SECTION -->
    <section class="hero">
        <div class="hero-content">
            <h1>🎮 All Games</h1>
            <p>Choose from our exciting collection of free-to-play casino games</p>
        </div>
    </section>

    <!-- GAMES GRID -->
    <section class="games-section">
        <div class="games-grid">
            <div class="game-card" onclick="window.location.href='game-3patti.php'">
                <div class="game-card-image" style="background-image: url('../assets/images/game-3patti.jpg');"></div>
                <div class="game-card-header">
                    <h3>🃏 3 Patti</h3>
                    <span class="game-badge">Popular</span>
                </div>
                <div class="game-card-body">
                    <p>Traditional Indian card game. Beat the dealer with your best hand combination and win big!</p>
                    <button class="btn btn-primary btn-small" style="width: 100%;">Play Now</button>
                </div>
            </div>

            <div class="game-card" onclick="window.location.href='game-roulette.php'">
                <div class="game-card-image" style="background-image: url('../assets/images/game-roulette.jpg');"></div>
                <div class="game-card-header">
                    <h3>🎡 Roulette</h3>
                    <span class="game-badge">Classic</span>
                </div>
                <div class="game-card-body">
                    <p>Spin the wheel and predict the winning number. Bet on colors, numbers, or odd/even combinations!</p>
                    <button class="btn btn-primary btn-small" style="width: 100%;">Play Now</button>
                </div>
            </div>

            <div class="game-card" onclick="window.location.href='game-spinwheel.php'">
                <div class="game-card-image" style="background-image: url('../assets/images/game-spinwheel.jpg');"></div>
                <div class="game-card-header">
                    <h3>🎪 Spin Wheel</h3>
                    <span class="game-badge">Lucky</span>
                </div>
                <div class="game-card-body">
                    <p>Spin the lucky wheel and win instant credits! Simple, fun, and highly rewarding with amazing payouts!</p>
                    <button class="btn btn-primary btn-small" style="width: 100%;">Play Now</button>
                </div>
            </div>

            <div class="game-card" onclick="window.location.href='game-bingo.php'">
                <div class="game-card-image" style="background-image: url('../assets/images/game-bingo.jpg');"></div>
                <div class="game-card-header">
                    <h3>🎯 Bingo</h3>
                    <span class="game-badge">Exciting</span>
                </div>
                <div class="game-card-body">
                    <p>Mark numbers on your card and complete rows, columns, or diagonals to win fantastic prizes!</p>
                    <button class="btn btn-primary btn-small" style="width: 100%;">Play Now</button>
                </div>
            </div>
        </div>
    </section>

    <!-- GAME COMPARISON -->
    <section class="features">
        <h2 class="section-title">Game Comparison</h2>
        <div style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
            <table style="width: 100%; border-collapse: collapse; background: var(--primary-light); border-radius: 12px; overflow: hidden;">
                <thead>
                    <tr style="background: var(--accent-purple);">
                        <th style="padding: 1rem; text-align: left; color: white; font-weight: 700;">Game</th>
                        <th style="padding: 1rem; text-align: center; color: white; font-weight: 700;">Difficulty</th>
                        <th style="padding: 1rem; text-align: center; color: white; font-weight: 700;">Payout</th>
                        <th style="padding: 1rem; text-align: center; color: white; font-weight: 700;">Min Bet</th>
                        <th style="padding: 1rem; text-align: center; color: white; font-weight: 700;">Best For</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                        <td style="padding: 1rem; color: var(--accent-gold); font-weight: 600;">3 Patti</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">Medium</td>
                        <td style="padding: 1rem; text-align: center; color: var(--success);">2x - 4x</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">10 Credits</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">Strategic Players</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                        <td style="padding: 1rem; color: var(--accent-gold); font-weight: 600;">Roulette</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">Easy</td>
                        <td style="padding: 1rem; text-align: center; color: var(--success);">2x - 36x</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">10 Credits</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">Risk Takers</td>
                    </tr>
                    <tr style="border-bottom: 1px solid rgba(212, 175, 55, 0.2);">
                        <td style="padding: 1rem; color: var(--accent-gold); font-weight: 600;">Spin Wheel</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">Very Easy</td>
                        <td style="padding: 1rem; text-align: center; color: var(--success);">0.5x - 4x</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">50 Credits</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">Quick Players</td>
                    </tr>
                    <tr>
                        <td style="padding: 1rem; color: var(--accent-gold); font-weight: 600;">Bingo</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">Easy</td>
                        <td style="padding: 1rem; text-align: center; color: var(--success);">5x</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">10 Credits</td>
                        <td style="padding: 1rem; text-align: center; color: var(--text-muted);">Patient Players</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <!-- BACK BUTTON -->
    <div style="text-align: center; margin: 3rem 0;">
        <a href="../index.php" class="btn btn-secondary">← Back to Home</a>
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
</body>
</html>
