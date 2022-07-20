import { Shape, CIRCLE } from "./Shapes.mjs";

export class Circle extends Shape {
    constructor(radius = 0) {
        this.type = CIRCLE;
        this.radius = radius;
    }

    get distanceFromCenterToEachVertex() {
        return this.radius;
    }

    get maxReach() {
        return this.radius;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }

    get circumference() {
        return Math.PI * this.radius * 2;
    }
}