namespace Core.Entities.Concreate;

public class CreditCard : IEntity
{
    public Guid Id { get; set; }
    public Guid CustomerId { get; set; }
    public string NameOfTheCardHolder { get; set; }
    public string CardNumber { get; set; }
    public string Cvv { get; set; }
    public int ExpirationMonth { get; set; }
    public int ExpirationYear { get; set; }
}

