using Core.Entities;

namespace Entities.Concreate;

public class Brand : IEntity
{
    public Guid Id { get; set; }
    public string BrandName { get; set; }
    public string BrandModel { get; set; }
}

