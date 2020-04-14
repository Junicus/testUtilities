using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace IrsiUtilities.Infrastructure.Persistence
{
    public static class SeedData
    {
        public static void EnsureDataSeeded(IServiceProvider serviceProvider)
        {
            var config = serviceProvider.GetRequiredService<IConfiguration>();
            RunMigrations(serviceProvider);
            SeedIdentity(serviceProvider, config);
        }

        private static void RunMigrations(IServiceProvider serviceProvider)
        {
            Console.WriteLine("Running Migrations...");
            using var scope = serviceProvider.GetRequiredService<IServiceScopeFactory>().CreateScope();
            var applicationContext = scope.ServiceProvider.GetService<ApplicationDbContext>();
            applicationContext.Database.Migrate();
        }

        private static void SeedIdentity(IServiceProvider serviceProvider, IConfiguration configuration)
        {
            Console.WriteLine("Seeding Identity...");
        }
    }
}