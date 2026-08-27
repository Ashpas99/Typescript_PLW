let sqr =[1,2,3,4,5,6]

sqr.forEach((val)=>{console.log(val);})

sqr.forEach((val, index, array)=>{
    array[index] = val * 10; 
    return array;});
    console.log(sqr);

let squares: number[] = [1,2,3,4,5,6];
//Variables which stores output declaration of datatypes is not mandatory
let squareNum = squares.map((val)=>{return val * val;})
console.log(squareNum);

let numArray: number [] =[23, 34, 45, 56, 67,23, 90];

let newArray = numArray.filter((val)=>{return val <   70 ;});
console.log(newArray);

//Check if negative number present in array

let arr : number[] = [1,3,6,-1,67,89,90]

let isSomeNegPresent =arr.some((val)=>{ return val < 0;})
console.log(isSomeNegPresent);

let isEveryNegPresent = arr.every((val)=>{ return val < 0;})
console.log(isEveryNegPresent);

let str = "Hello"
let str1 = " Javascript"
let str3 = ' Typescript'

let newStr = str.concat(str, str1,str3);
console.log(newStr);