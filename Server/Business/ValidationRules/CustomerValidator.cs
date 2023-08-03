using Entities.Concreate;
using FluentValidation;

namespace Business.ValidationRules;

public class CustomerValidator : AbstractValidator<Customer>
{
    public CustomerValidator()
    {
        RuleFor(c => c.UserId).NotEmpty();
        RuleFor(c => c.CompanyName).NotEmpty();
        //RuleFor(c => c.CompanyName).MinimumLength(2);
    }
}

