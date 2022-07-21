import Neko2D from "../../../Neko2D.mjs"
import { Shape } from "./Shape.mjs"
import { strictlyNumber, looselyV2 } from "../../../ultis/TypeChecks.mjs"

((module) => {
    var module = module || {};
    module.Circle = class Circle extends Shape {
        constructor(radius = 0, center = { x: 0, y: 0 }) {
            try {
                if (!strictlyNumber(radius)) {
                    throw new TypeError(
                        "From <Neko2D.Circle.constructor>, circle radius must be a number."
                    );
                }
                if (!looselyV2(center)) {
                    throw new TypeError(
                        "From <Neko2D.Circle.constructor>, center must have type of either \
                        {x: number, y: number} or a valid Neko2D.V2 object."
                    );
                }
            } catch (e) {
                console.error(`${e.stack}\n`);
                radius = 0;
                center = { x: 0, y: 0 };
            } finally {
                super("circle", center);
                this.radius = radius;
            }
        }

        get maxReach () {
            return this.radius;
        }
    
        get area() {
            return Math.PI * (this.radius ** 2);
        }
    
        get circumference() {
            return Math.PI * this.radius * 2;
        }

        intersect = (rhs) => {
            if (!this.outOfRange(rhs)) {
                return false;
            }
            if (rhs.type === "circle") {
                return true;
            }
            let minDistance = Infinity;
            let nVertices = rhs.vertices.length;
            while (nVertices--) {
                minDistance = Math.min(
                    minDistance, this.distance(rhs.vertices[nVertices])
                );
                if (minDistance <= this.radius) {
                    return true;
                }
            }
            return false;
        }
    }
    return module;
})(Neko2D || {});

export default Neko2D;

