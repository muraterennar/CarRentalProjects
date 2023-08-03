using Business.Abstract;
using Core.Entities.Concreate;
using Entities.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditCardPaymentsController : ControllerBase
    {
        ICreditCardService _creditCardPaymentService;

        public CreditCardPaymentsController(ICreditCardService creditCardPaymentService)
        {
            _creditCardPaymentService = creditCardPaymentService;
        }

        [HttpGet("getAll")]
        public IActionResult GetAll()
        {
            var result = _creditCardPaymentService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(string id)
        {
            var result = _creditCardPaymentService.Get(Guid.Parse(id));
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getbycustomerid")]
        public IActionResult GetByCustomerId(string customerId)
        {
            var result = _creditCardPaymentService.GetByCustomerId(Guid.Parse(customerId));
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("payment/add")]
        public IActionResult PaymentAdd(CreditCard creditCard)
        {
            var result = _creditCardPaymentService.AddPaymnet(creditCard);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("payment")]
        public IActionResult Payment()
        {
            var result = _creditCardPaymentService.NotAddPaymnet();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(CreditCard creditCard)
        {
            var result = _creditCardPaymentService.Delete(creditCard);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }
    }
}
