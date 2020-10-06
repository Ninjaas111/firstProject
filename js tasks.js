//1
let arr=[1,2,3,5,6,7];
function indexOfElement(arr,item){
    let element;
    let i;
    for ( i=0; i<arr.length;i++){
        element=arr[i];
        if (element == item)
            return i;
            
        }
         return -1;
    }
    let x = indexOfElement(arr, 6);
   console.log(x);


   //2

   let arr=[1,2,3,4];

let result=[4,3,2,1];

function rev(arr){
  let element;
  let arr2=[];
  for (let i=arr.length-1; i>=0; i--){
    element=arr[i];
    arr2.push(element);
  }
  return arr2;
}
console.log(rev(arr));

//3
let arr = [1,2,3,5,6,8,9];
function getSumOfItems(arr){
    let sum=0;
    let i;
    let element;
    for (i=0; i<arr.length; i++){
        element = arr[i]
        sum +=element;
    }
    
    return sum;
}
let result = getSumOfItems(arr);
console.log(result);

//4, ne bilo zadachey, no sam sovmestil,vvodiw massive,vozvrawaet reverse
let arr1=[];
while(true){
let n=+prompt('vvedite massiv', '');
if(!n) break;
arr1.push(n);
}
console.log(arr1);

function reverseArray(arr) {
        let element;
        let arr2=[];
    for (let i=arr.length-1; i>=0; i--){
        element=arr[i];
        arr2.push(element);
}
return arr2;
}
console.log(reverseArray(arr1));

//5
let arr1=[];
let arr2=[];

function canNest(arr1, arr2){
        let a=Math.min(...arr1);
        let b=Math.min(...arr2);
        let c=Math.max(...arr1);
        let d=Math.max(...arr2);
   if (a > b && c < d) {
    return true;
}else {
    return false;
} 
}
canNest([1,2,3,4], [0,6]);      

//6 
let element;
        let arr2=[];

        function evenNumbers(arr){

               
        for (let i=0; i < arr.length; i++){
            element=arr[i];
            if (element % 2 == 0 ){
                arr2.push(element);
            }
        }
    } 
    evenNumbers([1,5,6,8,8,9,12,15,16]);
    alert(arr2);

    //7


    function sliceSum(arr, n) {
        let sum=0;
        let arr2=arr.slice([0], [n]);
        for (let i=0; i<arr2.length; i++){
        sum +=arr2[i];
}
        return sum;
    }
    sliceSum([1, 3, 2], 2);


    //8
    function sortByLength(arr) {
        return arr.sort((a,b) => a.length - b.length );
    }

    //9 isAvgWhole number?
   
        
    let arr=[9,2,2,5];
    let sum=0;
    let average;
    function isAvgWhole (arr) {
        for (let i = 0; i < arr.length; i++){
                sum +=arr[i];
        }
            average = sum / arr.length;
    
        if (average % 1  == 0) {
            return true;
        } else {
            return  false;
        }
    }
    let result = isAvgWhole(arr);
    alert(result);

    // https://edabit.com/challenge/BFnsRqe8PFvEwcRNt
    function makePair(num1, num2) {
        let arr=[];
        arr.push(num1);
        arr.push(num2);
        return arr;
    }
    // https://edabit.com/challenge/654ABGmNS5GqscE8C

    function getVoteCount(votes) {
		let result=votes.upvotes-votes.downvotes;
	return result;
}


