using Core.DataAccess;
using Entities.Concreate;
using Entities.DTOs;

namespace DataAccess.Abstract;

public interface IBrandDal : IEntityRepository<Brand>
{
    List<BrandDetailDTO> GetBrandDetails();
    List<BrandDetailDTO> GetBrandDetailsIdByBrandId(Guid brandId);
    List<BrandDetailDTO> GetBrandDetailsIdByImageId(Guid imageId);
}

