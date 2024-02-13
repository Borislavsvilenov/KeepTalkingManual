function getLetters(msg) {
    let letters = [];

    if (typeof msg !== 'undefined' && msg.trim() !== '') {
        letters = msg.split(' ');
        
        for (let l = 0; l < letters.length; l++) {
            letters[l] = letters[l].split('');
        }

        return letters;
    } else {
        return '';
    }
}

function getPass(letters) {
    let passWords = ['about', 'after', 'again', 'below', 'could',
                     'every', 'first', 'found', 'great', 'house',
                     'large', 'learn', 'never', 'other', 'place',
                     'plant', 'point', 'right', 'small', 'sound',
                     'spell', 'still', 'study', 'their', 'there',
                     'these', 'thing', 'think', 'three', 'water',
                     'where', 'which', 'world', 'would', 'write'
        ];

    let passLetters = passWords.map(word => word.split(''));

    for (let l = 0; l < letters.length; l++) {
        for (let p = 0; p < passLetters.length; p++) {
            if (!letters[l].includes(passLetters[p][l])) {
                passWords.splice(p, 1);
                passLetters.splice(p, 1);
                p--;
            }
        }
    }

    return passWords;
}