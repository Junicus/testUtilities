import React, { useMemo, useCallback } from 'react';
import { IStoreDto } from '../../../utils/api/IrsiUtilities';
import DataTable, { IDataTableColumn } from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, KnownActions } from '../../../store/types';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';
import { StoreActionTypes } from '../../../store/Stores/types';

export interface StoresTableProps {
  stores: IStoreDto[];
}

// TODO: to fix issue with rendering pagination https://github.com/jbetancur/react-data-table-component/issues/500
const customStyle = {
  tableWrapper: {
    style: {
      display: 'block',
    },
  },
};

export function StoresTable({ stores }: StoresTableProps) {
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<KnownActions>>();

  const handleAddStoreClick = useCallback(() => {
    history.push('/stores/add');
  }, [history]);

  const handleEditStoreClick = useCallback(
    (record: IStoreDto) => {
      history.push(`/stores/edit/${record.id}`);
    },
    [history]
  );

  const handleDeleteStoreClick = useCallback((record: IStoreDto) => {
    dispatch({ type: StoreActionTypes.DELETE_STORE, payload: { storeId: record.id } });
  }, []);

  const columns = useMemo<IDataTableColumn<IStoreDto>[]>(
    () => [
      {
        selector: 'name',
        name: 'Name',
        sortable: true,
      },
      {
        selector: 'costCenter',
        name: 'Cost Center',
        sortable: true,
      },
      {
        name: 'Actions',
        cell: (record: IStoreDto) => (
          <div>
            <button onClick={() => handleEditStoreClick(record)}>Edit</button>
            {/* <button onClick={() => handleDeleteStoreClick(record)}>Delete</button> */}
          </div>
        ),
      },
    ],
    [handleEditStoreClick, handleDeleteStoreClick]
  );

  return (
    <>
      <DataTable
        title="Stores"
        actions={<button onClick={() => handleAddStoreClick()}>Add</button>}
        columns={columns}
        data={stores}
        pagination
        customStyles={customStyle}
      />
    </>
  );
}
