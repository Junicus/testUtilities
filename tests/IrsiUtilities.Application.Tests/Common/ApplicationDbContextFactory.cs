using System;
using System.Linq;
using IrsiUtilities.Application.Common.Interfaces;
using IrsiUtilities.Domain.Entities;
using IrsiUtilities.Infrastructure.Persistence;
using IrsiUtilities.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Moq;

namespace IrsiUtilities.Application.Tests.Common
{

    public class ApplicationDbContextFactory
    {
        public static UtilitiesDbContext Create()
        {
            var options = new DbContextOptionsBuilder<UtilitiesDbContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .Options;

            var currentUserMock = new Mock<ICurrentUserService>();
            currentUserMock.SetupGet(p => p.UserId).Returns("1");

            var context = new UtilitiesDbContext(options, currentUserMock.Object, new DateTimeService());

            context.Database.EnsureCreated();

            context.Stores.Add(new Store
            {
                Id = new Guid("F432D373-F751-42F5-BD50-C82345519F38"),
                Name = "Test Store",
                CostCenter = "001"
            });

            context.ElectricityInvoices.Add(new ElectricityInvoice
            {
                Id = new Guid("EA8C6F92-6FF3-4188-ABCC-2F159C7F9D9D"),
                StoreId = new Guid("F432D373-F751-42F5-BD50-C82345519F38")
            });

            context.WaterInvoices.Add(new WaterInvoice
            {
                Id = new Guid("29E00325-CFC3-4E0A-8919-80D3E6305E6B"),
                StoreId = new Guid("F432D373-F751-42F5-BD50-C82345519F38")
            });
            
            context.SaveChanges();

            var t = context.ElectricityInvoices.ToList();

            return context;
        }

        public static void Destroy(UtilitiesDbContext context)
        {
            context.Database.EnsureDeleted();
            context.Dispose();
        }
    }
}