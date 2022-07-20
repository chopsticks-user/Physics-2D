import Neko2D from "../../Neko2D.mjs"
import {
    SAT,
    RECTANGLE,
    CIRCLE,
    TRIANGLE
} from "../../ultis/Ultis.module.js"

((module) => {
    var module = module || {};
    module.Object = class {
        constructor({
            shape = CIRCLE,
            rx = 0, ry = 0, 
            vx = 0, vy = 0, 
            ax = 0, ay = 0, 
            mass = 0, 

        }) {
            this.shape = shape;
            this.position = {x: rx, y: ry};
            this.velocity = {x: vx, y: vy};
            this.acceleration = {x: ax, y: ay};
            this.mass = mass;
        };

        get boundary() {
            switch (this.shape) {
                case CIRCLE: {

                }
                case TRIANGLE: {

                }
                case RECTANGLE: {
                    return {
                        topLeft: { x: center.x - width / 2, y: center.y + height / 2 },
                        topRight: { x: center.x + width / 2, y: center.y + height / 2 },
                        bottomLeft: { x: center.x - width / 2, y: center.y - height / 2 },
                        bottomRight: { x: center.x + width / 2, y: center.y - height / 2 }
                    }
                }
            }
        }

        intersect = (object) => {
            return SAT(this, object);
        }

        move = (dt = 0, dax = 0, day = 0) => {
            
        }
    }
    return module;
})(Neko2D || {});

export default Neko2D;