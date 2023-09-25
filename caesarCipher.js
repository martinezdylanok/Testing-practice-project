function caesarCipher(string, key) {
    if (key < 0 || key > 25) return;

    let result = "";

    let alphabet = [];

    for (let i = 97; i <= 122; i++) {
        alphabet.push(String.fromCharCode(i));
    }

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char >= 'a' && char <= 'z') {
            let currentIndex = alphabet.indexOf(char);
            let newIndex = (currentIndex + key) % 26;
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }

    return result;
}

module.exports = caesarCipher