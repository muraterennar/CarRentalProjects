using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concreate;

namespace DataAccess.Concreate;

public class EfCategoryDal : EfEntityRepositoryBase<Category, CarRentalContext>, ICategoryDal
{

}

