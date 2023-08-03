using Castle.DynamicProxy;
using Core.CrossCuttingConserns.Validaiton;
using Core.Utilities.Interceptors;
using FluentValidation;

namespace Core.Aspect.Autofac.Validation;

public class ValidationAspect : MethodInterceptor
{
    Type _validaitorType;

    public ValidationAspect(Type validaitorType)
    {
        if (!typeof(IValidator).IsAssignableFrom(validaitorType))
        {
            throw new Exception("This is not a validation class");
        }

        _validaitorType = validaitorType;
    }

    protected override void OnBefore(IInvocation invocation)
    {
        var validator = (IValidator)Activator.CreateInstance(_validaitorType);
        var entityType = _validaitorType.BaseType.GetGenericArguments()[0];
        var entites = invocation.Arguments.Where(t => t.GetType() == entityType);

        foreach (var entity in entites)
        {
            ValidationTool.Validate(validator, entity);
        }
    }
}

