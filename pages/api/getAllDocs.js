import { GET_ALL_DOCS } from "../../sanityFunctions";

export default async function allDocs(req, res) {
  const allDocs = await GET_ALL_DOCS();
  res.statusCode = 200;
  res.json(allDocs);
}
