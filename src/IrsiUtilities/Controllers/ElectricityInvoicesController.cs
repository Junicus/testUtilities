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
    //[Authorize]
    public class ElectricityInvoicesController : ApiController
    {
        [HttpGet]
        [ActionName("GetAll")]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ElectricityInvoicesVM), (int)StatusCodes.Status200OK)]
        public async Task<ActionResult<ElectricityInvoicesVM>> GetAll()
        {
            return await Mediator.Send(new GetElectricityInvoicesQuery());
        }

        [HttpGet("{id:guid}")]
        [ActionName("GetById")]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(ElectricityInvoiceVM), (int)StatusCodes.Status200OK)]
        [ProducesResponseType((int)StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ElectricityInvoiceVM>> GetById(Guid id)
        {
            return await Mediator.Send(new GetElectricityInvoiceQuery { Id = id });
        }

        [HttpPost]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(Guid), (int)StatusCodes.Status200OK)]
        public async Task<ActionResult<Guid>> Create(CreateElectricityInvoiceCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType((int)StatusCodes.Status200OK)]
        [ProducesResponseType((int)StatusCodes.Status404NotFound)]
        public async Task Update(UpdateElectricityInvoiceCommand command)
        {
            await Mediator.Send(command);
        }

        [HttpDelete("{id:guid}")]
        [ProducesResponseType((int) StatusCodes.Status401Unauthorized)]
        [ProducesResponseType((int) StatusCodes.Status200OK)]
        [ProducesResponseType((int) StatusCodes.Status404NotFound)]
        public async Task Delete(Guid id)
        {
            await Mediator.Send(new DeleteElectricityInvoiceCommand { Id = id});
        }
    }
}