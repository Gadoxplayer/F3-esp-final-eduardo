import { createContext, FC, useReducer, useMemo, Dispatch } from "react";
import { PropsWithChildren } from "react";
import { DeliveryDataType } from "../checkout/deliveryData.types";
import { PaymentDataType } from "../checkout/paymentData.type";
import { PersonalDataType } from "../checkout/personalData.type";

export type Order = {
  customer: PersonalDataType;
  card: PaymentDataType;
  address: DeliveryDataType;
};

export interface OrderState {
  order: Order;
}

export interface OrderContextState {
  state: { order: Order };
  dispatch: Dispatch<OrderActionType>;
}

export const OrderContext =
  createContext<OrderContextState | undefined>(undefined);

type OrderSetCustomerType = {
  type: "SET_CUSTOMER";
  payload: PersonalDataType;
};

type OrderSetCardType = {
  type: "SET_CARD";
  payload: PaymentDataType;
};

type OrderSetStringType = {
  type: "SET_CUSTOMER_AND_ADVANCE";
  payload: {
    activeStep: number;
    customer: {};
  };
};

type OrderSetAddressType = {
  type: "SET_ADDRESS";
  payload: DeliveryDataType;
};

type OrderActionType =
  | OrderSetCustomerType
  | OrderSetCardType
  | OrderSetAddressType
  | OrderSetStringType;

export const reducer = (state: OrderState, action: OrderActionType) => {
  switch (action.type) {
    case "SET_CUSTOMER":
      return {
        ...state,
        order: {
          ...state.order,
          customer: action.payload,
        },
      };
    case "SET_CARD":
      return {
        ...state,
        order: {
          ...state.order,
          card: action.payload,
        },
      };
    case "SET_ADDRESS":
      return {
        ...state,
        order: {
          ...state.order,
          card: action.payload,
        },
      };
    default:
      return state;
  }
};

const initialState: OrderState = {
  order: {
    customer: {} as PersonalDataType,
    card: {} as PaymentDataType,
    address: {} as DeliveryDataType,
  },
};

export const OrderProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);

  const value = useMemo<any>(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
