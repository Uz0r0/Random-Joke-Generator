# 🎭 Joke Generator

A simple and customizable Joke Generator built with HTML, CSS, and JavaScript using JokeAPI.  
Users can choose joke language, type, and blacklist categories. All settings are saved in LocalStorage.

---

## 🚀 Features

- Fetch jokes from **JokeAPI v2**
- Supports single and two-part jokes
- Choose joke language
- Choose joke type (single / twopart / any)
- Filter jokes using blacklist flags
- **Settings saved automatically in LocalStorage**
- Fade animation when new joke appears
- Simple settings modal

---

## 🛠️ Technologies Used

- JavaScript (Fetch API)
- HTML5
- CSS3
- LocalStorage
- JokeAPI: https://v2.jokeapi.dev/

---

## 📁 File Structure

project/
│── index.html
│── style.css
│── script.js
│── README.md

yaml
Копировать код

---

## 📦 Installation

1. Clone the project:
   ```bash
   git clone https://github.com/your/repo.git
Open index.html in your browser.

No backend required.

⚙️ How Settings Work
Saving
js
Копировать код
localStorage.setItem("jokeSettings", JSON.stringify(settings));
Loading
js
Копировать код
JSON.parse(localStorage.getItem("jokeSettings"));
📜 License
Free to use and modify.
