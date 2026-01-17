<?php
// FAQ PAGE
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ - KACHWAHA Casino</title>
    <link rel="stylesheet" href="../assets/css/style.css">
    <style>
        .faq-item {
            background: var(--primary-light);
            border: 1px solid var(--accent-purple);
            border-radius: 8px;
            margin-bottom: 1rem;
            overflow: hidden;
        }

        .faq-question {
            background: var(--accent-purple);
            padding: 1.5rem;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-weight: 600;
            color: white;
            transition: var(--transition);
        }

        .faq-question:hover {
            background: var(--accent-purple-dark);
        }

        .faq-toggle {
            font-size: 1.5rem;
            transition: var(--transition);
        }

        .faq-item.active .faq-toggle {
            transform: rotate(180deg);
        }

        .faq-answer {
            padding: 1.5rem;
            color: var(--text-muted);
            display: none;
            line-height: 1.8;
        }

        .faq-item.active .faq-answer {
            display: block;
        }
    </style>
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

    <!-- HERO SECTION -->
    <section class="hero">
        <div class="hero-content">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about KACHWAHA</p>
        </div>
    </section>

    <!-- FAQ CONTENT -->
    <section class="features">
        <div style="max-width: 1000px; margin: 0 auto; padding: 0 2rem;">
            <h2 class="section-title">General Questions</h2>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Is KACHWAHA free to play?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Yes! KACHWAHA is 100% free to play. There are no hidden charges, no subscriptions, and no payments required. You start with 1000 free virtual credits and can play unlimited games without spending any real money.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Do I need to register or create an account?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>No! Registration is not required. You can start playing immediately when you visit KACHWAHA. No sign-up, no login, no personal information needed. Just visit the website and click "Play".</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Is KACHWAHA safe and secure?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Yes, KACHWAHA is completely safe. We don't collect any personal information, don't require logins, and don't involve real money. All games use certified random number generators to ensure fair and unbiased results. Your data and privacy are protected.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Can I play on mobile devices?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Absolutely! KACHWAHA is fully responsive and works perfectly on all devices including smartphones, tablets, and desktop computers. Simply visit the website on your mobile browser and start playing.</p>
                </div>
            </div>

            <h2 class="section-title" style="margin-top: 3rem;">Credit System Questions</h2>

            <div class="faq-item">
                <div class="faq-question">
                    <span>How many credits do I start with?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>You start with 1000 virtual credits. These are completely free and have no real-world value. You can use them to play any of our games.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>What is the free top-up?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>When your credit balance reaches 0, you can click the "Free Top-up" button to receive 500 free credits and continue playing. You can use this button as many times as you want, completely free!</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Can I withdraw my credits as real money?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>No. Virtual credits have no real-world value and cannot be withdrawn, exchanged, or converted to real money. They are purely for gameplay and entertainment purposes.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Where are my credits stored?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Your credits are stored in your browser's local storage. This means they are stored on your device, not on our servers. If you clear your browser cache, your credits will be reset.</p>
                </div>
            </div>

            <h2 class="section-title" style="margin-top: 3rem;">Game Questions</h2>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Which games are available?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>We currently offer 4 exciting games: 3 Patti (traditional Indian card game), Roulette (classic casino wheel), Spin Wheel (lucky spinning wheel), and Bingo (number matching game). Each game has unique rules and payouts.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Are the games fair?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Yes! All games use certified random number generators (RNG) to ensure fair and unbiased results. We don't use any hidden algorithms or manipulation. All game odds and payouts are clearly displayed before you play.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>What are the minimum and maximum bets?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Minimum bets vary by game (typically 10-50 credits). Maximum bets are usually 500-1000 credits depending on your credit balance and the game. You cannot bet more than you have in credits.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>What are the payout rates for each game?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p><strong>3 Patti:</strong> 2x-4x your bet | <strong>Roulette:</strong> 2x-36x your bet | <strong>Spin Wheel:</strong> 0.5x-4x your bet | <strong>Bingo:</strong> 5x your bet</p>
                </div>
            </div>

            <h2 class="section-title" style="margin-top: 3rem;">Technical Questions</h2>

            <div class="faq-item">
                <div class="faq-question">
                    <span>What browsers are supported?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>KACHWAHA works on all modern browsers including Chrome, Firefox, Safari, Edge, and Opera. We recommend using the latest version of your browser for the best experience.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Why can't I hear game sounds?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>First, check if sound is enabled by clicking the sound button (🔊/🔇) in the top-right corner. Also check your device's volume settings. Some browsers require user interaction before playing audio.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>My credits disappeared. What happened?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Your credits are stored in your browser's local storage. They may have been cleared if you cleared your browser cache, cookies, or browsing data. You can always get free top-up credits to continue playing.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Is there a mobile app?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Currently, KACHWAHA is available as a web application that works on all devices. You can access it through your mobile browser. A dedicated mobile app may be available in the future.</p>
                </div>
            </div>

            <h2 class="section-title" style="margin-top: 3rem;">Responsible Gaming</h2>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Is KACHWAHA gambling?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>No. KACHWAHA is a social casino platform for entertainment purposes only. No real money is involved, and virtual coins have no real-world value. It's purely for fun and entertainment, not gambling.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Is KACHWAHA suitable for children?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>KACHWAHA is intended for adults (18+). While there's no real money involved, we recommend that parents supervise younger users. The games involve chance and strategy, which may not be suitable for very young children.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>How can I play responsibly?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Play for fun and entertainment, not to make money. Set limits on your playtime, take regular breaks, and remember it's just a game. If you feel gaming is becoming a problem, please read our <a href="responsible-gaming.php" style="color: var(--accent-gold); text-decoration: underline;">Responsible Gaming Policy</a>.</p>
                </div>
            </div>

            <h2 class="section-title" style="margin-top: 3rem;">Contact & Support</h2>

            <div class="faq-item">
                <div class="faq-question">
                    <span>How can I contact support?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>You can contact us through our <a href="contact.php" style="color: var(--accent-gold); text-decoration: underline;">Contact Us page</a>. We'll respond to your inquiry as soon as possible.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>How do I report a bug or issue?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>If you encounter any bugs or technical issues, please <a href="contact.php" style="color: var(--accent-gold); text-decoration: underline;">contact us</a> with details about the issue. We appreciate your feedback and will work to fix any problems.</p>
                </div>
            </div>

            <div class="faq-item">
                <div class="faq-question">
                    <span>Can I provide feedback or suggestions?</span>
                    <span class="faq-toggle">▼</span>
                </div>
                <div class="faq-answer">
                    <p>Absolutely! We love hearing from our players. Please <a href="contact.php" style="color: var(--accent-gold); text-decoration: underline;">contact us</a> with any suggestions or feedback. Your input helps us improve KACHWAHA.</p>
                </div>
            </div>
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
    <script>
        // FAQ Accordion
        document.querySelectorAll('.faq-item').forEach(item => {
            item.querySelector('.faq-question').addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });
    </script>
</body>
</html>
