import Neko2D from "./Neko2D.module.js"
import * as U from "./Ultis/Ultis.module.js"
import { QuadTree } from "./src/collisions/QuadTree.mjs";

const vv = [];

for (let i = 0; i < 10; i++) {
    vv.push(new Neko2D.V2(Math.random() * 10000, Math.random() * 10000));
}

const test = () => {
    let n = 1000000;
    while (n--) {
        const qt = new QuadTree(100000, 100000);
        const u = new Neko2D.Circle(Math.random() * 10000, {x: Math.random() * 10000, y: Math.random() * 10000});
        const v = new Neko2D.Circle(Math.random() * 10000, {x: Math.random() * 10000, y: Math.random() * 10000});
        const t = new Neko2D.Circle(Math.random() * 10000, {x: Math.random() * 10000, y: Math.random() * 10000});
        // const p = new Neko2D.Properties();
        // const o = new Neko2D.Object(u, p);
        // u.distance(v, t, t,...vv,u, v, t, u);
        // v.distance(u, t, ...vv);
        qt.insert(u.center.x, u.center.y, u.maxReach);
        qt.insert(v.center.x, v.center.y, v.maxReach);
        qt.insert(t.center.x, t.center.y, t.maxReach);
    }
}

U.funcExeTime("Test QuadTree + Space", test);

