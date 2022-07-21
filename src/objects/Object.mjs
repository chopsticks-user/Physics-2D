import Neko2D from "../../Neko2D.mjs"
import { SAT } from "../collisions/SAT.mjs"

((module) => {
    var module = module || {};
    module.Object = class {
        constructor(shape, properties) {
            try {
                if (shape) {
                    if(shape.typename !== "NekoShape") {
                        throw new Error("From <Neko2D.Object.constructor>, shape object is not recognized by Neko2D.");
                    }
                    if(properties.typename !== "NekoProperties") {
                        throw new Error("From <Neko2D.Object.constructor>, shape object is not recognized by Neko2D.");
                    }
                }
            } catch (e) {

            }
            if (this.shape)
            this.shape = new Neko2D.Circle;
        };

        get typename() {
            return "NekoObject";
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