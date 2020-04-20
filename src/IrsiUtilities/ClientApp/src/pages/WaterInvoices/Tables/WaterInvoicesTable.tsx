import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { IWaterInvoiceDto } from '../../../utils/api/IrsiUtilities';
import { AppState } from '../../../store/types';
import { useHistory } from 'react-router-dom';
import DataTable, { IDataTableColumn } from 'react-data-table-component';

export interface WaterInvoicesTableProps {}

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
      <input id="search" type="text" placeholder="Filter By Invoice Number" value={filterText} onChange={onFilter} autoComplete='off' />
      <button type="button" onClick={onClear}>
        Clear
      </button>
    </>
  );
};

export function WaterInvoicesTable(props: WaterInvoicesTableProps) {
  const invoices = useSelector<AppState, IWaterInvoiceDto[]>((state) =>
    state.waterInvoices.allIds.map((id) => state.waterInvoices.byId[id])
  );
  const history = useHistory();
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredInvoices = invoices.filter((item) => item.invoiceNumber && item.invoiceNumber.includes(filterText));

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

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };
    return <FilterComponent onFilter={(e) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);

  const columns = useMemo<IDataTableColumn<IWaterInvoiceDto>[]>(
    () => [
      { name: 'Invoice Number', selector: 'invoiceNumber', sortable: true },
      { name: 'Invoice Date', cell: (row) => row.invoiceDate?.toLocaleDateString() },
      { name: 'Amount ($)', selector: 'amount' },
      {
        name: 'Actions',
        cell: (row) => (
          <div>
            <button onClick={() => handleEditWaterInvoiceClick(row)}>Edit</button>
            <button onClick={() => handleDeleteWaterInvoice(row)}>Delete</button>
          </div>
        ),
      },
    ],
    [handleEditWaterInvoiceClick, handleDeleteWaterInvoice]
  );

  return (
    <>
      <DataTable
        title="Water Invoices"
        actions={<button onClick={() => handleAddWaterInvoiceClick()}>Add</button>}
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
