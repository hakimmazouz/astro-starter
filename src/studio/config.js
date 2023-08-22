import { renderStudio, defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import types from "./schemas";

const config = defineConfig({
  plugins: [deskTool()],
  name: "micromono",
  projectId: "rsz4jz04",
  dataset: "production",
  basePath: "/sanity",
  schema: { types },
});

export default function (containerSelector) {
  return renderStudio(document.querySelector(containerSelector), config);
}
