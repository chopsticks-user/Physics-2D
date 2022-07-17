import Neko2D from "./Neko2D.module.js"
// import { performance } from "perf-hooks"

console.log(Neko2D);

// console.log(performance.now());
// console.log(s.time.memo[0]);
// console.log(s.time.current());
// console.log(s.time.current());
// console.log(s.time.memo);

const t = new Neko2D.Time();

console.log(t);
console.log(t.current());
console.log(t);

const s = new Neko2D.Space();
console.log(s.time.current());
console.log(s.time);

Neko2D.displayTimeEslapsed("aaa", 0);
console.log('a');

const pr = (a, b, c, d, e) => console.log(`${a+b}aaaaaaaaa`);
// const cpr = () => pr(5, 6)
const cpr = Neko2D.curryFunction(pr, 55, 6222);
console.log(cpr);

Neko2D.funcExeTime("func", cpr);