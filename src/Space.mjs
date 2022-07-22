import Neko2D from "../Neko2D.mjs"
import { QuadTree } from "./collisions/QuadTree.mjs";
import {
    strictlyNumber,
    looselyV2,
    SPACE_VIEW_MAX_WIDTH,
    SPACE_VIEW_MAX_HEIGHT,
    MAXIMUM_N_OBJECTS
} from "../ultis/Ultis.module.js"

((module) => {
    var module = module || {};
    module.Space = class {
        static #idList = [];
        constructor(width = 0, height = 0) {
            this.dimension = {
                width: Neko2D.min(width, SPACE_VIEW_MAX_WIDTH),
                height: Neko2D.min(height, SPACE_VIEW_MAX_HEIGHT)
            }
            this.view = {
                x: 0, y: 0,
                lastTransform: { x: 0, y: 0 },
                scale: 1,
                transform: (tX, tY) => {
                    this.lastTransform.x = tX * this.scale;
                    this.lastTransform.y = tY * this.scale;
                    this.view.x += this.lastTransform.x;
                    this.view.y += this.lastTransform.y;
                },
                moveTo: (x, y) => {
                    this.view.x = x;
                    this.view.y = y;
                },
                setScale: (newScale) => {
                    this.view.scale = newScale;
                }
            };
            this.partitions = new QuadTree(width, height);
            this.time = new Neko2D.Time();
            this.physics = 0;
            this.objects = [];
        }

        get typename() {
            return Neko2D.SPACE;
        }

        insert = (object) => {
            if (this.objects.length === MAXIMUM_N_OBJECTS) {
                // console.warn("Maximum number of objects reached.");
                return;
            }
            this.objects.push(object);
        }

        remove = (id) => {
            this.objects.splice(id, 1);
        }

        clear = () => {
            this.objects = [];
        }

        update = () => {
            this.partitions = new QuadTree(this.dimension.width, this.dimension.height);
            let len = this.objects.length;
            while(len--) {
                this.partitions.insert(this.objects[len].collisionData);
            }

            //handle collisions and calculations
        }
    }
    return module;
})(Neko2D || {});

export default Neko2D;