import type { NextApiRequest, NextApiResponse } from "next";
import { getComics } from "dh-marvel/services/marvel/marvel.service";
import {Comic} from "dh-marvel/features/types";

type Data = {
    comics: Comic[]
} | {
    error: string
    
}

const handlerComicPaginator = async (req:NextApiRequest, res:NextApiResponse<Data>) => {
    try {
        if (req.method === "GET") {
            const { offset, limit } = req.query;
            const newComics = await getComics(Number(offset), Number(limit));
            res.status(200).send({ comics: newComics.data });
          }
    } catch (error) {
        res.status(500).json({ error: "Server error. Please try again in a few seconds" });
    }
    }

export default handlerComicPaginator;