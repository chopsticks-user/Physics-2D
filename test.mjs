import Neko2D from "./Neko2D.module.js"
import * as U from "./Ultis/Ultis.module.js"

const vv = [];

for (let i = 0; i < 10; i++) {
    vv.push(new Neko2D.V2(Math.random() * 10000, Math.random() * 10000));
}

const test = () => {
    let n = 1;
    const nObjects = 1;
    const spaceSize = 1000000;
    const space = new Neko2D.Space(spaceSize, spaceSize);
    while (n--) {
        for (let i = 0; i < nObjects; i++) {
            // space.insert(
            //     new Neko2D.Object(
            //         new Neko2D.Circle(Math.random() * 10 + 1),
            //         new Neko2D.Properties({ 
            //             position: { x: Math.random() * 100000 + 1, y: Math.random() * 100000 + 1 } 
            //         })
            //     )
            // );
            space.insert(
                new Neko2D.Object(
                    new Neko2D.Circle(2),
                    new Neko2D.Properties({ 
                        position: { x: 3, y: 3 } 
                    })
                )
            );
            space.insert(
                new Neko2D.Object(
                    new Neko2D.Circle(2),
                    new Neko2D.Properties({ 
                        position: { x: 0, y: 0 } 
                    })
                )
            );
        }
        space.update();
        space.clear();
    }
}

U.funcExeTime("Test QuadTree + Space", test);

const a = [1, 2];
const b = [2, 4];
console.log(a.concat(b));

