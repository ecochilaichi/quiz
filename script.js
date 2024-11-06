// クイズの問題と回答
const questions = [
    { question: "日本の首都はどこですか？", choices: ["東京", "大阪", "京都", "札幌"], answer: "東京" },
    { question: "地球は何番目の惑星ですか？", choices: ["1", "3", "5", "7"], answer: "3" },
    { question: "海の水は何色？", choices: ["青", "緑", "透明", "赤"], answer: "透明" },
    { question: "リンゴは何の仲間？", choices: ["果物", "野菜", "魚", "肉"], answer: "果物" },
    { question: "日本の通貨は何ですか？", choices: ["円", "ドル", "ユーロ", "ポンド"], answer: "円" }
];

let currentQuestion = 0;
let correctAnswers = 0;

const questionContainer = document.getElementById('question');
const choicesContainer = document.getElementById('choices');
const resultContainer = document.getElementById('result');
const clearImage = document.getElementById('clearImage'); // クリア画像の要素

// 問題を表示
function showQuestion() {
    questionContainer.textContent = questions[currentQuestion].question;
    choicesContainer.innerHTML = "";
    questions[currentQuestion].choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('choiceButton');
        button.textContent = choice;
        button.onclick = () => selectAnswer(choice);
        choicesContainer.appendChild(button);
    });
}

// 答えを選択
function selectAnswer(choice) {
    if (choice === questions[currentQuestion].answer) {
        correctAnswers++;
        if (correctAnswers === 5) {
            endGame(true);  // 5問連続正解でゴール
        } else {
            currentQuestion++;
            showQuestion();  // 正解の場合は次の問題へ進む
        }
    } else {
        endGame(false);  // 不正解で即終了
    }
}

// ゲーム終了処理
function endGame(isWin) {
    if (isWin) {
        resultContainer.textContent = "クリア！やったね！";
        clearImage.style.display = 'block';  // クリア画像を表示
    } else {
        resultContainer.textContent = "残念！不正解です。トロッコから落ちました！";
    }
    questionContainer.style.display = 'none';
    choicesContainer.style.display = 'none';
}

// 初期設定
showQuestion();
