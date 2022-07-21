import Neko2D from "../../../Neko2D.mjs"
import { Shape } from "./Shape.mjs"

((module) => {
    var module = module || {};
    module.Circle = class Circle extends Shape {
        constructor(radius = 0, x = 0, y = 0) {
            super("circle", {x: x, y: y})
            this.radius = radius;
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

