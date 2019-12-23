using System;
using IrsiUtilities.Application.Common.Interfaces;

namespace IrsiUtilities.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}