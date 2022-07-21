import { Shape, CIRCLE } from "./Shapes.mjs";

export class Circle extends Shape {
    constructor(radius = 0, x = 0, y = 0) {
        super(CIRCLE, {x: x, y: y})
        this.radius = radius;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }

    get circumference() {
        return Math.PI * this.radius * 2;
    }
}