import React from "react";
import { useDispatch } from "react-redux";

import { KnownActions } from "../../store/types";
import { StoreActionTypes } from "../../store/Stores/types";
import { Dispatch } from "redux";

export const StoresPage: React.FC = () => {
  const dispatch = useDispatch<Dispatch<KnownActions>>();

  React.useEffect(() => {
    dispatch({ type: StoreActionTypes.GET_STORES });
  }, [dispatch]);
  
  return (
    <div style={{ flexGrow: 1 }}>
      <h1>Stores</h1>
    </div>
  );
};
