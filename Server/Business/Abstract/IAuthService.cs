using Core.Entities.Concreate;
using Core.Utilities.Results;
using Core.Utilities.Security.JWT;
using Entities.DTOs;

namespace Business.Abstract;

public interface IAuthService
{
    IDataResult<User> Register(UserForRegisterDTO userForRegisterDto, string password);
    IDataResult<User> Login(UserForLoginDTO userForLoginDto);
    IDataResult<AccessToken> CreateAccessToken(User user);
    IResult UserExists(string email);
}

