import { object, string } from "yup";

const DeliverytSchema = object().shape({
  addressNumber: string().required("You must submit your address").min(5),
  typeOfHouse: string().optional(),
  city: string().required("You must submit the city for delivery").min(4),
  province: string()
    .required("You must submit the province for delivery")
    .min(4),
  postalCode: string()
    .required("You must submit the postal code of your residence area")
    .min(5),
});

export default DeliverytSchema;
