using Business.Abstract;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserImagesController : ControllerBase
    {
        IUserImageService _userImageService;

        public UserImagesController(IUserImageService userImageService)
        {
            _userImageService = userImageService;
        }

        [HttpGet("getall")]
        public IActionResult GetAll()
        {
            var result = _userImageService.GetAll();
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getbyuserid")]
        public IActionResult GetByUserId(string id)
        {
            var result = _userImageService.GetByUserId(Guid.Parse(id));
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpGet("getbyuserimagepath")]
        public IActionResult GetByUserImagePath(string imagePath)
        {
            var result = _userImageService.GetByUserImage(imagePath);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("add")]
        public IActionResult Add(string userId, List<IFormFile> files)
        {
            var result = _userImageService.Add(Guid.Parse(userId), files);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("update")]
        public IActionResult Update(string imageId, IFormFile file)
        {
            var result = _userImageService.Update(Guid.Parse(imageId), file);
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }

        [HttpPost("delete")]
        public IActionResult Delete(string imageId)
        {
            var result = _userImageService.Delete(Guid.Parse(imageId));
            if (result.Success)
            {
                return Ok(result);
            }

            return BadRequest(result);
        }
    }
}
