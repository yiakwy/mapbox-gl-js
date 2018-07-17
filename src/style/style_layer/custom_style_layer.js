// @flow

import StyleLayer from '../style_layer';

class CustomStyleLayer extends StyleLayer {

    // TODO
    implementation: any;

    constructor(implementation) {
        this.id = implementation.id;
        this.type = 'custom';
        this.implementation = implementation;
    }

    hasTransition() {
        return this.implementation.hasTransition !== undefined ?
            this.implementation.hasTransition() :
            false;
    }

    recalculate() {}
    updateTransitions() {};

    serialize() {
        throw "Custom layers cannot be serialized";
    }
}

export default CustomStyleLayer;
