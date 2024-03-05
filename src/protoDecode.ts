import {
  decodeMetadata,
  encodeMetadata,
  Metadata,
} from "../generated/pb/payload";

export type TPayload = {
  hash: string;
  title: string;
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
  const bytes = Uint8Array.from(Buffer.from(base64EncodedProtoStr, "base64"));
  const decodedMetadata = decodeMetadata(bytes);

  let payload: TPayload = {
    hash: bytesToHex(decodedMetadata.hash ?? new Uint8Array()),
    title: decodedMetadata.title ?? "",
  };

  return payload;
};
