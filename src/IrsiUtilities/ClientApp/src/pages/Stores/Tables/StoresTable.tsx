import React, { useMemo, useCallback } from 'react';
import { IStoreDto } from '../../../utils/api/IrsiUtilities';
import DataTable, { IDataTableColumn } from 'react-data-table-component';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store/types';
import { useHistory } from 'react-router-dom';

export interface StoresTableProps {}

// TODO: to fix issue with rendering pagination https://github.com/jbetancur/react-data-table-component/issues/500
const customStyle = {
  tableWrapper: {
    style: {
      display: 'block',
    },
  },
};

export function StoresTable(props: StoresTableProps) {
  const stores = useSelector<AppState, IStoreDto[]>((state) => state.stores.allIds.map((id) => state.stores.byId[id]));
  const history = useHistory();

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
    console.log('Delete: ', record);
  }, []);

  const columns = useMemo<IDataTableColumn<IStoreDto>[]>(
    () => [
      {
        selector: 'name',
        name: 'Name',
        sortable: true,
      },
      {
        name: 'Actions',
        cell: (record: IStoreDto) => (
          <div>
            <button onClick={() => handleEditStoreClick(record)}>Edit</button>
            <button onClick={() => handleDeleteStoreClick(record)}>Delete</button>
          </div>
        ),
      },
    ],
    [handleEditStoreClick, handleDeleteStoreClick]
  );

  console.log(stores);

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
