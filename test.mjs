import Neko2D from "./Neko2D.module.js"
// import { performance } from "perf-hooks"

console.log(Neko2D);
// const s = new Neko2D.Space();

// console.log(performance.now());
// console.log(s.time.memo[0]);
// console.log(s.time.current());
// console.log(s.time.current());
// console.log(s.time.memo);

const t = Neko2D.timeStart();
console.log(t);
console.log(Neko2D.timeEslapsed(t));