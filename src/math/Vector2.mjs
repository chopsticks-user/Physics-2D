import Neko2D from "../../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.V2 = class {
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
        static fromPoints = (initialP, terminalP) => {
            return new module.V2(terminalP.x - initialP.x, terminalP.y - initialP.y);
        }
        static fromProperties = (magnitude, direction) => {
            const x = module.sqrt(magnitude ** 2 / (module.tan(direction) ** 2 + 1));
            const y = x * module.tan(direction);
            return new module.V2(x, y);
        }
        magnitude = () => module.sqrt(this.x ** 2 + this.y ** 2);
        direction = () => {
            if (this.x === 0) {
                return module.sign(this.y) * module.PI / 2;
            }
            return module.arctan(this.y / this.x);
        };
        unit = () => {
            const mag = this.magnitude();
            return new module.V2(this.x / mag, this.y / mag);
        }
        normal = () => {
            return new module.V2(- this.x, this.y);
        }
        // getCoordinate = () => 
    }
    return module;
})(Neko2D || {});

export default Neko2D;