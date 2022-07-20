import { strictlyNumber, QUADTREE_CAPACITY } from "../../Ultis/Ultis.module.js"

export class QuadTree {
    #container;
    #boundary;
    #children;

    constructor(width = 0, height = 0, center = { x: 0, y: 0 }) {
        try {
            if (!strictlyNumber(width, height, center.x, center.y)) {
                throw new TypeError("From <Ultis.QuadTree.constructor>, parameters must be numbers.");
            }
        } catch (e) {
            console.error(`${e.stack}\n`);
            width = height = 0;
            center = { x: 0, y: 0 };
        } finally {
            this.#container = [];
            this.#boundary = {
                topLeft: { x: center.x - width / 2, y: center.y + height / 2 },
                bottomRight: { x: center.x + width / 2, y: center.y - height / 2 }
            }
            this.#children = {
                NW: null,
                NE: null,
                SW: null,
                SE: null
            };
        }
        Object.freeze(this);
    }

    #subdivide = () => {
        const subWidth = (this.#boundary.bottomRight.x - this.#boundary.topLeft.x) / 2;
        const subHeight = (this.#boundary.topLeft.y - this.#boundary.bottomRight.y) / 2;
        const childCenters = {
            NW: {
                x: this.#boundary.topLeft.x + 0.5 * subWidth,
                y: this.#boundary.bottomRight.y + 1.5 * subHeight  
            },
            NE: {
                x: this.#boundary.topLeft.x + 1.5 * subWidth,
                y: this.#boundary.bottomRight.y + 1.5 * subHeight
            },
            SW: {
                x: this.#boundary.topLeft.x + 0.5 * subWidth,
                y: this.#boundary.bottomRight.y + 0.5 * subHeight
            },
            SE: {
                x: this.#boundary.topLeft.x + 1.5 * subWidth,
                y: this.#boundary.bottomRight.y + 0.5 * subHeight
            }
        }

        this.#children.NW = new QuadTree(subWidth, subHeight, childCenters.NW);
        this.#children.NE = new QuadTree(subWidth, subHeight, childCenters.NE);
        this.#children.SW = new QuadTree(subWidth, subHeight, childCenters.SW);
        this.#children.SE = new QuadTree(subWidth, subHeight, childCenters.SE);

        this.#container.forEach((value) => {
            this.#children.NW.insert(value.x, value.y, value.maxReach);
            this.#children.NE.insert(value.x, value.y, value.maxReach);
            this.#children.SW.insert(value.x, value.y, value.maxReach);
            this.#children.SE.insert(value.x, value.y, value.maxReach);
        });

        this.#container = [];
    }

    contain = (x, y, maxReach) => {
        try {
            if (!strictlyNumber(x, y, maxReach)) {
                throw new TypeError("From Ultis.QuadTree.contain, parameters muse be numbers.");
            }
            if (y - maxReach > this.#boundary.topLeft.y) {
                return false;
            }
            if (y + maxReach < this.#boundary.bottomRight.y) {
                return false;
            }
            if (x - maxReach > this.#boundary.bottomRight.x) {
                return false;
            }
            if (x + maxReach < this.#boundary.topLeft.x) {
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
            if (this.contain(x, y, maxReach) === false) {
                return false;
            }
            if (this.#children.NW === null) {
                if (this.#container.length < QUADTREE_CAPACITY) {
                    this.#container.push({ x: x, y: y, maxReach: maxReach });
                    return true;
                }
                this.#subdivide();
            }
            this.#children.NW.insert(x, y, maxReach);
            this.#children.NE.insert(x, y, maxReach);
            this.#children.SW.insert(x, y, maxReach);
            this.#children.SE.insert(x, y, maxReach);
            return false;
        } catch (e) {
            console.error(`${e.stack}\n`);
            return false;
        }
    }

    findNeighborsOf = () => {}
}
