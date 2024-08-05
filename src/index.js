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

function decode(expr) {
    // write your solution here
    let decodedMessage = '';

		for (let i = 0; i < expr.length; i += 10) {
			const morseCode = expr.substr(i, 10);
			if (morseCode === '**********') {
				decodedMessage += ' ';
			} else {
				let morseSymbol = '';
				for (let j = 0; j < 10; j += 2) {
					const code = morseCode.substr(j, 2);
					morseSymbol += code === '10' ? '.' : code === '11' ? '-' : '';
				}
				decodedMessage += MORSE_TABLE[morseSymbol];
			}
		}

		return decodedMessage;
}

module.exports = {
    decode
}