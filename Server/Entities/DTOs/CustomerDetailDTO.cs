using Core.Entities;

namespace Entities.DTOs;

public class CustomerDetailDTO : IDto
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public string CompanyName { get; set; }
    public bool Status { get; set; }
}

