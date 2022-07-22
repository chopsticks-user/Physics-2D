import Neko2D from "../../Neko2D.mjs"
// import { looselyV2, strictlyNumber } from "../../ultis/Ultis.module.js"

((module) => {
    var module = module || {};
    module.Properties = class {
        constructor({
            position = { x: 0, y: 0 },
            velocity = { x: 0, y: 0 },
            acceleration = { x: 0, y: 0 },
            mass = 1,
            friction = 0
        }) {
            this.position = new Neko2D.V2(position.x, position.y);
            this.velocity = new Neko2D.V2(velocity.x, velocity.y);
            this.acceleration = new Neko2D.V2(acceleration.x, acceleration.y);
            this.rotation = {
                angle: 0,
                vector: new Neko2D.V2(1, 0)
            }
            this.mass = mass;
            this.friction = friction;
        }

        get typename() {
            return Neko2D.PROPERTIES;
        }

        get momentum() { }

        get kineticEnergy() { }

        get potentialEnergy() { }

        get totalEnergy() { }

    }
    return module;
})(Neko2D || {});

// export default Neko2D;