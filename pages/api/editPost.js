import { EDIT_POST } from "../../sanityFunctions";

export default async function editPost(req, res) {
  const post = await EDIT_POST();
  res.statusCode = 200;
  res.json(post);
}
