// game.js
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let gameInProgress = false;

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

// 当用户尝试关闭或刷新页面时触发
window.addEventListener('beforeunload', function(e) {
    if (gameInProgress && currentQuestionIndex < shuffledQuestions.length) {
        const confirmationMessage = '如果继续完成游戏会有惊喜:) 确定要离开吗？';
        e.preventDefault();
        e.returnValue = confirmationMessage;
        return confirmationMessage; // 兼容旧浏览器
    }
});

// 页面隐藏时（包括关闭标签页或浏览器）记录游戏状态
window.addEventListener('pagehide', function(e) {
    if (gameInProgress && currentQuestionIndex < shuffledQuestions.length && !e.persisted) {
        localStorage.setItem('gameAbandoned', 'true');
    }
});

// 检测页面可见性变化（切换标签页）
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden' && gameInProgress && currentQuestionIndex < shuffledQuestions.length) {
        document.addEventListener('visibilitychange', function onReturn() {
            if (document.visibilityState === 'visible') {
                document.removeEventListener('visibilitychange', onReturn);
                if (confirm('你刚才离开了游戏！如果继续完成游戏会有惊喜:) 是否要继续游戏？')) {
                    // 用户选择继续，无操作
                } else {
                    showGameOver();
                }
            }
        }, { once: true });
    }
});

// 页面加载时检查是否有未完成游戏
window.addEventListener('load', function() {
    if (localStorage.getItem('gameAbandoned') === 'true') {
        localStorage.removeItem('gameAbandoned');
        startScreen.classList.add('hidden');
        showGameOver();
    }
});

function startGame() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden'); // 先移除 hidden 以便能添加 show 类
    gameOverScreen.classList.remove('show');   // 确保不显示
    gameOverScreen.classList.add('hidden');    // 再添加 hidden

    shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 12);
    currentQuestionIndex = 0;
    score = 0;

    loadQuestion();
    gameInProgress = true;
    localStorage.removeItem('gameAbandoned'); // 清除之前的标记
}

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
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

function setCategoryColor(category) {
    const colors = {
        '生活操作常识': '#e74c3c',
        '安全防护常识': '#3498db',
        '健康管理常识': '#9b59b6',
        '自然科学常识': '#2ecc71',
        '人文社科常识': '#f39c12',
        '数理逻辑常识': '#1abc9c',
        '传统制度常识': '#e67e22',
        '礼仪文化常识': '#34495e',
        '艺术审美常识': '#16a085',
        '沟通规则常识': '#d35400',
        '法律规范常识': '#c0392b',
        '经济运作常识': '#7f8c8d'
    };
    categoryElement.style.backgroundColor = colors[category] || '#e74c3c';
}

function checkAnswer(selectedOption) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        feedbackElement.textContent = '回答正确！';
        score++;
    } else {
        feedbackElement.textContent = `回答错误，正确答案是：${currentQuestion.answer}`;
    }
    optionsElement.querySelectorAll('.option').forEach(button => {
        button.style.pointerEvents = 'none';
    });
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < shuffledQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    gameInProgress = false;

    scoreElement.textContent = `你的得分：${score} / ${shuffledQuestions.length}`;
    if (score === shuffledQuestions.length) {
        resultImageElement.src = '胜利.jpeg';
    } else if (score >= 6) {
        resultImageElement.src = '一般般.jpeg';
    } else {
        resultImageElement.src = '失败.jpeg';
    }
}

function showGameOver() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    gameOverScreen.classList.remove('hidden');
    setTimeout(() => {
        gameOverScreen.classList.add('show');
    }, 10);
    gameInProgress = false;
}

function restartGame() {
    resultScreen.classList.add('hidden');
    gameOverScreen.classList.remove('show');
    setTimeout(() => {
        gameOverScreen.classList.add('hidden');
        startGame();
    }, 300); // 等待淡出动画完成
}