using Core.Entities;

namespace Entities.Concreate;

public class Category : IEntity
{
    public Guid Id { get; set; }
    public string CategoryName { get; set; }
}

