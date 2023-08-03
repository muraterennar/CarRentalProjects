using Business.Abstract;
using Business.BusinessAspect.Autofac;
using Business.Constants;
using Business.ValidationRules;
using Core.Aspect.Autofac.Caching;
using Core.Aspect.Autofac.Validation;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concreate;
using Entities.DTOs;

namespace Business.Concreate;

public class RentalManager : IRentalService
{
    private IRentalDal _rentalDal;

    public RentalManager(IRentalDal rentalDal)
    {
        _rentalDal = rentalDal;
    }

    //[SecuredOperation("admin")]
    [ValidationAspect(typeof(RentalValidator))]
    public IResult Add(Rental rental)
    {
        rental.RentDate = DateTime.Now;

        _rentalDal.Add(rental);

        return new SuccessResult(Messages.RentalAdded);
    }

    [SecuredOperation("admin")]
    //[ValidationAspect(typeof(RentalValidator))]
    public IResult Delete(Rental rental)
    {
        _rentalDal.Delete(rental);
        return new SuccessResult(Messages.RentalDeleted);
    }

    //[CacheAspect]
    public IDataResult<List<Rental>> GetAll()
    {
        return new SuccessDataResult<List<Rental>>(_rentalDal.GetAll(), Messages.RentalsListed);
    }

    //[CacheAspect]
    public IDataResult<List<Rental>> GetRentalByCar(Guid carId)
    {
        return new SuccessDataResult<List<Rental>>(_rentalDal.GetAll(r => r.CarId == carId), Messages.RentalListed);
    }

    public IDataResult<Rental> GetRentalById(Guid id)
    {
        var result = _rentalDal.Get(r => r.Id == id);
        return new SuccessDataResult<Rental>(result, Messages.RentalListed);
    }

    public IDataResult<List<RentalDetailByCustomerDTO>> GetRentalDetailByCar(Guid carId)
    {
        return new SuccessDataResult<List<RentalDetailByCustomerDTO>>(_rentalDal.GetRentalDetailByCar(u => u.CarId == carId));
    }

    //[CacheAspect]
    public IDataResult<List<RentalDetailByCustomerDTO>> GetRentalDetailByCustomer(Guid customerId)
    {
        return new SuccessDataResult<List<RentalDetailByCustomerDTO>>(_rentalDal.GetRentalDetailByCustomer(r => r.CustomerId == customerId), Messages.RentalListed);
    }

    //[CacheAspect]
    public IDataResult<List<RentailDetailDTO>> GetRentalDetails()
    {
        return new SuccessDataResult<List<RentailDetailDTO>>(_rentalDal.GetRentalDetails(), Messages.RentalsListed);
    }

    [SecuredOperation("admin")]
    [ValidationAspect(typeof(RentalValidator))]
    public IResult Update(Rental rental)
    {
        _rentalDal.Update(rental);
        return new SuccessResult(Messages.RentalUpdated);
    }
}

