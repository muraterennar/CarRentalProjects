using Autofac;
using Autofac.Extras.DynamicProxy;
using Business.Abstract;
using Business.Concreate;
using Castle.DynamicProxy;
using Core.Utilities.Helpers.FileHelper;
using Core.Utilities.Interceptors;
using Core.Utilities.Security.JWT;
using DataAccess.Abstract;
using DataAccess.Concreate;

namespace Business.DependencyResolvers.Autofac;

public class AutofacBusinessModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        //Car
        builder.RegisterType<CarManager>().As<ICarService>().SingleInstance();
        builder.RegisterType<EfCarDal>().As<ICarDal>().SingleInstance();

        //Brand
        builder.RegisterType<BrandManager>().As<IBrandService>().SingleInstance();
        builder.RegisterType<EfBrandDal>().As<IBrandDal>().SingleInstance();

        //Color
        builder.RegisterType<ColorManager>().As<IColorService>().SingleInstance();
        builder.RegisterType<EfColorDal>().As<IColorDal>().SingleInstance();

        //User
        builder.RegisterType<UserManager>().As<IUserService>().SingleInstance();
        builder.RegisterType<EfUserDal>().As<IUserDal>().SingleInstance();

        //Customer
        builder.RegisterType<CustomerManager>().As<ICustomerService>().SingleInstance();
        builder.RegisterType<EfCustomerDal>().As<ICustomerDal>().SingleInstance();

        //Rental
        builder.RegisterType<RentalManager>().As<IRentalService>().SingleInstance();
        builder.RegisterType<EfRentalDal>().As<IRentalDal>().SingleInstance();

        //City
        builder.RegisterType<CityManager>().As<ICityService>().SingleInstance();
        builder.RegisterType<EfCityDal>().As<ICityDal>().SingleInstance();

        //Gender
        builder.RegisterType<GenderManager>().As<IGenderService>().SingleInstance();
        builder.RegisterType<EfGenderDal>().As<IGenderDal>().SingleInstance();

        //CreditCard
        builder.RegisterType<CreditCardManager>().As<ICreditCardService>().SingleInstance();
        builder.RegisterType<EfCreditCardDal>().As<ICreditCardDal>().SingleInstance();

        //CarImage
        builder.RegisterType<CarImageManager>().As<ICarImageService>().SingleInstance();
        builder.RegisterType<EfCarImageDal>().As<ICarImageDal>().SingleInstance();

        builder.RegisterType<FileHelperManager>().As<IFileHelper>().SingleInstance();

        //UserImage
        builder.RegisterType<UserImageManager>().As<IUserImageService>().SingleInstance();
        builder.RegisterType<EfUserImageDal>().As<IUserImageDal>().SingleInstance();

        builder.RegisterType<FileHelperManager>().As<IFileHelper>().SingleInstance();

        //BrandImage
        builder.RegisterType<BrandImageManager>().As<IBrandImageService>().SingleInstance();
        builder.RegisterType<EfBrandImageDal>().As<IBrandImageDal>().SingleInstance();

        builder.RegisterType<FileHelperManager>().As<IFileHelper>().SingleInstance();

        //User
        builder.RegisterType<UserManager>().As<IUserService>().SingleInstance();
        builder.RegisterType<EfUserDal>().As<IUserDal>().SingleInstance();

        //Category
        builder.RegisterType<CategoryManager>().As<ICategoryService>().SingleInstance();
        builder.RegisterType<EfCategoryDal>().As<ICategoryDal>().SingleInstance();

        //Auth % Token
        builder.RegisterType<AuthManager>().As<IAuthService>();
        builder.RegisterType<JwtHelper>().As<ITokenHelper>();

        var assembly = System.Reflection.Assembly.GetExecutingAssembly();

        builder.RegisterAssemblyTypes(assembly).AsImplementedInterfaces()
            .EnableInterfaceInterceptors(new ProxyGenerationOptions()
            {
                Selector = new AspectInterceptorSelector()
            }).SingleInstance();
    }
}

