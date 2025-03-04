export interface Metadata {
    hash?: Uint8Array;
    title?: string;
    params?: Parameter[];
}
export declare function encodeMetadata(message: Metadata): Uint8Array;
export declare function decodeMetadata(binary: Uint8Array): Metadata;
export interface Parameter {
    name?: string;
    value?: string;
}
export declare function encodeParameter(message: Parameter): Uint8Array;
export declare function decodeParameter(binary: Uint8Array): Parameter;
export interface Long {
    low: number;
    high: number;
    unsigned: boolean;
}
