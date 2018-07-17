// @flow

export default drawCustom;

import type Painter from './painter';
import type SourceCache from '../source/source_cache';
import type CustomStyleLayer from '../style/style_layer/custom_style_layer';

function drawCustom(painter: Painter, sourceCache: SourceCache, layer: CustomStyleLayer) {
    
    if (painter.renderPass === 'translucent') {
        layer.implementation.render(painter.context.gl, painter.transform.customLayerMatrix());
        painter.context.restore();
    }
}
