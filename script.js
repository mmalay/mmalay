const correctPasswords = ["62529", "MIRA"];

// Show the lock input on page load
document.getElementById("lockContainer").style.display = "flex";

function unlock() {
    const inputPassword = document.getElementById("passwordInput").value;
    if (correctPasswords.includes(inputPassword)) {
        document.getElementById("lockContainer").style.display = "none";
        document.getElementById("translatorContainer").style.display = "block";
    } else {
        alert("Incorrect password! Please try again.");
    }
}

const translationDictForward = {
    'a': 'ж', 'b': 'и', 'c': 'ш', 'd': 'ф', 'e': 'г',
    'f': 'х', 'g': 'й', 'h': 'щ', 'i': 'з', 'j': 'ц',
    'k': 'в', 'l': 'л', 'm': 'м', 'n': 'р', 'o': 'к',
    'p': 'т', 'q': 'н', 'r': 'с', 's': 'ь', 't': 'ю',
    'u': 'э', 'v': 'ъ', 'w': 'ъ', 'x': 'я', 'y': 'о',
    'z': 'б'
};

const translationDictReverse = {
    'ж': 'a', 'и': 'b', 'ш': 'c', 'ф': 'd', 'г': 'e',
    'х': 'f', 'й': 'g', 'щ': 'h', 'з': 'i', 'ц': 'j',
    'в': 'k', 'л': 'l', 'м': 'm', 'р': 'n', 'к': 'o',
    'т': 'p', 'н': 'q', 'с': 'r', 'ь': 's', 'ю': 't',
    'э': 'u', 'ъ': 'v', 'ъ': 'w', 'я': 'x', 'о': 'y',
    'б': 'z'
};

function translateCode(direction) {
    let inputCode = document.getElementById("codeInput").value;
    let translationDict = direction === 'forward' ? translationDictForward : translationDictReverse;

    let translatedCode = "";
    for (let i = 0; i < inputCode.length; i++) {
        let char = inputCode[i];
        let lowerCaseChar = char.toLowerCase();
        let translatedChar = translationDict[lowerCaseChar] || char;

        if (char === char.toUpperCase()) {
            translatedChar = translatedChar.toUpperCase();
        }

        translatedCode += translatedChar;
    }

    document.getElementById("result").innerHTML = "Translated Text: " + translatedCode;
    window.translatedCode = translatedCode; // Store translated code globally
}

function copyToClipboard() {
    if (window.translatedCode) {
        navigator.clipboard.writeText(window.translatedCode)
            .then(() => {
                alert("Translated text has been copied to the clipboard!");
            })
            .catch(err => {
                console.error('Error copying text to clipboard', err);
            });
    } else {
        alert("No translated text available to copy!");
    }
}

let colors = ["#f0f8ff", "#ffe4e1", "#e6e6fa", "#ffe5b4"];
let currentColorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 15000); // Change color every 15 seconds
