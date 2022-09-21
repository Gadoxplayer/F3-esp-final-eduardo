import { getComic } from "dh-marvel/services/marvel/marvel.service";
import type { NextApiRequest, NextApiResponse } from "next";

/**
 * handleDetails is a handler for the route, which fetches data of a specific comic
 * @param req 
 * @param res 
 * @author Eduardo C
 */
export default async function handleDetails(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  if (method === "GET") {
    const comic = await getComic(Number(id));
    res.status(200).json({ comic: comic });
  } else {
    res.status(404).json({ message: `Comic with id: ${id} not found.` });
  }
}
