export const RECTANGLE = "rectangle";
export const CIRCLE = "circle";
export const TRIANGLE = "triangle";

export class Shape {
    static distance = (target, ...shapes) => {
        const len = shapes.length;
        const results = shapes.map((shape) => {
            return Math.sqrt(
                (target.center.x - shape.center.x) ** 2 + (target.center.y - shape.center.y) ** 2
            );
        })
        return !len ? len : (len === 1 ? results[0] : results);
    }
}
