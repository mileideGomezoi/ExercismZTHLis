export function isPangram(sentence: string): boolean  {
   const lowercaseSentence = sentence.toLowerCase();

   // Remove non-alphabetical characters
  let lettersOnly = '';
  for (let i = 0; i < lowercaseSentence.length; i++) {
    const currentChar = lowercaseSentence.charAt(i);
    if (currentChar >= 'a' && currentChar <= 'z') {
      lettersOnly += currentChar;
    }
  }
  

  const lettersSet = new Set(lettersOnly);

  return lettersSet.size === 26;
}
