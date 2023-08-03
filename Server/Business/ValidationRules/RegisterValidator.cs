using Entities.DTOs;
using FluentValidation;

namespace Business.ValidationRules;

public class RegisterValidator : AbstractValidator<UserForRegisterDTO>
{
    public RegisterValidator()
    {
        RuleFor(r => r.FirstName).NotEmpty();
        RuleFor(r => r.LastName).NotEmpty();
        RuleFor(r => r.Email).NotEmpty();
        RuleFor(r => r.Email).Must(Contains).WithMessage("@ Karakteri bulunmalıdır").EmailAddress();
        RuleFor(r => r.PhoneNumber).NotEmpty();
        RuleFor(r => r.PhoneNumber).MinimumLength(10).MaximumLength(10).WithMessage("'0' girmeden deneyin");
        RuleFor(r => r.Password).NotEmpty();
    }

    bool Contains(string args)
    {
        return args.Contains("@");
    }
}

