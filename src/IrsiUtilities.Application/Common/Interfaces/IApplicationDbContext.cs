using System.Threading;
using System.Threading.Tasks;
using IrsiUtilities.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace IrsiUtilities.Application.Common.Interfaces
{
    public interface IApplicationDbContext
    {
        DbSet<Store> Stores { get; set; }
        DbSet<ElectricityInvoice> ElectricityInvoices { get; set; }
        DbSet<WaterInvoice> WaterInvoices { get; set; }

        Task<int> SaveChangesAsync(CancellationToken cancellationToken);
    }
}