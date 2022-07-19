import Neko2D from "../Neko2D.mjs"
import { strictlyNumber, looselyV2 } from "../ultis/Ultis.module.js"

((module) => {
    var module = module || {};
    const MAX_WIDTH = 1048576;
    const MAX_HEIGHT = 1048576;
    module.Space = class {
        constructor(width = 0, height = 0, center = {x: 0, y: 0}) {
            try {
                if (!strictlyNumber(width, height, center.x, center.y)) {
                    throw new TypeError("From <Neko2D.Space.constructor>, parameters must be numbers.");
                }
            } catch (e) {
                console.error(`${e.stack}\n`);
                width = height = center.x = center.y = 0;
            } finally {
                this.dimension = {
                    width: Neko2D.min(width, MAX_WIDTH),
                    height: Neko2D.min(height, MAX_HEIGHT)
                }
                this.view = {
                    x: center.x, y: center.y,
                    lastTransform: {x: 0, y: 0},
                    scale: 1,
                    transform: (tX, tY) => {
                        this.lastTransform.x = tX * this.scale;
                        this.lastTransform.y = tY * this.scale;
                        this.view.x += this.lastTransform.x;
                        this.view.y += this.lastTransform.y;
                    },
                    moveTo: (x, y) => {
                        this.view.x = x;
                        this.view.y = y;
                    },
                    setScale: (newScale) => {
                        this.view.scale = newScale;
                    }
                };
                this.objects = [];
                this.time = new Neko2D.Time();
            }
        };
    }
    Object.freeze(module.Space);
    return module;
})(Neko2D || {});

export default Neko2D;