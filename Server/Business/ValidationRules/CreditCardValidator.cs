using Core.Entities.Concreate;
using FluentValidation;

namespace Business.ValidationRules;

public class CreditCardValidator : AbstractValidator<CreditCard>
{
    public CreditCardValidator()
    {
        RuleFor(c => c.NameOfTheCardHolder).NotEmpty();
        RuleFor(c => c.CardNumber).NotEmpty();
        RuleFor(c => c.ExpirationMonth).NotEmpty();
        RuleFor(c => c.ExpirationYear).NotEmpty();
    }
}

