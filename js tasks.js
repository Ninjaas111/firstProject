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
//sorkawennui variant 
function add(numberOne, numberTwo) {
	let one = parseInt(numberOne,10);
	let two = parseInt(numberTwo,10);
	
	if(isNaN(one) || isNaN(two)){
		return "Invalid Operation" 
	}
	return String(one+two);
}


//https://edabit.com/challenge/6nWnXZZBdetZSLbTE   
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
//2 variant 
function keysAndValues(obj) {
	let abc = [];
	let abc1 = [];
	let result = [];
	for (let key in obj) {
		abc.push(key);
		abc1.push(obj[key])
	}
	
	result[0] = abc;
	result[1] = abc1;
	return result;
}


//https://edabit.com/challenge/pPNAs5PvB3WvnDwDMz
function toArray(obj) {
	let arr3 = Object.entries(obj);
	return arr3;
}

//https://edabit.com/challenge/9CNJtMXaw2K5NwMLJ
function convert(deg) {
	if (deg.endsWith("C")){
		let fareng = parseInt(deg,10)*9/5+32;
		let  b = Math.round(fareng);
		let farengeit = b + "°F"
		return farengeit;
	}else if(deg.endsWith("F")){
		let celsium1 = (parseInt(deg,10)-32)*5/9;
		let c = Math.round(celsium1);
		let celsium = c + "°C";
		
		return celsium;
	}else {
		return "Error";
	}
}


//NEW TASKS
//https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
function matchHouses(step) {
	if (step === 0 ) {
		return 0;
	}else {
		return 5*step+1;
	}
}
//https://edabit.com/challenge/PBXe4hLP3mbbMEFt8
function highLow(str) {
	let arr1 = str.split(" ");
	let max = Math.max(...arr1);
	let min = Math.min(...arr1);
	let result = String(max) + " " + String(min);
	return result;
}
//https://edabit.com/challenge/rCmEy2AQYLbRGgKyL
function getAbsSum(arr) {
	let sum = 0; 
	for (let i=0; i<arr.length; i++){
		let element = Math.abs(arr[i]);
		sum +=element;
	}
	return sum;
}
//https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd
function set(arr){
    return Array.from(new Set(arr));
  }
  
  let result=set([1, 3, 3, 5, 5]);
  console.log(result);

  //2 var

  
function isSet(arr){
    let result=[];
    for (let i = 0; i<arr.length; i++){
      let hasElement = false;
         for (let j=0; j<result.length; j++){
           if (result[j]===arr[i]){
             hasElement = true;
             break;
           }
         }
      if (hasElement ===false){
        result.push(arr[i]);
      }
        
    } 
      return result;
    }
    
    let next = isSet([1,3,3,4,4,5,5]);
    console.log(next);
    
    

//https://edabit.com/challenge/Twbmxzd3JwkkqAWES

function isOmnipresent(arr,val){
    for(let i=0; i<arr.length; i++){
        let hasValue = false;
        for(let j=0; j<arr[i].length; j++){
            if(val === arr[i][j]){
                hasValue = true;
                break;
            }
        }
        if(hasValue===false){
            return false;
        }
        
    }
    return true;

}


let result = isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6);
console.log(result);



//https://edabit.com/challenge/hscAGyt4iNZ3PKy3g
function chatroomStatus(users) {
    let b = users.length;
      if(users.length == 0){
        return "no users online"
      }else if(users.length == 1){
        return users[0] + " online"
      }else if(users.length == 2){
        return users[0] + " and " + users[1] + " online"
      }else if(users.length > 2){
        return users[0] + "," + users[1] + " and " + (users.length - 2) +" more online";
      }
  }
  
  let result = chatroomStatus(["Tymur", "Arthur", "Adam", "Darina", "Gal", "Ronaldo", "Pete"]);
  
      console.log(result);


 //https://edabit.com/challenge/GLbuMfTtDWwDv2F73
 
 function countTrue(arr) {
    let count = 0;
 if (arr.length == 0){
   return 0;
 }else{
   for(let i=0; i<arr.length; i++){
     if(arr[i] == true){
       count++;
     }
   }
 }
   return count;
}

let result = countTrue([true, true, true, true, true]);

console.log(result);

//https://edabit.com/challenge/hD3euqPHM82Cbr7R8
function largestSwap(num) {
	let str=String(num);
    let symbol1=str[1];
    let symbol2=str[0];
    let str2 = symbol1 + symbol2;
    let reverseNumber = +str2;
   if(num > reverseNumber || num == reverseNumber){
     return true;
   }else {
     return false;
   }
}

let result = largestSwap(21);

console.log(result);


//https://edabit.com/challenge/ebcd4Xu8TLizaj6dm  ne poly4ilas'
function arrayOfMultiples (num, length) {
    let arr = [];
    arr.length = length;
    arr[0] = num;
        for(let i = 1; i<arr.length; i++){
            arr[i] = num;
}
return arr;
}
let result = arrayOfMultiples(7,5);
console.log(result);


//https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj
function canNest(arr1, arr2) {
	for(let i = 0; i<arr1.length; i++){
		for(let j = 0; j<arr2.length; j++){
			if(Math.max(...arr1)<Math.max(...arr2) && Math.min(...arr1)>Math.min(...arr2)){
				return true;
			}else{
				return false;
			}
		}
	}
}


//https://edabit.com/challenge/hPWnaSckJke5FXNEH
function timeForMilkAndCookies(date) {
	if(date.getMonth()===11 && date.getDate()===24){
		return true;
	}else{
		return false;
	}
}


//https://edabit.com/challenge/rvsvGvqZ3BzNieKqA
function detectWord(str) {
	let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let arr=[];
	for(let i=0; i<str.length;i++){
		for(let j=0; j<lower.length;j++){
			if(str[i]===lower[j]){
				arr.push(str[i]);
			}
		}
	}
	let result = arr.join("");
	return result;
}

//https://edabit.com/challenge/pB6CF3rFBi8ykJ3Br
function shiftToLeft(x, y) {
	return x*2**y;
}
//https://edabit.com/challenge/RGQXN4TG2CQoBAReQ
function numberSquares(n) {
	return (n**3)/3+(n**2)/2+(n/6)
}
//https://edabit.com/challenge/WCMC8X9z7758hq4gP
function numLayers(n) {
	let thicknessOfFolded = 0.0005*(2**n);
	return thicknessOfFolded + "m";
}

//https://edabit.com/challenge/y9Rans4Ry5oW74cat
function minMax(arr){
    let arr2=[];
    arr2.push(Math.min(...arr));
    arr2.push(Math.max(...arr));
    return arr2;
  }
  
  let result = minMax([1]);
  console.log(result);