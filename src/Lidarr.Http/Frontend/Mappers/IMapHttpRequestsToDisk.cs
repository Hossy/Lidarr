using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Lidarr.Http.Frontend.Mappers
{
    public interface IMapHttpRequestsToDisk
    {
        string Map(string resourceUrl);
        bool CanHandle(string resourceUrl);
        Task<IActionResult> GetResponse(string resourceUrl);
    }
}
