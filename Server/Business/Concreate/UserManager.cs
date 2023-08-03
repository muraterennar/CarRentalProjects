using Business.Abstract;
using Business.Constants;
using Business.ValidationRules;
using Core.Aspect.Autofac.Caching;
using Core.Aspect.Autofac.Validation;
using Core.Entities.Concreate;
using Core.Utilities.Results;
using Core.Utilities.Security.Hashing;
using DataAccess.Abstract;
using Entities.DTOs;

namespace Business.Concreate;

public class UserManager : IUserService
{
    IUserDal _userDal;
    IGenderService _genderService;
    ICityService _cityService;

    public UserManager(IUserDal userDal, IGenderService genderService, ICityService cityService)
    {
        _userDal = userDal;
        _genderService = genderService;
        _cityService = cityService;
    }

    [ValidationAspect(typeof(UserValidator))]
    public IResult Add(User user)
    {
        var noneGender = _genderService.GetByName("yok").Data.Id;
        var defaultCity = _cityService.GetByName("istanbul").Data.Id;


        if (!user.CityId.Equals(null) || !user.GenderId.Equals(null) || !user.Birthdate.Equals(null))
        {
            user.Birthdate = DateTime.Now;
            user.CityId = defaultCity;
            user.GenderId = noneGender;
            user.Status = true;
            user.Address = "xxxxxx";
            user.Comment = "xxxxxx";
        }
        _userDal.Add(user);

        return new SuccessResult(Messages.UserAdded);
    }

    public IResult Delete(Guid id)
    {
        var getModel = _userDal.Get(x => x.Id == id);
        _userDal.Delete(getModel);
        return new SuccessResult(Messages.UserDeleted);
    }

    public IDataResult<User> EditProfile(UserProfilEditDTO profile, string password)
    {
        byte[] passwordHash, passwordSalt;
        HashingHelper.CreatePasswordHash(password, out passwordHash, out passwordSalt);
        var newUser = new User
        {
            Id = profile.Id,
            Email = profile.Email,
            Comment = profile.Comment,
            FirstName = profile.FirstName,
            LastName = profile.LastName,
            Address = profile.Address,
            Birthdate = profile.BirthDate,
            PhoneNumber = profile.PhoneNumber,
            PasswordHash = passwordHash,
            PasswordSalt = passwordSalt,
            CityId = profile.CityId,
            GenderId = profile.GenderId
        };

        if (newUser.CityId.Equals(null) || newUser.GenderId.Equals(null) || newUser.Status.Equals(null))
        {
            newUser.CityId = Guid.NewGuid();
            newUser.GenderId = Guid.NewGuid();
            newUser.Status = true;
        }

        _userDal.Update(newUser);
        return new SuccessDataResult<User>(Messages.UserUpdated);
    }

    //[CacheAspect]
    public IDataResult<List<User>> GetAll()
    {
        return new SuccessDataResult<List<User>>(_userDal.GetAll(), Messages.UsersListed);
    }
    //[CacheAspect]
    public IDataResult<User> GetById(Guid userId)
    {
        return new SuccessDataResult<User>(_userDal.Get(u => u.Id == userId), Messages.UserListed);
    }
    //[CacheAspect]
    public IDataResult<User> GetByMail(string email)
    {
        return new SuccessDataResult<User>(_userDal.Get(u => u.Email == email));
    }
    //[CacheAspect]
    public IDataResult<List<OperationClaim>> GetClaims(User user)
    {
        return new SuccessDataResult<List<OperationClaim>>(_userDal.GetClaims(user));
    }

    //[CacheAspect]
    public IDataResult<List<UserDetailDTO>> GetUserDetils()
    {
        return new SuccessDataResult<List<UserDetailDTO>>(_userDal.GetUserDetails(), Messages.UsersListed);
    }

    //[CacheAspect]
    public IDataResult<List<UserDetailDTO>> GetUserDetilsByEmail(string email)
    {
        return new SuccessDataResult<List<UserDetailDTO>>(_userDal.GetUserDetailsByEmail(email));
    }

    //[CacheAspect]
    public IDataResult<List<UserDetailDTO>> GetUserDetilsByUserId(Guid userId)
    {
        return new SuccessDataResult<List<UserDetailDTO>>(_userDal.GetUserDetailsByUserId(userId), Messages.UserListed);
    }

}

