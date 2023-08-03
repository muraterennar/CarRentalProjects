using Core.Entities;

namespace Entities.Concreate;

public class City : IEntity
{
    public Guid Id { get; set; }
    public string CityName { get; set; }
}

