using Core.Utilities.Results;
using Entities.Concreate;
using Entities.DTOs;

namespace Business.Abstract;

public interface IBrandService
{
    IDataResult<List<Brand>> GetAll();
    IDataResult<Brand> GetById(Guid id);

    IDataResult<List<BrandDetailDTO>> GetBrandDetailsAll();
    IDataResult<List<BrandDetailDTO>> GetBrandDetailsIdByImageId(Guid imageId);
    IDataResult<List<BrandDetailDTO>> GetBrandDetailsIdByBrandId(Guid brandId);

    IResult Add(Brand brand);
    IResult Update(Brand brand);
    IResult Delete(Brand brand);
}

