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

  //rekyrsiya

  function sumTo(num){
    if(num===1){
      return num;
    }else{
      return num+sumTo(num-1);
    }
  }
  
  let result = sumTo(3);
  console.log(result);

//https://edabit.com/challenge/vsoQiYJXRANcYrX3Z
  function ascDesNone(arr, str){
    if (str==="Asc"){
      return arr.sort(function(a,b){return a-b});
    }else if(str==="Des"){
      return arr.sort(function(a,b){return b-a});
    }else{
      return arr;
    }
  }
  
  
  let result = ascDesNone([12, 2, 3, 4], "None");
  console.log(result);

//https://edabit.com/challenge/jxxWvhfiv67P2zbTa
  function lottery(ticket,win){
    



        for(let j=0; j<ticket[i].length;j++){
            let winner = ticket[i][1];
            if(typeof ticket[i][j]==="string"){
                    for(let k=0; k<ticket[i][j].length; k++){
                        let winNumber = ticket[i][j].charCodeAt(k);
                        if(winNumber === winner){
                            count++;
                        }
                    }
            }
        }
    }
    if(count > win){
        return "Winner!";
    }else{
        return "Loser!";
    }
}

let result = lottery([["KG", 80], ["NTBBVZ", 79], ["CI", 73], ["AGXMEE", 74], ["IU", 68], ["VOSP" , 84]], 0);
console.log(result);
function lottery(ticket, win) {
    let count = 0;
    for (let i = 0; i < ticket.length; i++) {
        let miniticket = ticket[i];
        let word = miniticket[0];
        let miniwin = miniticket[1];
        for (let t = 0; t < word.length; t++) {
            let charCode = word.charCodeAt(t);
            if (charCode === miniwin) {
                count++;
                break;
            }
        }
    }
    if (count >= win) {
        return "Winner!";
    } else {
        return "Loser!";
    }
}
let result = lottery([["KG", 80], ["NTBBVZ", 79], ["CI", 73], ["AGXMEE", 74], ["IU", 68], ["VOSP" , 84]], 1)
console.log(result);



//https://edabit.com/challenge/ebcd4Xu8TLizaj6dm
function arrayOfMultiples(num, length) {
    let arr = [];
    let startValue = 0;
    for (let i = 0; i < length; i++) {
        startValue += num;
        arr.push(startValue);
    }
    return arr;
}
let result = arrayOfMultiples(12, 10);
console.log(result);




//https://edabit.com/challenge/Dq8kbbsLYyG9are5Z
   
function totalVolume(...boxes) {
    let totalSum = 0;
    let arr = [];

    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        let myltiply = box[0] * box[1] * box[2];
        arr.push(myltiply);
    }
    for (let j = 0; j < arr.length; j++) {
        totalSum += arr[j];
    }
    return totalSum;
}

let result = totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
console.log(result);

//https://edabit.com/challenge/3Efavz8YmSBia4p8s
function indexMultiplier(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
       sum += arr[i]*i;
    }
    return sum;
  }
  
  let result = indexMultiplier([-3, 0, 8, -6]);
  console.log(result);

//https://edabit.com/challenge/MXChCnzCSBobgY4Ex
  function flatten(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      for(let j=0; j<arr[i].length;j++){
        arr2.push(arr[i][j]);
      }
    }
    return arr2; 
  }
  
  let result=flatten([[1, 2], [3, 4]]);
  console.log(result);

//https://edabit.com/challenge/caeSeQ3K53GMQKenX
  function getDistance(a,b){
    let distance = Math.sqrt((b.x-a.x)**2+(b.y-a.y)**2);
    return Math.round(distance*1000)/1000
  }
  
  let result = getDistance({x: 0, y: 0}, {x: 1, y: 1});
  console.log(result);

