import { capitalize, reverseString } from './index';

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
