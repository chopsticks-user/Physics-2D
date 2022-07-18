import Neko2D from "../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.Time = class {
        constructor() {
            this.start = Neko2D.timeStart();
            this.lastEvent = this.start;
            this.unit = "ms";
            this.memo = [this.start];
        }
        current = () => {
            const currentTime = Neko2D.timeStart();
            this.memo.push(currentTime);
            this.lastEvent = this.memo[0];
            return currentTime;
        }
    }
    Object.freeze(module.Time);
    return module;
})(Neko2D || {});

export default Neko2D;