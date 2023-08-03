using Entities.Concreate;
using FluentValidation;

namespace Business.ValidationRules;

public class UserImageValidator : AbstractValidator<UserImage>
{
    public UserImageValidator()
    {
        RuleFor(u => u.UserId).NotEmpty();
        RuleFor(u => u.ImagePath).NotEmpty();
    }
}

