import { Shape, RECTANGLE } from "./Shapes.mjs";

export class Rectangle extends Shape {
    constructor(x = 0, y = 0, width = 0, height = 0) {
        super(RECTANGLE, { x: x, y: y });
        this.parameters = { 
            width: width,
            height: height
        };
    }

    contain = (otherObject) => {
        if (this.center.y - this.parameters.height > otherObject.topLeft.y) {
            return false;
        }
        if (this.center.y + this.parameters.height < otherObject.bottomRight.y) {
            return false;
        }
        if (this.center.x - this.parameters.width > otherObject.bottomRight.x) {
            return false;
        }
        if (this.center.x + this.parameters.width < otherObject.topLeft.x) {
            return false;
        }
        return true;
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