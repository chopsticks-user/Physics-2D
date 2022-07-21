import Neko2D from "./Neko2D.module.js"
import * as U from "./Ultis/Ultis.module.js"

const test = () => {
    const v = new Neko2D.V2("a", 1);
    console.log(v.unit);
}

U.funcExeTime("Test QuadTree + Space", test);

