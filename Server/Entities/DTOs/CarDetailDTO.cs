using Core.Entities;

namespace Entities.DTOs;

public class CarDetailDTO : IDto
{
    public Guid CarId { get; set; }
    public Guid BrandId { get; set; }
    public Guid ColorId { get; set; }
    public Guid ImageId { get; set; }

    public string BrandName { get; set; }
    public string BrandModel { get; set; }
    public string ColorName { get; set; }
    public string ImagePath { get; set; }

    public int ModelYear { get; set; }
    public decimal DailyPrice { get; set; }
    public string Descriptions { get; set; }
}

