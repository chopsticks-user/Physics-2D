export const defConst = (scope, propName, propValue) => {
    Object.defineProperty(scope, propName, {
        value: propValue,
        writable: false,
        enumerable: true
    });
}