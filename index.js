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

export { capitalize, reverseString, calculator };
