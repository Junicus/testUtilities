import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import { WaterInvoicesActionTypes } from "../../store/WaterInvoices/types";
import { KnownActions } from "../../store/types";

export const WaterInvoicesPage = () => {
  const dispatch = useDispatch<Dispatch<KnownActions>>();

  React.useEffect(() => {
    dispatch({ type: WaterInvoicesActionTypes.GET_WATER_INVOICES });
  }, [dispatch]);

  return (
    <div>
      <h1>Water Invoices</h1>
    </div>
  );
};
