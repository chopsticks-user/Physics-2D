import Neko2D from "../Neko2D.mjs"

((module) => {
    var module = module || {};
    module.VECTOR2 = "NekoV2";
    module.SHAPE = "NekoShape";
    module.PROPERTIES = "NekoProperties";
    module.OBJECT = "NekoObject";
    module.SPACE = "NekoSpace";
    module.TIME = "NekoTime";

    module.PI = Math.PI;
    module.EULER = Math.E;
    return module;
})(Neko2D || {});
