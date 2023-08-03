using Microsoft.AspNetCore.Http;

namespace Core.Utilities.Helpers.FileHelper;

public interface IFileHelper
{
    public string Upload(IFormFile file, string folder);
    public void Delete(string filePath);
    public string Update(IFormFile file, string folder, string oldFolder);
}

