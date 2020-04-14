using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IrsiUtilities.Infrastructure.Persistence;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace IrsiUtilities
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var shouldSeed = args.Any(x => x == "/seed");
            if (shouldSeed) args = args.Except(new[] { "/seed" }).ToArray();

            var host = CreateHostBuilder(args).Build();

            if (shouldSeed)
            {
                SeedData.EnsureDataSeeded(host.Services);
                return;
            }

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
