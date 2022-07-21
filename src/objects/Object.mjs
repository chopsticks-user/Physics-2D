import Neko2D from "../../Neko2D.mjs"
import { SAT } from "../../ultis/Ultis.module.js"
import { CIRCLE } from "../../ultis/shapes/Shapes.module.js"

((module) => {
    var module = module || {};
    module.Object = class {
        constructor({
            rx = 0, ry = 0,
            vx = 0, vy = 0,
            ax = 0, ay = 0,
            shape = CIRCLE,
            mass = 0,

        }) {
            this.position = { x: rx, y: ry };
            this.velocity = { x: vx, y: vy };
            this.acceleration = { x: ax, y: ay };
            this.shape = shape;
            this.mass = mass;
        };

        intersect = (object) => {
            return SAT(this, object);
        }

        move = (dt = 0, dax = 0, day = 0) => {

        }
    }
    return module;
})(Neko2D || {});

export default Neko2D;