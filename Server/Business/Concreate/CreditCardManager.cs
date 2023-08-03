using Business.Abstract;
using Business.Constants;
using Business.ValidationRules;
using Core.Aspect.Autofac.Caching;
using Core.Aspect.Autofac.Validation;
using Core.Entities.Concreate;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concreate;

namespace Business.Concreate;

public class CreditCardManager : ICreditCardService
{
    ICreditCardDal _creditCard;

    public CreditCardManager(ICreditCardDal creditCard)
    {
        _creditCard = creditCard;
    }

    //[SecuredOperation("admin, user")]
    [ValidationAspect(typeof(CreditCardValidator))]
    public IResult AddPaymnet(CreditCard creditCard)
    {
        var results = _creditCard.GetAll(c => c.CardNumber == creditCard.CardNumber);
        foreach (var result in results)
        {
            _creditCard.Update(result);
        }

        _creditCard.Add(creditCard);
        return new SuccessResult(Messages.AddedCreditCardAndToPay);
    }

    //[SecuredOperation("admin, user")]
    [ValidationAspect(typeof(CreditCardValidator))]
    public IResult Delete(CreditCard creditCard)
    {
        _creditCard.Delete(creditCard);
        return new SuccessResult(Messages.AddedCreditCardAndToPay);
    }

    [CacheAspect]
    public IDataResult<CreditCard> Get(Guid id)
    {
        return new SuccessDataResult<CreditCard>(_creditCard.Get(c => c.Id == id), Messages.CreditCardListed);
    }

    [CacheAspect]
    public IDataResult<List<CreditCard>> GetAll()
    {
        return new SuccessDataResult<List<CreditCard>>(_creditCard.GetAll(), Messages.ListedAllCreditCard);
    }

    public IDataResult<List<CreditCard>> GetByCustomerId(Guid customerId)
    {
        return new SuccessDataResult<List<CreditCard>>(_creditCard.GetAll(c => c.CustomerId == customerId), Messages.ListedCreditCardbyUserId);
    }

    //[SecuredOperation("admin, user")]
    [ValidationAspect(typeof(CreditCardValidator))]
    public IResult NotAddPaymnet()
    {
        return new SuccessResult(Messages.AddedCreditCardAndToPay);
    }


    //[SecuredOperation("admin, user")]
    [ValidationAspect(typeof(CreditCardValidator))]
    public IResult Update(CreditCard creditCard)
    {
        _creditCard.Update(creditCard);
        return new SuccessResult(Messages.AddedCreditCardAndToPay);
    }
}

