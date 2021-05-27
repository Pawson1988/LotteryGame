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



var lotto = []; // declare an empty array to add the numbers to
const setsOfNums = 50000; // to set how many random lottery sets are to be generated


for(let i = 0; i < setsOfNums; i++){ // to create the given number of lottery sets declare above
    lotto.push(PrintRandArr(LottoNumbers, 6));
}

let randomSet = (Math.floor(Math.random() * setsOfNums)); // to get a random number within the lottery sets created 
const finalLottoNums = lotto[randomSet]; //save the random lottery set
console.log(`This is your lucky set, chosen at random from a collection of ${setsOfNums} lottery sets: + ${finalLottoNums}`); // show the user how many sets were generated at first and the chosen array of lottery numbers


const argsNums = process.argv.slice(2); // to get the numbers from the command line

console.log("---------------------------------------------")

let argsNums1 = parseNums(argsNums); // to use the function to parse the arguments into integers so they can be checked by underscore

// use this line to use a set array and change the second arguement in difference
// const chosenLottoNums = [16, 24, 32, 8, 18, 5]; 

const checkedNums = _.difference(finalLottoNums, argsNums1); // check the numbers

console.log(`Your chosen numbers are:`); // show the chosen numbers from the command line when giving the result...
console.log(argsNums1);

const finalCount = 6 - checkedNums.length; // .difference takes any numbers that are different out of the array so we cando a quick substraction to get how many numbers were matched

if (finalCount === 0){  // A conditional statement to show the user the correct number of numbers matched
    console.log("You failed miserably")
} else {
    if (finalCount === 1){
        console.log(`You got ${finalCount} number`);
    } else {
        console.log(`You got ${finalCount} numbers`);
    }
};


function parseNums(args){ // function to parse the args into integers
    const parsedNums = [];
    for(let i = 0; i < args.length; i++){
        parsedNums.push(parseInt(args[i]));
    }
    return parsedNums;
}

