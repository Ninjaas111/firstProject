//1
let arr = [1, 2, 3, 5, 6, 7];
function indexOfElement(arr, item) {
    let element;
    let i;
    for (i = 0; i < arr.length; i++) {
        element = arr[i];
        if (element == item)
            return i;

    }
    return -1;
}
let x = indexOfElement(arr, 6);
console.log(x);


//2

let arr = [1, 2, 3, 4];

let result = [4, 3, 2, 1];

function rev(arr) {
    let element;
    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        element = arr[i];
        arr2.push(element);
    }
    return arr2;
}
console.log(rev(arr));

//3
let arr = [1, 2, 3, 5, 6, 8, 9];
function getSumOfItems(arr) {
    let sum = 0;
    let i;
    let element;
    for (i = 0; i < arr.length; i++) {
        element = arr[i]
        sum += element;
    }

    return sum;
}
let result = getSumOfItems(arr);
console.log(result);

//4, ne bilo zadachey, no sam sovmestil,vvodiw massive,vozvrawaet reverse
let arr1 = [];
while (true) {
    let n = +prompt('vvedite massiv', '');
    if (!n) break;
    arr1.push(n);
}
console.log(arr1);

function reverseArray(arr) {
    let element;
    let arr2 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        element = arr[i];
        arr2.push(element);
    }
    return arr2;
}
console.log(reverseArray(arr1));

//5
let arr1 = [];
let arr2 = [];

function canNest(arr1, arr2) {
    let a = Math.min(...arr1);
    let b = Math.min(...arr2);
    let c = Math.max(...arr1);
    let d = Math.max(...arr2);
    if (a > b && c < d) {
        return true;
    } else {
        return false;
    }
}
canNest([1, 2, 3, 4], [0, 6]);

//6 
let element;
let arr2 = [];

function evenNumbers(arr) {


    for (let i = 0; i < arr.length; i++) {
        element = arr[i];
        if (element % 2 == 0) {
            arr2.push(element);
        }
    }
}
evenNumbers([1, 5, 6, 8, 8, 9, 12, 15, 16]);
alert(arr2);

//7


function sliceSum(arr, n) {
    let sum = 0;
    let arr2 = arr.slice([0], [n]);
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}
sliceSum([1, 3, 2], 2);


//8
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

//9 isAvgWhole number?


let arr = [9, 2, 2, 5];
let sum = 0;
let average;
function isAvgWhole(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    average = sum / arr.length;

    if (average % 1 == 0) {
        return true;
    } else {
        return false;
    }
}
let result = isAvgWhole(arr);
alert(result);

// https://edabit.com/challenge/BFnsRqe8PFvEwcRNt
function makePair(num1, num2) {
    let arr = [];
    arr.push(num1);
    arr.push(num2);
    return arr;
}
// https://edabit.com/challenge/654ABGmNS5GqscE8C

function getVoteCount(votes) {
    let result = votes.upvotes - votes.downvotes;
    return result;
}

// https://edabit.com/challenge/NKknKNfeaJxLDfJuZ
function monthName(num) {
    let b = [0, "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"]
    return result = b[num];
}

//  
function minMax(arr) {
    let a = Math.min(...arr);
    let b = Math.max(...arr);
    return [a, b];

}

//https://edabit.com/challenge/7ysTEDruHz2prcJQ9
function tuckIn(arr1, arr2) {
    let arr3 = [];
    let element;
    arr3[0] = arr1[0];
    for (let i = 0; i < arr2.length; i++) {
        element = arr2[i];
        arr3.push(element);
    }
    arr3.push(arr1[1]);
    return arr3;
}
//https://edabit.com/challenge/yiMSg6cNNCeJDQo3b

function sumOfEvens(arr) {
    let element;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            element = arr[i][j];
            if (element % 2 === 0) {
                sum += element;
            }
        }

    }
    return sum;
}

//https://edabit.com/challenge/3EQGHyiYTNc9LPmhF

function countVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let letter;
    let vowel;
    let count = 0;
    for (i = 0; i < str.length; i++) {
        letter = str[i];
        for (j = 0; j < vowels.length; j++) {
            vowel = vowels[j];
            if (letter.toLowerCase() == vowel) {
                count++;
                break;
            }
        }

    }
    return count;

}
//https://edabit.com/challenge/YT2kXSMEtACPPk35R

function intWithinBounds(n, lower, upper) {
	if ( n % 1 === 0) {
		if ( lower <= n && n < upper ){
			return true;
		}else {
			return false;
		}
	}else {
		return false;
	}
//	return n % 1 === 0 && lower <= n < upper; 
}

//https://edabit.com/challenge/PTvYKkvf7oytHmJFm
function reverseCase(str) {
	let result = [];
	for (let i=0; i<str.length; i++){
		if (str[i].toLowerCase() === str[i] ) {
			let b = str[i].toUpperCase();
			result.push(b);
		} else {
			let c = str[i].toLowerCase();
			result.push(c);
		}
	}
	let result2 = result.join("");
	return result2;
}


//https://edabit.com/challenge/5xrKJPsXLG3czFpuq


function isObject(value) {
    if (typeof value === "object" && value !== null) {
        return true;
    } else {
        return false;
    }
}
//https://edabit.com/challenge/PWqkt9HiLcJSr6QEY
function numbersSum(arr) {
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (typeof element === "number") {
            sum *= element;
        }
    }
    return sum;
}

let result = numbersSum([1, 2, "13", 4, "645"]);
console.log(result);

//https://edabit.com/challenge/NH7uN8JRgPz23GSNq

function parityAnalysis(num) {
    let str = String(num);
    let check = 0;
    for (let i = 0; i < str.length; i++) {
        let element = +str[i];
        check += element;
    }

    if (num % 2 == 0 && check % 2 == 0 || num % 2 == 1 && check % 2 == 1) {
        return true;

    } else {
        return false;
    }
}

//https://edabit.com/challenge/Rd7rkibLqAcBEx7xP   ne poly4ilos' polnostyu( poly4ilos'!)
function add(numberOne, numberTwo) {
	if(isNaN(parseInt(numberOne,10)) === true || isNaN(parseInt(numberTwo,10)) === true){
		let str = "Invalid Operation";
		return str;
	}else {
	
		let b = parseInt(numberOne,10) + parseInt(numberTwo,10);
		let c = String(b);
		return c;
	}
}

https://edabit.com/challenge/6nWnXZZBdetZSLbTE    ne poly4ilos' polnostyu

function lettersOnly(str) {
	if (str === ""){
		return false;
	}
	let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
	for (let i = 0; i<str.length; i++){
			let element = str[i];
			let isLowerCase = false;
			
			for (let j=0; j<lower.length; j++){
				let low=lower[j];
				if (element === low){
					isLowerCase = true;
					break;
				}
				
			}
			if (!isLowerCase) {
				return false;
			}
		}
	return true;
}

//https://edabit.com/challenge/esP7cxXgx8ygiTq9f  ne poly4ilos' polnostyu
let count = 0;
let letter;
let letter2;
for (let i = 0; i < str1.length; i++){
    letter = str1[i];
    for (let j=0; j < str2.length; j++){
        letter2 = str2[j];
        if (letter == letter2 ){
            count++;
                            break;
        }
    }

}
return count;

//https://edabit.com/challenge/Ra85gzkCTtXrNyCag

function add_suffix(suffix) {
	return function(word){
		return word + suffix;
	}
}


//https://edabit.com/challenge/xtv5ZT7xDsHyrshTq

function add(n) {
	return function(x) {
		return n + x;
	}
}
//https://edabit.com/challenge/AP4hnF97anRc2mAZ6
function keysAndValues(obj) {
	let arr3 = []; 
       let arr1 = Object.keys(obj);
       let arr2 = Object.values(obj);
			arr3[0] = arr1;
        arr3[1] = arr2;
	return arr3;
}
//https://edabit.com/challenge/pPNAs5PvB3WvnDwDMz
function toArray(obj) {
	let arr3 = Object.entries(obj);
	return arr3;
}