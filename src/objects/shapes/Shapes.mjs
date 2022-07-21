export const RECTANGLE = "rectangle";
export const CIRCLE = "circle";
export const TRIANGLE = "triangle";

export class Shape {
    constructor(type = RECTANGLE, center = { x: 0, y: 0 }) {
        this.type = type;
        this.center = center;
    }

    distance = (...shapes) => {
        const len = shapes.length;
        const results = shapes.map((shape) => {
            const { x, y } = shape.type ? shape.center : shape;
            return Math.sqrt(
                (this.center.x - x) ** 2 + (this.center.y - y) ** 2
            );
        })
        return !len ? len : (len === 1 ? results[0] : results);
    }
}
