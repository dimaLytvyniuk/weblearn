"use strict";

function encrypt(text, n) {
    if (n <= 0 || text === null || text.length === 0)
        return text;

    for (let i = 0; i < n; i++) {
        let second = '';

        for (let j = 1; j < text.length; j += 2)
            second = second.concat(text.charAt(j));
        for (let j = 0; j < text.length; j += 2)
            second = second.concat(text.charAt(j));
        text = second;
    }

    return text;
}

function decrypt(encryptedText, n) {
    if (n <= 0 || encryptedText === null || encryptedText.length === 0)
        return encryptedText;

    let length = encryptedText.length;
    let half = length / 2;
    for (let i = 0; i < n; i++) {
        let first = encryptedText.substring(half, length);
        let second = encryptedText.substring(0, half);
        encryptedText = '';

        for (let j = 0; j < half; j++)
            encryptedText = encryptedText.concat(first.charAt(j), second.charAt(j));
    }

    return encryptedText;
}

console.log(decrypt("hsi  etTi sats!", 1));