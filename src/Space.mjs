import Neko2D from "../Neko2D.mjs"
import { 
    strictlyNumber, 
    looselyV2,
    SPACE_VIEW_MAX_WIDTH,
    SPACE_VIEW_MAX_HEIGHT,
    SAT
} from "../ultis/Ultis.module.js"

((module) => {
    var module = module || {};
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
                    width: Neko2D.min(width, SPACE_VIEW_MAX_WIDTH),
                    height: Neko2D.min(height, SPACE_VIEW_MAX_HEIGHT)
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
                this.time = new Neko2D.Time();
                this.objects = [];
                this.collision = SAT;
            }
            // Object.freeze(this);
        };
    }
    return module;
})(Neko2D || {});

export default Neko2D;