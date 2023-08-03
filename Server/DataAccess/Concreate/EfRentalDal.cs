using System.Linq.Expressions;
using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concreate;
using Entities.DTOs;

namespace DataAccess.Concreate;

public class EfRentalDal : EfEntityRepositoryBase<Rental, CarRentalContext>, IRentalDal
{
    public List<RentalDetailByCustomerDTO> GetRentalDetailByCar(Expression<Func<Rental, bool>> filter)
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from rental in filter is null ? context.Rentals : context.Rentals.Where(filter)
                         join customer in context.Customers on rental.CustomerId equals customer.Id
                         join user in context.Users on customer.UserId equals user.Id
                         join car in context.Cars on rental.CarId equals car.Id
                         join color in context.Colors on car.ColorId equals color.Id
                         select new RentalDetailByCustomerDTO()
                         {
                             UserId = customer.UserId,
                             CarId = car.Id,
                             FirstName = user.FirstName,
                             LastName = user.LastName,
                             RentDate = rental.RentDate,
                             ReturnDate = rental.ReturnDate,
                             PhoneNumber = user.PhoneNumber,
                             Address = user.Address,
                             Email = user.Email,
                         };
            return result.ToList();
        }
    }

    public List<RentalDetailByCustomerDTO> GetRentalDetailByCustomer(Expression<Func<Rental, bool>> filter)
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from rental in filter is null ? context.Rentals : context.Rentals.Where(filter)
                         join customer in context.Customers on rental.CustomerId equals customer.Id
                         join user in context.Users on customer.UserId equals user.Id
                         join car in context.Cars on rental.CarId equals car.Id
                         join color in context.Colors on car.ColorId equals color.Id
                         select new RentalDetailByCustomerDTO()
                         {
                             UserId = user.Id,
                             CarId = car.Id,
                             FirstName = user.FirstName,
                             LastName = user.LastName,
                             RentDate = rental.RentDate,
                             ReturnDate = rental.ReturnDate,
                             PhoneNumber = user.PhoneNumber,
                             Address = user.Address,
                             Email = user.Email,
                         };
            return result.ToList();
        }
    }

    public List<RentailDetailDTO> GetRentalDetails()
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from rental in context.Rentals
                         join customer in context.Customers on rental.CustomerId equals customer.Id
                         join car in context.Cars on rental.CarId equals car.Id
                         //join brand in context.Brands on rental.BrandId equals brand.Id
                         join user in context.Users on customer.UserId equals user.Id
                         join color in context.Colors on car.ColorId equals color.Id
                         select new RentailDetailDTO()
                         {
                             //BrandName = brand.BrandName,
                             ColorName = color.ColorName,
                             CompanyName = customer.CompanyName,
                             DailyPrice = car.DailyPrice,
                             Descriptions = car.Descriptions,
                             FirstName = user.FirstName,
                             LastName = user.LastName,
                             ModelYear = car.ModelYear,
                             RentalId = rental.Id,
                             RentDate = rental.RentDate,
                             ReturnDate = rental.ReturnDate,
                         };
            return result.ToList();
        }
    }
}

