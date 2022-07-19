import Neko2D from "./Neko2D.module.js"
import { QuadTree } from "./ultis/data-structures/QuadTree.mjs"
import * as ultis from "./ultis/Ultis.module.js"

const test = () => {
    const a = new QuadTree(100, 100);
    console.log(a);
    const s = new Neko2D.Space(3000000, 1000);
    console.log(s);
    console.log(s.time.current);
}

ultis.funcExeTime("Test QuadTree + Space", test);


