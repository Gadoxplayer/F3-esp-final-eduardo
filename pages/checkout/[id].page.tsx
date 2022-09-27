import { CheckoutView } from "dh-marvel/components/checkoutView/checkoutView";
import { Comic } from "dh-marvel/features/types";
import { NextPage } from "next";
interface props {
  data: Comic;
}
const CheckoutComic: NextPage<props> = ({ data }) => {
  return <CheckoutView title={data.comic.title} image={data.comic.thumbnail.path + "." + data.comic.thumbnail.extension} price={data.comic.price} />;
};

export default CheckoutComic;

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/comic/${id}`);
  const data = await res.json();
  console.log(data);

  return { props: { data: data } };
}
