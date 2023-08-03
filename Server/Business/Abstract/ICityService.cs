using Core.Utilities.Results;
using Entities.Concreate;

namespace Business.Abstract;

public interface ICityService
{
    IDataResult<List<City>> GetAll();
    IDataResult<City> GetById(Guid id);
    IDataResult<City> GetByName(string name);

    IResult Add(City city);
    IResult Delete(City city);
    IResult Update(City city);
}

