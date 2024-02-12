const morseCodeDict = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e',
    '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j',
    '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o',
    '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
    '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y',
    '--..': 'z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
    '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
    '----.': '9'
};

const frequencys = {
    'shell': 3.505
};

function translateMorseCode(morseCodeLetter) {
    return morseCodeDict[morseCodeLetter];
}

function getFrequency(msg) {
    let posibleWords = ['shell','halls','slick','trick','boxes','leaks','strobe','bistro','flick','bombs','break','brick','steak','sting','vector','beats'];

    if (msg && msg.trim() !== "") {
        let letters = msg.split('');

        letters = letters.filter(letter => letter !== ' ');

        posibleWords = posibleWords.filter(word => {
            const wordLetters = word.split('');
            return letters.every(letter => wordLetters.includes(letter));
        });
    }


    return posibleWords;
}