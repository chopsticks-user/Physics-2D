import Neko2D from "../../../Neko2D.mjs"
import { looselyV2 } from "../../../ultis/TypeChecks.mjs";

export class Shape {
    constructor(type = "circle", center = { x: 0, y: 0 }) {
        try {
            const list = Shape.shapeList;
            if (!list.find((shapeType) => shapeType === type)) {
                type = "circle";
                throw new Error(`Shape <${type}> not found.`);
            }
        } catch (e) {
            console.error(`${e.stack}\n`);
        } finally {
            this.type = type;
            this.center = new Neko2D.V2(center.x, center.y);
            this.rotate = 0;
        }
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
        try {
            let len = args.length;
            const results = args.map((arg) => {
                if (arg.typename === Neko2D.SHAPE) {
                    return Math.sqrt(
                        (this.center.x - arg.center.x) ** 2 + (this.center.y - arg.center.y) ** 2
                    );
                }
                if (looselyV2(arg)) {
                    return Math.sqrt(
                        (this.center.x - arg.x) ** 2 + (this.center.y - arg.y) ** 2
                    );
                }
                throw new TypeError(
                    "each argument must be a shape, an object type of {x: number, y: number} or a valid Neko2D.V2 object."
                );
            });
            return !len ? len : (len === 1 ? results[0] : results);
        } catch (e) {
            console.error(`${e.stack}\n`);
        }
    }
}
