//Завдання 1//
function TriangleArea(b=5,h=4) {
    let area =0.5*b*h;
    console.log('Площа трикутника:'+ area);
    return area;
}
TriangleArea(3,6);
TriangleArea();

//Завдання 2//
function Jet (color,avgSpeed, maxAltitude, brand,pointOfDestination) {
    this.color = color;
    this.avgSpeed = avgSpeed;
    this.maxAltitude = maxAltitude;
    this.brand = brand;
    this.pointOfDestination = pointOfDestination;
}
let MyJet=('red',650,2000,'Boing','Rome')

Jet.prototype.AssignPilot = function(name, yearsOfExperience, hasChildren) {
    this.pilot =new Object();
    this.pilot.name = name;
    this.pilot.yearsOfExperience = yearsOfExperience;
    this.pilot.hasChildren = hasChildren;

}
let Jet1=new Jet('white',800,4500,"F-16",'Milan');
Jet1.AssignPilot('Diana Mahas',23,false);
console.log(Jet1);
//Завдання 3//
class EquilateralTriangle {
    constructor(equalSide) {
        this.equalSide=equalSide;
    }
    get equalSide() {
        return this.equalSide;
    }
}
class IsoscelesTriangle extends EquilateralTriangle {
    constructor(equalSide, base) {
        super(equalSide);
        this.base=base;
    }
    static calculateArea(a,b) {
        return (b/4)*Math.sqrt(4*a*a-b*b);
    }
}
let equilateral = new EquilateralTriangle(4);
console.log('Equilateral Triangle:', equilateral);

let isoseles = new IsoscelesTriangle(8);
console.log('Isosceles Triangle:', isoseles);

let area = IsoscelesTriangle.calculateArea(isosceles,equalSide, isosceles.base);
console.log("Area of Isosceles Triangle:", area);

