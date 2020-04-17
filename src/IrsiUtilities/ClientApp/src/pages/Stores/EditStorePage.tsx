import React, { useCallback, useEffect } from 'react';
import { useRouteMatch, useLocation, Link, useHistory } from 'react-router-dom';
import { IStoreDto } from '../../utils/api/IrsiUtilities';
import { EditStoreForm } from './Forms/EditStoreForm';
import { useDispatch, useSelector } from 'react-redux';
import { KnownActions, AppState } from '../../store/types';
import { Dispatch } from 'redux';
import { StoreActionTypes } from '../../store/Stores/types';

export function EditStorePage() {
  //const location = useLocation<{ redirect: boolean }>();
  const match = useRouteMatch<{ id: string }>();
  const dispatch = useDispatch<Dispatch<KnownActions>>();
  const history = useHistory();

  const store = useSelector<AppState, IStoreDto | undefined>((state) => state.stores.byId[match.params.id]);

  useEffect(() => {
    dispatch({
      type: StoreActionTypes.GET_STORE,
      payload: {
        storeId: match.params.id,
      },
    });
  }, [dispatch, match]);

  const hanldeStoreUpdate = useCallback(
    (updatedStore: IStoreDto) => {
      dispatch({
        type: StoreActionTypes.UPDATE_STORE,
        payload: {
          store: updatedStore,
        },
      });
      console.log(updatedStore);
      history.goBack();
    },
    [dispatch, history]
  );

  const handleBackClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div>
      <button onClick={handleBackClick}>Back</button>
      <h1>Edit Store</h1>
      {store && (
        <div>
          <EditStoreForm initialValues={store} onUpdateStore={hanldeStoreUpdate} />
        </div>
      )}
      {!store && (
        <div>
          Didn't find store, <Link to="/stores">Go To Stores</Link>
        </div>
      )}
    </div>
  );
}
