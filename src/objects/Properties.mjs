import Neko2D from "../../Neko2D.mjs"
import { looselyV2, strictlyNumber } from "../../ultis/Ultis.module.js"

((module) => {
    var module = module || {};
    module.Properties = class {
        constructor(
            position = { x: 0, y: 0 },
            velocity = { x: 0, y: 0 },
            acceleration = { x: 0, y: 0 },
            mass = 1
        ) {
            try {
                if (!looselyV2(position, velocity, acceleration)) {
                    throw new TypeError(
                        "From <Neko2D.Properties.constructor>, position, velocity and acceleration \
                        must have type of either {x: number, y: number} or a valid Neko2D.V2 object."
                    );
                }
                if (!strictlyNumber(mass)) {
                    throw new TypeError(
                        "From <Neko2D.Properties.constructor>, mass must be a number."
                    );
                }
            } catch (e) {
                console.error(`${e.stack}\n`);
            } finally {
                this.position = new Neko2D.V2(position.x, position.y);
                this.velocity = new Neko2D.V2(velocity.x, velocity.y);
                this.acceleration = new Neko2D.V2(acceleration.x, acceleration.y);
                this.mass = mass;
            }
        }

        get typename() {
            return Neko2D.PROPERTIES;
        }
    }
    return module;
})(Neko2D || {});

export default Neko2D;