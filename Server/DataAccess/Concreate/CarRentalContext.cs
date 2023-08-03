using Core.Entities.Concreate;
using Entities.Concreate;
using Microsoft.EntityFrameworkCore;

namespace DataAccess.Concreate;

public class CarRentalContext : DbContext
{
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseMySQL("server=muraterennar.com; port=3306; database=u940062222_CarRentalDB; user=u940062222_carrental; password=MyPass@word3453; Persist Security Info=False; Connect Timeout=300");
    }

    public DbSet<Car> Cars { get; set; }
    public DbSet<Brand> Brands { get; set; }
    public DbSet<Color> Colors { get; set; }
    public DbSet<Customer> Customers { get; set; }
    public DbSet<Rental> Rentals { get; set; }
    public DbSet<City> Cities { get; set; }
    public DbSet<CarImage> CarImages { get; set; }
    public DbSet<UserImage> UserImages { get; set; }
    public DbSet<CreditCard> CreditCards { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<OperationClaim> OperationClaims { get; set; }
    public DbSet<UserOperationClaim> UserOperationClaims { get; set; }
    public DbSet<BrandImage> BrandImages { get; set; }
    public DbSet<Gender> Genders { get; set; }
    public DbSet<Category> Categories { get; set; }
}

