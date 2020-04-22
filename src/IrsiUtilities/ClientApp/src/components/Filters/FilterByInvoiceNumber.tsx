import React from 'react';

interface FilterByInvoiceNumberProps {
  filterText: string;
  onFilter: React.ChangeEventHandler<HTMLInputElement>;
  onClear: () => void;
}

export function FilterByInvoiceNumber({ filterText, onFilter, onClear }: FilterByInvoiceNumberProps) {
  return (
    <>
      <input id="search" type="text" placeholder="Filter By Invoice Number" value={filterText} onChange={onFilter} autoComplete="off" />
      <button type="button" onClick={onClear}>
        Clear
      </button>
    </>
  );
}
