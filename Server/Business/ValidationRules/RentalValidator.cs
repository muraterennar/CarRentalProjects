using Entities.Concreate;
using FluentValidation;

namespace Business.ValidationRules;

public class RentalValidator : AbstractValidator<Rental>
{
    public RentalValidator()
    {
        RuleFor(r => r.CarId).NotEmpty();
        //RuleFor(r => r.BrandId).NotEmpty();
        RuleFor(r => r.RentDate).NotEmpty();
        RuleFor(r => r.ReturnDate).NotEmpty();
    }
}