//https://edabit.com/challenge/5Yt2CrYdrJvoJFHRt
  function mapping(letters){
    let objectLetters = {};
    for(let i=0; i<letters.length; i++){
        let b=letters[i];
        let upper = b.toUpperCase();
      objectLetters[b] = upper;
    }
    return objectLetters;
  }
  
  
  
  
  
  let result = mapping(["p", "s"]);
  console.log(result);

  //https://edabit.com/challenge/YTECpnCCeJsYqYvfF
  function invert(o){
    let invertObject={};
    for (let key in o ){
      let property = key;
      let valueProperty = o[key];
      invertObject[valueProperty]=property;
    }
    return invertObject;
  }
  
  
  
  
  
  let result = invert({ "z": "q", "w": "f" });
  console.log(result);


//https://edabit.com/challenge/M6fbYyBkzJXMAu39G
  function compact(arr){
  for(let i=0; i<arr.length; i++){
    if(arr[i]===false){
       arr.pop(arr[i]);
    }else if(arr[i]===null){
      arr.pop(arr[i]);
    }else if(arr[i]===0){
      arr.pop(arr[i]);
    }else if(arr[i]===""){
      arr.pop(arr[i]);
    }else if(arr[i]===undefined){
      arr.pop(arr[i]);
    }else if(arr[i]===NaN){
      arr.pop(arr[i]);
    }
  }
  return arr;
}

let result = compact([0, 1, false, 2, "", 3]);
console.log(result);

//https://edabit.com/challenge/ejfdLAp673DwxSg5R
function areaOfCountry(country, area){
  let countryOfWorld=(area/148940000)*100;
  let roundProportion=Math.round(countryOfWorld*100)/100;
  return country+ " is " + roundProportion + "% of the total world's landmass";
}

let result=areaOfCountry("Russia", 17098242);
console.log(result);



//https://edabit.com/challenge/3jZyJTfsXTXXwAQkA
function checkEquals(arr1, arr2){
  let count = 0;
  for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length;j++){
      if(arr1[i]===arr2[j]){
        count++;
      }
    }
  }
  if(count === arr1.length){
    return true;
  }else {
    return false;
  }
}

let result = checkEquals([4, 7, 6], [4, 5, 6]);
console.log(result);

function checkEquals(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }
  
  for(let i=0; i<arr1.length; i++){
      if(arr1[i]!==arr2[i]){
        return false;
      }
   
  }
  return true;
}

let result = checkEquals([4, 7, 8], [4, 7, 6]);
console.log(result);



//https://edabit.com/challenge/h87ArHxmQaaYGKD7m
function toObj(arr){
  let finalObj={};
  if (arr.length===0){
    return arr;
  }
    for(let i=0; i<arr.length;i++){
    finalObj[arr[i]] = arr[i].charCodeAt();
  }
  
  return finalObj;
}


let result = toObj(["a", "b", "c"]);
console.log(result);

//https://edabit.com/challenge/jRSST87NjECBzbwzL
function getTotalPrice(groceries){
  let price;
  let sum=0;
  for(let i=0; i<groceries.length; i++){
    let grocery = groceries[i];
     price = grocery.price*grocery.quantity;
    sum +=price;
  }
  
  return sum;

}


let result = getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]);
console.log(result);




//https://edabit.com/challenge/M6fbYyBkzJXMAu39G
function compact(arr){
  let arr2=[];
  for(let i=0; i<arr.length; i++){
    if(arr[i]===false){
      continue;
    }else if(arr[i]===null){
      continue;
    }else if(arr[i]===0){
      continue;
    }else if(arr[i]===""){
      continue;
    }else if(typeof arr[i]==="undefined"){
      continue;
    }else if(isNaN(arr[i])===true){
      continue;
    }
    arr2.push(arr[i]);
  }
  return arr2;

}


let result = compact([0, 1, false, 2, "", 3, NaN, undefined, null]);
console.log(result);




