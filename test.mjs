import Neko2D from "./Neko2D.module.js"
import { QuadTree } from "./ultis/data-structures/QuadTree.mjs"
import * as ultis from "./ultis/Ultis.module.js"

const test = () => {
    const v = new Neko2D.V2("a", -2);
    const n = new Neko2D.V2(1, 1);
    v.coord = {x:1, y:1};
    console.log(v.coord);
}

ultis.funcExeTime("Test QuadTree + Space", test);




