import { defineField, defineType } from "sanity";

export const RequestCallType = defineType({
  name: "request_call",
  title: "Request Call",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone_number",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "submittedAt", // This field will store the timestamp
      title: "Submitted At",
      type: "datetime", // Use 'datetime' to store both date and time
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
      },
    }),
  ],
});
