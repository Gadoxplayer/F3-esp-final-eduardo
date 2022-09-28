import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { CardDetail } from "dh-marvel/components/carDetail/cardDetail";
import { Comic } from "dh-marvel/features/types";
import { NextPage } from "next";
import Link from "next/link";

interface props {
  data: Comic;
}
/**
 * Route to display the details of a selected comic
 * @param data data fetched from the api
 * @returns a component which renders details of a comic
 * @author Eduardo C
 */
const ComicsDetail: NextPage<props> = ({ data }) => {
  return (
    <>
      <CardDetail
        title={data.comic.title}
        image={data.comic.thumbnail.path + "." + data.comic.thumbnail.extension}
        description={data.comic.description}
        price={data.comic.price}
        characters={
          data.comic.characters.available
            ? data.comic.characters.items.map((charac: any) => {
                return (
                  <Divider>
                    <Box sx={{ p: 1 }}>
                      <Link
                        key={charac.name}
                        href={`/character/${charac.resourceURI.substr(47)}`}
                      >
                        {charac.name}
                      </Link>
                    </Box>
                  </Divider>
                );
              })
            : null
        }
        stock={data.comic.stock}
        available={data.comic.characters.available}
        oldPrice={data.comic.oldPrice}
        id={data.comic.id}
      ></CardDetail>
    </>
  );
};

export default ComicsDetail;

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/comic/${id}`);
  const data = await res.json();
  return { props: { data: data } };
}
