import { strictlyNumber } from "../../Ultis/TypeChecks.mjs"

export class QuadTree {
    constructor(width = 0, height = 0, center = {x: 0, y: 0}) {
        try {
            if (!strictlyNumber(width, height, center.x, center.y)) {
                throw new TypeError("From <QuadTree.constructor>, width and height must be numbers.");
            }
        } catch (e) {
            console.error(`${e.stack}\n`);
            width = height = center.x = center.y = 0;
        } finally {
            this.parameters = {
                width: width,
                height: height,
                center: center
            }
            this.children = {
                NW: null,
                NE: null,
                SW: null,
                SE: null
            };
        }
    }
    insert(x, y, maxReach) {
        try {
            if (!strictlyNumber(x, y, maxReach)) {
                throw new TypeError("From <QuadTree.insert>, parameters must be numbers.");
            }
        } catch (e) {
            console.error(`${e.stack}\n`);
        }
    }
}