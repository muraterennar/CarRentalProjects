using Core.Utilities.Results;
using Entities.Concreate;
using Microsoft.AspNetCore.Http;

namespace Business.Abstract;

public interface IBrandImageService
{
    IDataResult<List<BrandImage>> GetAll();
    IDataResult<List<BrandImage>> GetBrandId(Guid brandId);
    IDataResult<List<BrandImage>> GetImageId(Guid imageId);
    IDataResult<List<BrandImage>> GetImagePath(string imagePath);

    IResult Add(Guid brandId, List<IFormFile> file);
    IResult Delete(Guid imageId);
    IResult Update(Guid imageId, IFormFile file);
}

