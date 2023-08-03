using Business.Abstract;
using Business.Constants;
using Business.ValidationRules;
using Core.Aspect.Autofac.Caching;
using Core.Aspect.Autofac.Validation;
using Core.Utilities.Results;
using DataAccess.Abstract;
using Entities.Concreate;
using Entities.DTOs;

namespace Business.Concreate;

public class BrandManager : IBrandService
{
    IBrandDal _brandDal;

    public BrandManager(IBrandDal brandDal)
    {
        _brandDal = brandDal;
    }

    //[SecuredOperation("admin, user")]
    [ValidationAspect(typeof(BrandValidator))]
    public IResult Add(Brand brand)
    {
        _brandDal.Add(brand);

        return new SuccessResult(Messages.BrandAdded);
    }

    //[SecuredOperation("admin")]
    [ValidationAspect(typeof(BrandValidator))]
    public IResult Delete(Brand brand)
    {
        _brandDal.Delete(brand);

        return new SuccessResult(Messages.BrandDeleted);
    }


    public IDataResult<List<Brand>> GetAll()
    {
        return new SuccessDataResult<List<Brand>>(_brandDal.GetAll(), Messages.BrandsListed);
    }


    public IDataResult<List<BrandDetailDTO>> GetBrandDetailsAll()
    {
        return new SuccessDataResult<List<BrandDetailDTO>>(_brandDal.GetBrandDetails(), Messages.BrandsListed);
    }


    public IDataResult<List<BrandDetailDTO>> GetBrandDetailsIdByBrandId(Guid brandId)
    {
        return new SuccessDataResult<List<BrandDetailDTO>>(_brandDal.GetBrandDetailsIdByBrandId(brandId), Messages.BrandsListed);
    }


    public IDataResult<List<BrandDetailDTO>> GetBrandDetailsIdByImageId(Guid imageId)
    {
        return new SuccessDataResult<List<BrandDetailDTO>>(_brandDal.GetBrandDetailsIdByImageId(imageId), Messages.BrandsListed);
    }


    public IDataResult<Brand> GetById(Guid id)
    {
        return new SuccessDataResult<Brand>(_brandDal.Get(b => b.Id == id), Messages.BrandsListed);
    }

    //[SecuredOperation("admin")]
    [ValidationAspect(typeof(BrandValidator))]
    public IResult Update(Brand brand)
    {
        _brandDal.Update(brand);

        return new SuccessResult(Messages.BrandUpdated);
    }
}

