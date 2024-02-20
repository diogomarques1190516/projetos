using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;
using WarehouseManagement.Domain.Shared;
using WarehouseManagement.Domain.Deliveries;
using System.Web;

namespace WarehouseManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeliveriesController : ControllerBase
    {
        private readonly DeliveryService _service;

        public DeliveriesController(DeliveryService service)
        {
            _service = service;
        }

        // GET: api/Deliveries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DeliveryDto>>> GetAll()
        {
            return await _service.GetAllAsync();
        }

        // GET: api/Deliveries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DeliveryDto>> GetGetById(String id)
        {
            var formattedId = HttpUtility.UrlDecode(id);
            var war = await _service.GetByIdAsync(new DeliveryId(formattedId));

            if (war == null)
            {
                return NotFound();
            }

            return war;
        }

        // GET: api/Deliveries/ByDate/?date=12-12-2021
        [HttpGet("ByDate")]
        public async Task<ActionResult<IEnumerable<DeliveryDto>>> GetGetByDate(String date)
        {
            Console.WriteLine("This is a log bydate");
            var dateTime = DateParser.fromString(date);
            Console.WriteLine(dateTime);
            var war = await _service.GetByDateAsync(dateTime);

            if (war == null)
            {
                return NotFound();
            }

            return war;
        }

        
        // POST: api/Deliveries
        [HttpPost]
        public async Task<ActionResult<DeliveryDto>> Create(DeliveryDto dto)
        {
            try
            {
                var del = await _service.AddAsync(dto);

                return CreatedAtAction(nameof(GetGetById), new { id = del.Id }, del);
            }
            catch(BusinessRuleValidationException ex)
            {
                return BadRequest(new {Message = ex.Message});
            }
        }

        
        // PUT: api/Deliveries/5
        [HttpPut("{id}")]
        public async Task<ActionResult<DeliveryDto>> Update(String id, DeliveryDto dto)
        {
            var formattedId = HttpUtility.UrlDecode(id);
            if (formattedId != dto.Id)
            {
                return BadRequest();
            }

            try
            {
                var del = await _service.UpdateAsync(dto);
                
                if (del == null)
                {
                    return NotFound();
                }
                return Ok(del);
            }
            catch(BusinessRuleValidationException ex)
            {
                return BadRequest(new {Message = ex.Message});
            }
        }

        // DELETE: api/Deliveries/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DeliveryDto>> HardDelete(String id)
        {
            var formattedId = HttpUtility.UrlDecode(id);
            try
            {
                var del = await _service.DeleteAsync(new DeliveryId(formattedId));

                if (del == null)
                {
                    return NotFound();
                }

                return Ok(del);
            }
            catch(BusinessRuleValidationException ex)
            {
               return BadRequest(new {Message = ex.Message});
            }
        }
    }
}