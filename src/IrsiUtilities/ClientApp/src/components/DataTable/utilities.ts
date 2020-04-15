import shortid from 'shortid';
import { ColumnDefinition } from './types';

export function decorateColumns<T>(columns: ColumnDefinition<T>[]) {
  return columns.map((column) => ({
    id: shortid.generate(),
    ...column,
  }));
}
