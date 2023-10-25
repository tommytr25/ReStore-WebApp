using API.Entities.OrderAggregate;

namespace API.Data.DTOs
{
    public class CreateOrderDto
    {
        public bool SaveAddress { get; set; }
        public ShippingAddress ShippingAddress { get; set; }
        
    }
}