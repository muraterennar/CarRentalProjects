using Core.Utilities.Results;
using Entities.Concreate;
using Microsoft.AspNetCore.Http;

namespace Business.Abstract;

public interface IUserImageService
{
    IDataResult<List<UserImage>> GetAll();
    IDataResult<List<UserImage>> GetByUserId(Guid userId);
    IDataResult<List<UserImage>> GetByUserImage(string imagePath);
    IResult Add(Guid userId, List<IFormFile> file);
    IResult Delete(Guid imageId);
    IResult Update(Guid imageId, IFormFile file);
}

