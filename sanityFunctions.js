import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
});

export async function GET_ALL_DOCS() {
  const query = "*[]";
  const allDocs = await client.fetch(query);

  return allDocs;
}

export async function GET_POST() {
  const query = '*[_id == "1a558cde-16fb-4362-8082-634468a1cc20"]';
  const post = await client.fetch(query);

  return post;
}

export async function EDIT_POST(title = "Helloooooooo") {
  const id = "1a558cde-16fb-4362-8082-634468a1cc20";
  const post = await client
    .patch(id)
    .set({ title })
    .commit()
    .then((updatedPost) => {
      return updatedPost;
    });

  return post;
}
