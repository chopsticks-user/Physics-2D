import Neko2D from "../../../Neko2D.mjs"
import { Shape } from "./Shape.mjs";

((module) => {
    var module = module || {};
    module.Rectangle = class Rectangle extends Shape {
        constructor(x = 0, y = 0, width = 0, height = 0) {
            super("rectangle", { x: x, y: y });
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
    
        get vertices() {
            return [
                { x: center.x - width / 2, y: center.y + height / 2 },
                { x: center.x + width / 2, y: center.y + height / 2 },
                { x: center.x - width / 2, y: center.y - height / 2 },
                { x: center.x + width / 2, y: center.y - height / 2 }
            ];
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

    return module;
})(Neko2D || {});

export default Neko2D;