function countAll(str){
  let lettersCount=0;
  let digitsCount=0;
  let resultObject={};
  let newStr=str.replace(/\s+/g, '');
  for(let i=0; i<newStr.length; i++){
    let numberType = Number(newStr[i]);
    if(isNaN(numberType)===true){   
      lettersCount++;
    }else {
      digitsCount++;
    }
  }
  resultObject.LETTERS=lettersCount;
  resultObject.DIGITS=digitsCount;
  return resultObject;
}


let result = countAll("H3ll0 Wor1d");
console.log(result);



//https://edabit.com/challenge/vPmDvWoP2wj5KpWZi
function oldest(people){
  let oldestHuman = null; 
  for (key in people){
    if(oldestHuman === null){
      oldestHuman = key;
    }else {
       let age = people[key]; 
      
      let oldestHumanAge = people[oldestHuman];
      if (age > oldestHumanAge){
      oldestHuman = key;
    }
    }
   
  }
  return oldestHuman;
}
let result = oldest({
  Max: 9,
  Josh: 13,
  Sam: 48,
  Anne: 33
});
console.log(result);


// https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn
function Book(title, author){
  this.title = title;
  this.author = author;
  this.getTitle = function(){return "Title: " + title};
  this.getAuthor = function (){return "Author: " + author};
}
 let HP = new Book("Harry Potter", "J.K. Rowling");
 console.log(HP.title);
console.log(HP.author);
console.log(HP.getTitle());
console.log(HP.getAuthor());


//https://edabit.com/challenge/hPWnaSckJke5FXNEH
function timeForMilkAndCookies(date){
  if(date.getMonth()===11 && date.getDate()===24){
    return true;
  }else{
    return false;
  }
}
let result = timeForMilkAndCookies(new Date(2013, 0, 23));
console.log(result);


//https://edabit.com/challenge/K8FPxyGNDXhWQD9jX
function getDay(day){
  let date = new Date(day);
  let days=["Sunday","Monday","Tuesday","Wednesday","Thursday",
           "Friday","Saturday"];
  return days[date.getDay()];
}
let  result=getDay("12/08/2011");
console.log(result);
//https://jsbin.com/divicijala/edit?js,console,output
function convertDate(date){
  let dateC = new Date(date);
  let month = dateC.getMonth();
  let monthResult = month+1;
  let day = dateC.getDay();
  let year = dateC.getFullYear();
  let dateConvert = [monthResult, dateC.getDay(), dateC.getFullYear()];
  return dateConvert;
}
let result = convertDate("January 9, 2019");
console.log(result);

//https://edabit.com/challenge/hxyvTffvdT4E238CY
function testJackpot(result){
  let countResults = 0;
  for(let i=1; i<result.length; i++){
    if (result[i]===result[0]){
      countResults++
    }
  }
  if(countResults === result.length-1){
    return true;
  } 
  return false;
}

let test = testJackpot(["@", "@", "@", "@"]);
let test2 = testJackpot(["&&", "&", "&&&", "&&&&"]);
console.log(test);
console.log(test2);


//https://edabit.com/challenge/8n9RyHThC3dNEPCng
function capToFront(s){
  let arrUpper=[];
  let arrLower=[];
  for(let i=0; i<s.length; i++){
    if(s[i].toUpperCase()===s[i]){
      arrUpper.push(s[i]);
    }else{
      arrLower.push(s[i]);
    }
  }
  let resultArray = arrUpper.concat(arrLower);
  let capToFirstString = resultArray.join("");
  return capToFirstString; 
}

let test = capToFront("hApPy");
let test2 = capToFront("moveMENT");
console.log(test);
console.log(test2);

