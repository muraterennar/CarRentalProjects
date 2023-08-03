using Core.Entities;

namespace Entities.Concreate;

public class Rental : IEntity
{
    public Guid Id { get; set; }
    public Guid CarId { get; set; }
    public Guid CustomerId { get; set; }
    public DateTime RentDate { get; set; }
    public DateTime ReturnDate { get; set; }
}

