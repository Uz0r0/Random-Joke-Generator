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

---

## 📦 Installation

1. Clone the project:
   ```bash
   git clone https://github.com/your/repo.git
Open index.html in your browser.

No backend required.

### ⚙️ How Settings Work

The application automatically remembers the user’s preferences (language, joke type, blacklist options) using **LocalStorage**.  
This ensures that your settings stay the same even after refreshing or reopening the page.

#### ✔️ Saving Settings
When the user closes the settings modal, the current configuration is saved:

```js
localStorage.setItem("jokeSettings", JSON.stringify(settings));

### 📜 License

This project is fully free to use, modify, and improve.
No attribution required — enjoy coding!
