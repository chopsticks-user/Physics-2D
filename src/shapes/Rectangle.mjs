import { strictlyNumber } from "../../ultis/TypeChecks.mjs"

export class Rectangle {
    constructor(x = 1, y = 1, width = 1, height = 1) {
        try {
            if (!strictlyNumber(x, y, width, height)) {
                throw new TypeError("From <Neko2D.Shape.Rectangle>, parameters must be numbers.");
            }
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        } catch (e) {
            console.error(`${e.stack}\n`);
            this.x = 1;
            this.y = 1;
            this.width = 1;
            this.height = 1;
        }
    }
}