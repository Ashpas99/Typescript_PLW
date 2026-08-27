function getInfo(id:number):void;
function getInfo(name:string):void;

function getInfo(val: number| string): void {
    console.log(val);
}

getInfo(10);
getInfo("Hello");

 console.log("Different no of arguments in function overloading");

function add(a: number, b:number): number;
function add(a:number, b:number, c:number):number;
function add(a:number, b:number, c?:number): number {
    if(c !== undefined){
        return a+b+c;
    }
    return a+b;
}

console.log(add(10, 20));
console.log(add(10, 20, 30));

console.log("Different types of parameters in function overloading");

function processInput(input : number): number;
function processInput(input : string ):string;

function processInput(input : any): any {
    if(typeof input === "number"){
        return input*10;
    }
    return input.toUpperCase();
}
 console.log(processInput(10));
console.log(processInput("Ashish"));