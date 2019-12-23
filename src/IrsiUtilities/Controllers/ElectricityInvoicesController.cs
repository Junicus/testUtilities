using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IrsiUtilities.Application.ElectricityInvoices.Commands;
using IrsiUtilities.Application.ElectricityInvoices.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IrsiUtilities.Controllers
{
    [Authorize]
    public class ElectricityInvoicesController : ApiController
    {
        [HttpGet]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ElectricityInvoicesVM), (int)StatusCodes.Status200OK)]
        public async Task<ActionResult<ElectricityInvoicesVM>> Get()
        {
            return await Mediator.Send(new GetElectricityInvoicesQuery());
        }

        [HttpPost]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(Guid), (int)StatusCodes.Status200OK)]
        public async Task<ActionResult<Guid>> Create(CreateElectricityInvoiceCommand command)
        {
            return await Mediator.Send(command);
        }
    }
}