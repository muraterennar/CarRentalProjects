using System.Linq.Expressions;
using Core.DataAccess;
using Entities.Concreate;
using Entities.DTOs;

namespace DataAccess.Abstract;

public interface ICustomerDal : IEntityRepository<Customer>
{
    List<CustomerDetailDTO> GetCustomerDetails(Expression<Func<Customer, bool>> filter = null);
    CustomerDetailDTO GetCustomerDetailById(Expression<Func<Customer, bool>> filter);
    CustomerDetailDTO GetCustomerDetailByEmail(Expression<Func<CustomerDetailDTO, bool>> filter);
}

