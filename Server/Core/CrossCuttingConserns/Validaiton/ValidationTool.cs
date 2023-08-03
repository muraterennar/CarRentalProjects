using FluentValidation;

namespace Core.CrossCuttingConserns.Validaiton;

public class ValidationTool
{
    public static void Validate(IValidator validator, object entity)
    {
        var contex = new ValidationContext<object>(entity);
        var result = validator.Validate(contex);
        if (!result.IsValid)
        {
            throw new ValidationException(result.Errors);
        }
    }
}

