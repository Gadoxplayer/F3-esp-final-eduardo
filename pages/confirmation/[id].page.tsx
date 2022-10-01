import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { CardDetail } from "dh-marvel/components/carDetail/cardDetail";
import { PurchaseConfirm } from "dh-marvel/components/purchaseConfirm/purchaseconfirm";
import useOrder from "dh-marvel/features/formContext/useOrder";
import { Comic } from "dh-marvel/features/types";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { NextPage } from "next";
import Link from "next/link";
import { DeliveryDataType } from "../../features/checkout/deliveryData.types";

interface props {
  data: Comic;
}
/**
 * Route to display the details of a purchased comic
 * @param data data fetched from the api
 * @returns a component which renders details of a comic
 * @author Eduardo C
 */
const Confirmation: NextPage<props> = ({ data }) => {
  const { state } = useOrder();
  console.log("este state en el purchase ocnfirmation", state.order.customer);
  if (!data) {
    return <></>;
  }
  const customer1: any = state.order;
  console.log("este es customer1", customer1);

  return (
    <>
      <PurchaseConfirm
        title={data.title}
        name={state.order.customer.name}
        email={state.order.customer.email}
        address1={state.order.customer.address1}
        city={state.order.customer.address1}
        image={data.thumbnail.path + "." + data.thumbnail.extension}
        price={data.price}
        lastname={state.order.customer.lastname}
        state={state.order.customer.address1}
      ></PurchaseConfirm>
    </>
  );
};

export default Confirmation;

export async function getServerSideProps(context: { query: { id: any } }) {
  const { id } = context.query;
  const res = await getComic(id);

  console.log(res);

  return { props: { data: res } };
}
