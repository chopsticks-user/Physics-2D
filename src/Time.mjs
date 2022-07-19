import Neko2D from "../Neko2D.mjs"
import { timeStart } from "../ultis/Ultis.module.js"

((module) => {
    var module = module || {};
    module.Time = class {
        constructor() {
            this.start = timeStart();
            this.lastEvent = this.start;
            this.unit = "ms";
            this.memo = [this.start];
        }
        get current() {
            const currentTime = timeStart();
            this.memo.push(currentTime);
            this.lastEvent = this.memo[0];
            return currentTime;
        }
    }
    Object.freeze(module.Time);
    return module;
})(Neko2D || {});

export default Neko2D;