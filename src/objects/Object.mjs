import Neko2D from "../../Neko2D.mjs"
import { SAT } from "../collisions/SAT.mjs"

((module) => {
    var module = module || {};
    module.Object = class {
        constructor(shape, properties) {
            try {
                if (!shape) {
                    shape = new Neko2D.Circle();
                }
                if (!properties) {
                    properties = new Neko2D.Properties();
                }
                if (shape.typename !== "NekoShape") {
                    shape = new Neko2D.Circle();
                    throw new Error("From <Neko2D.Object.constructor>, shape object is not recognized by Neko2D.");
                }
                if (properties.typename !== "NekoProperties") {
                    properties = new Neko2D.Properties();
                    throw new Error("From <Neko2D.Object.constructor>, shape object is not recognized by Neko2D.");
                }
            } catch (e) {
                console.error(`${e.stack}\n`);
            } finally {
                this.shape = shape;
                this.properties = properties;
                this.time = new Neko2D.Time();
            }
        };

        get typename() {
            return Neko2D.OBJECT;
        }

        intersect = (object) => {
            try {
                if (object.typename !== Neko2D.OBJECT) {
                    throw new TypeError(
                        "From <Neko2D.Object.intersect>, object is not recognized by Neko2D."
                    );
                }
                return SAT(this, object);
            } catch (e) {
                console.error(`${e.stack}\n`);
            }
        }

        move = (dt = 0, dax = 0, day = 0) => {

        }
    }
    return module;
})(Neko2D || {});

export default Neko2D;