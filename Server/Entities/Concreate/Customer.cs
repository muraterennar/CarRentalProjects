using Core.Entities;

namespace Entities.Concreate;

public class Customer : IEntity
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string CompanyName { get; set; }
}

