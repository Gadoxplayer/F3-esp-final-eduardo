import { object, string, number } from "yup";

const PaymentSchema = object().shape({
  ccname: string()
    .required("You must submit your name as is shown in your card")
    .min(2),
  cardNumber: number().required("You must submit your card number").min(16),
  exDate: string()
    .required("You must submit the expiration date of your card")
    .min(5),
  CVV: number()
    .required("You must submit the CVV number at the back of your card")
    .max(3),
});

export default PaymentSchema;
