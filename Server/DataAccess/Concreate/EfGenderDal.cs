using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concreate;

namespace DataAccess.Concreate;

public class EfGenderDal : EfEntityRepositoryBase<Gender, CarRentalContext>, IGenderDal
{

}

