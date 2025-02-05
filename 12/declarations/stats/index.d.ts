declare module 'stats' {
    export function getMaxIndex(input: T[], comparator: CompareFunction<T>): number;

// declarations/stats/index.d.ts


    type CompareFunction<T> = (a: T, b: T) => number;
    type ValueExtractor<T, V> = (item: T) => V;
    export function getMaxIndex<T>(array: T[], compareFn: CompareFunction<T>): number;
    export function getMaxElement<T>(array: T[], compareFn: CompareFunction<T>): T;
    export function getMinIndex<T>(array: T[], compareFn: CompareFunction<T>): number;
    export function getMinElement<T>(array: T[], compareFn: CompareFunction<T>): T;
    export function getMedianIndex<T>(array: T[], compareFn: CompareFunction<T>): number;
    export function getMedianElement<T>(array: T[], compareFn: CompareFunction<T>): T;
    export function getAverageValue<T, V>(array: T[], valueExtractor: ValueExtractor<T, V>): number;
}
