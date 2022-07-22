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
            this.forces = [];
            this.fields = [];
            this.attachedBy = [];
            this.tangible = true;
            this.pinned = false;
            this.attached = false;
            this.time = new Neko2D.Time();
        };

        get typename() {
            return module.OBJECT;
        }

        get vertices() {
            return this.shape.vertices;
            // according to rotational angle
        }

        get collisionData() {
            return this.shape.collisionData;
        }

        rotate = (angle) => {
            this.properties.rotation.angle += angle;
            this.properties.rotation.vector.rotate(angle);
        }

        intersect = (object) => {
            if (!object || object.typename !== module.OBJECT) {
                return false;
            }
            return this.shape.intersect(object.shape);
        }

        translate = (dt = 0, dax = 0, day = 0) => {
            // 
            if (this.shape.type === "circle") {
                // rotate
            }
            this.shape.center = this.properties.position;
        }
    }
    return module;
})(Neko2D || {});
