// @flow

import StyleLayer from '../style_layer';
import {CustomLayerSpecification} from '../custom_layer_spec';

class CustomStyleLayer extends StyleLayer {

    implementation: CustomLayerSpecification;

    constructor(implementation: CustomLayerSpecification) {
        super(implementation, {});
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
