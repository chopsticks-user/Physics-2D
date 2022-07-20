import Neko2D from "./Neko2D.module.js"
import { QuadTree } from "./ultis/data-structures/QuadTree.mjs"
import * as U from "./ultis/Ultis.module.js"

const test = () => {
    const r = new U.Rectangle(0, 0, 100, 300);
    console.log(r.maxReach);
}

U.funcExeTime("Test QuadTree + Space", test);




