using Entities.Concreate;
using FluentValidation;

namespace Business.ValidationRules;

public class BrandValidator : AbstractValidator<Brand>
{
    public BrandValidator()
    {
        RuleFor(b => b.BrandName).NotEmpty();
        RuleFor(b => b.BrandModel).NotEmpty();
        RuleFor(b => b.BrandName).MinimumLength(3);
        RuleFor(b => b.BrandModel).MinimumLength(3);
    }
}

