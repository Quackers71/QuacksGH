//

let text = 'This is some short string';
let arrText = text.split(' ');
let secondText = arrText.join(' ');

console.log(arrText);
console.log(secondText);

function reverseString (text) {
    let result = text.split('').reverse().join('');
    console.log(result);
}

reverseString(text);

function findTheLongestWord(pants) {
    let result = pants.split(' ');
    console.log(result);
    
    let longestWord = '';
for ( let i = 0; i < result.length; i++) {
        if (result[i].length > longestWord.length){
            longestWord = result[i];
        }
    }
    console.log(`The longest Word is ${longestWord.toUpperCase()}`);
    console.log(longestWord.length)
;}

findTheLongestWord("This is some longer random text");




