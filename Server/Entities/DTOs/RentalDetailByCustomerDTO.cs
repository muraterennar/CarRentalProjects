using Core.Entities;

namespace Entities.DTOs;

public class RentalDetailByCustomerDTO : IDto
{
    public Guid UserId { get; set; }
    public Guid CarId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PhoneNumber { get; set; }
    public string Email { get; set; }
    public string Address { get; set; }
    public DateTime RentDate { get; set; }
    public DateTime ReturnDate { get; set; }
}

