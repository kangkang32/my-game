// game.js
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let gameInProgress = false;
let soundEnabled = true; // 默认开启音效
let audioPlaying = false; // 跟踪音频是否正在播放
let fadeOutInterval = null; // 用于跟踪淡出效果的计时器

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const gameOverScreen = document.getElementById('game-over');
const categoryElement = document.getElementById('category');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');
const resultImageElement = document.getElementById('result-image');
const progressTextElement = document.getElementById('progress-text');

// 音频元素
const startSound = document.getElementById('start-sound');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const completeSound = document.getElementById('complete-sound');
const victorySound = document.getElementById('victory-sound');
const failSound = document.getElementById('fail-sound');
const audioToggleBtn = document.getElementById('audio-toggle-btn');

// 用于记录上一题的颜色
let previousColor = '';

// 更新音频图标的函数
function updateAudioIcon() {
    const audioIcon = document.getElementById('audio-icon');
    if (soundEnabled) {
        audioIcon.src = '音效开.png';
    } else {
        audioIcon.src = '音效关.png';
    }
}

// 音频控制功能
function toggleAudio() {
    soundEnabled = !soundEnabled;
    updateAudioIcon(); // 更新图标
    
    if (soundEnabled) {
        if (gameInProgress) {
            startSound.currentTime = 0;
            startSound.volume = 1.0;
            startSound.play().catch(error => {
                console.error('音频播放失败:', error);
            });
        }
    } else {
        startSound.pause();
        startSound.currentTime = 0;
    }
    
    localStorage.setItem('soundEnabled', soundEnabled);
}

// 淡出音频
function fadeOutAudio(sound, duration = 1000, callback) {
    if (!sound || sound.paused || sound.volume === 0) {
        if (callback) callback();
        return;
    }
    clearInterval(fadeOutInterval); // 清除之前的淡出效果
    const originalVolume = sound.volume;
    const step = originalVolume / (duration / 50); // 每50毫秒减少的音量
    fadeOutInterval = setInterval(() => {
        if (sound.volume <= step) {
            sound.pause();
            sound.currentTime = 0;
            sound.volume = originalVolume; // 恢复原始音量
            clearInterval(fadeOutInterval);
            if (callback) callback();
        } else {
            sound.volume -= step;
        }
    }, 50);
}

// 停止受控制的声音（进入游戏前、正确、错误音效）
function stopControlledSounds() {
    const controlledSounds = [startSound, correctSound, wrongSound];
    controlledSounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
        sound.volume = 1.0; // 确保音量重置为默认值
    });
}

// 停止所有声音
function stopAllSounds() {
    clearInterval(fadeOutInterval); // 清除任何正在进行的淡出效果
    const sounds = [startSound, correctSound, wrongSound, completeSound, victorySound, failSound];
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
        sound.volume = 1.0; // 确保音量重置为默认值
    });
    audioPlaying = false;
}

// 播放受控制的音效（只有在soundEnabled为true时才播放）
function playControlledSound(sound) {
    if (soundEnabled) {
        audioPlaying = true;
        sound.currentTime = 0; // 重置音频位置
        sound.volume = 1.0;    // 确保音量是最大的
        sound.play().then(() => {
            sound.addEventListener('ended', () => {
                audioPlaying = false;
            }, { once: true });
        }).catch(error => {
            console.error('音频播放失败:', error);
            audioPlaying = false;
        });
    }
}

// 播放不受控制的音效（无论soundEnabled状态如何都播放）
function playUncontrolledSound(sound, callback) {
    audioPlaying = true;
    sound.currentTime = 0; // 重置音频位置
    sound.volume = 1.0;    // 确保音量是最大的
    sound.play().then(() => {
        sound.addEventListener('ended', function onEnded() {
            sound.removeEventListener('ended', onEnded);
            audioPlaying = false;
            if (callback) callback();
        }, { once: true });
    }).catch(error => {
        console.error('音频播放失败:', error);
        audioPlaying = false;
        if (callback) callback();
    });
}

// 点击"开始挑战"按钮
function startGame() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    gameOverScreen.classList.remove('show');
    gameOverScreen.classList.add('hidden');

    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 12);
    currentQuestionIndex = 0;
    score = 0;

    if (soundEnabled) {
        startSound.loop = true;
        startSound.currentTime = 0;
        startSound.volume = 1.0;
        startSound.play().catch(error => {
            console.error('音频播放失败:', error);
        });
    }

    loadQuestion();
    gameInProgress = true;
    localStorage.removeItem('gameState');
}

// 保存游戏状态到localStorage
function saveGameState() {
    if (gameInProgress && currentQuestionIndex < shuffledQuestions.length) {
        const gameState = {
            inProgress: true,
            currentIndex: currentQuestionIndex,
            score: score
        };
        localStorage.setItem('gameState', JSON.stringify(gameState));
    } else {
        localStorage.removeItem('gameState');
    }
}

