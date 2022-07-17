import Neko2D from "../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.toRadians = (angleInDegrees) => {
        return Math.PI * angleInDegrees / 180;
    }
    module.toDegrees = (angleInRadians) => {
        return 180 * angleInRadians / Math.PI;
    }
    return module;
})(Neko2D || {});

export default Neko2D;