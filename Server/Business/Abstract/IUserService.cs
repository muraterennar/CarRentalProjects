using Core.Entities.Concreate;
using Core.Utilities.Results;
using Entities.DTOs;

namespace Business.Abstract;

public interface IUserService
{
    IDataResult<List<User>> GetAll();
    IDataResult<List<UserDetailDTO>> GetUserDetils();
    IDataResult<List<UserDetailDTO>> GetUserDetilsByUserId(Guid userId);
    IDataResult<List<UserDetailDTO>> GetUserDetilsByEmail(string email);
    IDataResult<User> GetById(Guid userId);
    IDataResult<List<OperationClaim>> GetClaims(User user);
    IDataResult<User> GetByMail(string email);
    IResult Add(User user);
    IDataResult<User> EditProfile(UserProfilEditDTO profile, string password);
    IResult Delete(Guid id);
}

