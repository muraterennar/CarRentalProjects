using Core.DataAccess;
using Entities.Concreate;
using Entities.DTOs;

namespace DataAccess.Abstract;

public interface ICarDal : IEntityRepository<Car>
{
    List<CarDetailDTO> GetCarDetail();

    List<CarDetailDTO> GetCarDetailByCarId(Guid carId);
    List<CarDetailDTO> GetCarDetailByBrandId(Guid brandId);
    List<CarDetailDTO> GetCarDetailByColorId(Guid colorId);
    List<CarDetailDTO> GetCarDetailByImageId(Guid imageId);
    List<CarDetailDTO> GetCarDetailNameByBrandName(string brandName);
    List<CarDetailDTO> GetCarDetailNameByColorName(string colorName);
    List<CarDetailDTO> GetCarDetailNameByİmagePath(string imagePath);
}

