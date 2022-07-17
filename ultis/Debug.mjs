import Neko2D from "../Neko2D.mjs"
// import { performance } from "perf-hooks"

((module) => {
    var module = module || {};
    module.timeStart = () => performance.now();
    module.timeEslapsed = (tStart) => performance.now() - tStart;
    module.displayTimeEslapsed = (message, tStart) => {
        const timeEnd = performance.now();
        console.log(
            `\nStart at t = ${tStart} ms, End at t = ${timeEnd} ms, Time elapsed: ${timeEnd - tStart} ms\nDebug Message: ${message}.\n`
        )
    }
    module.funcExeTime = (message, targetFunction) => {
        console.log("\n----------------------------Running------------------------------");
        const tStart = performance.now();
        console.log(`Start executing at t = ${tStart} ms.\n`);
        targetFunction();
        const tEnd = performance.now();
        console.log(`\nStop executing at t = ${tEnd} ms.`);
        console.log(`Time elapsed: ${tEnd - tStart} ms.`);
        console.log(`Debug message: ${message}`);
        console.log("-----------------------------End---------------------------------\n");
    }
    return module;
})(Neko2D || {});

export default Neko2D;