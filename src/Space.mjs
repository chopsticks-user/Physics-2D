import Neko2D from "../Neko2D.mjs"
// import { performance } from "perf-hooks"

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
        };
        objects = [];
        time = new Neko2D.Time();
        static MAX_WIDTH = 1048576;
        static MAX_HEIGHT = 1048576;
    }
    Object.freeze(module.Space);
    return module;
})(Neko2D || {});

export default Neko2D;