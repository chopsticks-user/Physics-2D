import Neko2D from "./Neko2D.module.js"
// import { performance } from "perf-hooks"

const v = new Neko2D.V2(2, 2.1);
const u = new Neko2D.V2(-5, -0.1);
const t = new Neko2D.V2(0, 1);

console.log(Neko2D.V2.crossProduct(u, v, t));

