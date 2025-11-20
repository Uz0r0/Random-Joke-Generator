# Random-Joke-Generator
🎭 Joke Generator App

A simple and customizable Joke Generator built with HTML, CSS, and JavaScript using the JokeAPI.
Users can choose joke language, type, and blacklist categories. Settings are saved automatically using LocalStorage.

🚀 Features

Fetches jokes from JokeAPI v2

Supports:

Single jokes

Two-part jokes (setup + delivery)

Language selection

Blacklist filters (e.g., dark, NSFW, political, etc.)

Joke type selection (single / twopart / any)

Settings saved in LocalStorage

Smooth fade animation when jokes update

Responsive modal for settings

🛠️ Technologies Used

JavaScript (Fetch API, DOM manipulation)

HTML5

CSS3

JokeAPI (https://v2.jokeapi.dev/)

LocalStorage for saving settings

📦 Installation

Download or clone the project:

git clone https://github.com/your-repo/joke-generator.git


Open the project folder:

cd joke-generator


Open index.html in your browser.

No backend or build tools required.

📑 How It Works
Fetching jokes

Jokes are loaded with:

fetch(`https://v2.jokeapi.dev/joke/Any?lang=${language}&blacklistFlags=${blacklist}&type=${jokeType}`)

Saving settings

When the user closes the settings modal:

localStorage.setItem("jokeSettings", JSON.stringify(settings));

Loading settings

On page load:

const saved = JSON.parse(localStorage.getItem("jokeSettings"));

File Structure
/project
│── index.html
│── style.css
│── script.js
│── README.md

🔧 Customization

You can easily extend the app by adding:

A “favorites” joke list

A copy-to-clipboard button

Text-to-speech jokes

Dark mode

Just ask if you want help implementing any of these.

📜 License

This project is free to use and modify. No restrictions.
