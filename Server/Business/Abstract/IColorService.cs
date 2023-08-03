using Core.Utilities.Results;
using Entities.Concreate;

namespace Business.Abstract;

public interface IColorService
{
    IDataResult<List<Color>> GetAll();
    IDataResult<Color> GetbyId(Guid id);
    IResult Add(Color color);
    IResult Delete(Color color);
    IResult Update(Color color);
}

