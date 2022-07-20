import { strictlyNumber } from "../../Ultis/TypeChecks.mjs"

const CAPACITY = 4;

export class QuadTree {
    constructor(width = 0, height = 0, center = {x: 0, y: 0}) {
        try {
            if (!strictlyNumber(width, height, center.x, center.y)) {
                throw new TypeError("From <Ultis.QuadTree.constructor>, width and height must be numbers.");
            }
        } catch (e) {
            console.error(`${e.stack}\n`);
            width = height = center.x = center.y = 0;
        } finally {
            this.parameters = {
                width: width,
                height: height,
                center: center,
            }
            this.boundary = {
                topLeft: {x: center.x - width / 2, y: center.y + height / 2},
                bottomRight: {x: center.x + width / 2, y: center.y - height / 2}
            }
            this.children = {
                NW: null,
                NE: null,
                SW: null,
                SE: null
            };
        }
    }

    static get CAPACITY() {
        return 4;
    }

    contain = (x, y, maxReach) => {
        try {
            if (!strictlyNumber(x, y, maxReach)) {
                throw new TypeError("From Ultis.QuadTree.contain, parameters muse be numbers.");
            }
            console.log(QuadTree.CAPACITY);
            if (y - maxReach > this.boundary.topLeft.y) {
                return false;
            }
            if (y + maxReach < this.boundary.bottomRight.y) {
                return false;
            }
            if (x - maxReach > this.boundary.bottomRight.x) {
                return false;
            }
            if (x + maxReach < this.boundary.topLeft.x) {
                return false;
            }
            return true;
        } catch (e) {
            console.error(`${e.stack}\n`);
            return false;
        }
    }

    insert = (x, y, maxReach) => {
        try {
            if (!strictlyNumber(x, y, maxReach)) {
                throw new TypeError("From <QuadTree.insert>, parameters must be numbers.");
            }
            if (!(this.contain(x, y, maxReach))) {
                return;
            }
        } catch (e) {
            console.error(`${e.stack}\n`);
        }
    }
}