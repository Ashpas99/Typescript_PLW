class Person {
    public name: string;
    protected age:number;
    private ssn:number;
    
    constructor (name:string, age:number, ssn:number){
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }
    displayInfo(){
        console.log(`Name of person is ${this.name}, age is ${this.age}, and SSN is ${this.ssn}`);
    }
}
//Child class
class employee extends Person{
    private empID : number;
    constructor(name:string, age:number, ssn:number, empID:number)
    {
        super(name, age, ssn);
        this.empID=empID;
    }
    displayEmpDetails()
    {
        console.log("Name : ", this.name);
        console.log("Age is : ", this.age);
        //console.log("SSN is : ", this.ssn)    //this is private property cannot access in another class
        console.log("Emp ID is :", this.empID);  //this is private property still accessable within class
    }
}

 let emp1 =new employee("Ashish", 30, 123456789, 101);
emp1.displayInfo();
emp1.displayEmpDetails();
//console.log(emp1.age);  //this is protected property cannot access outside class
