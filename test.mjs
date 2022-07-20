import Neko2D from "./Neko2D.module.js"
import { QuadTree } from "./ultis/data-structures/QuadTree.mjs"
import * as ultis from "./ultis/Ultis.module.js"

const test = () => {
    const qt = new QuadTree(100, 100);
    qt.insert(0, 0, 10);
    qt.insert(3, 40, 5);
    qt.insert(1, 25, 2);
    qt.insert(5, 5, 1);
    qt.insert(45, 45, 1);
    console.log(qt);
}

ultis.funcExeTime("Test QuadTree + Space", test);




