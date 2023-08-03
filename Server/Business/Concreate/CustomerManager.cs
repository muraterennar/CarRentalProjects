using Business.Abstract;
using Business.Constants;
using Business.ValidationRules;
using Core.Aspect.Autofac.Validation;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concreate;
using Entities.DTOs;

namespace Business.Concreate;

public class CustomerManager : ICustomerService
{
    ICustomerDal _customerDal;

    public CustomerManager(ICustomerDal customerDal)
    {
        _customerDal = customerDal;
    }

    //[SecuredOperation("admin, user")]
    //[ValidationAspect(typeof(CustomerValidator))]
    public IResult Add(Customer customer)
    {
        _customerDal.Add(customer);

        return new SuccessResult(Messages.CustomerAdded);
    }

    //[SecuredOperation("admin, user")]
    [ValidationAspect(typeof(CustomerValidator))]
    public IResult Delete(Customer customer)
    {
        _customerDal.Delete(customer);

        return new SuccessResult(Messages.CustomerDeleted);
    }

    public IDataResult<List<Customer>> GetAll()
    {
        return new SuccessDataResult<List<Customer>>(_customerDal.GetAll(), Messages.CustomersListed);
    }

    public IDataResult<Customer> GetById(Guid id)
    {
        return new SuccessDataResult<Customer>(_customerDal.Get(c => c.Id == id));
    }

    public IDataResult<CustomerDetailDTO> GetCustomerByEmail(string email)
    {
        return new SuccessDataResult<CustomerDetailDTO>(_customerDal.GetCustomerDetailByEmail(c => c.Email == email), Messages.CustomersListed);
    }

    public IDataResult<CustomerDetailDTO> GetCustomerDetailById(Guid customerId)
    {
        return new SuccessDataResult<CustomerDetailDTO>(_customerDal.GetCustomerDetailById(c => c.Id == customerId), Messages.CustomersListed);
    }

    public IDataResult<List<CustomerDetailDTO>> GetCustomerDetails()
    {
        return new SuccessDataResult<List<CustomerDetailDTO>>(_customerDal.GetCustomerDetails(), Messages.CustomersListed);
    }

    //[SecuredOperation("admin, user")]
    [ValidationAspect(typeof(CustomerValidator))]
    public IResult Update(Customer customer)
    {
        _customerDal.Update(customer);

        return new SuccessResult(Messages.CustomerUpdated);
    }
}

