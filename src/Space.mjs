import Neko2D from "../Neko2D.mjs"
// import { performance } from "perf-hooks"

const MAX_WIDTH = 3141622;
const MAX_HEIGHT = 3141622;

((module) => {
    var module = module || {};
    module.Space = class {
        constructor(oX = 0, oY = 0) {
            this.view = {
                x: oX, y: oY,
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
            this.lastTransform = { x: 0, y: 0 };
            this.scale = 1;
            this.objects = [];
            this.time = new Neko2D.Time();
        };
        static get MAX_WIDTH() { return MAX_WIDTH };
        static get MAX_HEIGHT() { return MAX_HEIGHT };
    }
    Object.freeze(module.Space);
    return module;
})(Neko2D || {});

export default Neko2D;