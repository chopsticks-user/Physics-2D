export const strictlyNumber = (...args) => {
    for (const arg of args) {
        if (typeof arg !== "number" || arg !== arg) {
            return false;
        }
    }
    return args.length ? true: false;
}

export const validV2 = (...vectors) => {
    for (const vector of vectors) {
        if (!vector) {
            return false;
        }
        if (!strictlyNumber(vector.x, vector.y)) {
            return false;
        }
    }
    return vectors.length ? true: false;
}