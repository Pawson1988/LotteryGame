const _ = require("underscore");

const maxNumber = 49;
const LottoNumbers = [];


// create lotto numbers
for(let i = 0; i < maxNumber; i++){
    LottoNumbers.push(i+1);
}

// ---------------------------------------- Randomiser -----------------------------------------------------------------------

let uniRandNums = [];
let newArray = [];

function randomNum(rnum){
    return Math.floor(Math.random() * rnum);
}

function UniqueRandNums(num){
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

function PrintRandArr(arr, numOfItems){
     newArray = [];
       UniqueRandNums(arr.length);
        for(let i = 0; i < numOfItems; i++){ 
            newArray.push(arr[uniRandNums[i]]);
        } 
        // to clear the array to allow the function add totally new random items the next time around --- prevents it from printing the exact same array 
        uniRandNums = [];
    return newArray;
}

// ------------------------------- Game ----------------------------------------------------------------------------------------



const argsNums = process.argv.slice(2); // to get the numbers from the command line
let argsNums1 = parseNums(argsNums); // to use the function to parse the arguments into integers so they can be checked by underscore

let isOutOfRange = false; // set booleans to record whether numbers are iin range and are actually numbers
let notANumber = false;

    if(argsNums.length !== 6){  // check the number of numbers entered is 6

        console.log("you need to input 6 numbers exactly");

    } else {
        // Check to see if number is in the required range
        argsNums.forEach(item => {
            if (item > maxNumber || item < 1){
                console.log("Your numbers must be between 1 and " + maxNumber);
                isOutOfRange = true;
            }
            // check to see if number is infact a number
            if(isNaN(item) === true){
                console.log("Your input must be a number")
                notANumber = true;
            }
        }) 
        
        // only proceed if all checks are correct, otherwise halt the program
        if(!isOutOfRange && !notANumber){    
            
            let lotto = []; // declare an empty array to add the numbers to
            const setsOfNums = 10; // to set how many random lottery sets are to be generated


            for(let i = 0; i < setsOfNums; i++){ // to create the given number of lottery sets declare above
                lotto.push(PrintRandArr(LottoNumbers, 6));
            }

            let randomSet = (Math.floor(Math.random() * setsOfNums)); // to get a random number within the lottery sets created 

            const finalLottoNums = lotto[randomSet]; //save the random lottery set

            console.log(`This is your lucky set, chosen at random from a collection of ${setsOfNums} lottery sets: + ${finalLottoNums}`); // show the user how many sets were generated at first and the chosen array of lottery numbers


            console.log("---------------------------------------------")

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
    }}}


// ------------------------------- Arguments Number Parser ------------------------------------------------------------------

function parseNums(args){ 
    const parsedNums = [];
    for(let i = 0; i < args.length; i++){
        parsedNums.push(parseInt(args[i]));
    }
    return parsedNums;
}