using Business.Abstract;
using Business.Constants;
using Business.ValidationRules;
using Core.Aspect.Autofac.Validation;
using Core.Entities.Concreate;
using Core.Utilities.Results;
using Core.Utilities.Security.Hashing;
using Core.Utilities.Security.JWT;
using Entities.DTOs;

namespace Business.Concreate;

public class AuthManager : IAuthService
{
    IUserService _userService;
    ITokenHelper _tokenHelper;

    public AuthManager(ITokenHelper tokenHelper, IUserService userService)
    {
        _tokenHelper = tokenHelper;
        _userService = userService;
    }


    public IDataResult<AccessToken> CreateAccessToken(User user)
    {
        var claims = _userService.GetClaims(user);
        var accessToken = _tokenHelper.CreateToken(user, claims.Data);
        return new SuccessDataResult<AccessToken>(accessToken, Messages.AccessTokenCreated);
    }

    [ValidationAspect(typeof(LoginValidator))]

    public IDataResult<User> Login(UserForLoginDTO userForLoginDto)
    {
        var userToCheck = _userService.GetByMail(userForLoginDto.Email);
        if (userToCheck == null)
        {
            return new ErrorDataResult<User>(Messages.UserNotFound);
        }

        if (!HashingHelper.VerifyPasswordHash(userForLoginDto.Password, userToCheck.Data.PasswordHash, userToCheck.Data.PasswordSalt))
        {
            return new ErrorDataResult<User>(Messages.PasswordError);
        }

        return new SuccessDataResult<User>(userToCheck.Data, Messages.SuccessfulLogin);
    }

    [ValidationAspect(typeof(RegisterValidator))]

    public IDataResult<User> Register(UserForRegisterDTO userForRegisterDto, string password)
    {
        byte[] passwordHash, passwordSalt;
        HashingHelper.CreatePasswordHash(password, out passwordHash, out passwordSalt);
        var user = new User
        {
            Email = userForRegisterDto.Email,
            FirstName = userForRegisterDto.FirstName,
            LastName = userForRegisterDto.LastName,
            PhoneNumber = userForRegisterDto.PhoneNumber,
            PasswordHash = passwordHash,
            PasswordSalt = passwordSalt,

            Status = true
        };
        _userService.Add(user);
        return new SuccessDataResult<User>(user, Messages.UserRegistered);
    }

    public IResult UserExists(string email)
    {
        if (_userService.GetByMail(email).Data != null)
        {
            return new ErrorResult(Messages.UserAlreadyExists);
        }
        return new SuccessResult();
    }
}

