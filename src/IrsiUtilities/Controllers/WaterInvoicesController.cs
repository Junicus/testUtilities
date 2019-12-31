using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IrsiUtilities.Application.WaterInvoices.Commands;
using IrsiUtilities.Application.WaterInvoices.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IrsiUtilities.Controllers
{
    [Authorize]
    public class WaterInvoicesController : ApiController
    {
        [HttpGet]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(WaterInvoicesVM), (int)StatusCodes.Status200OK)]
        public async Task<ActionResult<WaterInvoicesVM>> Get()
        {
            return await Mediator.Send(new GetWaterInvoicesQuery());
        }

        [HttpPost]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(Guid), (int)StatusCodes.Status200OK)]
        public async Task<ActionResult<Guid>> Create(CreateWaterInvoiceCommand command)
        {
            return await Mediator.Send(command);
        }

    }
}