export default class Operations {
    a :number;
    b :number;

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.b * this.b;
    }

    divide() {
        return this.a / this.b;
    }
}