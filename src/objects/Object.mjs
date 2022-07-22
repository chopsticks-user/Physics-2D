import Neko2D from "../../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.Object = class {
        constructor(shape, properties) {
            if (!shape) {
                shape = new Neko2D.Circle();
            }
            if (!properties) {
                properties = new Neko2D.Properties();
            }
            if (shape.typename !== module.SHAPE || properties.typename !== module.PROPERTIES) {
                console.warn("From Neko2D.Object.constructor, a default object was created.");
                shape = new Neko2D.Circle();
                properties = new Neko2D.Properties();
            }
            this.properties = properties;
            this.shape = shape;
            this.shape.center = properties.position;
            this.time = new Neko2D.Time();
        };

        get typename() {
            return module.OBJECT;
        }

        get vertices() {
            return this.shape.vertices;
        }

        get collisionData() {
            return this.shape.collisionData;
        }

        intersect = (object) => {
            if (!object || object.typename !== module.OBJECT) {
                return false;
            }
            return this.shape.intersect(object.shape);
        }

        move = (dt = 0, dax = 0, day = 0) => {
            //
            this.shape.center = this.properties.position;
        }
    }
    return module;
})(Neko2D || {});

export default Neko2D;