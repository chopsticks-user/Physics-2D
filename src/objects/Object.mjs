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
                    throw new TypeError("From <Neko2D.Object.constructor>, shape object is not recognized by Neko2D.");
                }
                if (properties.typename !== "NekoProperties") {
                    throw new TypeError("From <Neko2D.Object.constructor>, shape object is not recognized by Neko2D.");
                }
            } catch (e) {
                console.error(`${e.stack}\n`);
                shape = new Neko2D.Circle();
                properties = new Neko2D.Properties();
            } finally {
                this.shape = shape;
                this.properties = properties;
                this.time = new Neko2D.Time(); 
            }
        };

        get typename() {
            return Neko2D.OBJECT;
        }

        get vertices() {
            return this.shape.vertices;
        }

        intersect = (object) => {
            try {
                if (object.typename !== Neko2D.OBJECT) {
                    throw new TypeError(
                        "From <Neko2D.Object.intersect>, object is not recognized by Neko2D."
                    );
                }
                return this.shape.intersect(object.shape);
            } catch (e) {
                console.error(`${e.stack}\n`);
            }
            return false;
        }

        move = (dt = 0, dax = 0, day = 0) => {

        }
    }
    return module;
})(Neko2D || {});

export default Neko2D;