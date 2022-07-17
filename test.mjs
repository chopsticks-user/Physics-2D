import Neko2D from "./Neko2D.module.js"
// import { performance } from "perf-hooks"

console.log(Neko2D);

const v = Neko2D.V2.fromProperties(1, Neko2D.PI / 4);
const u = new Neko2D.V2(1, -1);
console.log(Neko2D.V2.sum(u, v, v));
console.log(Neko2D.V2.dotProduct(u, v));
console.log(Neko2D.V2.crossProduct(v, u));