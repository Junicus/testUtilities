export interface ColumnDefinition<T> {
  id?: string;
  key?: string | number | symbol;
  title: string;
  cell?: (record: T) => React.ReactElement;
}
