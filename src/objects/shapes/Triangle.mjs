import Neko2D from "../../../Neko2D.mjs"
import { Shape } from "./Shape.mjs";

((module) => {
    var module = module || {};
    module.Triangle = class Triangle extends Shape {
        constructor(bottomEdge = 0, rightAngle = 0, leftAngle = 0) {
            this.type = "triangle";
        }
    
        get distanceFromCenterToEachVertex() {
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
    return module;
})(Neko2D || {});

export default Neko2D;
