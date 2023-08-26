// JavaScript source code
const jokeButton = document.getElementById('jokeButton');
const jokeDisplay = document.getElementById('jokeDisplay');

jokeButton.addEventListener('click', getJoke);

async function getJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        jokeDisplay.textContent = data.value;
    } catch (error) {
        console.error(error);
        jokeDisplay.textContent = "Sorry, jokes are tripping right now. Try later!";
    }
}

