class Car {

name : string;
color: string;
model: string;

constructor(name:string, color:string, model:string){
    this.name=name;
    this.color=color;
    this.model=model;
}
start(){
    console.log("Car is starting");
}
stop(){
    console.log("Car is stopping");
}

displayDetails(){
    console.log(`Name of car is ${this.name} , Color is ${this.color} and model is ${this.model}`);
}

}

class Hyundai extends Car{

    year: number;

    constructor(name:string, color:string, model:string,year:number){
        super(name,color,model);
        this.year=year;
    }

    start(){
        super.start();   //Calling parent class (non-overriden) method using super keyword
        console.log("Hyudai is starting");
    }
    yom(){
        console.log(`Name of car is ${this.name} , Color is ${this.color} , model is ${this.model} and year is ${this.year}`);
    }


}

let getDetailsOfCar: Hyundai = new Hyundai("Hyundai", "White", "i10", 2015);
getDetailsOfCar.start();
getDetailsOfCar.yom();
getDetailsOfCar.displayDetails();
console.log(getDetailsOfCar.name);
console.log(getDetailsOfCar.color);
console.log(getDetailsOfCar.year);
console.log(typeof(getDetailsOfCar));

let car: Car = new Hyundai("Hyundai", "White", "i10", 2015);
car.start();
car.displayDetails();
console.log(typeof(car));
//console.log(car.year)   //Not a parent class property
//car.yom(); // This will throw an error because 'yom' is not a method of the Car class