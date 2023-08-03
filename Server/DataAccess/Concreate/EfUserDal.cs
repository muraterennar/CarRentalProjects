using Core.DataAccess.EntityFramework;
using Core.Entities.Concreate;
using DataAccess.Abstract;
using Entities.DTOs;

namespace DataAccess.Concreate;

public class EfUserDal : EfEntityRepositoryBase<User, CarRentalContext>, IUserDal
{
    public List<OperationClaim> GetClaims(User user)
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from operationClaim in context.OperationClaims
                         join userOperationClaim in context.UserOperationClaims
                         on operationClaim.Id equals userOperationClaim.OperationClaimId
                         where userOperationClaim.UserId == user.Id
                         select new OperationClaim { Id = operationClaim.Id, OperationName = operationClaim.OperationName };
            return result.ToList();
        }
    }

    public List<UserDetailDTO> GetUserDetails()
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from user in context.Users
                         join city in context.Cities on user.CityId equals city.Id
                         join gender in context.Genders on user.GenderId equals gender.Id
                         join image in context.UserImages on user.Id equals image.UserId
                         select new UserDetailDTO
                         {
                             UserId = user.Id,
                             CityId = city.Id,
                             CityName = city.CityName,
                             GenderId = gender.Id,
                             GenderName = gender.GenderType,
                             FirstName = user.FirstName,
                             LastName = user.LastName,
                             PhoneNumber = user.PhoneNumber,
                             Address = user.Address,
                             BirthDate = user.Birthdate,
                             Comment = user.Comment,
                             Email = user.Email,
                             Status = user.Status,
                             ImageId = image.Id,
                             ImagePath = image.ImagePath
                         };
            return result.ToList();
        }
    }

    public List<UserDetailDTO> GetUserDetailsByEmail(string email)
    {
        var result = GetUserDetails().Where(u => u.Email == email).ToList();
        return result;
    }

    public List<UserDetailDTO> GetUserDetailsByUserId(Guid userId)
    {
        var result = GetUserDetails().Where(u => u.UserId == userId);
        return result.ToList();
    }

    public List<User> GetUsers(User user)
    {
        using (CarRentalContext context = new CarRentalContext())
        {
            var result = from us in context.Users
                         join gender in context.Genders on us.GenderId equals gender.Id
                         join city in context.Cities on us.CityId equals city.Id
                         where us.Id == user.Id
                         select new User
                         {
                             Id = us.Id,
                             CityId = city.Id,
                             GenderId = gender.Id,
                             FirstName = us.FirstName,
                             LastName = us.LastName,
                             Email = us.Email,
                             Address = us.Address,
                             Birthdate = us.Birthdate,
                             PasswordHash = us.PasswordHash,
                             PasswordSalt = us.PasswordSalt,
                             PhoneNumber = us.PhoneNumber,
                             Status = us.Status
                         };
            return result.ToList();

        }
    }
}
