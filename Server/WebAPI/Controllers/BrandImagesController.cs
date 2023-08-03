using Business.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandImagesController : ControllerBase
    {
        IBrandImageService _brandImageService;

        public BrandImagesController(IBrandImageService brandImageService)
        {
            _brandImageService = brandImageService;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _brandImageService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getbybrandid")]
        public IActionResult GetByBrandId(string brandId)
        {
            var result = _brandImageService.GetBrandId(Guid.Parse(brandId));
            if (result.Success)
            {
                return Ok(result);
            }

            return NotFound(result);
        }

        [HttpGet("getbyimagepath")]
        public IActionResult GetByImagePath(string imagePath)
        {
            var result = _brandImageService.GetImagePath(imagePath);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getbyimageid")]
        public IActionResult GetByImagePathById(string imageId)
        {
            var result = _brandImageService.GetImageId(Guid.Parse(imageId));
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("add")]
        public IActionResult Add(string brandId, List<IFormFile> files)
        {
            var result = _brandImageService.Add(Guid.Parse(brandId), files);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(string imageId)
        {
            var result = _brandImageService.Delete(Guid.Parse(imageId));
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(string imageId, IFormFile file)
        {
            var result = _brandImageService.Update(Guid.Parse(imageId), file);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }
    }
}
