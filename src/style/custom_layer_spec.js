// @flow

export interface CustomLayerSpecification {
    id: string;
    type: "custom";
    render(gl: WebGLRenderingContext, matrix: Float64Array): void;
    hasTransition(): boolean;
}
