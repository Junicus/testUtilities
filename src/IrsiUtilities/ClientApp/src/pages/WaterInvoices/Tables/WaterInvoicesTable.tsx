import React, { useCallback, useMemo, useState } from 'react';
import { IWaterInvoiceDto, IStoreDto } from '../../../utils/api/IrsiUtilities';
import { useHistory } from 'react-router-dom';
import DataTable, { IDataTableColumn } from 'react-data-table-component';
import { downloadCSV, waterInvoiceConverter } from '../../../utils/utilities';
import { FilterByInvoiceNumber } from '../../../components/Filters/FilterByInvoiceNumber';
import { WaterInvoiceActionTypes } from '../../../store/WaterInvoices/types';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { KnownActions } from '../../../store/types';

export interface WaterInvoicesTableProps {
  invoices: IWaterInvoiceDto[];
  stores: Record<string, IStoreDto>;
}

// TODO: to fix issue with rendering pagination https://github.com/jbetancur/react-data-table-component/issues/500
const customStyle = {
  tableWrapper: {
    style: {
      display: 'block',
    },
  },
};

export function WaterInvoicesTable({ invoices, stores }: WaterInvoicesTableProps) {
  const history = useHistory();
  const dispatch = useDispatch<Dispatch<KnownActions>>();
  const [filterInvoiceNumberText, setFilterInvoiceNumberText] = useState('');
  const [filterDateText, setFilterDateText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleClieared] = useState(false);

  const filteredInvoices = invoices.filter((item) => item.invoiceNumber && item.invoiceNumber.includes(filterInvoiceNumberText));

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
    dispatch({ type: WaterInvoiceActionTypes.DELETE_WATER_INVOICE, payload: { invoiceId: record.id } });
  }, []);

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const contextAction = useMemo(() => {
    const handleExport = () => {
      downloadCSV<IWaterInvoiceDto>(selectedRows, stores, waterInvoiceConverter);
      setToggleClieared(!toggleCleared);
    };
    return <button onClick={handleExport}>Export to Sage</button>;
  }, [selectedRows, toggleCleared, stores]);

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterInvoiceNumberText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterInvoiceNumberText('');
      }
    };
    return (
      <FilterByInvoiceNumber
        onFilter={(e) => setFilterInvoiceNumberText(e.target.value)}
        onClear={handleClear}
        filterText={filterInvoiceNumberText}
      />
    );
  }, [filterInvoiceNumberText, resetPaginationToggle]);

  const columns = useMemo<IDataTableColumn<IWaterInvoiceDto>[]>(
    () => [
      { name: 'Invoice Number', selector: 'invoiceNumber', sortable: true },
      { name: 'Invoice Date', selector: 'invoiceDate', sortable: true }, //row.invoiceDate?.toLocaleDateString() },
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
        selectableRows
        contextActions={contextAction}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        customStyles={customStyle}
      />
    </>
  );
}
