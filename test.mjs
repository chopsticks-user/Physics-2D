import Neko2D from "./Neko2D.module.js"
import { strictlyNumber } from "./ultis/TypeChecks.mjs"
import { QuadTree } from "./src/data-structures/QuadTree.mjs"

const a = new QuadTree(100, 100);
a.children.NE = 0;
console.log(a);



// const t = new Neko2D.V2(0, 1);

// var a;
// Neko2D.V2.fromPoints(0, a);
// const x = new Neko2D.V2("a", a);
// console.log(v.magnitude, v.direction);
// console.log(v.unit, v.opposite, v.normal);
// var a = NaN;
// console.log(a === a);


// console.log(Neko2D.V2.crossProduct(u, v, t));

