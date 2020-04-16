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
    [Authorize]
    public class StoresController : ApiController
    {
        [HttpGet]
        [ActionName("GetAll")]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(StoresVM), (int)StatusCodes.Status200OK)]
        public async Task<ActionResult<StoresVM>> GetAll()
        {
            return await Mediator.Send(new GetStoresQuery());
        }

        [HttpGet("{id:guid}")]
        [ActionName("GetById")]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(StoreVM), (int)StatusCodes.Status200OK)]
        [ProducesResponseType((int)StatusCodes.Status404NotFound)]
        public async Task<ActionResult<StoreVM>> GetById(Guid id)
        {
            return await Mediator.Send(new GetStoreQuery { Id = id });
        }

        [HttpPost]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(typeof(Guid), (int)StatusCodes.Status200OK)]
        public async Task<ActionResult<Guid>> Create(CreateStoreCommand command)
        {
            return await Mediator.Send(command);
        }

        [HttpPut]
        [ProducesResponseType((int)StatusCodes.Status401Unauthorized)]
        [ProducesResponseType((int)StatusCodes.Status200OK)]
        [ProducesResponseType((int)StatusCodes.Status404NotFound)]
        public async Task Update(UpdateStoreCommand command)
        {
            await Mediator.Send(command);
        }
    }
}