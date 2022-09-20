import { Comic } from "dh-marvel/features/types";
import { NextPage } from "next";

interface props {
  data: Comic;
}

const ComicsDetail: NextPage<props> = ({ data }) => {
  return (
    <>
      <p>hola</p>
      {data.comic.title}
      {data.comic.price}
      <p>holis</p>
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
