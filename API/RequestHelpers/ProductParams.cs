namespace API.RequestHelpers
{
    public class ProductParams : PaginationProgram
    {
        public string OrderBy { get; set; }
        public string SearchTerm { get; set; }
        public string Types { get; set; }
    public string Brands { get; set; }
    }
}