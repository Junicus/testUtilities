using System.Collections.Generic;

namespace IrsiUtilities.Application.ElectricityInvoices.Queries
{
    public class ElectricityInvoicesVM
    {
        public IList<ElectricityInvoiceDto> Invoices { get; set; }
    }
}