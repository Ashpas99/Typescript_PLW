class Parent {
    num:number = 20;   //variable declare and initialized
    constructor (){
        console.log("This is parent class constructor......");
    }
    display(){
        console.log("This is parent class Display Method...");
    }
}

class Child extends Parent{
    num:number = 30;   //variable overriden
    constructor(){
        super();       // This will call parent class constructor
        console.log("This is a child class constructor....");
    }
    show(){
        //console.log(super.num);        //This is not possible in typescript
        console.log("Calling variable from show method: ", this.num);
        console.log("This is child class show method....");
    }
//Overriden method
    display(){
        super.display();    //Calling parent class (non-overriden) method
        console.log("This is child class Display Method......");
    }
}
let c1 = new Child();
console.log(c1.num); //calling child class variable
c1.display();    //Call overrriden method from child method
