import Neko2D from "./Neko2D.module.js"
// import { performance } from "perf-hooks"

// Neko2D.toRadians = 0;
console.log(Neko2D);
// Neko2D.PI = 0;
console.log(Neko2D.PI);

const v = new Neko2D.V2(-2, -2).unit();
console.log(v.x, v.y);
console.log(Neko2D.Space.MAX_WIDTH, Neko2D.Space.MAX_HEIGHT);
console.log(Neko2D.Time);