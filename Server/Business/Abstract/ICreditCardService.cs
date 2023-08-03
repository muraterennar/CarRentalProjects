using Core.Entities.Concreate;
using Core.Utilities.Results;

namespace Business.Abstract;

public interface ICreditCardService
{
    IDataResult<List<CreditCard>> GetAll();
    IDataResult<CreditCard> Get(Guid id);
    IDataResult<List<CreditCard>> GetByCustomerId(Guid customerId);

    IResult AddPaymnet(CreditCard creditCard);
    IResult NotAddPaymnet();
    IResult Update(CreditCard creditCard);
    IResult Delete(CreditCard creditCard);
}

