import Neko2D from "../../../Neko2D.mjs"
import { looselyV2 } from "../../../ultis/TypeChecks.mjs";

export class Shape {
    constructor(type = "circle", center = { x: 0, y: 0 }) {
        this.type = type;
        this.center = new module.V2(center.x, center.y);
    }

    get typename() {
        return module.SHAPE;
    }

    static get shapeList() {
        return ["circle", "rectangle", "triangle"];
    }

    outOfRange = (rhs) => {
        return this.maxReach + rhs.maxReach >= this.distance(rhs);
    }

    distance = (...args) => {
        let len = args.length;
        let valid = true;
        const results = args.map((arg) => {
            if (arg.typename === module.SHAPE) {
                return Math.sqrt(
                    (this.center.x - arg.center.x) ** 2 + (this.center.y - arg.center.y) ** 2
                );
            }
            if (looselyV2(arg)) {
                return Math.sqrt(
                    (this.center.x - arg.x) ** 2 + (this.center.y - arg.y) ** 2
                );
            }
            valid = false;
        });
        if (!valid || !len) {
            return;
        }
        return len === 1 ? results[0] : results;
    }
}
