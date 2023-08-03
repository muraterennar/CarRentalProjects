using Core.Utilities.Results;
using Entities.Concreate;
using Entities.DTOs;

namespace Business.Abstract;

public interface ICustomerService
{
    IDataResult<List<Customer>> GetAll();
    IDataResult<Customer> GetById(Guid id);
    IDataResult<List<CustomerDetailDTO>> GetCustomerDetails();
    IDataResult<CustomerDetailDTO> GetCustomerDetailById(Guid customerId);
    IDataResult<CustomerDetailDTO> GetCustomerByEmail(string email);

    IResult Add(Customer customer);
    IResult Update(Customer customer);
    IResult Delete(Customer customer);
}

