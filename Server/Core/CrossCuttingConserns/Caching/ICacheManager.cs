namespace Core.CrossCuttingConserns.Caching;

public interface ICacheManager
{
    T Get<T>(string key);
    object Get(string key);     //Üstekinin Alternatifi
    void Add(string key, object data, int duration);
    bool IsAdd(string key);
    void Remove(string key);
    void RemoveByPattern(string pattern);
}

