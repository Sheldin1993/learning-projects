const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');

const secretNumber = Math.floor(Math.random() * 100) + 1;

submitGuess.addEventListener('click', () => {
    const playerGuess = parseInt(guessInput.value);
    checkGuess(playerGuess);
});

function checkGuess(guess) {
    if (guess === secretNumber) {
        displayFeedback(`Correct! The secret number was ${secretNumber}.`);
        guessInput.disabled = true;
        submitGuess.disabled = true;
    } else if (guess < secretNumber) {
        displayFeedback('Too low! Try a higher number.');
    } else {
        displayFeedback('Too high! Try a lower number.');
    }
}

function displayFeedback(message) {
    feedback.textContent = message;
}