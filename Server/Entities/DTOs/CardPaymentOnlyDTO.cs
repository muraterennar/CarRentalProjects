using Core.Entities;
namespace Entities.DTOs;

public class CardPaymentOnlyDTO : IDto
{
    public string NameOfTheCard { get; set; }
    public string CardNumber { get; set; }
    public string Cvv { get; set; }
    public int ExpirationMonth { get; set; }
    public int ExpirationYear { get; set; }
}

