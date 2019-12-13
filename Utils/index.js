export const findByTestAttr = (component, attribute) => 
    component.find(`[data-test='${attribute}']`)