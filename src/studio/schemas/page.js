import { getPageModuleNamesAsTypes } from "../helpers";

export default {
  type: "document",
  name: "page",
  title: "Page",
  fields: [
    {
      type: "string",
      name: "title",
      title: "Title",
    },
    {
      type: "slug",
      name: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "pageModules",
      type: "array",
      of: getPageModuleNamesAsTypes(),
    },
  ],
};
