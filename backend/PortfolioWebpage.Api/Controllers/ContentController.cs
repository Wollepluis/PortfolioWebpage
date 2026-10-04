using Microsoft.AspNetCore.Mvc;

namespace PortfolioWebpage.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContentController : ControllerBase
{
    private readonly string contentPath;

    public ContentController(IWebHostEnvironment environment)
    {
        contentPath = Path.Combine(environment.ContentRootPath, "Content");
    }

    [HttpGet("{name}")]
    public IActionResult GetContent(string name)
    {
        var filePath = Path.Combine(contentPath, $"{name}.txt");

        if (!System.IO.File.Exists(filePath))
        {
            return NotFound($"File not found: {filePath}");
        }

        var content = System.IO.File.ReadAllText(filePath);

        return Ok(content);
    }
}