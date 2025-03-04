"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodePayload = void 0;
const payload_1 = require("../generated/pb/payload");
function bytesToHex(bytes) {
    return ("0x" +
        Array.from(bytes)
            .map((byte) => byte.toString(16).padStart(2, "0"))
            .join(""));
}
const decodePayload = (base64EncodedProtoStr) => {
    const bytes = Uint8Array.from(Buffer.from(base64EncodedProtoStr, "base64"));
    const decodedMetadata = (0, payload_1.decodeMetadata)(bytes);
    const params = {};
    for (const param of (decodedMetadata?.params || [])) {
        const paramName = param.name;
        if (typeof paramName === "undefined") {
            continue;
        }
        params[paramName] = param.value;
    }
    let payload = {
        hash: bytesToHex(decodedMetadata.hash ?? new Uint8Array()),
        title: decodedMetadata.title ?? "",
        params,
    };
    return payload;
};
exports.decodePayload = decodePayload;
