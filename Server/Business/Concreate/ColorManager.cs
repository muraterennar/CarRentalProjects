using Business.Abstract;
using Business.Constants;
using Business.ValidationRules;
using Core.Aspect.Autofac.Validation;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concreate;

namespace Business.Concreate;

public class ColorManager : IColorService
{
    IColorDal _colorDal;

    public ColorManager(IColorDal colorDal)
    {
        _colorDal = colorDal;
    }

    //[SecuredOperation("admin")]
    [ValidationAspect(typeof(ColorValidator))]

    public IResult Add(Color color)
    {
        _colorDal.Add(color);

        return new SuccessResult(Messages.ColorAdded);
    }

    //[SecuredOperation("admin")]
    [ValidationAspect(typeof(ColorValidator))]

    public IResult Delete(Color color)
    {
        _colorDal.Delete(color);

        return new SuccessResult(Messages.ColorDeleted);
    }


    public IDataResult<List<Color>> GetAll()
    {
        return new SuccessDataResult<List<Color>>(_colorDal.GetAll(), Messages.ColorsListed);
    }

    public IDataResult<Color> GetbyId(Guid id)
    {
        return new SuccessDataResult<Color>(_colorDal.Get(c => c.Id == id));
    }

    //[SecuredOperation("admin")]
    [ValidationAspect(typeof(ColorValidator))]
    public IResult Update(Color color)
    {
        _colorDal.Update(color);

        return new SuccessResult(Messages.ColorUpdated);
    }
}

