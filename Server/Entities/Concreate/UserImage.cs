using Core.Entities;

namespace Entities.Concreate;

public class UserImage : IEntity
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public string ImagePath { get; set; }
    public DateTime ImageDate { get; set; }
}

