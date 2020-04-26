import { IStoreDto, IWaterInvoiceDto, IElectricityInvoiceDto } from './api/IrsiUtilities';

type ConverterCallback<T> = (data: T[], stores: Record<string, IStoreDto>) => string | null;

export function downloadCSV<T>(array: T[], stores: Record<string, IStoreDto>, callback: ConverterCallback<T>) {
  const link = document.createElement('a');
  let csv = callback(array, stores);
  console.log(csv);
  if (csv === null) return;

  const filename = 'invoices.csv';

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute('href', encodeURI(csv));
  link.setAttribute('download', filename);
  link.click();
}

export function waterInvoiceConverter(invoices: IWaterInvoiceDto[], stores: Record<string, IStoreDto>) {
  let result = '';

  const columnDelimiter = ',';
  const lineDelimiter = '\r\n';

  result += getAPHeaders(columnDelimiter, lineDelimiter);

  result += invoices
    .map((invoice, idx) => {
      const store = stores[invoice.storeId];
      return convertWaterInvoice(invoice, store, 1, idx + 1, columnDelimiter, lineDelimiter);
    })
    .join('');

  return result;
}

function convertWaterInvoice(
  invoice: IWaterInvoiceDto,
  store: IStoreDto,
  batchnum: number,
  index: number,
  columnDelimiter: string,
  lineDelimiter: string
) {
  let result = '';
  result += createRecord1Water(invoice, store, batchnum, index, columnDelimiter, lineDelimiter);
  result += createRecord2Water(invoice, store, batchnum, index, columnDelimiter, lineDelimiter);
  result += createRecord3(invoice, batchnum, index, columnDelimiter, lineDelimiter);

  return result;
}

export function electricityInvoiceConverter(invoices: IElectricityInvoiceDto[], stores: Record<string, IStoreDto>) {
  let result = '';

  const columnDelimiter = ',';
  const lineDelimiter = '\r\n';

  result += getAPHeaders(columnDelimiter, lineDelimiter);

  result += invoices
    .map((invoice, idx) => {
      const store = stores[invoice.storeId];
      return convertElectricityInvoice(invoice, store, 1, idx + 1, columnDelimiter, lineDelimiter);
    })
    .join('');

  return result;
}

function convertElectricityInvoice(
  invoice: IElectricityInvoiceDto,
  store: IStoreDto,
  batchnum: number,
  index: number,
  columnDelimiter: string,
  lineDelimiter: string
) {
  let result = '';
  result += createRecord1Electricity(invoice, store, batchnum, index, columnDelimiter, lineDelimiter);
  result += createRecord2Electricity(invoice, store, batchnum, index, columnDelimiter, lineDelimiter);
  result += createRecord3(invoice, batchnum, index, columnDelimiter, lineDelimiter);

  return result;
}

function getAPHeaders(columnDelimiter: string = ',', lineDelimiter: string = '\n') {
  let result = '';

  // prettier-ignore
  const record1Headers = ["RECTYPE","CNTBTCH","CNTITEM","IDVEND","IDINVC","TEXTTRX","INVCDESC","DATEINVC","AMTINVCTOT","AMTDUE","AMTGROSTOT","AMTDUETC"];
  // prettier-ignore
  const record2Headers = ["RECTYPE","CNTBTCH","CNTITEM","CNTLINE","TEXTDESC","IDGLACCT","AMTDIST","AMTDISTNET","AMTGLDIST"];
  // prettier-ignore
  const record3Headers = ["RECTYPE","CNTBTCH","CNTITEM","CNTPAYM","DATEDUE","AMTDUE","DATEDISC","AMTDISC"];
  // prettier-ignore
  const record4Headers = ["RECTYPE"];
  // prettier-ignore
  const record5Headers = ["RECTYPE"];

  result += record1Headers.map(wrapInQuotes).join(columnDelimiter) + lineDelimiter;
  result += record2Headers.map(wrapInQuotes).join(columnDelimiter) + lineDelimiter;
  result += record3Headers.map(wrapInQuotes).join(columnDelimiter) + lineDelimiter;
  result += record4Headers.map(wrapInQuotes).join(columnDelimiter) + lineDelimiter;
  result += record5Headers.map(wrapInQuotes).join(columnDelimiter) + lineDelimiter;

  return result;
}

function wrapInQuotes(data: string) {
  return `"${data}"`;
}

function createRecord1Water(
  invoice: IWaterInvoiceDto | IElectricityInvoiceDto,
  store: IStoreDto,
  batchnum: number,
  index: number,
  columnDelimiter: string,
  lineDelimiter: string
) {
  return (
    [
      '"1"',
      batchnum,
      index,
      `"15${store.costCenter}AAA"`,
      `"${invoice.invoiceNumber}"`,
      1,
      `"${invoice.previousRead?.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')}-${invoice.currentRead?.replace(
        /(\d+)-(\d+)-(\d+)/,
        '$2/$3/$1'
      )}"`,
      invoice.invoiceDate?.replace(/-/g, ''),
      invoice.amount,
      invoice.amount,
      invoice.amount,
    ].join(columnDelimiter) + lineDelimiter
  );
}

function createRecord1Electricity(
  invoice: IWaterInvoiceDto | IElectricityInvoiceDto,
  store: IStoreDto,
  batchnum: number,
  index: number,
  columnDelimiter: string,
  lineDelimiter: string
) {
  return (
    [
      '"1"',
      batchnum,
      index,
      `"15${store.costCenter}AEE"`,
      `"${invoice.invoiceNumber}"`,
      1,
      `"${invoice.previousRead?.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')}-${invoice.currentRead?.replace(
        /(\d+)-(\d+)-(\d+)/,
        '$2/$3/$1'
      )}"`,
      invoice.invoiceDate?.replace(/-/g, ''),
      invoice.amount,
      invoice.amount,
      invoice.amount,
    ].join(columnDelimiter) + lineDelimiter
  );
}

function createRecord2Water(
  invoice: IWaterInvoiceDto | IElectricityInvoiceDto,
  store: IStoreDto,
  batchnum: number,
  index: number,
  columnDelimiter: string,
  lineDelimiter: string
) {
  return (
    [
      '"2"',
      batchnum,
      index,
      10,
      `"${invoice.usageDays}"`,
      `"6363-${store.costCenter}"`,
      invoice.amount,
      invoice.amount,
      invoice.amount,
    ].join(columnDelimiter) + lineDelimiter
  );
}

function createRecord2Electricity(
  invoice: IWaterInvoiceDto | IElectricityInvoiceDto,
  store: IStoreDto,
  batchnum: number,
  index: number,
  columnDelimiter: string,
  lineDelimiter: string
) {
  return (
    [
      '"2"',
      batchnum,
      index,
      10,
      `"${invoice.usageDays}"`,
      `"6361-${store.costCenter}"`,
      invoice.amount,
      invoice.amount,
      invoice.amount,
    ].join(columnDelimiter) + lineDelimiter
  );
}

function createRecord3(
  invoice: IWaterInvoiceDto | IElectricityInvoiceDto,
  batchnum: number,
  index: number,
  columnDelimiter: string,
  lineDelimiter: string
) {
  return ['"3"', batchnum, index, 1, invoice.invoiceDate?.replace(/-/g, ''), invoice.amount, '', 0].join(columnDelimiter) + lineDelimiter;
}
