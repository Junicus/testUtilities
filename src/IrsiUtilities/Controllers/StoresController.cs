using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IrsiUtilities.Application.Stores.Commands;
using IrsiUtilities.Application.Stores.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IrsiUtilities.Controllers
{
    
    public class StoresController : ApiController
    {
        [HttpGet]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(StoresVM), (int)StatusCodes.Status200OK)]
        public async Task<ActionResult<StoresVM>> Get()
        {
            return await Mediator.Send(new GetStoresQuery());
        }

        [HttpPost]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(Guid), (int)StatusCodes.Status200OK)]
        public async Task<ActionResult<Guid>> Create(CreateStoreCommand command)
        {
            return await Mediator.Send(command);
        }

    }
}