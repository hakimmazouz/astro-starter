import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "rsz4jz04",
  dataset: "production",
  useCdn: import.meta.env.NODE_ENV == "production",
});
