using Core.Utilities.Results;
using Entities.Concreate;
using Microsoft.AspNetCore.Http;

namespace Business.Abstract;

public interface ICarImageService
{
    IDataResult<List<CarImage>> GetAll();
    IDataResult<CarImage> GetById(Guid imageId);
    IDataResult<CarImage> GetByCarId(Guid carId);
    IDataResult<CarImage> GetByImagePath(string imagePath);

    IResult Add(Guid carId, List<IFormFile> file);
    IResult Delete(Guid imageId);
    IResult Update(Guid imageId, IFormFile file);
}

