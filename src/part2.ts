import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = R.pipe(
    stringToArray,
    R.filter((c: string) => R.includes(c.toLocaleLowerCase(), vowels)),
    R.length
);

/* Question 2.2 */
export const isPalindrome = (text: string): boolean => {
    const cleanedStrArray: string[] = R.pipe(
        stringToArray,
        R.filter((c: string) => /[a-zA-Z0-9]/.test(c)),
        R.map((c: string) => c.toLocaleLowerCase()))(text);
    
    const reversedStrArray: string[] = stringToArray(R.reduce((acc: string, c: string) => c + acc, "", cleanedStrArray));
    return R.equals(cleanedStrArray, reversedStrArray);
}; 
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => {
    const sentence: string = t.root + " " + R.pipe(
        R.map(treeToSentence),
        R.join(" ")
    )(t.children);
    return sentence.trim();
};
