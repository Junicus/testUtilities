import React from 'react';
import { PropsWithChildren } from 'react';
import { ColumnDefinition } from './types';
import { decorateColumns } from './utilities';

export interface TableProps<T> {
  title?: string;
  data: T[];
  columns: ColumnDefinition<T>[];
}

export function Table<T extends { id: number | string }>({ title, data, columns }: PropsWithChildren<TableProps<T>>) {
  const columnsMemo = React.useMemo(() => decorateColumns(columns), [columns]);

  return (
    <>
      <table style={{ border: '1px solid red' }}>
        <Head columns={columnsMemo} />
        <tbody>
          {data.map((record) => (
            <Row key={record.id} record={record} columns={columnsMemo} />
          ))}
        </tbody>
      </table>
    </>
  );
}

interface HeadProps<T> {
  columns: ColumnDefinition<T>[];
}

function Head<T>({ columns }: HeadProps<T>) {
  console.log(columns);
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.id}>{column.title}</th>
        ))}
      </tr>
    </thead>
  );
}

interface RowProps<R> {
  record: R;
  columns: ColumnDefinition<R>[];
}

function Row<R extends Record<any, string | number>>({ record, columns }: RowProps<R>) {
  console.log({ record, columns });
  return (
    <tr>
      {columns.map((column) => {
        if (column.key) {
          return <td key={column.id}>{record[String(column.key)]}</td>;
        } else {
          return <td key={column.id}>{column.cell ? column.cell(record) : null}</td>;
        }
      })}
    </tr>
  );
}
