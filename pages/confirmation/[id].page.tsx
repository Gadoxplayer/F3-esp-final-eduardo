import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { CardDetail } from "dh-marvel/components/carDetail/cardDetail";
import { PurchaseConfirm } from "dh-marvel/components/purchaseConfirm/purchaseconfirm";
import { Comic } from "dh-marvel/features/types";
import { getComic } from "dh-marvel/services/marvel/marvel.service";
import { NextPage } from "next";
import Link from "next/link";

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
  return (
    <>
      <PurchaseConfirm
        title={data.title}
        name={"a"}
        email={"a"}
        address={"a"}
        city={"a"}
        image={data.thumbnail.path + "." + data.thumbnail.extension}
        price={data.price}
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
