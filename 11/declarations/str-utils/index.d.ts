type StringTransformFunction = (value: string) => string;
declare module 'str-utils'
{
    // export const ...
    // export function ...
    export function strReverse(value: string): string;
    export function strToLower(value: string): string;
    export function strToUpper(value: string): string;
    export function strRandomize(value: string): string;
    export function strInvertCase(value: string): string;
    export const strReverse: StringTransformFunction;
    export const strToLower: StringTransformFunction;
    export const strToUpper: StringTransformFunction;
    export const strRandomize: StringTransformFunction;
    export const strInvertCase: StringTransformFunction;


}
// declarations/str-utils/index.d.ts

declare module 'str-utils' {
    // Type alias for a function that takes a string and returns a string
    type StringDecorator = (input: string) => string;

    // Exporting the string manipulation functions
    export const strReverse: StringDecorator;
    export const strToLower: StringDecorator;
    export const strToUpper: StringDecorator;
    export const strRandomize: StringDecorator;
    export const strInvertCase: StringDecorator;
}
