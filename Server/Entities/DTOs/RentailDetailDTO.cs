using Core.Entities;

namespace Entities.DTOs;

public class RentailDetailDTO : IDto
{
    public Guid RentalId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DateTime RentDate { get; set; }
    public DateTime ReturnDate { get; set; }

    public string CompanyName { get; set; }

    public string ColorName { get; set; }
    public string Descriptions { get; set; }
    public int ModelYear { get; set; }
    public int DailyPrice { get; set; }
}

