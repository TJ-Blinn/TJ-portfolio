// connecting Sanity client with React app

import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "glgfncu3",
  dataset: "production",
  apiVersion: "2022-06-21",
  useCdn: true,
  token:
    "skjluV8KGvm9Bu7aVemQM96Vb8gwPZjljTD6Y64C1wWfsA1EExKEU8D0uiQS0COsM8zDSbwf99yLybR9kHptpIphVTfM6gdnzUVYzD9not9rUapsKY14BWOcdrIdxpbdcKzWTS5DKmUMgkoVYB4HGo1yX44Z85bWL03e6dGcDYRFPeqrS9Tc",
});
