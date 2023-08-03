using Business.Abstract;
using Business.Constants;
using Business.ValidationRules;
using Core.Aspect.Autofac.Validation;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concreate;
using Entities.DTOs;

namespace Business.Concreate;

public class CarManager : ICarService
{
    ICarDal _carDal;

    public CarManager(ICarDal carDal)
    {
        _carDal = carDal;
    }

    //[SecuredOperation("admin, user")]
    [ValidationAspect(typeof(CarValidator))]
    public IResult Add(Car car)
    {
        _carDal.Add(car);

        return new SuccessResult(Messages.CarAdded);
    }

    //[SecuredOperation("admin")]
    [ValidationAspect(typeof(CarValidator))]
    public IResult Delete(Car car)
    {
        _carDal.Delete(car);

        return new SuccessResult(Messages.CarDeleted);
    }

    public IDataResult<List<Car>> GetAll()
    {
        return new SuccessDataResult<List<Car>>(_carDal.GetAll(), Messages.CarsListed);
    }

    public IDataResult<List<Car>> GetByBrandId(Guid brandId)
    {
        return new SuccessDataResult<List<Car>>(_carDal.GetAll(c => c.BrandId == brandId), Messages.CarsListedByBrandId);
    }


    public IDataResult<List<Car>> GetByColorId(Guid colorId)
    {
        return new SuccessDataResult<List<Car>>(_carDal.GetAll(c => c.ColorId == colorId), Messages.CarsListedByColorId);
    }


    public IDataResult<Car> GetById(Guid id)
    {
        return new SuccessDataResult<Car>(_carDal.Get(c => c.Id == id), Messages.CarListed);
    }

    public IDataResult<List<CarDetailDTO>> GetCarDetail()
    {
        return new SuccessDataResult<List<CarDetailDTO>>(_carDal.GetCarDetail(), Messages.CarListed);
    }

    public IDataResult<List<CarDetailDTO>> GetCarDetailByBrandId(Guid brandId)
    {

        return new SuccessDataResult<List<CarDetailDTO>>(_carDal.GetCarDetailByBrandId(brandId), Messages.CarListed);
    }

    public IDataResult<List<CarDetailDTO>> GetCarDetailByCarId(Guid carId)
    {
        return new SuccessDataResult<List<CarDetailDTO>>(_carDal.GetCarDetailByCarId(carId), Messages.CarListed);
    }

    public IDataResult<List<CarDetailDTO>> GetCarDetailByColorId(Guid colorId)
    {
        return new SuccessDataResult<List<CarDetailDTO>>(_carDal.GetCarDetailByColorId(colorId), Messages.CarListed);
    }

    public IDataResult<List<CarDetailDTO>> GetCarDetailByImageId(Guid imageId)
    {
        return new SuccessDataResult<List<CarDetailDTO>>(_carDal.GetCarDetailByImageId(imageId), Messages.CarListed);
    }

    public IDataResult<List<CarDetailDTO>> GetCarDetailNameByBrandName(string brandName)
    {
        return new SuccessDataResult<List<CarDetailDTO>>(_carDal.GetCarDetailNameByBrandName(brandName), Messages.CarListed);
    }

    public IDataResult<List<CarDetailDTO>> GetCarDetailNameByColorName(string colorName)
    {
        return new SuccessDataResult<List<CarDetailDTO>>(_carDal.GetCarDetailNameByColorName(colorName), Messages.CarListed);
    }

    public IDataResult<List<CarDetailDTO>> GetCarDetailNameByİmagePath(string imagePath)
    {
        return new SuccessDataResult<List<CarDetailDTO>>(_carDal.GetCarDetailNameByİmagePath(imagePath), Messages.CarListed);
    }

    //[SecuredOperation("admin")]
    [ValidationAspect(typeof(CarValidator))]
    public IResult Update(Car car)
    {
        _carDal.Update(car);

        return new SuccessResult(Messages.CarUpdated);
    }
}

