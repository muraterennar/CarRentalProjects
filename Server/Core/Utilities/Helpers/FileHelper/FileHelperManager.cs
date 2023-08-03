using Microsoft.AspNetCore.Http;

namespace Core.Utilities.Helpers.FileHelper;

public class FileHelperManager : IFileHelper
{
    public void Delete(string filePath)
    {
        if (File.Exists(filePath))
        {
            File.Delete(filePath);
        }
    }

    public string Update(IFormFile file, string folder, string oldFolder)
    {
        Delete(Path.Combine(folder, oldFolder));
        return Upload(file, folder);
    }

    //public string Upload(IFormFile file, string folder)
    //{
    //    string fileName = Guid.NewGuid().ToString() + "." + file.ContentType.Split("/")[1];
    //    string fullPath = Path.Combine(folder, fileName);

    //    using (FileStream fileStream = new FileStream(fullPath, FileMode.Create))
    //    {
    //        file.CopyTo(fileStream);
    //        fileStream.Flush();
    //        return fileName;
    //    }
    //}

    public string Upload(IFormFile file, string folder)
    {
        // Dosyayı sunucuya kaydedilecek klasör yolunu belirleyin
        string wwwroot = "wwwroot";
        string uploadPath = Path.Combine(Directory.GetCurrentDirectory(), wwwroot, folder);

        // Eğer belirtilen klasör yoksa, oluşturun
        if (!Directory.Exists(uploadPath))
        {
            Directory.CreateDirectory(uploadPath);
        }

        // Dosya adını ve uzantısını belirleyin
        string fileName = Guid.NewGuid().ToString() + "." + file.ContentType.Split("/")[1];

        // Dosyanın sunucuda tam yolu
        string fullPath = Path.Combine(uploadPath, fileName);

        // Dosyayı sunucuya kaydedin
        using (FileStream fileStream = new FileStream(fullPath, FileMode.Create))
        {
            file.CopyTo(fileStream);
            fileStream.Flush();
        }

        // Dosyanın URL'sini oluşturun ve döndürün
        string fileUrl = folder + fileName;
        return fileUrl;
    }


}

