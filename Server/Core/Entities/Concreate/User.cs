namespace Core.Entities.Concreate;

public class User : IEntity
{
    public Guid Id { get; set; }
    public Guid CityId { get; set; }
    public Guid GenderId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Email { get; set; }
    public DateTime Birthdate { get; set; }
    public string PhoneNumber { get; set; }
    public string Address { get; set; }
    public string Comment { get; set; }
    public byte[] PasswordSalt { get; set; }
    public byte[] PasswordHash { get; set; }
    public bool Status { get; set; }
}

