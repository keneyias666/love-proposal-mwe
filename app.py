from flask import Flask, render_template, jsonify, request, g
import random
import os
import sys
from pathlib import Path
import logging
from datetime import datetime
import time

app = Flask(__name__, 
            template_folder=os.path.join(os.path.dirname(__file__), 'templates'),
            static_folder=os.path.join(os.path.dirname(__file__), 'static'))

# Configure clean console logging + detailed file logging
logger = logging.getLogger('love_app')
logger.setLevel(logging.DEBUG)
logger.propagate = False

# File handler (detailed)
_file_handler = logging.FileHandler('debug.log', mode='a')
_file_handler.setLevel(logging.DEBUG)
_file_handler.setFormatter(logging.Formatter('%(asctime)s - %(levelname)s - %(name)s - %(message)s'))

# Console handler (concise)
_console_handler = logging.StreamHandler(sys.stdout)
_console_handler.setLevel(logging.INFO)
_console_handler.setFormatter(logging.Formatter('%(levelname)s: %(message)s'))

# Attach handlers once
if not logger.handlers:
    logger.addHandler(_file_handler)
    logger.addHandler(_console_handler)

# Tame Werkzeug request logs
logging.getLogger('werkzeug').setLevel(logging.WARNING)

# Debug decorator for real-time function monitoring
def debug_log(func):
    def wrapper(*args, **kwargs):
        start_time = datetime.now()
        logger.debug(f"🚀 Starting {func.__name__} at {start_time.strftime('%H:%M:%S.%f')[:-3]}")
        
        try:
            result = func(*args, **kwargs)
            end_time = datetime.now()
            duration = (end_time - start_time).total_seconds() * 1000
            logger.debug(f"✅ {func.__name__} completed successfully in {duration:.2f}ms")
            return result
        except Exception as e:
            end_time = datetime.now()
            duration = (end_time - start_time).total_seconds() * 1000
            logger.error(f"❌ {func.__name__} failed after {duration:.2f}ms: {str(e)}")
            raise
    wrapper.__name__ = func.__name__  # Preserve original function name
    return wrapper

# Single concise per-request log line
@app.before_request
def _start_timer():
    g._start_time = time.perf_counter()

@app.after_request
def _log_request(response):
    try:
        duration_ms = (time.perf_counter() - getattr(g, '_start_time', time.perf_counter())) * 1000
        logger.info(f"{request.method} {request.path} -> {response.status_code} in {duration_ms:.1f}ms")
    except Exception:
        # never let logging break the response
        pass
    return response

# Cute messages and responses
cute_messages = [
    "Will you be my girlfriend?",
    "I really like you... a lot!",
    "You make me smile every day",
    "I can't imagine any moment without you",
    "Will you be mine and mine only? 🩵"
]

yes_responses = [
    "OMG YES! 🩵",
    "I love you! 🩵",
    "You just made me the happiest person! 🩵",
    "This is the best day ever! 🩵",
    "Yay! Let's be together 🩵"
]

no_responses = [
    "Aww, but I'll keep trying! 🩵",
    "No worries, I'll wait!🩵",
    "That's okay, I'm patient! ⏳",
    "Not yet, but maybe soon? 🤞"
]

love_letter_content = """
My Sweet Little Dumpling Aieleen 🥟🩵,

First, AHHHHH! I still can't believe I can now call you my girlfriend. Because you answered yes, my heart is just bursting with joy!

Can we just take a moment to celebrate that you are now my girlfriend?! 🌠✨
I swear my heart is performing little somersaults right now, like a delighted hamster on a sugar high.

Thank you for saying yes, allowing me to adore you, and being the outrageously cute individual that makes my life feel like a romantic comedy. When I think about you, I smile like an weirdo (no regrets 👾). You've practically transformed my heart into a warm, mushy marshmallow.

I pledge to be the finest "dumpling holder" ever—to make you laugh until your cheeks ache, to make you feel like the main character (because you are), and to remind you every day how lucky I am to have you.

Here's to our adventures, inside jokes, random hugs, and late-night "I love yuzu's like the sour plums in Japan )). You're my favorite notification, my happy thought, and now… my girlfriend. 🫶💫

Love,


This is from your officially lovestruck, proudly dumpling-obsessed dorky nerd ELIAS. )) 🩵
"""

@app.route('/')
@debug_log
def index():
    logger.info("📄 Rendering main page")
    return render_template('index.html')

@app.route('/api/get-message')
@debug_log
def get_message():
    message = random.choice(cute_messages)
    logger.info(f"💬 Generated message: '{message}'")
    return jsonify({'message': message})

@app.route('/api/yes-response')
@debug_log
def yes_response():
    response = random.choice(yes_responses)
    logger.info(f"🩵 YES response: '{response}'")
    return jsonify({'response': response})

@app.route('/api/no-response')
@debug_log
def no_response():
    response = random.choice(no_responses)
    logger.info(f"😢 NO response: '{response}'")
    return jsonify({'response': response})

@app.route('/api/get-love-letter')
@debug_log
def get_love_letter():
    logger.info("💌 Love letter requested")
    return jsonify({'letter': love_letter_content})

# Graceful shutdown endpoint
@app.route('/shutdown', methods=['POST'])
def shutdown():
    logger.info("🛑 Shutdown requested")
    func = request.environ.get('werkzeug.server.shutdown')
    if func is not None:
        func()
        return jsonify({'status': 'shutting down'})
    # Fallback if not running with Werkzeug
    os._exit(0)

happiness_responses = {
    '1': "That makes me sad, but I'll do my best to make you happier! 👾",
    '2': "I know I have a lot to prove! Let me show you what we can be! 😿",
    '3': "I see the potential, let me make you smile more! 😾",
    '4': "That's a good foundation, let me build on it! 🏗️",
    '5': "We're halfway there! I promise to make it even better! 🌟",
    '6': "You're making me so happy already! 💫",
    '7': "This makes me ecstatic! I love you! 🩵",
    '8': "Wow! You really make me the luckiest! 🍀",
    '9': "Aww, I'm speechless! Thank you my dumpling 🫶",
    '10': "🫶 I LOVE YOU MY DUMPLING!🩵☁️"
}

@app.route('/api/happiness-response', methods=['POST'])
@debug_log
def happiness_response():
    data = request.json
    happiness_level = str(data.get('happiness', '5'))
    message = happiness_responses.get(happiness_level, "Thank you for telling me! 🩵")
    logger.info(f"😊 Happiness level {happiness_level}: '{message}'")
    return jsonify({'message': message})

if __name__ == '__main__':
    # Create templates and static folders if they don't exist
    Path('templates').mkdir(exist_ok=True)
    Path('static').mkdir(exist_ok=True)
    
    print("🎉 Love Proposal App Starting!")
    print("📱 Open: http://localhost:5000")
    print("🔍 Logs: concise in console, detailed in debug.log")
    print("⛔ Press Ctrl+C to stop the server\n")
    
    logger.info("Startup complete. Monitoring requests…")
    
    # Run with debug=False to avoid extra Werkzeug noise; we already log ourselves
    app.run(debug=False, use_reloader=False)