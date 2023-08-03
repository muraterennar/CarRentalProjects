using Core.Utilities.Results;
using Entities.Concreate;

namespace Business.Abstract;

public interface IGenderService
{
    IDataResult<List<Gender>> GetAll();
    IDataResult<Gender> GetByName(string name);
    IResult Add(Gender gender);
    IResult Update(Gender gender);
    IResult Delete(Gender gender);
}

