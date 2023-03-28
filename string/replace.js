function replaceLetters(str, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return str.replace(/[a-z]/gi, letter => {
      const index = alphabet.indexOf(letter.toLowerCase());
      const newIndex = (index + n) % 26;
      return alphabet[newIndex];
    });
  }
  const str = 'Hello, world!';
const n = 3;
const result = replaceLetters(str, n);
console.log(result); // "Khoor, zruog!"