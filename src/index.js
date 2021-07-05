const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// function for string separation by n-size characters
function separateStr(str, size) {
    return str.length ? [str.slice(0, size), ...separateStr(str.slice(size), size)] : [];
}

// function for decoding
function decode(expr) {
    const arrOfTen = separateStr(expr, 10);
    let char;
    
    const arrOfSymbols = arrOfTen.map(ten => {
        char = '';
        if (ten.includes('*')) return char = ' ';
        for (let i = 0; i < ten.length; i += 2) {
            ten[i] === '1' && ten[i + 1] === '1'
            ? char += '-' : ten[i] === '1' && ten[i + 1] === '0'
            ? char += '.' : '';
        }
        return char;
    });
    
    let decoded = arrOfSymbols.map(key => {
        if (key === ' ') return ' ';
        if (key in MORSE_TABLE) return MORSE_TABLE[key];
    }).join('');
    
    return decoded;
}

module.exports = {
    decode
}