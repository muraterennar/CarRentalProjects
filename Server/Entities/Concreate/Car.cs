using Core.Entities;

namespace Entities.Concreate;

public class Car : IEntity
{
    public Guid Id { get; set; }
    public Guid BrandId { get; set; }
    public Guid ColorId { get; set; }
    public int ModelYear { get; set; }
    public int DailyPrice { get; set; }
    public string Descriptions { get; set; }
}

