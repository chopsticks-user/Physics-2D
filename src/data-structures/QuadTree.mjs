import { strictlyNumber } from "../../Ultis/TypeChecks.mjs"

export class QuadTree {
    constructor(width = 0, height = 0, center = {x: 0, y: 0}) {
        try {
            if (!strictlyNumber(width, height, center.x, center.y)) {
            throw new TypeError("From <QuadTree.constructor>, width and height must be numbers.");
            }
            this.parameters = {
                width: width,
                height: height,
                center: center
            }
        } catch (e) {
            console.error(`${e.stack}\n`);
            this.parameters = {
                width: 0,
                height : 0,
                center : {x: 0, y: 0},
            }
        } finally {
            this.children = {
                NW: null,
                NE: null,
                SW: null,
                SE: null
            };
        }
    }

}