let employee = {
firstName: "Ashish",
age: 30,
profession : "private Job",
isLive: true,
getData : function() {
return `Name of emp is ${this.firstName} , Age is ${this.age} 
    and profession is ${this.profession}`;
}
}

console.log(employee.getData());
console.log(typeof(employee));
console.log(employee.firstName)
console.log(employee["firstName"])
console.log(employee["getData"]())
console.log("This is 2nd conflict");