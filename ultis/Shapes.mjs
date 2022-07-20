import {
    RECTANGLE,
    CIRCLE,
    TRIANGLE
} from "./Ultis.module.js"

export class Rectangle {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.type = RECTANGLE;
        this.center = { x: x, y: y };
        this.width = width;
        this.height = height;
    }

    get topLeft() {
        return {x: center.x - width / 2, y: center.y + height / 2};
    }

    get topRight() {
        return { x: center.x + width / 2, y: center.y + height / 2 };
    }

    get bottomLeft() {
        return { x: center.x - width / 2, y: center.y - height / 2 };
    }

    get bottomRight() {
        return { x: center.x + width / 2, y: center.y - height / 2 };
    }

    get boundary () {
        return {
            topLeft: { x: center.x - width / 2, y: center.y + height / 2 },
            topRight: { x: center.x + width / 2, y: center.y + height / 2 },
            bottomLeft: { x: center.x - width / 2, y: center.y - height / 2 },
            bottomRight: { x: center.x + width / 2, y: center.y - height / 2 }
        };
    }

    get maxReach() {
        return Math.max(this.width, this.height);
    }

    get area() {
        return this.width * this.heigth;
    }

    get perimeter() {
        return (this.width + this.heigth) * 2;
    }
}

export class Circle {
    constructor(radius = 0) {
        this.type = CIRCLE;
        this.radius = radius;
    }

    get distanceFromCenterToEachVertex () {
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

export class Triangle {
    constructor(bottomEdge = 0, rightAngle = 0, leftAngle = 0) {
        this.bottomEdge
    }

    get distanceFromCenterToEachVertex () {
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