//https://edabit.com/challenge/EMuszDzF66k9J73HG
function jazzify(arr) {
	for (let i=0; i<arr.length; i++){
       let last = arr[i][arr[i].length-1]
       if(last != "7" ){
         arr[i] +=7;
       }
    }
  return arr;
}
let result = jazzify(["F", "E", "A", "Ab", "Gm", "C"]);
console.log(result);
//https://jsbin.com/cikopofisu/edit?js,console,output
function concat(...args){
  let arr1=[];
  
  for(let i=0; i<args.length; i++){
    for(let j=0; j<args[i].length; j++){
      arr1.push(args[i][j]);
    }
  }
  return arr1;
}
let result = concat([1], [2], [3], [4], [5], [6], [7]);
let result2 = concat([1, 2, 3], [4, 5], [6, 7]);
console.log(result);
console.log(result2);

//https://edabit.com/challenge/tmnCStcrkdWbreKP5
function getBudgets(arr){
  let sumOfBudgets = 0;
  for(let i=0; i<arr.length; i++){
    sumOfBudgets +=arr[i].budget;
  }
  return sumOfBudgets;
}
let result = getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]);
let result2 = getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]);
console.log(result);
console.log(result2);
//https://edabit.com/challenge/jbR9NupEL8zAZkbKx
function matchLastItem(arr){
  let matchItem = "";
for(let i=0; i<arr.length-1; i++){
  matchItem +=String(arr[i]);
}
let last = arr[arr.length-1];
if(matchItem===last){
  return true;
}
return false;

}

let result = matchLastItem(["rsq", "6hi", "g", "rsq6hig"]);
let result2 = matchLastItem([1, 1, 1, "11"]);
console.log(result);
console.log(result2);

//https://edabit.com/challenge/MarKs2qWR3cMHZjxy
function timeToFinish(full, part){
  let countFull=0;
  let countPart=0;
  for(let i=0; i<full.length; i++){
    if(full[i] != " "){
      countFull++;
    }
  }
  for(let j=0; j<part.length; j++){
    if(part[j] != " "){
      countPart++;
    }
  }
  let fullPartDifference = countFull - countPart;
  let finishTime = fullPartDifference * 0.5;
  return finishTime;
}
let result = timeToFinish( "As a result, my point is still valid.",
  "As a result, my");
console.log(result);

//https://jsbin.com/mufazekita/edit?js,console,output
function reverseAndNot(i){
  let b = String(i);
  let reverseStringArray = [];
  for(let j=b.length - 1; j>=0; j--){
    reverseStringArray.push(b[j]);
  }
  reverseStringArray.push(i);
  let reverseString = reverseStringArray.join("");
  let resultVersion = +reverseString;
  return resultVersion;
}
let result = reverseAndNot(123);
console.log(result);
let result2 = reverseAndNot(123456789);
console.log(result2);


//https://edabit.com/challenge/3jzycf6fcgwZbvpcf
function removeLeadingTrailing(n) {
  let arr=[];
  let arr2=[];
  let leftNumberFound = false;
	for(let i=0; i<n.length; i++){
      if(n[i] != 0){
        leftNumberFound = true;
        arr.push(n[i]);
      }else{
        if(leftNumberFound){
          arr.push(n[i]);
        }
      }
    }
    for(let j=arr.length-1; j>=0; j--){
      if(arr[j]==="0"){
        arr.pop(arr[j]);
      }else if(arr[j] != "0"){
        break;
      }
    }
    let str=arr.join("");
  
  return str;
}
  let result = removeLeadingTrailing("00003.10400");
console.log(result);

//https://jsbin.com/qucitutugi/edit?js,console,output
function clone(arr) {
	let arr1 = []
    for(let i=0; i<arr.length; i++){
      arr1.push(arr[i]);
    }
    arr1.push(arr)
	return arr1
}
let r = clone([1,1]);
console.log(r);

//https://edabit.com/challenge/FFdZPWBpBWvBjuGdr
function iSqrt(n) {
  if(n<0){
    return "Invalid";
  }
let count = 0;
  while(n>=2){
    let b =Math.sqrt(n);
    n = b;
    count++;
  }
return count;
}

let result = iSqrt(256);
console.log(result);