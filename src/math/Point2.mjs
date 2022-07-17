import Neko2D from "../../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.P2 = class {
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
    }
    return module;
})(Neko2D || {});

export default Neko2D;