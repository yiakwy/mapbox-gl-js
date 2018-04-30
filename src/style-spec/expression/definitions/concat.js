// @flow

import {type StringTypeT, StringType} from '../types';
import { toString } from '../values';
import type { Expression } from '../expression';
import type ParsingContext from '../parsing_context';
import type EvaluationContext from '../evaluation_context';

export default class Concat implements Expression {
    type: StringTypeT;
    args: Array<Expression>;

    constructor(args: Array<Expression>) {
        this.type = StringType;
        this.args = args;
    }

    static parse([_, ...args]: Array<mixed>, context: ParsingContext) {
        const parsedArgs = [];
        for (const arg of args) {
            const parsed = context.parse(arg, 1 + parsedArgs.length);
            if (!parsed) return null;
            parsedArgs.push(parsed);
        }
        return new Concat(parsedArgs);
    }

    evaluate(ctx: EvaluationContext) {
        return this.args.map((arg) => toString(arg.evaluate(ctx))).join('');
    }

    eachChild(fn: (Expression) => void) {
        this.args.forEach(fn);
    }

    possibleOutputs() {
        return [].concat(...this.args.map((arg) =>
            arg.possibleOutputs().map(v => v === undefined ? v : toString(v))));
    }

    serialize() {
        const serialized = ["concat"];
        this.eachChild(child => { serialized.push(child.serialize()); });
        return serialized;
    }
}
