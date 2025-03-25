export const isPalindrome = (word: string): boolean => {
  const wordToLowerCase = word
    .toLowerCase()
    .replace(/[^a-zñ]/g, "")
    .replaceAll(" ", "");
  const invertedWord = wordToLowerCase.split("").reverse().join("");
  console.log({ wordToLowerCase, invertedWord });
  return wordToLowerCase === invertedWord;
};
