using Core.Entities;

namespace Entities.Concreate;

public class CarImage : IEntity
{
    public Guid Id { get; set; }
    public Guid CarId { get; set; }
    public string ImagePath { get; set; }
    public DateTime ImageDate { get; set; }
}

