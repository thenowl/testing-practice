const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const reverseString = (string) => {
  return string.split('').reverse().join('');
};

const calculator = {
  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Can't divide by 0");
    } else {
      return num1 / num2;
    }
  },

  multiply(num1, num2) {
    return num1 * num2;
  },
};

const caesarCipher = (string, shift) => {
  if (shift < -26 || shift > 26) {
    throw new Error('Shift must be within -26 to 26.');
  }

  let charCodes = [];

  for (let i = 0; i < string.length; i++) {
    charCodes.push(string.charCodeAt(i));
  }

  charCodes = charCodes.map((letterCode) => {
    // Upper case characters from A - Z
    if (letterCode > 64 && letterCode < 91) {
      return letterCode + shift > 90
        ? letterCode + shift - 26
        : letterCode + shift;
    }

    // Lower case characters from a - z
    if (letterCode > 96 && letterCode < 123) {
      return letterCode + shift > 122
        ? letterCode + shift - 26
        : letterCode + shift;
    }

    // Punctuation, spaces and non-alphabetical characters:
    return letterCode;
  });

  return charCodes.map((charCode) => String.fromCharCode(charCode)).join('');
};

export { capitalize, reverseString, calculator, caesarCipher };
