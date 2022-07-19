import Neko2D from "./Neko2D.module.js"
import { strictlyNumber } from "./ultis/TypeChecks.mjs";


const f = () => {
    const u = new Neko2D.V2(3, -0.1);
    const t = new Neko2D.V2(0, 0).unit;
    const a = Neko2D.V2.fromProperties(-3, 3);
    console.log(Neko2D.V2.crossProduct(u, t, a));
}

Neko2D.funcExeTime("type checking", f);

console.log(Neko2D.sqrt(-Infinity));

// const t = new Neko2D.V2(0, 1);

// var a;
// Neko2D.V2.fromPoints(0, a);
// const x = new Neko2D.V2("a", a);
// console.log(v.magnitude, v.direction);
// console.log(v.unit, v.opposite, v.normal);
// var a = NaN;
// console.log(a === a);


// console.log(Neko2D.V2.crossProduct(u, v, t));

