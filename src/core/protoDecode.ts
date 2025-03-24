import { decodeMetadata } from "../../generated/pb/payload";

export function decodePayload(payloadStr: string) {
  const decoded = decodeMetadata(Buffer.from(payloadStr, 'base64'));
  const params: Record<string, string> = {};
  for (const param of decoded.params ?? []) {
    const paramName = param.name;
    const paramValue = param.value;
    if (paramName && paramValue) {
      params[paramName] = paramValue;
    }
  }
  return {
    title: decoded.title,
    hash: "0x" + Buffer.from(decoded?.hash ?? []).toString('hex'),
    params: params
  };
} 