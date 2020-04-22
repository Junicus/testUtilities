import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { KnownActions, AppState } from '../../store/types';
import { StoreActionTypes } from '../../store/Stores/types';
import { Dispatch } from 'redux';
import { StoresTable } from './Tables/StoresTable';
import { IStoreDto } from '../../utils/api/IrsiUtilities';

export const StoresPage: React.FC = () => {
  const stores = useSelector<AppState, IStoreDto[]>((state) => state.stores.allIds.map((id) => state.stores.byId[id]));
  const dispatch = useDispatch<Dispatch<KnownActions>>();

  React.useEffect(() => {
    dispatch({ type: StoreActionTypes.GET_STORES });
  }, [dispatch]);

  return (
    <div style={{ flexGrow: 1 }}>
      <StoresTable stores={stores} />
    </div>
  );
};
