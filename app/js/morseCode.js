const morseCodeDict = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
    '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
    '----.': '9'
};

function translateMorseCode(morseCodeLetter) {
    return morseCodeDict[morseCodeLetter] || 'Invalid Morse Code';
}

function getFrequency(msg) {
    let posibleWords = ['shell','halls','slick','trick','boxes','leaks','strobe','bistro','flick','bombs','break','brick','steak','sting','vector','beats']
    let posibleLetters = posibleWords.map(word => word.split(''));

    let letters = msg.split('')

    for (let i = 0; i < posibleLetters.length; i++) {
        for (let j = 0; j < letters.length; j++) {
            if(!posibleLetters[i].includes(letters[j])) {
                posibleLetters.splice(i, 1);
                posibleWords.splice(i, 1);
            }
        }
    }

    return posibleWords;
}