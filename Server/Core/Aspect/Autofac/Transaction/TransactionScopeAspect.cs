using Castle.DynamicProxy;
using System.Transactions;
using Core.Utilities.Interceptors;

namespace Core.Aspect.Autofac.Transaction;

public class TransactionScopeAspect : MethodInterceptor
{
    public override void Intercept(IInvocation invocation)
    {
        using (TransactionScope transactionScope = new TransactionScope())
        {
            try
            {
                invocation.Proceed();
                transactionScope.Complete();
            }
            catch (System.Exception e)
            {
                transactionScope.Dispose();
                throw;
            }
        }
    }
}

