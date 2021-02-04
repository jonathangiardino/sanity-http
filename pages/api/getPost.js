// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GET_POST } from "../../sanityFunctions";

export default async function getPost(req, res) {
  const post = await GET_POST();
  console.log(res);
  res.statusCode = 200;
  res.json(post);
}
