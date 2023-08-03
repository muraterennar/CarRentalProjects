using Core.Utilities.Results;
using Entities.Concreate;
using Entities.DTOs;

namespace Business.Abstract;

public interface IRentalService
{
    IDataResult<List<Rental>> GetAll();
    IDataResult<List<RentailDetailDTO>> GetRentalDetails();
    IDataResult<List<RentalDetailByCustomerDTO>> GetRentalDetailByCustomer(Guid customerId);
    IDataResult<List<RentalDetailByCustomerDTO>> GetRentalDetailByCar(Guid carId);
    IDataResult<List<Rental>> GetRentalByCar(Guid carId);
    IDataResult<Rental> GetRentalById(Guid id);

    IResult Add(Rental rental);
    IResult Update(Rental rental);
    IResult Delete(Rental rental);
}

