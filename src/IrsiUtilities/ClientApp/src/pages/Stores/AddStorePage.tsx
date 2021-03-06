import React, { useCallback } from 'react';
import { AddStoreForm } from './Forms/AddStoreForm';
import { IStoreDto } from '../../utils/api/IrsiUtilities';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { KnownActions } from '../../store/types';
import { StoreActionTypes } from '../../store/Stores/types';
import { useHistory } from 'react-router-dom';

export const AddStorePage: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<KnownActions>>();
  const handleAddStore = useCallback(
    (values: IStoreDto) => {
      dispatch({
        type: StoreActionTypes.ADD_STORE,
        payload: {
          store: values,
        },
      });
      console.log(values);
      history.goBack();
    },
    [dispatch, history]
  );

  const handleBackClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <div style={{ height: 'calc(100vh - 54px)' }}>
      <button onClick={handleBackClick}>back</button>
      <h1>Add Store</h1>
      <AddStoreForm onAddStore={handleAddStore} />
    </div>
  );
};
