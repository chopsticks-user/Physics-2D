import Neko2D from "../../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.sin = Math.sin;
    module.arcsin = Math.asin;
    module.cos = Math.cos;
    module.arccos = Math.acos;
    module.tan = Math.tan;
    module.arctan = Math.atan;
    module.sqrt = Math.sqrt;
    module.sign = Math.sign;
    return module;
})(Neko2D || {});

export default Neko2D;