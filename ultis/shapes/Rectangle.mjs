import Neko2D from "../../Neko2D.module.js"
import { strictlyNumber } from "../../ultis/TypeChecks.mjs"

export class Rectangle {
    constructor(x = 1, y = 1, width = 1, height = 1) {
        try {
            if (!strictlyNumber(x, y, width, height)) {
                throw new TypeError("From <Neko2D.Shape.Rectangle>, parameters must be numbers.");
            }
        } catch (e) {
            console.error(`${e.stack}\n`);
            x = y = width = height = 1;
        } finally {
            this.center = new Neko2D.V2(x, y);
            this.width = width;
            this.height = height;
        }
    }

    get boundary() {
        return {
            topLeft: { x: center.x - width / 2, y: center.y + height / 2 },
            topRight: { x: center.x + width / 2, y: center.y + height / 2 },
            bottomLeft: { x: center.x - width / 2, y: center.y - height / 2 },
            bottomRight: { x: center.x + width / 2, y: center.y - height / 2 }
        }
    }

    contain = () => {

    }

    overlay = () => {
        
    }
}