// @ts-ignore
export { map } from './map';
export { reduce } from './reduce';
export { filter } from './filter';
export { add } from './add';
export { subtract } from './subtract';
export { prop } from './prop';
export { pipe } from './pipe';

export function map<T, R>(mapper: (item: T) => R): (input: T[]) => R[];
export function map<T, R>(mapper: (item: T) => R, input: T[]): R[];
export function map<T, R>(mapper?: (item: T) => R, input?: T[]): any {
    {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput : T[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper!);
        };
    }
    return input!.map(mapper!);
}

export function filter<T>(filterer: (item: T) => boolean): (input: T[]) => T[];
    export function filter<T>(filterer: (item: T) => boolean, input: T[]): T[];
    export function filter<T>(filterer?: (item: T) => boolean, input?: T[]): any {
        {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer!);
        };
    }
    return input!.filter(filterer!);
}

export function reduce<T, R>(reducer: (acc: R, item: T) => R, initialValue: R): (input: T[]) => R;
export function reduce<T, R>(reducer: (acc: R, item: T) => R, initialValue: R, input: T[]): R;
export function reduce<T, R>(reducer?: (acc: R, item: T) => R, initialValue?: R, input?: T[]): any {
            {
    if (arguments.length === 0) {
        return reduce;
    }
    if (arguments.length === 1) {
        return function subFunction(subInitialValue : R, subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            if (arguments.length === 1) {
                return function subSubFunction(subSubInput: T[]) {
                    if (arguments.length === 0) {
                        return subSubFunction;
                    }
                    return subSubInput.reduce(reducer!, subInitialValue);
                };
            }
            return subInput.reduce(reducer!,subInitialValue);
        }
    }
    if (arguments.length === 2) {
        return function subFunction(subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.reduce(reducer!, initialValue!);
        };
    }
    return input!.reduce(reducer!, initialValue!);
}

export function add(a: number): (b: number) => number;
export function add(a: number, b: number): number;
export function add(a?: number, b?: number): any {

    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a! + subB;
        };
    }
    return a! + b!;
}


export function subtract(a: number): (b: number) => number;
export function subtract(a: number, b: number): number;
export function subtract(a?: number, b?: number): any {
    if (arguments.length === 0) {
        return subtract;
    }
    if (arguments.length === 1) {
        return function subFunction(subB:number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a! - subB;
        };
    }
    return a! - b!;
}

export function prop<T>(obj: T): (propName: keyof T) => T[keyof T];
export function prop<T>(obj: T, propName: keyof T): T[keyof T];
export function prop<T>( obj?: T, propName?: keyof T): any {

    if (arguments.length === 0) {
        return prop;
    }
    if (arguments.length === 1) {
        return function subFunction(subPropName : keyof T) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return obj![subPropName];
        };
    }
    return obj! [propName!];
}

export function pipe<A, B>(fn1: (arg: A) => B): (arg: A) => B;
    export function pipe<A, B, C>(fn1: (arg: A) => B, fn2: (arg: B) => C): (arg: A) => C;
    export function pipe<A, B, C, D>(fn1: (arg: A) => B, fn2: (arg: B) => C, fn3: (arg: C) => D): (arg: A) => D;
    export function pipe<A, B, C, D, E>(fn1: (arg: A) => B, fn2: (arg: B) => C, fn3: (arg: C) => D, fn4: (arg: D) => E): (arg: A) => E;
    export function pipe<A, B, C, D, E, F>(fn1: (arg: A) => B, fn2: (arg: B) => C, fn3: (arg: C) => D, fn4: (arg: D) => E, fn5: (arg: E) => F): (arg: A) => F;
    export function pipe(...functions: Array<(arg: any) => any>): (arg: any) => any
    {

            if (functions.length === 0)
            {
                return pipe;
            }
            return function subFunction(arg: any)
            {
                return functions.reduce((acc, func) => func(acc), arg);
            };

    }