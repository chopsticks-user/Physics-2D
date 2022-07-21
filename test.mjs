import Neko2D from "./Neko2D.module.js"
import * as U from "./Ultis/Ultis.module.js"

const test = () => {
    const c = new Neko2D.Circle();
    const v = new Neko2D.V2();
    console.log(c.typename);
    console.log(v.typename);
}

U.funcExeTime("Test QuadTree + Space", test);

