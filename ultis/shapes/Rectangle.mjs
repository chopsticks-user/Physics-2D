import { strictlyNumber } from "../../ultis/TypeChecks.mjs"

export class Rectangle {
    #parameters
    constructor(x = 1, y = 1, width = 1, height = 1) {
        try {
            if (!strictlyNumber(x, y, width, height)) {
                throw new TypeError("From <Neko2D.Shape.Rectangle>, parameters must be numbers.");
            }
        } catch (e) {
            console.error(`${e.stack}\n`);
            x = y = width = height = 1;
        } finally {
            this.#parameters = {
                x : x,
                y : y,
                width : width,
                height : height
            }
        }
        Object.freeze(this);
    }

    /**
     * @param {number} x
     * @param {number} y
     */
    set center({x, y}) {
        if (strictlyNumber(x, y)) {
            this.#parameters.x = x;
            this.#parameters.y = y;
        }
    }
    // get center() {
    //     return {x: this.#parameters.x
    //         y: this.#parameters.y}
    // }
}