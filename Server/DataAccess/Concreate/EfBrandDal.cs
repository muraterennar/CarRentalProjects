using Core.DataAccess.EntityFramework;
using DataAccess.Abstract;
using Entities.Concreate;
using Entities.DTOs;

namespace DataAccess.Concreate;

public class EfBrandDal : EfEntityRepositoryBase<Brand, CarRentalContext>, IBrandDal
{
    public List<BrandDetailDTO> GetBrandDetails()
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from brand in context.Brands
                         join brandImage in context.BrandImages on brand.Id equals brandImage.BrandId
                         select new BrandDetailDTO
                         {
                             BrandId = brand.Id,
                             BrandModel = brand.BrandModel,
                             BrandName = brand.BrandName,
                             ImageId = brandImage.Id,
                             ImagePath = brandImage.ImagePath,
                             ImageDate = brandImage.ImageDate,
                         };

            return result.ToList();
        }
    }

    public List<BrandDetailDTO> GetBrandDetailsIdByBrandId(Guid brandId)
    {
        var result = GetBrandDetails().Where(b => b.BrandId == brandId);
        return result.ToList();
    }

    public List<BrandDetailDTO> GetBrandDetailsIdByImageId(Guid imageId)
    {
        var result = GetBrandDetails().Where(b => b.ImageId == imageId);
        return result.ToList();
    }
}

