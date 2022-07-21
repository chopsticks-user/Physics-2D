import Neko2D from "./Neko2D.module.js"
import * as U from "./Ultis/Ultis.module.js"

const test = () => {
    const obj = new Neko2D.Circle(2, {x: 0, y: 0});
    const ob = new Neko2D.Circle(3.7, {x: 4, y: 4});
    const v = new Neko2D.V2(1, 1);
    const u = { x: 3, y: 3};
    console.log(obj.distance(obj, v, u));
    console.log(obj.intersect(ob));
}

U.funcExeTime("Test QuadTree + Space", test);

