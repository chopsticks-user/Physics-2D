import { Shape, RECTANGLE } from "./Shapes.mjs";

export class Rectangle extends Shape {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.type = RECTANGLE;
        this.center = { x: x, y: y };
        this.width = width;
        this.height = height;
    }

    get topLeft() {
        return { x: center.x - width / 2, y: center.y + height / 2 };
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

    get boundary() {
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