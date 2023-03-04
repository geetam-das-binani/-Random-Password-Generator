const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const passwordGeneratorForm = document.getElementById('passwordGeneratorForm');
const passwordDisplay = document.getElementById('passwordDisplay');
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBERS_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayFromLowToHigh(33, 47)
    .concat(arrayFromLowToHigh(58, 64))
    .concat(arrayFromLowToHigh(91, 96))
    .concat(arrayFromLowToHigh(123, 126));

const syncCharacterAmount = (e) => {
    e.preventDefault();
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;

}
characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

const generatePassword = (characterAmount, includeNumbers, includeUppercase, includeSymbols) => {
    let charcodes = LOWERCASE_CHAR_CODES
    if (includeUppercase) {
        charcodes = charcodes.concat(UPPERCASE_CHAR_CODES)
    }
    if (includeNumbers) {
        charcodes = charcodes.concat(NUMBERS_CHAR_CODES)
    }
    if (includeSymbols) {
        charcodes = charcodes.concat(SYMBOLS_CHAR_CODES)
    }

    const passwordcharacters = [];
    for (let i = 0; i < characterAmount; i++) {

        const charactercode = charcodes[Math.floor(Math.random() * charcodes.length)]
        console.log( charcodes[Math.floor(Math.random() * charcodes.length)])
        console.log( [Math.floor(Math.random() * charcodes.length)])
        console.log( (Math.random() * charcodes.length))
        console.log(Math.random())
        console.log(charcodes[0,1,2])
     

        passwordcharacters.push(String.fromCharCode(charactercode))
    }

    return passwordcharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    let array = [];
    for (let i = low; i <= high; i++) {
        array.push(i);


    }

    return array;
}

passwordGeneratorForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;

    const password = generatePassword(characterAmount, includeNumbers, includeUppercase, includeSymbols)


    passwordDisplay.innerText = password;
})

