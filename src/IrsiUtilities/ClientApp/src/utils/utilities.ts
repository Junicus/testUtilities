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
  const lineDelimiter = '\n';

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
  result +=
    [
      '"1"',
      batchnum,
      index,
      `"15${store.costCenter}AAA"`,
      `"${invoice.invoiceNumber}"`,
      `"${invoice.previousRead?.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')}-${invoice.currentRead?.replace(
        /(\d+)-(\d+)-(\d+)/,
        '$2/$3/$1'
      )}"`,
      invoice.invoiceDate?.replace(/-/g, ''),
    ].join(columnDelimiter) + lineDelimiter;
  result +=
    [
      '"2"',
      batchnum,
      index,
      10,
      `"${invoice.usageDays}"`,
      `"6363-${store.costCenter}"`,
      `"6363-${store.costCenter}"`,
      invoice.amount,
      invoice.amount,
      invoice.amount,
    ].join(columnDelimiter) + lineDelimiter;
  result +=
    ['"3"', batchnum, index, 1, invoice.invoiceDate?.replace(/-/g, ''), invoice.amount, '', invoice.amount, ''].join(columnDelimiter) +
    lineDelimiter;

  return result;
}

export function electricityInvoiceConverter(invoices: IElectricityInvoiceDto[], stores: Record<string, IStoreDto>) {
  let result = '';

  const columnDelimiter = '\t';
  const lineDelimiter = '\n';

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
  result +=
    [
      '"1"',
      batchnum,
      index,
      `"15${store.costCenter}AEE"`,
      `"${invoice.invoiceNumber}"`,
      `${invoice.previousRead?.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')}-${invoice.currentRead?.replace(/(\d+)-(\d+)-(\d+)/, '$2/$3/$1')}`,
      invoice.invoiceDate?.replace(/-/g, ''),
    ].join(columnDelimiter) + lineDelimiter;
  result +=
    [
      '"2"',
      batchnum,
      index,
      10,
      `"${invoice.usageDays}"`,
      `"6363-${store.costCenter}"`,
      `"6363-${store.costCenter}"`,
      invoice.amount,
      invoice.amount,
      invoice.amount,
    ].join(columnDelimiter) + lineDelimiter;
  result +=
    ['"3"', batchnum, index, 1, invoice.invoiceDate?.replace(/-/g, ''), invoice.amount, '', invoice.amount, ''].join(columnDelimiter) +
    lineDelimiter;

  return result;
}

function getAPHeaders(columnDelimiter: string = ',', lineDelimiter: string = '\n') {
  let result = '';

  const record1Headers = ['"RECTYPE"', '"CNTBTCH"', '"CNTITEM"', '"IDVEND"', '"IDINVC"', '"INVCDESC"', '"DATEINVC"'];
  const record2Headers = [
    '"RECTYPE"',
    '"CNTBTCH"',
    '"CNTITEM"',
    '"CNTLINE"',
    '"TEXTDESC"',
    '"IDGLACCT"',
    '"IDACCTTAX"',
    '"AMTDIST"',
    '"AMTDISTNET"',
    '"AMTGLDIST"',
  ];
  const record3Headers = [
    '"RECTYPE"',
    '"CNTBTCH"',
    '"CNTITEM"',
    '"CNTPAYM"',
    '"DATEDUE"',
    '"AMTDUE"',
    '"DATEDISC"',
    '"AMTDISC"',
    '"AMTDUEHC"',
    '"AMTDISCHC"',
  ];
  const record4Headers = [
    '"RECTYPE"',
    '"CNTBTCH"',
    '"CNTITEM"',
    '"OPTFIELD"',
    '"VALUE"',
    '"TYPE"',
    '"LENGTH"',
    '"DECIMALS"',
    '"ALLOWNULL"',
    '"VALIDATE"',
    '"SWSET"',
    '"VALINDEX"',
    '"VALIFTEXT"',
    '"VALIFMONEY"',
    '"VALIFNUM"',
    '"VALIFLONG"',
    '"VALIFBOOL"',
    '"VALIFDATE"',
    '"VALIFTIME"',
    '"FDESC"',
    '"VDESC"',
  ];
  const record5Headers = [
    '"RECTYPE"',
    '"CNTBTCH"',
    '"CNTITEM"',
    '"CNTLINE"',
    '"OPTFIELD"',
    '"VALUE"',
    '"TYPE"',
    '"LENGTH"',
    '"DECIMALS"',
    '"ALLOWNULL"',
    '"VALIDATE"',
    '"SWSET"',
    '"VALINDEX"',
    '"VALIFTEXT"',
    '"VALIFMONEY"',
    '"VALIFNUM"',
    '"VALIFLONG"',
    '"VALIFBOOL"',
    '"VALIFDATE"',
    '"VALIFTIME"',
    '"FDESC"',
    '"VDESC"',
  ];

  result += record1Headers.join(columnDelimiter) + lineDelimiter;
  result += record2Headers.join(columnDelimiter) + lineDelimiter;
  result += record3Headers.join(columnDelimiter) + lineDelimiter;
  result += record4Headers.join(columnDelimiter) + lineDelimiter;
  result += record5Headers.join(columnDelimiter) + lineDelimiter;

  return result;
}
