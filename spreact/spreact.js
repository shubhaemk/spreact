/**
 * NOTES
 * [].concat(…args) collapses any nested array. 
 * If args is ["x", ["y", "z"]] then props.children will be ["x", "y", "z"].
 */

const createElementFromJSX = (type, config, ...args) => {
    const props = Object.assign({}, config);
    const hasChildren = args.length > 0;
    const rawChildren = hasChildren ? [].concat(...args) : [];
    props.children = rawChildren
        .filter((c) => c != null && c !== false)
        .map((c) => (c instanceof Object ? c : createTextElement(c)));
    return { type, props };
}

const createTextElement = value => {
    return createElementFromJSX(`TEXT ELEMENT`, { nodeValue: value });
}

export default {
    createElementFromJSX
}