import Neko2D from "./Neko2D.module.js"
import { QuadTree } from "./ultis/data-structures/QuadTree.mjs"
import * as ultis from "./ultis/Ultis.module.js"

const test = () => {
    const qt = new QuadTree(100, 100);
    console.log(qt);
    const s = new Neko2D.Space(3000000, 1000);
    console.log(s);
    console.log(s.time.current);
    console.log(qt.contain(100, 0, 49));
}

ultis.funcExeTime("Test QuadTree + Space", test);


