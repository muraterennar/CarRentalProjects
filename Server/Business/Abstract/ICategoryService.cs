using Core.Utilities.Results;
using Entities.Concreate;

namespace Business.Abstract;

public interface ICategoryService
{
    IDataResult<List<Category>> GetAll();
    IDataResult<Category> GetById(Guid id);

    IResult Add(Category category);
    IResult Delete(Category category);
    IResult Update(Category category);
}

