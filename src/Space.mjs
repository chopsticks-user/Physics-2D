import Neko2D from "../Neko2D.mjs"
import { QuadTree } from "./collisions/QuadTree.mjs";
import {
    SPACE_VIEW_MAX_WIDTH,
    SPACE_VIEW_MAX_HEIGHT,
    MAXIMUM_N_OBJECTS,
    SEARCH_RANGE_FACTOR
} from "../ultis/Ultis.module.js"

((module) => {
    var module = module || {};
    module.Space = class {
        static #idList = [];
        constructor(width = 0, height = 0) {
            this.dimension = {
                width: Math.min(width, SPACE_VIEW_MAX_WIDTH),
                height: Math.min(height, SPACE_VIEW_MAX_HEIGHT)
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
            this.physics = 0;
            this.objects = [];
            this.time = new Neko2D.Time();
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
            while (len--) {
                const node = this.objects[len].collisionData;
                node.id = len;
                this.partitions.insert(node);
            }

            // query quadtree
            len = this.objects.length;
            while (len--) {
                const node = this.objects[len].collisionData;
                node.id = len;
                // range from the outer of the object
                const outterDistance = Math.max(
                    this.objects[len].properties.velocity.magnitude * SEARCH_RANGE_FACTOR, 1
                );
                const neightborNodes = this.partitions.query(node, outterDistance);
                let nLen = neightborNodes.length;
                while (nLen--) {
                    if (this.objects[len].intersect(this.objects[neightborNodes[nLen].id])) {
                        
                        // console.log("collision detected");
                        // run collision handler
                        // update all objects' physics states

                    };
                }
            };
        }
    }
    return module;
})(Neko2D || {});
