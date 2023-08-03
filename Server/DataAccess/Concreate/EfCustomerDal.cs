using System.Linq.Expressions;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concreate;
using Entities.DTOs;

namespace DataAccess.Concreate;

public class EfCustomerDal : EfEntityRepositoryBase<Customer, CarRentalContext>, ICustomerDal
{
    public CustomerDetailDTO GetCustomerDetailByEmail(Expression<Func<CustomerDetailDTO, bool>> filter)
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from customer in context.Customers
                         join user in context.Users on customer.UserId equals user.Id
                         select new CustomerDetailDTO
                         {
                             UserId = user.Id,
                             CompanyName = customer.CompanyName,
                             Id = customer.Id,
                             Email = user.Email,
                             FirstName = user.FirstName,
                             LastName = user.LastName,
                             PhoneNumber = user.PhoneNumber,
                             Status = user.Status,
                         };
            return result.SingleOrDefault(filter);
        }
    }

    public CustomerDetailDTO GetCustomerDetailById(Expression<Func<Customer, bool>> filter)
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from customer in filter is null ? context.Customers : context.Customers.Where(filter)
                         join user in context.Users on customer.UserId equals user.Id
                         select new CustomerDetailDTO
                         {
                             CompanyName = customer.CompanyName,
                             FirstName = user.FirstName,
                             LastName = user.LastName,
                             UserId = user.Id,
                             Id = customer.Id,
                             Email = user.Email,
                             PhoneNumber = user.PhoneNumber,
                             Status = user.Status,
                         };
            return result.FirstOrDefault();
        }
    }

    public List<CustomerDetailDTO> GetCustomerDetails(Expression<Func<Customer, bool>> filter = null)
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from customer in filter is null ? context.Customers : context.Customers.Where(filter)
                         join user in context.Users on customer.UserId equals user.Id
                         select new CustomerDetailDTO
                         {
                             UserId = user.Id,
                             CompanyName = customer.CompanyName,
                             FirstName = user.FirstName,
                             LastName = user.LastName,
                             Id = customer.Id,
                             Email = user.Email,
                             PhoneNumber = user.PhoneNumber,
                             Status = user.Status
                         };
            return result.ToList();
        }
    }
}

