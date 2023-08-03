using Core.Entities;

namespace Entities.Concreate;

public class Gender : IEntity
{
    public Guid Id { get; set; }
    public string GenderType { get; set; }
}

