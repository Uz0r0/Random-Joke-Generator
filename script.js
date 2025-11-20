const joke = document.getElementById('joke');
const getJokeBtn = document.getElementById('getJokeBtn');
const settingsBtn = document.getElementById("settingsBtn");
const settingsModal = document.getElementById("settingsModal");
const closeModal = document.getElementById("closeModal");

const flags = document.querySelectorAll('#flag');

const convert = () => {
    const blackFlags = [];

    flags.forEach(flag => {
        if (flag.checked) {
            blackFlags.push(flag.value);  
        }
    });

    const blackFlagsStr = blackFlags.join(",");

    return blackFlagsStr;
};

settingsBtn.addEventListener("click", () => {
    settingsModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    saveSettings();
    settingsModal.classList.add("hidden");
});

function saveSettings() {
    const blacklist = convert();
    const language = document.getElementById('language').value;
    const jokeType = document.getElementById('type').value;

    const settings = {
        blacklist,
        language,
        jokeType
    };

    localStorage.setItem("jokeSettings", JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem("jokeSettings");
    if (!saved) return;

    const settings = JSON.parse(saved);

    document.getElementById('language').value = settings.language;

    document.getElementById('type').value = settings.jokeType;

    const savedFlags = settings.blacklist.split(",");
    flags.forEach(flag => {
        flag.checked = savedFlags.includes(flag.value);
    });
}

async function getJoke() {
    try{
        joke.classList.remove('fade');

        const blacklist = convert();
        const language = document.getElementById('language').value;
        console.log(language);
        const jokeType = document.getElementById('type').value;

        const res = await fetch(`https://v2.jokeapi.dev/joke/Any?lang=${language}&blacklistFlags=${blacklist}&type=${jokeType}`);
        const data = await res.json();

        if (data.error) {
            joke.textContent = "Error: no jokes found. Try different settings.";
            joke.classList.add("fade");
            return; 
        }

        if (data.joke) {
            joke.textContent = data.joke;
        }

        if (data.setup && data.delivery) {
            joke.innerHTML = `${data.setup}\n\n<span class="delivery">${data.delivery}</span>`;
        }

        joke.classList.add('fade')
    }
    catch(error){
        console.log(error);
    }
}

getJokeBtn.addEventListener('click', getJoke);

loadSettings();
getJoke();