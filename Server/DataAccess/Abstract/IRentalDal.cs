using System.Linq.Expressions;
using Core.DataAccess;
using Entities.Concreate;
using Entities.DTOs;

namespace DataAccess.Abstract;

public interface IRentalDal : IEntityRepository<Rental>
{
    List<RentailDetailDTO> GetRentalDetails();
    List<RentalDetailByCustomerDTO> GetRentalDetailByCustomer(Expression<Func<Rental, bool>> filter);
    List<RentalDetailByCustomerDTO> GetRentalDetailByCar(Expression<Func<Rental, bool>> filter);
}

