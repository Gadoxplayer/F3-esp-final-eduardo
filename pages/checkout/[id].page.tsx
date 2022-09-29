import { CheckoutView } from "dh-marvel/components/checkoutView/checkoutView";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { OrderProvider } from "dh-marvel/features/formContext/OrderContext";
import { Comic } from "dh-marvel/features/types";
import { NextPage } from "next";
interface props {
  data: Comic;
}
const CheckoutComic: NextPage<props> = ({ data }) => {
  return (
    <OrderProvider>
      <CheckoutView
        title={data.comic.title}
        image={data.comic.thumbnail.path + "." + data.comic.thumbnail.extension}
        price={data.comic.price}
        id={data.comic.id}
        checkNext={function (data: CheckoutInput): void {
          throw new Error("Function not implemented.");
        }}
      />
    </OrderProvider>
  );
};

export default CheckoutComic;

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/comic/${id}`);
  const data = await res.json();
  console.log(data);

  return { props: { data: data } };
}