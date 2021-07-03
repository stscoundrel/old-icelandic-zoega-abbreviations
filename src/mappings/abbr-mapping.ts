export const getAbbreviationMapping = (): Map<string, string> => {
  const abbreviationMapping = new Map();

  abbreviationMapping.set('e-t', 'eitthvat.');
  abbreviationMapping.set('e-m', 'einhverjum.');
  abbreviationMapping.set('e-s', 'einhvers.');
  abbreviationMapping.set('e-u', 'einhverju.');
  abbreviationMapping.set('absol.', 'absolute, absolutely.');
  abbreviationMapping.set('acc.', 'accusative.');
  abbreviationMapping.set('adj.', 'adjective.');
  abbreviationMapping.set('adv.', 'adverb.');
  abbreviationMapping.set('adverb.', 'adverbially.');
  abbreviationMapping.set('compar.', 'comparative.');
  abbreviationMapping.set('compd', 'compound, compounds.');
  abbreviationMapping.set('compds', 'compound, compounds.');
  abbreviationMapping.set('conj.', 'conjunction.');
  abbreviationMapping.set('contr.', 'contracted.');
  abbreviationMapping.set('dat.', 'dative.');
  abbreviationMapping.set('def.', 'definite.');
  abbreviationMapping.set('esp.', 'especially.');
  abbreviationMapping.set('etc.', 'et cetera.');
  abbreviationMapping.set('f.', 'feminine.');
  abbreviationMapping.set('fem.', 'feminine.');
  abbreviationMapping.set('freq.', 'frequent, frequently.');
  abbreviationMapping.set('gen.', 'genitive.');
  abbreviationMapping.set('imperat.', 'imperative.');
  abbreviationMapping.set('impers.', 'impersonal.');
  abbreviationMapping.set('indecl.', 'indeclinable.');
  abbreviationMapping.set('indef.', 'indefinite.');
  abbreviationMapping.set('m.', 'masculine.');
  abbreviationMapping.set('masc.', 'masculine.');
  abbreviationMapping.set('n.', 'neuter.');
  abbreviationMapping.set('neut.', 'neuter.');
  abbreviationMapping.set('nom.', 'nominative.');
  abbreviationMapping.set('pass.', 'passive.');
  abbreviationMapping.set('pl.', 'plural.');
  abbreviationMapping.set('plur.', 'plural.');
  abbreviationMapping.set('pres.', 'present.');
  abbreviationMapping.set('pret.', 'preterite.');
  abbreviationMapping.set('reflex.', 'retlexive.');
  abbreviationMapping.set('relat.', 'relative.');
  abbreviationMapping.set('sing.', 'singular.');
  abbreviationMapping.set('subj.', 'subjunctive.');
  abbreviationMapping.set('subst.', 'substantive.');
  abbreviationMapping.set('superl.', 'superlative.');

  return abbreviationMapping;
};

export default {
  getAbbreviationMapping,
};
