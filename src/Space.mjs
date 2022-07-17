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
            this.lastTransform = {x: 0, y: 0};
            this.scale = 1;
            this.objects = [];
            this.time = {
                memo: [performance.now()],
                start: performance.now(),
                last: this.time.memo[0],
                current: () => {
                    const currentTime = performance.now();
                    this.time.memo.push(currentTime);
                    this.time.last = this.time.memo[0];
                    return this.time.memo[1];
                }
            }
        };
    }
    return module;
})(Neko2D || {});

export default Neko2D;