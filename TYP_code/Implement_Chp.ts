interface Animal {
    name: string;
    sound(): void;
    walk(): void;
}
class Dog implements Animal{
    name:string;
    static color : string;
    
    constructor(name:string, color:string){
        this.name=name;
        Dog.color=color;
    }
    walk():void {}
    sound(){
        console.log("Bark....");
    }
}

let pet = new Dog("Woofy", "Golden");
console.log(pet.name);         //Woofy
console.log(Dog.color);       //undefined
pet.sound();          //Bark...
