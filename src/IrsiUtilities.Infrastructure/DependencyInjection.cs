using System.Collections.Generic;
using System.Security.Claims;
using IdentityModel;
using IdentityServer4.Models;
using IdentityServer4.Test;
using IrsiUtilities.Application.Common.Interfaces;
using IrsiUtilities.Infrastructure.Identity;
using IrsiUtilities.Infrastructure.Persistence;
using IrsiUtilities.Infrastructure.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace IrsiUtilities.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services,
            IConfiguration configuration, IWebHostEnvironment environment)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DefaultConnection"),
                    b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)));

            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());

            services.AddDefaultIdentity<ApplicationUser>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            if (environment.IsEnvironment("Test"))
            {
                services.AddIdentityServer()
                    .AddApiAuthorization<ApplicationUser, ApplicationDbContext>(options =>
                    {
                        options.Clients.Add(new Client
                        {
                            ClientId = "IrsiUtilities.IntegrationTests",
                            AllowedGrantTypes = { GrantType.ResourceOwnerPassword },
                            ClientSecrets = { new Secret("secret".Sha256()) },
                            AllowedScopes = { "openid", "profile", "IrsiUtilities.API" }
                        });
                    }).AddTestUsers(new List<TestUser>
                    {
                        new TestUser
                        {
                            SubjectId = "3807EF48-95AA-4573-9A21-04F3C17060C8",
                            Username = "test@my.com",
                            Password = "Passw0rd!",
                            Claims = new List<Claim>
                            {
                                new Claim(JwtClaimTypes.Email, "test@my.com")
                            }
                        }
                    });
            }
            else
            {
                services.AddIdentityServer()
                    .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();

                services.AddTransient<IDateTime, DateTimeService>();
                services.AddTransient<IIdentityService, IdentityService>();
            }

            services.AddAuthentication()
                .AddIdentityServerJwt();

            return services;
        }
    }
}