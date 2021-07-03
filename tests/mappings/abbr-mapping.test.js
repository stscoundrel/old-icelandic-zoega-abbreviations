import abbreviations from '../../src';

describe('Abbreviation mapping tests', () => {
  test('Returns map of abbreviations to words / definitions', () => {
    const resultMap = abbreviations.getAbbreviationMapping();

    expect(typeof resultMap).toBe('object');
    expect(resultMap instanceof Map).toBeTruthy();
  });

  test('Abbreviations in map expected content', () => {
    const resultMap = abbreviations.getAbbreviationMapping();

    expect(resultMap.get('e-t.')).toBe('eitthvat.');
    expect(resultMap.get('e-m.')).toBe('einhverjum.');
    expect(resultMap.get('e-s.')).toBe('einhvers.');
    expect(resultMap.get('e-u.')).toBe('einhverju.');
    expect(resultMap.get('absol.')).toBe('absolute, absolutely.');
    expect(resultMap.get('acc.')).toBe('accusative.');
    expect(resultMap.get('adj.')).toBe('adjective.');
    expect(resultMap.get('adv.')).toBe('adverb.');
    expect(resultMap.get('adverb.')).toBe('adverbially.');
    expect(resultMap.get('compar.')).toBe('comparative.');
    expect(resultMap.get('compd')).toBe('compound, compounds.');
    expect(resultMap.get('compds')).toBe('compound, compounds.');
    expect(resultMap.get('conj.')).toBe('conjunction.');
    expect(resultMap.get('contr.')).toBe('contracted.');
    expect(resultMap.get('dat.')).toBe('dative.');
    expect(resultMap.get('def.')).toBe('definite.');
    expect(resultMap.get('esp.')).toBe('especially.');
    expect(resultMap.get('etc.')).toBe('et cetera.');
    expect(resultMap.get('f.')).toBe('feminine.');
    expect(resultMap.get('fem.')).toBe('feminine.');
    expect(resultMap.get('freq.')).toBe('frequent, frequently.');
    expect(resultMap.get('gen.')).toBe('genitive.');
    expect(resultMap.get('imperat.')).toBe('imperative.');
    expect(resultMap.get('impers.')).toBe('impersonal.');
    expect(resultMap.get('indecl.')).toBe('indeclinable.');
    expect(resultMap.get('indef.')).toBe('indefinite.');
    expect(resultMap.get('m.')).toBe('masculine.');
    expect(resultMap.get('masc.')).toBe('masculine.');
    expect(resultMap.get('n.')).toBe('neuter.');
    expect(resultMap.get('neut.')).toBe('neuter.');
    expect(resultMap.get('nom.')).toBe('nominative.');
    expect(resultMap.get('pass.')).toBe('passive.');
    expect(resultMap.get('pl.')).toBe('plural.');
    expect(resultMap.get('plur.')).toBe('plural.');
    expect(resultMap.get('pres.')).toBe('present.');
    expect(resultMap.get('pret.')).toBe('preterite.');
    expect(resultMap.get('reflex.')).toBe('retlexive.');
    expect(resultMap.get('relat.')).toBe('relative.');
    expect(resultMap.get('sing.')).toBe('singular.');
    expect(resultMap.get('subj.')).toBe('subjunctive.');
    expect(resultMap.get('subst.')).toBe('substantive.');
    expect(resultMap.get('superl.')).toBe('superlative.');
  });
});
