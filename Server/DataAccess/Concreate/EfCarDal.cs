using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concreate;
using Entities.DTOs;

namespace DataAccess.Concreate;

public class EfCarDal : EfEntityRepositoryBase<Car, CarRentalContext>, ICarDal
{
    public List<CarDetailDTO> GetCarDetail()
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from car in context.Cars
                         join brand in context.Brands on car.BrandId equals brand.Id
                         join color in context.Colors on car.ColorId equals color.Id
                         join carImage in context.CarImages on car.Id equals carImage.CarId
                         select new CarDetailDTO
                         {
                             CarId = car.Id,
                             BrandId = brand.Id,
                             ColorId = color.Id,
                             ImageId = carImage.Id,
                             BrandName = brand.BrandName,
                             BrandModel = brand.BrandModel,
                             ColorName = color.ColorName,
                             ImagePath = carImage.ImagePath,
                             ModelYear = car.ModelYear,
                             DailyPrice = car.DailyPrice,
                             Descriptions = car.Descriptions
                         };

            return result.ToList();
        }
    }

    public List<CarDetailDTO> GetCarDetailByBrandId(Guid brandId)
    {
        var reult = GetCarDetail().Where(c => c.BrandId == brandId).ToList();
        return reult;
    }

    public List<CarDetailDTO> GetCarDetailByCarId(Guid carId)
    {
        var reult = GetCarDetail().Where(c => c.CarId == carId).ToList();
        return reult;
    }

    public List<CarDetailDTO> GetCarDetailByColorId(Guid colorId)
    {
        var reult = GetCarDetail().Where(c => c.ColorId == colorId).ToList();
        return reult;
    }

    public List<CarDetailDTO> GetCarDetailByImageId(Guid imageId)
    {
        var reult = GetCarDetail().Where(c => c.ImageId == imageId).ToList();
        return reult;
    }

    public List<CarDetailDTO> GetCarDetailNameByBrandName(string brandName)
    {
        var reult = GetCarDetail().Where(c => c.BrandName == brandName).ToList();
        return reult;
    }

    public List<CarDetailDTO> GetCarDetailNameByColorName(string colorName)
    {
        var reult = GetCarDetail().Where(c => c.ColorName == colorName).ToList();
        return reult;
    }

    public List<CarDetailDTO> GetCarDetailNameByİmagePath(string imagePath)
    {
        var reult = GetCarDetail().Where(c => c.ImagePath == imagePath).ToList();
        return reult;
    }
}

