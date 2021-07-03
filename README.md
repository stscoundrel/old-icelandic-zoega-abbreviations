# Old Icelandic Zoega Abbreviations

Map abbreviations to full length words from "A Concise Dictionary of Old Icelandic" by Geir Zoëga.

Zoëga's is full of makes heavy use of abbreviations to save space inin print. While working with online versions of the same source material, there is little use for these abbreviations. This library helps you map them back to their full length equilevants.

Related projects:
- [Old Icelandic Dictionary](https://github.com/stscoundrel/old-icelandic-zoega).
- [Old Icelandic Dictionary in Next.js](https://github.com/stscoundrel/old-icelandic-zoega-next).

### Install

`yarn add old-icelandic-zoega-abbreviations`

##### Usage

Find abbreviations:

```javascript
import { findAbbreviations }  from 'old-icelandic-zoega-abbreviations'

// Find abbreviations from a string.
const content = 'n. blame, reproof, reproach; leggja e-m e-t til ~s, to reproach one for, or with, a thing.';

// Returns map of abbreviations to meanings.
const result = findAbbreviations(content);

console.log(result);
// 'n.'  => 'neuter.'
// 'e-m' => 'einhverjum.'
// 'e-t' => 'eitthvat.'

```

### About "A Concise Dictionary of Old Icelandic"

"A Concise Dictionary of Old Icelandic" dictionary was published in 1910 by Geir Zoëga, which leads to there being many public domain versions of the book available. Zoëgas attempt was to made easier-to-approach version of the more full Cleasby - Vigfusson dictionary, specifically for beginners and those interested in Old Icelandic prose writing.