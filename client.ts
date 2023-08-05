import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_APP_SANITY_PROJECT_ID || "rwtd6a87",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-08-03",
  token: process.env.NEXT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
