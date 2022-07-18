import Neko2D from "../../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.V2 = class {
        constructor(x = 0, y = 0) {
            try {
                if (typeof x !== "number" || typeof y !== "number") {
                    throw new TypeError("From <Neko2D.V2.constructor>, both x and y must be numbers");
                }
                this.x = x;
                this.y = y;
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
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
                if (!initialP || !terminalP) {
                    throw new ReferenceError("From <Neko2D.V2.fromPoints>, the initial point is undefined.");
                }
                if (!terminalP) {
                    throw new ReferenceError("From <Neko2D.V2.fromPoints>, the terminal point is undefined.");
                }
                if (typeof initialP.x !== "number" || 
                    typeof initialP.y !== "number" ||
                    typeof terminalP.x !== "number" ||
                    typeof terminalP.y !== "number"
                ) {
                    throw new TypeError(
                        "From <Neko2D.V2.fromPoints>, each point must have type of either {x: number, y: number} or a Neko2D.V2 object."
                    );
                }
                return new module.V2(terminalP.x - initialP.x, terminalP.y - initialP.y);
            } catch (e) {
                console.error (`${e.name}: ${e.message}`);
            }
        }

        static fromProperties = (magnitude, direction) => {
            try {
                if (!magnitude) {
                    throw new ReferenceError("From <Neko2D.V2.fromProperties>, magnitude is undefined.");
                }
                if (!direction) {
                    throw new ReferenceError("From <Neko2D.V2.fromProperties>, direction is undefined.");
                }
                if (typeof magnitude !== "number" || typeof direction !== "number") {
                    throw new TypeError("From <Neko2D.V2.fromProperties>, both magnitude and direction must be numbers.");
                }
                const x = module.sqrt(magnitude ** 2 / (module.tan(direction) ** 2 + 1));
                const y = x * module.tan(direction);
                return new module.V2(x, y);
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
            }
        }

        static sum = (...vectors) => {
            try {
                let [x, y] = [0, 0];
                vectors.forEach((vector) => {
                    if (!vector) {
                        throw new ReferenceError("From <Neko2D.V2.sum>, at least one vector is undefined.");
                    }
                    if (typeof vector.x !== "number" || typeof vector.y !== "number") {
                        throw new TypeError(
                            "From <Neko2D.V2.sum>, each vector must have type of either {x: number, y: number} or a Neko2D.V2 object."
                        );
                    }
                    x += vector.x;
                    y += vector.y;
                });
                return new module.V2(x, y);
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
            }
        }

        static scalarProduct = (scalar, ...vectors) => {
            try {
                const len = vectors.length;
                if (!scalar) {
                    throw new ReferenceError("From <Neko2D.V2.scalarProduct>, undefined scalar.");
                }
                if (typeof scalar !== 'number') {
                    throw new TypeError("From <Neko2D.V2.scalarProduct>, scalar must be a number.");
                }
                if (len === 0) {
                    throw new Error("<Neko2D.V2.scalarProduct> requires at least one scalar and one vector.")
                }
                if (len === 1) {
                    return new module.V2(scalar * vectors[0].x, scalar * vectors[0].y);
                }
                const results = [];
                vectors.forEach((vector) => {
                    if (!vector) {
                        throw new ReferenceError("From <Neko2D.V2.scalarProduct>, at least one vector is undefined.");
                    }
                    if (typeof vector.x !== "number" || typeof vector.y !== "number") {
                        throw new TypeError(
                            "From <Neko2D.V2.scalarProduct>, each vector must have type of either {x: number, y: number} or a Neko2D.V2 object."
                        );
                    }
                    results.push(new module.V2(scalar * vector.x, scalar * vector.y));
                })
                return results;
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
            }
        }

        static dotProduct = (rVector, ...lVectors) => {
            try {
                const len = lVectors.length;
                if (!rVector) {
                    throw new ReferenceError("From <Neko2D.V2.dotProduct>, the first vector is undefined.");
                }
                if (len === 0) {
                    throw new Error("<Neko2D.V2.dotProduct> requires at least two arguments.");
                }
                if (len === 1) {
                    return rVector.x * lVectors[0].x + rVector.y * lVectors[0].y;
                }
                const results = [];
                lVectors.forEach((lVector) => {
                    if (typeof lVector.x !== "number" || typeof lVector.y !== "number") {
                        throw new TypeError(
                            "From <Neko2D.V2.dotProduct>, each vector must have type of either {x: number, y: number} or a Neko2D.V2 object."
                        );
                    }
                    results.push(rVector.x * lVector.x + rVector.y * lVector.y);
                })
                return results;
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
            }
        }

        static crossProduct = (...vectors) => {
            try {
                const len = vectors.length;
                if (len <= 1) {
                    throw new Error("<Neko2D.V2.crossProduct> requires at least two vectors.");
                }
                if (len > 3) {
                    throw new Error("From <Neko2D.V2.crossProduct>, cross product among more than three vectors is currently not available.");
                }
                vectors.forEach((vector) => {
                    if (!vector) {
                        throw new ReferenceError("From <Neko2D.V2.crossProduct>, at least one vector is undefined.");
                    }
                    if (typeof vector.x !== "number" || typeof vector.y !== "number") {
                        throw new TypeError(
                            "From <Neko2D.V2.crossProduct>, each vector must have type of either {x: number, y: number} or a Neko2D.V2 object."
                        );
                    }
                });
                if (len === 2) {
                    return vectors[0].x * vectors[1].y - vectors[0].y * vectors[1].x;
                }
                const dotProducts = this.dotProduct(vectors[2], vectors[0], vectors[1]);
                return this.sum(
                    this.scalarProduct(dotProducts[0], vectors[1]), 
                    this.scalarProduct(-dotProducts[1], vectors[0])
                );
            } catch (e) {
                console.error(`${e.name}: ${e.message}`);
            }
        }
    }
    Object.freeze(module.V2);
    return module;
})(Neko2D || {});

export default Neko2D;