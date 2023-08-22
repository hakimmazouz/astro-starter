import { ShieldStar } from "phosphor-react";

export default {
  name: "moduleHero",
  title: "Hero",
  type: "object",
  icon: ShieldStar,
  fields: [
    {
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
