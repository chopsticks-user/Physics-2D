import Neko2D from "../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.curryFunction = (targetFunction, ...args) => {
        return () => targetFunction(...args);
    };
    return module;
})(Neko2D || {});

export default Neko2D;