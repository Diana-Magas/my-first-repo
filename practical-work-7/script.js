function Triangular(a = 1, b = 2, c = 3) {
    return { a, b, c };
}

console.log(Triangular());
console.log(Triangular(4, 5, 6));
console.log(Triangular(7, 8, 9));

function PiMultiplier(num) {
    return function () {
        return Math.PI * num;
    };
}

let PiMultipliedBy2 = PiMultiplier(2);
let PiMultiplierTo3 = PiMultiplier(2 / 3);
let PiDividedBy2 = PiMultiplier(1 / 2);

console.log(PiMultipliedBy2());
console.log(PiMultiplierTo3());
console.log(PiDividedBy2());

function Painter(color) {
    return function (obj) {
        console.log(`Color - ${color} and ${(obj.type === undefined) ? "No 'type' property occurred!" : "type: " + obj.type}`);
    };
}
let PaintBlue = Painter("blue");
let PaintRed = Painter("red");
let PaintYellow = Painter("yellow");

let bmw = {
    maxSpeed: 280,
    type: "Sportcar",
    color: "magenta",
};

let audi = {
    type: "Truck",
    "avg speed": 280,
    "load capacity": 2400,
};

let ford = {
    maxSpeed: 180,
    color: "purple",
    isCar: true,
};

PaintBlue(bmw);
PaintRed(audi);
PaintYellow(ford);
