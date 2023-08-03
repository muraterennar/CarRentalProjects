using Core.Entities;

namespace Entities.DTOs;

public class UserProfilEditDTO : IDto
{
    public Guid Id { get; set; }
    public Guid GenderId { get; set; }
    public Guid CityId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public string Address { get; set; }
    public string Comment { get; set; }
    public DateTime BirthDate { get; set; }
    public string Password { get; set; }
}

