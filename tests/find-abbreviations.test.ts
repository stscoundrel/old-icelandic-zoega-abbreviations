import { findAbbreviations } from '../src';

describe('Abbreviation finder', () => {
  test('Finds abbreviations in content', () => {
    // From definition of 'ámæli'
    const content = 'n. blame, reproof, reproach; leggja e-m e-t til ~s, to reproach one for, or with, a thing.';

    const expected = new Map();
    expected.set('n.', 'neuter.');
    expected.set('e-m', 'einhverjum.');
    expected.set('e-t', 'eitthvat.');

    const result = findAbbreviations(content);

    expect(result).toEqual(expected);
  });
});