// 页面加载时检查音频状态
window.addEventListener('DOMContentLoaded', function() {
    const savedSoundState = localStorage.getItem('soundEnabled');
    if (savedSoundState !== null) {
        soundEnabled = savedSoundState === 'true';
    }
    updateAudioIcon();
    checkForUnfinishedGame();
});

// 检查未完成游戏
function checkForUnfinishedGame() {
    const gameStateStr = localStorage.getItem('gameState');
    if (gameStateStr) {
        try {
            const gameState = JSON.parse(gameStateStr);
            if (gameState.inProgress) {
                localStorage.removeItem('gameState');
            }
        } catch (e) {
            console.error('解析游戏状态时出错:', e);
            localStorage.removeItem('gameState');
        }
    }
}

// 当用户尝试关闭或刷新页面时触发
window.addEventListener('beforeunload', function(e) {
    if (gameInProgress && currentQuestionIndex < shuffledQuestions.length) {
        saveGameState();
        const confirmationMessage = '如果继续完成游戏会有惊喜:) 确定要离开吗？';
        e.preventDefault();
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }
});

// 检测页面可见性变化（切换标签页）
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden' && gameInProgress && currentQuestionIndex < shuffledQuestions.length) {
        saveGameState();
        document.addEventListener('visibilitychange', function onReturn() {
            if (document.visibilityState === 'visible') {
                document.removeEventListener('visibilitychange', onReturn);
                if (confirm('你刚才离开了游戏！如果继续完成游戏会有惊喜:) 是否要继续游戏？')) {
                    // 用户选择继续
                } else {
                    showGameOver();
                    localStorage.removeItem('gameState');
                }
            }
        }, { once: true });
    }
});

function loadQuestion() {
    feedbackElement.textContent = '';
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    categoryElement.textContent = currentQuestion.category;
    setCategoryColor(currentQuestion.category);
    questionElement.textContent = currentQuestion.question;

    progressTextElement.textContent = `题目 ${currentQuestionIndex + 1}/12`;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('div');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => {
            optionsElement.querySelectorAll('.option').forEach(btn => {
                btn.style.pointerEvents = 'none';
            });
            checkAnswer(option);
        });
        optionsElement.appendChild(button);
    });
    saveGameState();
}

function setCategoryColor(category) {
    const colors = [
        '#e74c3c', '#3498db', '#9b59b6', '#2ecc71', '#f39c12',
        '#1abc9c', '#e67e22', '#34495e', '#16a085', '#d35400',
        '#c0392b', '#7f8c8d', '#2980b9', '#27ae60', '#8e44ad',
        '#f1c40f', '#2c3e50', '#95a5a6', '#d35400', '#c0392b',
        '#7f8c8d', '#2980b9', '#27ae60', '#8e44ad'
    ];
    let color;
    do {
        color = colors[Math.floor(Math.random() * colors.length)];
    } while (color === previousColor);
    previousColor = color;
    categoryElement.style.backgroundColor = color;
}

function checkAnswer(selectedOption) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
    
    if (isCorrect) {
        feedbackElement.textContent = '回答正确！';
        feedbackElement.style.color = '#2ecc71';
        score++;
        saveGameState();
        playControlledSound(correctSound); // 播放音效，但不等待
        setTimeout(() => {
            nextQuestion();
        }, 1000); // 回答正确后延迟1000ms
    } else {
        feedbackElement.textContent = `回答错误，正确答案是：${currentQuestion.answer}`;
        feedbackElement.style.color = '#e74c3c';
        saveGameState();
        playControlledSound(wrongSound); // 播放音效，但不等待
        setTimeout(() => {
            nextQuestion();
        }, 1500); // 回答错误后延迟1500ms
    }
    
    optionsElement.querySelectorAll('.option').forEach(option => {
        if (option.textContent === currentQuestion.answer) {
            option.style.backgroundColor = '#2ecc71';
            option.style.color = 'white';
        } else if (option.textContent === selectedOption && !isCorrect) {
            option.style.backgroundColor = '#e74c3c';
            option.style.color = 'white';
        }
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    startSound.pause();
    startSound.currentTime = 0;
    startSound.loop = false;
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    gameInProgress = false;
    localStorage.removeItem('gameState');

    scoreElement.textContent = `你的得分：${score} / ${shuffledQuestions.length}`;
    
    if (score === shuffledQuestions.length) {
        resultImageElement.src = '胜利.jpeg';
        playUncontrolledSound(victorySound);
    } else if (score >= 6) {
        resultImageElement.src = '一般般.jpeg';
        playUncontrolledSound(completeSound);
    } else {
        resultImageElement.src = '失败.jpeg';
        playUncontrolledSound(failSound);
    }
}

function showGameOver() {
    stopAllSounds();
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    setTimeout(() => {
        gameOverScreen.classList.add('show');
        playUncontrolledSound(failSound);
    }, 10);
    gameInProgress = false;
    localStorage.removeItem('gameState');
}

function restartGame() {
    stopAllSounds();
    resultScreen.classList.add('hidden');
    gameOverScreen.classList.remove('show');
    setTimeout(() => {
        gameOverScreen.classList.add('hidden');
        startGame();
    }, 300);
}