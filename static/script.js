// GIF URLs for different happiness levels
const happinessGifs = {
    1: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2RmbWY0ZGZxMjRuNWFrNGEwd2F3bGhnb3FidG5mZTY4ODF0eWxseSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a9xhxAxaqOfQs/giphy.gif',
    2: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDZ2N3Z4N3Q3OGZseDc5Mmw2YnhhbmU3ZjRlcXM5dG1oem45ejRzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3OhXBaoR1tVPW/giphy.gif',
    3: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjRxd3F1eGh0YmI5MDR4ajlhd2gxM3B2dmJmc2hmaWc5MWZrOWhmcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8boMf1VXVHoJy/giphy.gif',
    4: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXJ1cndnMzR1YnIyYzB1aTl5czRmaGhteW02OGlub3phc2hzdGI2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d7g2Wmve71MdUaKrqn/giphy.gif',
    5: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGswbHVkbHZlcDhqNzV4c3M5ZXhjb2xvNm5wMWV2N3MxNGUycXV6eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/apI7O6YAIPhJK/giphy.gif',
    6: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzRkOGFmNWJ4MTRsa2trOXBocWVtdndncmY5M2FuMnFlaGh1YmthbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/61ZeqMdYsFpMdxVKeH/giphy.gif',
    7: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDdlZ3Vra2M0YXI2NW43ZDd2MmkzZ2U3NW0zajh6bW1vYWt0cHBqdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KFWcJMRWAz5qOCB7Pe/giphy.gif',
    8: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXE2OHI2YzV6M2NoZDk3ZXYyMjlnNW02ZDdqa2RrYjljdGpsYXp0YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMHxhOfscxPfIfm/giphy.gif',
    9: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWxmaXVhOXMwbTUwMTV0cmw4YjN0andhcnlvbDhsdnowYzIzMmhhMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sKhhNgnV6xXWg/giphy.gif',
    10: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmh5ejcxOXJneHJydXBxNGYxZGNleGlxOXJjam8yY3lmc204azR2ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KB7Moe2Oj0BXeDjvDp/giphy.gif'
};

const happinessMessages = {
    1: '😿 Aww, I\'ll try harder to make you happy!',
    2: '😻 I know I have a lot to prove!',
    3: '😼 Let me show you how much you mean to me...',
    4: '😸 I can make it better!',
    5: '😺 That\'s a good start!',
    6: '😻 You\'re making me so happy!',
    7: '😻 I love you so much dumpdump!',
    8: '🐱 You mean the world to me!',
    9: '😻 I\'m just the luckiest person alive!',
    10:'😻 I LOVE YOU MY DUMPLING!🩵☁️'
};

const emojis = ['👾', '😿', '😾', '😼', '😸', '😺', '😻', '🫶', '🥟', '🩵'];

// Create twinkling stars
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create floating hearts with rain clouds
function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '🩵☁️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.position = 'fixed';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2500);
}

// Create confetti pieces with space vibes
function createConfetti() {
    for (let i = 0; i < 40; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.textContent = ['👾', '🩵☁️', '✨', '☁️', '🌙'][Math.floor(Math.random() * 5)];
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-50px';
        confetti.style.fontSize = (Math.random() * 25 + 15) + 'px';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3500);
    }
}

// Toggle the love letter open/close
function toggleLetter() {
    const envelope = document.getElementById('envelope');
    const button = document.getElementById('letter-button');
    
    if (envelope.classList.contains('open')) {
        envelope.classList.remove('open');
        envelope.classList.add('close');
        button.textContent = 'Open Letter';
    } else {
        envelope.classList.remove('close');
        envelope.classList.add('open');
        button.textContent = 'Close Letter';
        
        // Create hearts when opening
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createHeart(
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerHeight
                );
            }, i * 200);
        }
    }
}

// Handle "Yes" button click
function handleYes() {
    fetch('/api/yes-response')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').textContent = data.response;
            document.getElementById('no-btn').style.display = 'none';
            document.querySelector('.yes-btn').style.display = 'none';
            document.getElementById('reset-btn').classList.add('show');
            
            // Show love letter after delay
            setTimeout(() => {
                document.getElementById('letter-container').classList.add('show');
                // Show the open letter button (letter stays closed initially)
                setTimeout(() => {
                    document.getElementById('letter-button').classList.add('show');
                    document.getElementById('letter-button').textContent = 'Open Letter';
                }, 800);
                
                // Fetch and display love letter
                fetch('/api/get-love-letter')
                    .then(response => response.json())
                    .then(data => {
                        document.getElementById('letter-content').textContent = data.letter;
                    });
                
                // Show happiness scale button after letter container appears
                setTimeout(() => {
                    document.getElementById('scale-btn').classList.add('show');
                }, 1200);
            }, 1500);
            
            // Create effects
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createHeart(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
                }, i * 80);
            }
            createConfetti();
            
            // Change GIF to celebration
            document.querySelector('.gif').src = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW1zZGhxb3picjh4NHhrMmRmb3Y5ejE4czl4c3VmdTI2c3B0ZmxscyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/10nCUgty95Oa0U/giphy.gif';

            // Open celebratory modal shortly after
            setTimeout(openCelebrationModal, 800);
        });
}

