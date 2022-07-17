import Neko2D from "../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.formatCoord3DPs = (point) => {
        return {x: formatDPs(point.x, 3), y: formatDPs(point.y, 3)};
    };
    module.formatDPs = (value, nDPs) => {
        return value.toFixed(nDPs);
    }
    return module;
})(Neko2D || {});

export default Neko2D;