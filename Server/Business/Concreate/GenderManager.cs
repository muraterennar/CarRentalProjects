using Business.Abstract;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concreate;

namespace Business.Concreate;

public class GenderManager : IGenderService
{
    IGenderDal _genderDal;

    public GenderManager(IGenderDal genderDal)
    {
        _genderDal = genderDal;
    }

    public IResult Add(Gender gender)
    {
        _genderDal.Add(gender);
        return new SuccessResult("Oluşturuldu");
    }

    public IResult Delete(Gender gender)
    {
        _genderDal.Delete(gender);
        return new SuccessResult("Silindi");
    }

    public IDataResult<List<Gender>> GetAll()
    {
        return new SuccessDataResult<List<Gender>>(_genderDal.GetAll());
    }

    public IDataResult<Gender> GetByName(string name)
    {
        return new SuccessDataResult<Gender>(_genderDal.Get(g => g.GenderType == name));
    }

    public IResult Update(Gender gender)
    {
        _genderDal.Update(gender);
        return new SuccessResult("Güncellendi");
    }
}

