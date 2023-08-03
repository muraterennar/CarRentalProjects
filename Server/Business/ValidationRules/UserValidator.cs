using Core.Entities.Concreate;
using FluentValidation;

namespace Business.ValidationRules;

public class UserValidator : AbstractValidator<User>
{
    public UserValidator()
    {
        RuleFor(u => u.FirstName).NotEmpty();
        RuleFor(u => u.LastName).NotEmpty();
        RuleFor(u => u.Email).NotEmpty();

        RuleFor(u => u.FirstName).MinimumLength(5);
        RuleFor(u => u.LastName).MinimumLength(3);
        RuleFor(u => u.Address).MinimumLength(10);
        RuleFor(u => u.Email).MinimumLength(8);
        RuleFor(u => u.PhoneNumber).MinimumLength(10).MaximumLength(10).WithMessage("'0' girmeden deneyin");
        RuleFor(u => u.Birthdate).Must(Today).WithMessage("En Fazla Bu Günün Tarihi Seçilmeli");

        RuleFor(u => u.Email).Must(Contains).WithMessage("@ Karakteri bulunmalıdır");
    }

    bool Contains(string args)
    {
        return args.Contains("@");
    }

    bool OldDate(DateTime date)
    {
        var dates = DateTime.Now.Year - 100;
        return date.Year > dates;
    }

    bool Today(DateTime date)
    {
        return date.Year <= DateTime.Today.Year;
    }
}

