import { CheckoutInput } from "./checkout.types";

export const postForm = async (data: CheckoutInput | any) => {
  console.log("post realizado", data);

  await fetch("/api/checkout/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.status === 405) {
      console.log("Error");
    } else {
      return res.json();
    }
  });
};
