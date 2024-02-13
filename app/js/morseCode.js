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
    'shell': 3.505, 'halls': 3.515, 'slick':  3.522, 'trick':  3.532, 
    'boxes':  3.535, 'leaks':  3.542, 'strobe':  3.545, 'flick': 3.555,
    'bombs': 3.565,'break': 3.572,'brick': 3.575,'steak': 3.582,
    'sting': 3.592, 'vector': 3.595, 'beats': 3.600
};

function translateMorseCode(morseCodeLetter) {
    return morseCodeDict[morseCodeLetter];
}

function mapWordsToFrequency(word) {
    return frequencys[word];
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
    let posibleFrequency = '';
    for (let b = 0; b < posibleWords.length; b++) {
        posibleFrequency = posibleFrequency + ' ' + mapWordsToFrequency(posibleWords);
    }

    return posibleFrequency;
}