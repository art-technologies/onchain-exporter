import { decodeMetadata } from "../../generated/pb/payload";
import { base64ToBytes } from "../utils/platform";

export type TPayload = {
  hash: string;
  title: string;
  params: Record<string, string | undefined>
};

function bytesToHex(bytes: Uint8Array): string {
  return (
    "0x" +
    Array.from(bytes)
      .map((byte: number) => byte.toString(16).padStart(2, "0"))
      .join("")
  );
}

export const decodePayload = (base64EncodedProtoStr: string) => {
  const bytes = base64ToBytes(base64EncodedProtoStr);
  const decodedMetadata = decodeMetadata(bytes);

  const params: Record<string, string | undefined> = {};
  for (const param of (decodedMetadata?.params || [])) {
    const paramName = param.name
    if (typeof paramName === "undefined") {
      continue
    }
    params[paramName] = param.value;
  }

  return {
    hash: bytesToHex(bytes),
    title: decodedMetadata?.title || "",
    params
  };
};
