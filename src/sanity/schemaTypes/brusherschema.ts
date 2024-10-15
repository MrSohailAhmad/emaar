import { defineField, defineType } from "sanity";

export const BrusherType = defineType({
  name: "user_number",
  title: "User Number",
  type: "document",
  fields: [
    defineField({
      name: "number",
      type: "string",
    }),
  ],
});
