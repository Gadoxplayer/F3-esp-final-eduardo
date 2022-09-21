import { CardDetail } from "dh-marvel/components/carDetail/cardDetail";
import { Comic } from "dh-marvel/features/types";
import { NextPage } from "next";

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
        characters={data.comic.characters.available
          ? data.comic.characters.items.map((charac: any) => {
            return charac.name;
          })
          : null}
        stock={data.comic.stock}
        available={data.comic.characters.available} oldPrice={data.comic.oldPrice}      ></CardDetail>
    </>
  );
};

export default ComicsDetail;

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/comic/${id}`);
  const data = await res.json();
  console.log(data);

  return { props: { data: data } };
}
