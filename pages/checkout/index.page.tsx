import { CheckoutView } from "dh-marvel/components/checkoutView/checkoutView";
import { NextPage } from "next";
interface props {
  data: any;
}
const CheckoutComic: NextPage<props> = ({ data }) => {
  return <CheckoutView title={"Checkout"} />;
};

export default CheckoutComic;
