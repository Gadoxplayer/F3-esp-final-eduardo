import { privateDecrypt } from "crypto";
import { CheckoutView } from "dh-marvel/components/checkoutView/checkoutView";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";
import { OrderProvider } from "dh-marvel/features/formContext/OrderContext";
import { Comic } from "dh-marvel/features/types";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import comic from "dh-marvel/test/mocks/comic";
import { NextPage } from "next";
import { useEffect } from "react";
interface props {
  data: Comic;
}
const CheckoutComic: NextPage<props> = ({ data }) => {
  if (!data) {
    return <></>;
  }

  return (
    <OrderProvider>
      <CheckoutView
        title={data.title}
        image={data.thumbnail.path + "." + data.thumbnail.extension}
        price={data.price}
        id={data.id}
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
  const res = await getComic(id);

  console.log(res);

  return { props: { data: res } };
}
