const _ = require("underscore");


const maxNumber = 49;
const LottoNumbers = [];


// create lotto numbers
for(let i = 0; i < maxNumber; i++){
    LottoNumbers.push(i+1);
}

// console.log(LottoNumbers);

// get 6 random lottery numbers 

let uniRandNums = [];
let newArray = [];

const randomNum = (rnum) => {
    return Math.floor(Math.random() * rnum);
}

const UniqueRandNums = (num) => {
    for(let i = 0; i < num; i++){
        let randNumber = randomNum(num);
        uniRandNums.push(randNumber)

            for(let j = 0; j < uniRandNums.length -1; j++){
    
                if (randNumber !== uniRandNums[j]){

                }  else {

                    uniRandNums.pop();
                    if(uniRandNums.length !== num){
                        UniqueRandNums(num);
                    }

                    break;
                }   
            }   
        }
    return uniRandNums;
}

const PrintRandArr = (arr, numOfItems) => {
    newArray = [];
       UniqueRandNums(arr.length);
        for(let i = 0; i < numOfItems; i++){ 
            newArray.push(arr[uniRandNums[i]]);
        } 
        // to clear the array to allow the function add totally new random items the next time around --- prevents it from printing the exact same array 
        uniRandNums = [];
    return newArray;
}

// first argument - array to randomise, second argument - how many items you want in your final array

// console.log(PrintRandArr(LottoNumbers, 6));


var lotto = [];
const setsOfNums = 20;


for(let i = 0; i < setsOfNums; i++){
    lotto.push(PrintRandArr(LottoNumbers, 6));
}

// for(let i = 0; i < lotto.length; i++){
//     console.log(lotto[i]);
// }

let randomSet = (Math.floor(Math.random() * setsOfNums));
const finalLottoNums = lotto[randomSet];
console.log(finalLottoNums);
console.log("This is your lucky set, chosen at random: " + finalLottoNums);


const chosenLottoNums = [16, 24, 32, 8, 18, 5];
const checkedNums = _.difference(finalLottoNums, chosenLottoNums);

console.log(finalLottoNums);
console.log(chosenLottoNums);

const finalCount = 6 - checkedNums.length;

if (finalCount === 0){
    console.log("You failed miserably")
} else {
    if (finalCount === 1){
        console.log(`You got ${finalCount} number`);
    } else {
        console.log(`You got ${finalCount} numbers`);
    }
};

// get both arrays of number
// use a loop to iterate one of the arrays
// check each number against the other array using index of.... 
// if found counter plus 1 if '-1' no count.... 
// print out the count and a message