// Handle "No" button click
function handleNo() {
    fetch('/api/no-response')
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').textContent = data.response;
            // Runaway button effect on click (original behavior)
            const noBtn = document.getElementById('no-btn');
            const noBtnX = Math.random() * (window.innerWidth - 150);
            const noBtnY = Math.random() * (window.innerHeight - 150);
            
            noBtn.style.position = 'fixed';
            noBtn.style.left = noBtnX + 'px';
            noBtn.style.top = noBtnY + 'px';
            noBtn.style.transition = 'left 0.6s ease, top 0.6s ease';
        });
}

// Add hover effect to No button to make it dodge
document.addEventListener('DOMContentLoaded', function() {
    createStars();
    createFloatingEmojis();

    // Hover dodge for No button (original window-bounded, left-biased slide)
    const noBtn = document.getElementById('no-btn');
    if (noBtn) {
        noBtn.addEventListener('mouseenter', function() {
            // Robust viewport-bounded dodge every hover
            const rect = this.getBoundingClientRect();
            const margin = 40; // keep away from edges
            const safeLeft = margin;
            const safeRight = window.innerWidth - rect.width - margin;
            const safeTop = margin;
            const safeBottom = window.innerHeight - rect.height - margin;

            const newLeft = Math.floor(Math.random() * (safeRight - safeLeft)) + safeLeft;
            const newTop = Math.floor(Math.random() * (safeBottom - safeTop)) + safeTop;

            this.style.position = 'fixed';
            this.style.zIndex = '10000';
            this.style.transition = 'left 1.2s ease-out, top 1.2s ease-out';
            this.style.left = newLeft + 'px';
            this.style.top = newTop + 'px';

            showNoButtonMessage();
        });
    }
});

