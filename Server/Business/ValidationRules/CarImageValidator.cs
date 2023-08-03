using Entities.Concreate;
using FluentValidation;

namespace Business.ValidationRules;

public class CarImageValidator : AbstractValidator<CarImage>
{
    public CarImageValidator()
    {
        RuleFor(c => c.CarId).NotEmpty();
        RuleFor(c => c.ImagePath).NotEmpty();
    }
}

