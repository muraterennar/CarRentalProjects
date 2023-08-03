using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concreate;

namespace DataAccess.Concreate;

public class EfCityDal : EfEntityRepositoryBase<City, CarRentalContext>, ICityDal
{
}

