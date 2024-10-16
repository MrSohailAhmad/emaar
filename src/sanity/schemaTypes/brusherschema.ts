import { defineField, defineType } from "sanity";

export const BrusherType = defineType({
  name: "user_number",
  title: "User Number",
  type: "document",
  fields: [
    defineField({
      name: "user_number",
      type: "string",
    }),
    defineField({
      name: "user_ip_address",
      type: "string",
    }),
    defineField({
      name: "user_location",
      type: "string",
    }),
  ],
});
