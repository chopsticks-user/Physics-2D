import Neko2D from "./Neko2D.module.js"
import * as U from "./Ultis/Ultis.module.js"

const test = () => {
    const obj = new Neko2D.Object();
    console.log(obj);
}

U.funcExeTime("Test QuadTree + Space", test);

