let car1 = new Object();
car1.color = "blue"; 
car1.maxSpeed = 220; 
car1.driver = new Object();
car1.name = "Diana Andriivna Mahas";
car1.category = "C";  
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true; 
car1.numberOfAccidents = 0;

let car2 = new Object();
car2.color= "green";
car2.maxSpeed = 120;
car2.driver= new Object();
car2.name= "Diana Andriivna Mahas";
car2.category = "B";
car2.driver["personal limitations"] = null;
car2.tuning = false; 
car2["number of accidents"] = 2;

car1.drive = function() {
    console.log("I am not driving at night");
};

car1.drive();

car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive();

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    this.trip = function () {
        if (this.driver === undefined) {
            console.log("No driver assigned");
        } else {
            console.log(`Driver ${this.driver.name}, ${(this.driver.nightDriving) ? "drives at night" : "does not drive at night"} and has ${this.driver.experience} years of experience.`);
        }
    };
}

Truck.prototype.AssignDriver = function (name, nightDriving, experience) {
    this.driver = new Object();
    this.driver.name = name;
    this.driver.nightDriving = nightDriving;
    this.driver.experience = experience;
}

let firstTruck = new Truck("blue", 5000, 60, "BMW","X7");
let secondTruck = new Truck("white", 6000, 55, "Audi","A8");

firstTruck.trip();
secondTruck.trip();

firstTruck.AssignDriver("Diana Andriivna Mahas", true, 10); 
secondTruck.AssignDriver("Diana Andriivna Mahas", false, 8);

console.log(firstTruck);
console.log(secondTruck);

firstTruck.trip();
secondTruck.trip();