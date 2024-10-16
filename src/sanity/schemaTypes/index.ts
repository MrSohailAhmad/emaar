import { type SchemaTypeDefinition } from "sanity";
import { BrusherType } from "./brusherschema";
import { RequestCallType } from "./requestCall";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [BrusherType, RequestCallType],
};
