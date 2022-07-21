import Neko2D from "../../../Neko2D.mjs"
import { Shape } from "./Shape.mjs"

((module) => {
    var module = module || {};
    module.Circle = class Circle extends Shape {
        constructor(radius = 0, center = { x: 0, y: 0 }) {
            super("circle", center);
            this.radius = radius;
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

