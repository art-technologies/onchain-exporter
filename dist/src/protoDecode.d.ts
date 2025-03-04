export type TPayload = {
    hash: string;
    title: string;
    params: Record<string, string | undefined>;
};
export declare const decodePayload: (base64EncodedProtoStr: string) => TPayload;
