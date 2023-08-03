using Core.Utilities.Results;
using Entities.Concreate;
using Entities.DTOs;

namespace Business.Abstract;

public interface ICarService
{
    IDataResult<List<Car>> GetAll();
    IDataResult<Car> GetById(Guid id);
    IDataResult<List<Car>> GetByBrandId(Guid brandId);
    IDataResult<List<Car>> GetByColorId(Guid colorId);

    IDataResult<List<CarDetailDTO>> GetCarDetail();
    IDataResult<List<CarDetailDTO>> GetCarDetailByCarId(Guid carId);
    IDataResult<List<CarDetailDTO>> GetCarDetailByBrandId(Guid brandId);
    IDataResult<List<CarDetailDTO>> GetCarDetailByColorId(Guid colorId);
    IDataResult<List<CarDetailDTO>> GetCarDetailByImageId(Guid imageId);
    IDataResult<List<CarDetailDTO>> GetCarDetailNameByBrandName(string brandName);
    IDataResult<List<CarDetailDTO>> GetCarDetailNameByColorName(string colorName);
    IDataResult<List<CarDetailDTO>> GetCarDetailNameByİmagePath(string imagePath);

    IResult Add(Car car);
    IResult Update(Car car);
    IResult Delete(Car car);
}