// Show random message when hovering No button
function showNoButtonMessage() {
    const messages = [
        "Come on, give me a chance! 😿",
        "I'll keep trying! 👾",
        "Maybe next time? 🤞",
        "Don't give up on us! ☁️",
        "I believe in us! ✨",
        "Just think about it! 😾",
        "I'm not giving up! 😼",
        "You're worth waiting for! 🩵"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create temporary popup
    const existing = document.getElementById('hover-popup');
    if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
    const popup = document.createElement('div');
    popup.id = 'hover-popup';
    popup.textContent = randomMessage;
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #9ad0f5 0%, #6bbcf0 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: bold;
        font-size: 1.1em;
        z-index: 1000;
        box-shadow: 0 10px 30px rgba(107, 188, 240, 0.35);
        animation: popupFade 3s ease-out forwards;
        pointer-events: none;
    `;
    
    // Add CSS animation
    if (!document.getElementById('popup-styles')) {
        const style = document.createElement('style');
        style.id = 'popup-styles';
        style.textContent = `
            @keyframes popupFade {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.6); }
                25% { opacity: 1; transform: translate(-50%, calc(-50% - 6px)) scale(1.05); }
                85% { opacity: 1; transform: translate(-50%, calc(-50% - 10px)) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(popup);
    
    // Remove popup after animation
    setTimeout(() => {
        if (popup.parentNode) {
            popup.parentNode.removeChild(popup);
        }
    }, 3000);
}

// Floating background emojis (space + dumpling vibe)
function createFloatingEmojis() {
    const container = document.getElementById('floating-emojis');
    if (!container) return;
    const items = ['🥟','🩵','✨','🌙','☁️','🪐','🌌','👾','⭐'];
    for (let i = 0; i < 24; i++) {
        const el = document.createElement('div');
        el.className = 'emoji-float';
        el.textContent = items[Math.floor(Math.random() * items.length)];
        el.style.left = Math.random() * 100 + '%';
        el.style.bottom = (-10 - Math.random()*20) + 'px';
        el.style.fontSize = (Math.random() * 18 + 14) + 'px';
        el.style.animationDuration = (10 + Math.random() * 10) + 's';
        el.style.animationDelay = (Math.random() * 5) + 's';
        container.appendChild(el);
    }
}

// Modal controls
function openCelebrationModal() {
    const modal = document.getElementById('celebrate-modal');
    if (modal) modal.classList.add('show');
}

function closeCelebrationModal() {
    const modal = document.getElementById('celebrate-modal');
    if (modal) modal.classList.remove('show');
}

// Happiness Scale Functions
function goToScalePage() {
    document.querySelector('.container').style.display = 'none';
    const scalePage = document.createElement('div');
    scalePage.className = 'container scale-page show';
    scalePage.innerHTML = `
        <h1>🐱 How Happy Are You Dumpling? 🌙✨</h1>
        <p class="scale-subtitle">Drag the slider to show me! 👉☁️</p>
        
        <div class="happiness-gif-container">
            <img src="${happinessGifs[1]}" alt="Happiness GIF" class="happiness-gif" id="happiness-gif">
        </div>

        <div class="slider-container">
            <div class="slider-wrapper">
                <span class="slider-number" id="scale-number">1</span>
                <input type="range" min="1" max="10" value="1" class="slider" id="happiness-slider">
            </div>
            <div class="emoji-scale" id="emoji-scale">
                ${emojis.map((e, i) => `<div class="emoji ${i === 0 ? 'active' : ''}">${e}☁️</div>`).join('')}
            </div>
        </div>

        <p class="scale-message" id="scale-message">${happinessMessages[1]}</p>

        <div class="scale-button-container">
            <button class="scale-btn-nav back" onclick="goBackToLetter()">← Back</button>
            <button class="scale-btn-nav" onclick="submitHappiness()">Submit 🩵☁️</button>
        </div>
    `;
    document.body.appendChild(scalePage);

    // Add slider event listener
    const slider = document.getElementById('happiness-slider');
    slider.addEventListener('input', function() {
        updateHappinessScale(this.value);
    });
}

function updateHappinessScale(value) {
    const num = parseInt(value);
    document.getElementById('scale-number').textContent = num;
    document.getElementById('happiness-gif').src = happinessGifs[num];
    document.getElementById('scale-message').textContent = happinessMessages[num];

    // Update emoji scale
    const emojiElements = document.querySelectorAll('.emoji');
    emojiElements.forEach((emoji, index) => {
        if (index < num) {
            emoji.classList.add('active');
        } else {
            emoji.classList.remove('active');
        }
    });

    // Enhanced confetti for max happiness
    if (num === 10) {
        createConfetti();
        // Extra ecstatic effects
        for (let i = 0; i < 12; i++) {
            setTimeout(() => createHeart(Math.random()*window.innerWidth, Math.random()*window.innerHeight), i*80);
        }
        const page = document.querySelector('.scale-page');
        if (page) {
            page.style.animation = 'pulseGlow 1.2s ease-in-out 2';
        }
        // Shake the final modal if visible
        const modal = document.getElementById('final-modal');
        if (modal && modal.classList.contains('show')) {
            const content = modal.querySelector('.modal-content');
            if (content) {
                content.classList.remove('shake');
                void content.offsetWidth;
                content.classList.add('shake');
            }
        }
        // Also shake the main GIF briefly
        const gif = document.querySelector('.gif');
        if (gif) {
            gif.classList.remove('shake');
            void gif.offsetWidth;
            gif.classList.add('shake');
            setTimeout(() => gif.classList.remove('shake'), 800);
        }
    }
}

function submitHappiness() {
    const value = document.getElementById('happiness-slider').value;
    fetch('/api/happiness-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ happiness: value })
    })
    .then(response => response.json())
    .then(data => {
        // Show final modal instead of alert
        openFinalModal(data.message);
    });
}

function openFinalModal(message) {
    const modal = document.getElementById('final-modal');
    if (!modal) return;
    modal.classList.add('show');
    const title = modal.querySelector('.modal-title');
    const text = modal.querySelector('.modal-text');
    if (message && text) text.textContent = message + 'mwa';
}

function closeFinalModal() {
    const modal = document.getElementById('final-modal');
    if (modal) modal.classList.remove('show');
}

function goodbyeAndClose() {
    // Gracefully end: hide content and show a brief message then reload
    closeFinalModal();
    const body = document.body;
    const curtain = document.createElement('div');
    curtain.style.cssText = 'position:fixed;inset:0;background:linear-gradient(135deg,#0f3460,#16213e);display:flex;align-items:center;justify-content:center;color:#fff;z-index:10000;';
    const msg = document.createElement('div');
    msg.textContent = 'Goodbye for now, my Dumpling 🩵';
    msg.style.fontFamily = "'Dancing Script', cursive";
    msg.style.fontSize = '2.2rem';
    msg.style.textAlign = 'center';
    curtain.appendChild(msg);
    body.appendChild(curtain);
    // After 10 seconds, request backend shutdown
    setTimeout(() => {
        fetch('/shutdown', { method: 'POST' });
    }, 10000);
}

function goBackToLetter() {
    const scalePage = document.querySelector('.scale-page');
    if (scalePage && scalePage.parentNode) {
        scalePage.parentNode.removeChild(scalePage);
    }
    const main = document.querySelector('.container');
    if (main) {
        main.style.display = 'block';
    }
    const letterContainer = document.getElementById('letter-container');
    if (letterContainer) {
        letterContainer.classList.add('show');
        letterContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function goBackToProposal() {
    location.reload();
}
