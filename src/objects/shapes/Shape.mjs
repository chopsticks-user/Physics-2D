import Neko2D from "../../../Neko2D.mjs"

export class Shape {
    constructor(type = "circle", center = { x: 0, y: 0 }) {
        this.type = type;
        this.center = new Neko2D.V2(center.x, center.y);
    }

    get typename() {
        return Neko2D.SHAPE;
    }

    static get shapeList() {
        return ["circle", "rectangle", "triangle"];
    }

    outOfRange = (rhs) => {
        return this.maxReach + rhs.maxReach >= this.distance(rhs);
    }

    distance = (...args) => {
        let len = args.length;
        if (!len) {
            // console.warn("From Shape.distance, no argument.");
            return;
        }
        const results = args.map((arg) => {
            if (arg.typename === Neko2D.SHAPE) {
                return Math.sqrt(
                    (this.center.x - arg.center.x) ** 2 + (this.center.y - arg.center.y) ** 2
                );
            }
            return Math.sqrt(
                (this.center.x - arg.x) ** 2 + (this.center.y - arg.y) ** 2
            );
        });
        return len === 1 ? results[0] : results;
    }
}
