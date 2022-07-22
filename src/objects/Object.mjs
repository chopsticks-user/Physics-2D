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
            // Basic
            this.properties = properties;
            this.shape = shape;
            this.shape.center = properties.position;
            this.rotation = {
                angle: 0,
                vector: new Neko2D.V2(1, 0)
            }

            // Physics
            this.forces = [];
            this.fields = [];

            // Visual
            this.tangible = true;
            this.pinned = false;
            this.attached = false;

            this.time = new Neko2D.Time();
        };

        get typename() {
            return module.OBJECT;
        }

        get vertices() {
            // according to rotational angle
            return this.shape.vertices;
        }

        get collisionData() {
            return this.shape.collisionData;
        }

        rotate = (angle) => {
            this.rotation.angle += angle;
            this.rotation.vector.rotate(angle);
        }

        intersect = (object) => {
            if (!object || object.typename !== module.OBJECT) {
                return false;
            }
            return this.shape.intersect(object.shape);
        }

        move = (dt = 0, dax = 0, day = 0) => {
            // 
            if (this.shape.type === "circle") {
                // rotate
            }
            this.shape.center = this.properties.position;
        }
    }
    return module;
})(Neko2D || {});
