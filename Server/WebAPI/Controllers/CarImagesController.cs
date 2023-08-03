using Business.Abstract;
using Entities.Concreate;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarImagesController : ControllerBase
    {
        ICarImageService _carImageService;

        public CarImagesController(ICarImageService carImageService)
        {
            _carImageService = carImageService;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _carImageService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getbyid")]
        public IActionResult GetById(string id)
        {
            var result = _carImageService.GetById(Guid.Parse(id));
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getbycarid")]
        public IActionResult GetByCarId(string carId)
        {
            var result = _carImageService.GetByCarId(Guid.Parse(carId));
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getbyimagepath")]
        public IActionResult GetByImagePath(string imagePath)
        {
            var result = _carImageService.GetByImagePath(imagePath);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("add")]
        public IActionResult Add(string carId, List<IFormFile> files)
        {
            var result = _carImageService.Add(Guid.Parse(carId), files);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(string imageId, IFormFile file)
        {
            var result = _carImageService.Update(Guid.Parse(imageId), file);

            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(string imageId)
        {
            var result = _carImageService.Delete(Guid.Parse(imageId));

            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }
    }
}
