import Neko2D from "../../Neko2D.mjs"
import { looselyV2, strictlyNumber } from "../../ultis/Ultis.module.js"

((module) => {
    var module = module || {};
    module.Properties = class {
        constructor(position, velocity, acceleration, mass = 1) {
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
                this.position = new Neko2D.V2(position.x, position.y);
                this.velocity = new Neko2D.V2(velocity.x, velocity.y);
                this.acceleration = new Neko2D.V2(acceleration.x, acceleration.y);
                this.mass = mass;
            } catch (e) {
                console.error(`${e.stack}\n`);
            }
        }
        set position(newPosition) {
            if (looselyV2(newPosition)) {
                this.position.x = newPosition.x;
                this.position.y = newPosition.y;
            }
        }
        get position() {
            return this.position.coord;
        }
        set velocity(newVelocity) {
            if (looselyV2(newVelocity)) {
                this.velocity.x = newVelocity.x;
                this.velocity.y = newVelocity.y;
            }
        }
        get velocity() {
            return this.velocity.coord;
        }
        set acceleration(newAcceleration) {
            if (looselyV2(newAcceleration)) {
                this.acceleration.x = newAcceleration.x;
                this.acceleration.y = newAcceleration.y;
            }
        }
        get acceleration() {
            return this.acceleration.coord;
        }
    }
    return module;
})(Neko2D || {});

export default Neko2D;