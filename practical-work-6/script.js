class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log(`
Визначення:
Квадратом називається прямокутник, у якого всі сторони рівні.

Основні Властивості:
- Усі кути квадрата прямі.
- Діагоналі квадрата рівні.
- Діагоналі квадрата перпендикулярні і точкою перетину діляться пополам.
- Діагоналі квадрата ділять його кути пополам, тобто утворюють зі сторонами квадрата кути 45°.
- Периметр: P(ABCD) = 4 ∙ AВ .`);
    }
    length() {
        let result = this.a * 4;
        console.log(result);
        return result;
    }

    square() {
        let result = this.a ** 2;
        console.log(result);
        return result;
    }

    info() {
        console.log(`- довжини всіх 4 сторін = ${this.a};
- величини всіх 4 кутів = 90°;
- суму довжин сторін = ${this.length()};
- площу ${this.square()}.`);
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    get getA() {
        return this.a;
    }

    get getB() {
        return this.b;
    }

    set setA(a) {
        this.a = a;
    }

    set setB(b) {
        this.b = b;
    }

    static help() {
        console.log(`
Визначення:
Прямокутник- паралелограм, у якого всі кути прямі.

Основні Властивості:
- Прямі кути: У прямокутнику кожний внутрішній кут має рівність 90 градусів, що робить його прямокутником.
- Протилежні сторони прямокутника рівні:AB=CD, BC=AD
- Паралельні сторони: Дві пари протилежних сторін прямокутника є паралельними, що означає, що вони ніколи не перетинаються.
- Діагоналі: Діагоналі прямокутника точкою перетину діляться навпіл.`);
    }
    length() {
        let result = this.a * 2 + this.b * 2;
        console.log(result);
        return result;
    }

    square() {
        let result = this.a * this.b;
        console.log(result);
        return result;
    }

    info() {
        console.log(`- довжини перших 2 сторін = ${this.a}, інших 2 сторін = ${this.b};
- величини всіх 4 кутів = 90°;
- суму довжин сторін = ${this.length()};
- площу ${this.square()}.`);
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log(`
Визначення:
Ромб - це чотирикутник, всі сторони якого мають однакову довжину.

Основні Властивості:
- Це паралелограм, діагоналі якого розділяють внутрішній кут.
- Протилежні кути ромба рівні.
- Діагоналі ромба перетинаються під прямим кутом, точка перетину є серединою кожної діагоналі.
- Сума кутів, прилеглих до однієї сторони ромба, дорівнює 180°.`);
    }
    length() {
        let result = this.a * 4;
        console.log(result);
        return result;
    }

    square() {
        let result = (this.a ** 2) * Math.sin(this.alpha);
        console.log(result);
        return result;
    }

    info() {
        console.log(`- довжини всіх 4 сторін = ${this.a};
- величини 2 тупих кутів = ${this.alpha}, гострих = ${this.beta};
- суму довжин сторін = ${this.length()};
- площу ${this.square()}.`);
    }
}

class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta);
        this.b = b;
    }

    static help() {
        console.log(`
Визначення:
Паралелограм - це чотирикутник, у якого протилежні сторони попарно паралельні (лежать на паралельних прямих).

Основні Властивості:
- В паралелограмі дві сторони рівні та паралельні.
- Протилежні сторони попарно рівні:AB = CD, BC = AD
- Діагоналі точкою перетину діляться навпіл:AO = OC, BO = OD
- Сума кутів: Сума всіх внутрішніх кутів паралелограма дорівнює 360°.
- Бісектриси сісідніх кутів паралелограма завжди перетинаються під прямим кутом (90°).`);
    }
    length() {
        let result = this.a * 2 + this.b * 2;
        console.log(result);
        return result;
    }

    square() {
        let result = this.a * this.b * Math.sin(this.alpha);
        console.log(result);
        return result;
    }

    info() {
        console.log(`- довжини перших 2 сторін = ${this.a}, інших 2 сторін = ${this.b};
- величини 2 тупих кутів = ${this.alpha}, гострих = ${this.beta};
- суму довжин сторін = ${this.length()};
- площу ${this.square()}.`);
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

let square = new Square(8);
let rectangle = new Rectangle(8, 4);
console.log(rectangle.getA);
console.log(rectangle.getB);
console.log(rectangle.setA = 8);
console.log(rectangle.setB = 4);
let rhombus = new Rhombus(4, 125, 55);
let parallelogram = new Parallelogram(4,8, 145, 35);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();