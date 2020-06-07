const createElement = (type, config, ...args) => {
  const props = Object.assign({}, config);
  const hasChildren = args.length > 0;
  const rawChildren = hasChildren ? [].concat(...args) : [];
  props.children = rawChildren
    .filter((c) => c != null && c !== false)
    .map((c) => (c instanceof Object ? c : createTextElement(c)));
  return { type, props };
}

const createTextElement = value =>  {
  return createElement(`TEXT ELEMENT`, { nodeValue: value });
}

const createSpreactElement = element => {
    const { type, props } = element;

    // create element
    const isTextElement = type === `TEXT ELEMENT`;
    const spreactElement = isTextElement ? document.createTextNode(type) : document.createElement(type);

    // add event listener
    const isEventListener = eventName => eventName.startsWith(`on`);
    Object.keys(props).filter(isEventListener).forEach(eventName => {
        const eventType = eventName.toLowerCase().substring(2);
        spreactElement.addEventListener(eventType, props[eventName]);
    });

    // add props
    const isAttribute = attributeName => !isEventListener(attributeName) && attributeName != `children`;
    Object.keys(props).filter(isAttribute).forEach(attributeName => {
        spreactElement[attributeName] = props[attributeName];
    });

    const spreactChildren = props.children || [];

    return [spreactElement, spreactChildren];
};

const render = (element, parentDom) => {
    const [spreactElement, spreactChildren] = createSpreactElement(element);
    spreactChildren.length && spreactChildren.forEach(spreactChildElement => render(spreactChildElement, spreactElement));
    parentDom.appendChild(spreactElement);
};

export default {
    render,
    createElement
};