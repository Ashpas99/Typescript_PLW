export let firstName: string ="Ashish";

export function callMultiply(a:number, b:number):number{

    return a*b;
}

export class Person{

    lastName:string ="Patil";
    displayDetails(){
        console.log("Person name is ", firstName);
    }
}