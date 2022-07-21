import { Shape, TRIANGLE } from "./Shapes.mjs";

export class Triangle extends Shape {
    constructor(bottomEdge = 0, rightAngle = 0, leftAngle = 0) {
        this.type = TRIANGLE;
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