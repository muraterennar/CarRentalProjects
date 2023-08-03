using Core.DataAccess;
using Core.Entities.Concreate;
using Entities.DTOs;

namespace DataAccess.Abstract;

public interface IUserDal : IEntityRepository<User>
{
    List<OperationClaim> GetClaims(User user);
    List<User> GetUsers(User user);
    List<UserDetailDTO> GetUserDetails();
    List<UserDetailDTO> GetUserDetailsByUserId(Guid userId);
    List<UserDetailDTO> GetUserDetailsByEmail(string email);
}

