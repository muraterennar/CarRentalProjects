using Entities.DTOs;
using FluentValidation;

namespace Business.ValidationRules;

public class LoginValidator : AbstractValidator<UserForLoginDTO>
{
    public LoginValidator()
    {
        RuleFor(a => a.Email).NotEmpty();
        RuleFor(a => a.Email).Must(Contains).WithMessage("'@' işarti bulunmalıdır.").EmailAddress();
        RuleFor(a => a.Password).NotEmpty();
    }

    bool Contains(string args)
    {
        return args.Contains("@");
    }
}

