import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IWaterInvoiceDto } from '../../../utils/api/IrsiUtilities';
import { AppState } from '../../../store/types';
import { useHistory } from 'react-router-dom';
import DataTable, { IDataTableColumn } from 'react-data-table-component';

export interface WaterInvoicesTableProps {}

export function WaterInvoicesTable(props: WaterInvoicesTableProps) {
  const invoices = useSelector<AppState, IWaterInvoiceDto[]>((state) =>
    state.waterInvoices.allIds.map((id) => state.waterInvoices.byId[id])
  );
  const history = useHistory();

  const handleAddWaterInvoiceClick = useCallback(() => {
    history.push('/water/add');
  }, [history]);

  const handleEditWaterInvoiceClick = useCallback(
    (record: IWaterInvoiceDto) => {
      history.push(`/water/edit/${record.id}`);
    },
    [history]
  );

  const handleDeleteWaterInvoice = useCallback((record: IWaterInvoiceDto) => {
    console.log('Delete: ', record);
  }, []);

  const columns = useMemo<IDataTableColumn<IWaterInvoiceDto>[]>(
    () => [
      {
        name: 'Actions',
        cell: (record: IWaterInvoiceDto) => (
          <div>
            <button onClick={() => handleEditWaterInvoiceClick(record)}>Edit</button>
            <button onClick={() => handleDeleteWaterInvoice(record)}>Delete</button>
          </div>
        ),
      },
    ],
    [handleEditWaterInvoiceClick, handleDeleteWaterInvoice]
  );

  console.log(invoices);

  return (
    <>
      <DataTable
        title="Water Invoices"
        actions={<button onClick={() => handleAddWaterInvoiceClick()}>Add</button>}
        columns={columns}
        data={invoices}
        pagination
      />
    </>
  );
}
