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