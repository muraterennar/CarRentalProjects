using Core.Entities;

namespace Entities.Concreate;

public class BrandImage : IEntity
{
    public Guid Id { get; set; }
    public Guid BrandId { get; set; }
    public string ImagePath { get; set; }
    public DateTime ImageDate { get; set; }
}

