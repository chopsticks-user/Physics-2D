import Neko2D from "../../Neko2D.mjs"
import { strictlyNumber, validV2 } from "../../ultis/TypeChecks.mjs"

((module) => {
    var module = module || {};
    module.V2 = class {
        constructor(x = 0, y = 0) {
            try {
                if (!strictlyNumber(x, y)) {
                    throw new TypeError("From <Neko2D.V2.constructor>, both x and y must be numbers.");
                }
                this.x = x;
                this.y = y;
            } catch (e) {
                console.error(`${e.stack}\n`);
            }
        }

        get magnitude() { return module.sqrt(this.x ** 2 + this.y ** 2) }

        get direction() {
            if (this.x === 0) {
                return module.sign(this.y) * module.PI / 2;
            }
            return module.arctan(this.y / this.x);
        }

        get unit() {
            const mag = this.magnitude;
            return new module.V2(this.x / mag, this.y / mag);
        }

        get normal() {
            return new module.V2(this.x, this.y);
        }

        get opposite() { return new module.V2(-this.x, -this.y) }

        static fromPoints = (initialP, terminalP) => {
            try {
                if (!validV2(initialP, terminalP)) {
                    throw new TypeError(
                        "From <Neko2D.V2.fromPoints>, each point must have type of either {x: number, y: number} or a valid Neko2D.V2 object."
                    );
                }
                return new module.V2(terminalP.x - initialP.x, terminalP.y - initialP.y);
            } catch (e) {
                console.error (`${e.stack}\n`);
            }
        }

        static fromProperties = (magnitude, direction) => {
            try {
                if (!strictlyNumber(magnitude, direction)) {
                    throw new TypeError("From <Neko2D.V2.fromProperties>, both magnitude and direction must be numbers.");
                }
                const x = module.sqrt(magnitude ** 2 / (module.tan(direction) ** 2 + 1));
                const y = x * module.tan(direction);
                return new module.V2(x, y);
            } catch (e) {
                console.error(`${e.stack}\n`);
            }
        }

        static sum = (...vectors) => {
            try {
                let [x, y] = [0, 0];
                vectors.forEach((vector) => {
                    if (!validV2(vector)) {
                        throw new TypeError(
                            "From <Neko2D.V2.sum>, each vector must have type of either {x: number, y: number} or a Neko2D.V2 object."
                        );
                    }
                    x += vector.x;
                    y += vector.y;
                });
                return new module.V2(x, y);
            } catch (e) {
                console.error(`${e.stack}\n`);
            }
        }

        static scalarProduct = (scalar, ...vectors) => {
            try {
                const len = vectors.length;
                if (!strictlyNumber(scalar)) {
                    throw new TypeError("From <Neko2D.V2.scalarProduct>, scalar must be a number.");
                }
                if (len === 0) {
                    throw new SyntaxError("<Neko2D.V2.scalarProduct> requires at least one scalar and one vector.");
                }
                if (len === 1) {
                    return new module.V2(scalar * vectors[0].x, scalar * vectors[0].y);
                }
                const results = [];
                vectors.forEach((vector) => {
                    if (!validV2(vector)) {
                        throw new TypeError(
                            "From <Neko2D.V2.scalarProduct>, each vector must have type of either {x: number, y: number} or a valid Neko2D.V2 object."
                        );
                    }
                    results.push(new module.V2(scalar * vector.x, scalar * vector.y));
                })
                return results;
            } catch (e) {
                console.error(`${e.stack}\n`);
            }
        }

        static dotProduct = (rVector, ...lVectors) => {
            try {
                const len = lVectors.length;
                if (len === 0) {
                    throw new SyntaxError("<Neko2D.V2.dotProduct> requires at least two arguments.");
                }
                if (len === 1) {
                    return rVector.x * lVectors[0].x + rVector.y * lVectors[0].y;
                }
                const results = [];
                lVectors.forEach((lVector) => {
                    if (!validV2(lVector)) {
                        throw new TypeError(
                            "From <Neko2D.V2.dotProduct>, each vector must have type of either {x: number, y: number} or a valid Neko2D.V2 object."
                        );
                    }
                    results.push(rVector.x * lVector.x + rVector.y * lVector.y);
                })
                return results;
            } catch (e) {
                console.error(`${e.stack}\n`);
            }
        }

        static crossProduct = (...vectors) => {
            try {
                const len = vectors.length;
                if (len <= 1) {
                    throw new SyntaxError("<Neko2D.V2.crossProduct> requires at least two vectors.");
                }
                if (len > 3) {
                    throw new Error("From <Neko2D.V2.crossProduct>, cross product among more than three vectors is currently not available.");
                }
                if (!validV2(...vectors)) {
                    throw new TypeError(
                        "From <Neko2D.V2.crossProduct>, each vector must have type of either {x: number, y: number} or a Neko2D.V2 object."
                    );
                };
                if (len === 2) {
                    return vectors[0].x * vectors[1].y - vectors[0].y * vectors[1].x;
                }
                const dotProducts = this.dotProduct(vectors[2], vectors[0], vectors[1]);
                return this.sum(
                    this.scalarProduct(dotProducts[0], vectors[1]), 
                    this.scalarProduct(-dotProducts[1], vectors[0])
                );
            } catch (e) {
                console.error(`${e.stack}\n`);
            }
        }
    }
    Object.freeze(module.V2);
    return module;
})(Neko2D || {});

export default Neko2D;