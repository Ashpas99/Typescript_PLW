interface Person {
name: string;
age:number;
getDetails(): void;    //abstract method
}

let student:Person ={
    name: "John",
    age: 20,
    getDetails() {    //abstract method implementation
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
    
}

console.log(student.name); // Output: John
console.log(student.age);  // Output: 20
console.log(student.getDetails()); // Output: Name: John, Age: 20


console.log("----Interface with optional and readOnly propertys-----");

interface Employee {
    readonly id: number;
    name: string;
    age?: number; // Optional property
}

let employee: Employee = {
    id: 1,
    name: "Alice"
};

console.log(employee.id);   // Output: 1
console.log(employee.name); // Output: Alice
console.log("Optional age : ",employee.age);  // Output: undefined
employee.age= 30;
console.log("Reassigning age: ", employee.age);
employee.name="john";
console.log("Reassigning name: ", employee.name);

// employee.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.