using Core.Entities;

namespace Entities.DTOs;

public class BrandDetailDTO : IDto
{
    public Guid BrandId { get; set; }
    public Guid ImageId { get; set; }
    public string BrandName { get; set; }
    public string BrandModel { get; set; }
    public string ImagePath { get; set; }
    public DateTime ImageDate { get; set; }
}

