import React, { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { IElectricityInvoiceDto } from '../../../utils/api/IrsiUtilities';
import { AppState } from '../../../store/types';
import { useHistory } from 'react-router-dom';
import DataTable, { IDataTableColumn } from 'react-data-table-component';

export interface ElectricityInvoicesTableProps {}

export function ElectricityInvoicesTable(props: ElectricityInvoicesTableProps) {
  const invoices = useSelector<AppState, IElectricityInvoiceDto[]>((state) =>
    state.electricityInvoices.allIds.map((id) => state.electricityInvoices.byId[id])
  );
  const history = useHistory();

  const handleAddElecticityInvoiceClick = useCallback(() => {
    history.push('/electricity/add');
  }, [history]);

  const handleEditElectricityInvoiceClick = useCallback(
    (record: IElectricityInvoiceDto) => {
      history.push(`/electricity/edit/${record.id}`);
    },
    [history]
  );

  const handleDeleteElectricityInvoice = useCallback((record: IElectricityInvoiceDto) => {
    console.log('Delete: ', record);
  }, []);

  const columns = useMemo<IDataTableColumn<IElectricityInvoiceDto>[]>(
    () => [
      {
        name: 'Actions',
        cell: (record: IElectricityInvoiceDto) => (
          <div>
            <button onClick={() => handleEditElectricityInvoiceClick(record)}>Edit</button>
            <button onClick={() => handleDeleteElectricityInvoice(record)}>Delete</button>
          </div>
        ),
      },
    ],
    [handleEditElectricityInvoiceClick, handleDeleteElectricityInvoice]
  );

  console.log(invoices);

  return (
    <>
      <DataTable
        title="Electricity Invoices"
        actions={<button onClick={() => handleAddElecticityInvoiceClick()}>Add</button>}
        columns={columns}
        data={invoices}
        pagination
      />
    </>
  );
}
