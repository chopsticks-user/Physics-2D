import * as Neko2D from "./Neko2D.module.js"
import * as U from "./Ultis/Ultis.module.js"

// new Neko2D.Object(
//     new Neko2D.Circle(Math.random() * 2 + 1),
//     new Neko2D.Properties({
//         position: { x: Math.random() * 1000 + 1, y: Math.random() * 1000 + 1 } 
//     })
// )

const createObject = (radius, x, y) => {
    return new Neko2D.Object(
        new Neko2D.Circle(radius),
        new Neko2D.Properties({
            position: { x: x, y: y }
        })
    )
}

const test = () => {
    let n = 1;
    const nObjects = 1000;
    const spaceSize = 20000;
    const space = new Neko2D.Space(spaceSize, spaceSize);
    while (n--) {
        for (let i = 0; i < nObjects; i++) {
            space.insert(createObject(10, Math.random() * 20000 - 10000, Math.random() * 20000 - 10000));
        }
        space.update();
        space.clear();
    }
}

U.funcExeTime("Test QuadTree + Space", test);

