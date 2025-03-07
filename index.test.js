import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from './index';

test('Capitalize first letter of string', () => {
  const input = ['james', 'computer', 'france', 'hagrid', 'darth vader'];
  const expected = ['James', 'Computer', 'France', 'Hagrid', 'Darth vader'];

  input.forEach((string, index) => {
    expect(capitalize(string)).toBe(expected[index]);
  });
});

test('Reverse string', () => {
  const input = ['james', 'computer', 'france', 'hagrid', 'darth vader'];
  const expected = ['semaj', 'retupmoc', 'ecnarf', 'dirgah', 'redav htrad'];

  input.forEach((string, index) => {
    expect(reverseString(string)).toBe(expected[index]);
  });
});

describe('Calculator object methods', () => {
  test('Adds numbers as expected', () => {
    const input = [
      [0, 1],
      [2, 3],
      [-9, -4],
      [9, 17],
      [-4, 18],
    ];
    const expected = [1, 5, -13, 26, 14];

    input.forEach((numberPair, index) => {
      expect(calculator.add(numberPair[0], numberPair[1])).toBe(
        expected[index]
      );
    });
  });

  test('Subtracts numbers as expected', () => {
    const input = [
      [0, 1],
      [2, 3],
      [-9, -4],
      [9, 17],
      [-4, 18],
    ];
    const expected = [-1, -1, -5, -8, -22];

    input.forEach((numberPair, index) => {
      expect(calculator.subtract(numberPair[0], numberPair[1])).toBe(
        expected[index]
      );
    });
  });

  test('Divides numbers as expected', () => {
    const input = [
      [4, 2],
      [33, 3],
      [-8, 4],
      [17, 9],
      [2, 0],
    ];
    const expected = [2, 11, -2, 1.888, "Can't divide by 0"];

    input.forEach((numberPair, index) => {
      if (index === 3) {
        expect(calculator.divide(numberPair[0], numberPair[1])).toBeCloseTo(
          expected[index]
        );
      } else if (index === 4) {
        expect(() => calculator.divide(numberPair[0], numberPair[1])).toThrow(
          expected[index]
        );
      } else {
        expect(calculator.divide(numberPair[0], numberPair[1])).toBe(
          expected[index]
        );
      }
    });
  });

  test('Multiplies numbers as expected', () => {
    const input = [
      [0, 1],
      [2, 3],
      [-9, -4],
      [9, 17],
      [-4, 18],
    ];
    const expected = [0, 6, 36, 153, -72];

    input.forEach((numberPair, index) => {
      expect(calculator.multiply(numberPair[0], numberPair[1])).toBe(
        expected[index]
      );
    });
  });
});

test('Make Caesar cipher shift on string', () => {
  const input = [
    ['abc', 2],
    ['xyz', 3],
    ['HeLLo', 3],
    ['Hello, World!', 3],
  ];
  const expected = ['cde', 'abc', 'KhOOr', 'Khoor, Zruog!'];

  input.forEach((argument, index) => {
    expect(caesarCipher(argument[0], argument[1])).toBe(expected[index]);
  });
});

test('analyzeArray() to perform averaging, min, max and length checks as expected', () => {
  const input = [
    [1, 8, 3, 4, 2, 6],
    [18, -2, 6, 0, 9, 11],
  ];
  const expected = [
    {
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    },
    {
      average: 7,
      min: -2,
      max: 18,
      length: 6,
    },
  ];

  input.forEach((argument, index) => {
    expect(analyzeArray(argument)).toStrictEqual(expected[index]);
  });
});
