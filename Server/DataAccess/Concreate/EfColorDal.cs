using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concreate;

namespace DataAccess.Concreate;

public class EfColorDal : EfEntityRepositoryBase<Color, CarRentalContext>, IColorDal
{

}

