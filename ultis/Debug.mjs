import Neko2D from "../Neko2D.mjs"
// import { performance } from "perf-hooks"

((module) => {
    var module = module || {};
    module.timeStart = () => performance.now();
    module.timeEslapsed = (timeStart) => performance.now() - timeStart;
    return module;
})(Neko2D || {});

export default Neko2D;