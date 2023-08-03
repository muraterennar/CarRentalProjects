using Business.Abstract;
using Business.Constants;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concreate;

namespace Business.Concreate;

public class CityManager : ICityService
{
    ICityDal _cityDal;

    public CityManager(ICityDal cityDal)
    {
        _cityDal = cityDal;
    }

    public IResult Add(City city)
    {
        _cityDal.Add(city);
        return new SuccessResult("Oluşturuldu");
    }

    public IResult Delete(City city)
    {
        _cityDal.Delete(city);
        return new SuccessResult("Silindi");
    }

    public IDataResult<List<City>> GetAll()
    {
        return new SuccessDataResult<List<City>>(_cityDal.GetAll(), Messages.CitiesListed);
    }

    public IDataResult<City> GetById(Guid id)
    {
        return new SuccessDataResult<City>(_cityDal.Get(c => c.Id == id));
    }

    public IDataResult<City> GetByName(string name)
    {
        return new SuccessDataResult<City>(_cityDal.Get(c => c.CityName == name));
    }

    public IResult Update(City city)
    {
        _cityDal.Update(city);
        return new SuccessResult("Güncellendi");
    }
}

