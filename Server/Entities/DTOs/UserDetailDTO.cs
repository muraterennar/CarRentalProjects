using Core.Entities;

namespace Entities.DTOs;

public class UserDetailDTO : IDto
{
    public Guid UserId { get; set; }
    public Guid CityId { get; set; }
    public Guid GenderId { get; set; }
    public Guid ImageId { get; set; }
    public string ImagePath { get; set; }
    public string CityName { get; set; }
    public string GenderName { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public DateTime BirthDate { get; set; }
    public string PhoneNumber { get; set; }
    public string Address { get; set; }
    public string Comment { get; set; }
    public bool Status { get; set; }
}

