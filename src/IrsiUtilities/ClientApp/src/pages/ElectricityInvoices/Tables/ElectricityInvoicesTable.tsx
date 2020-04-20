import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { IElectricityInvoiceDto } from '../../../utils/api/IrsiUtilities';
import { AppState } from '../../../store/types';
import { useHistory } from 'react-router-dom';
import DataTable, { IDataTableColumn } from 'react-data-table-component';

export interface ElectricityInvoicesTableProps {}

// TODO: to fix issue with rendering pagination https://github.com/jbetancur/react-data-table-component/issues/500
const customStyle = {
  tableWrapper: {
    style: {
      display: 'block',
    },
  },
};

const FilterComponent = ({
  filterText,
  onFilter,
  onClear,
}: {
  filterText: string;
  onFilter: React.ChangeEventHandler<HTMLInputElement>;
  onClear: () => void;
}) => {
  return (
    <>
      <input id="search" type="text" placeholder="Filter By Invoice Number" value={filterText} onChange={onFilter} autoComplete="off" />
      <button type="button" onClick={onClear}>
        Clear
      </button>
    </>
  );
};

export function ElectricityInvoicesTable(props: ElectricityInvoicesTableProps) {
  const invoices = useSelector<AppState, IElectricityInvoiceDto[]>((state) =>
    state.electricityInvoices.allIds.map((id) => state.electricityInvoices.byId[id])
  );
  const history = useHistory();
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredInvoices = invoices.filter((item) => item.invoiceNumber && item.invoiceNumber.includes(filterText));

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

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };
    return <FilterComponent onFilter={(e) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);

  const columns = useMemo<IDataTableColumn<IElectricityInvoiceDto>[]>(
    () => [
      { name: 'Invoice Number', selector: 'invoiceNumber', sortable: true },
      { name: 'Invoice Date', cell: (row) => row.invoiceDate?.toLocaleDateString() },
      { name: 'Amount ($)', selector: 'amount' },
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
        data={filteredInvoices}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        customStyles={customStyle}
      />
    </>
  );
}
