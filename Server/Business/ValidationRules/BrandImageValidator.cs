using Entities.Concreate;
using FluentValidation;

namespace Business.ValidationRules;

public class BrandImageValidator : AbstractValidator<BrandImage>
{
    public BrandImageValidator()
    {
        RuleFor(b => b.Id).NotEmpty();
        RuleFor(b => b.BrandId).NotEmpty();
        RuleFor(b => b.ImagePath).NotEmpty();
    }
}

