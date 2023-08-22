import { TextAa } from "phosphor-react";

export default {
  name: "moduleText",
  title: "Text",
  type: "object",
  icon: TextAa,
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "body",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }],
    },
  ],
};
