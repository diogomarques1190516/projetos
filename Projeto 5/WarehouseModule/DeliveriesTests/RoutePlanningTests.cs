using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using WarehouseManagement.Domain.Deliveries;
using WarehouseManagement.Domain.Warehouses;
using WarehouseManagement.Domain.Shared;
using Moq;
using Xunit;

namespace WarehouseManagement.DeliveriesTests
{
    public class RoutePlanningTests
    {
        private readonly DeliveryService _sut;
        private readonly Mock<IDeliveryRepository> _delrepository_mock = new Mock<IDeliveryRepository>();
        private readonly Mock<IUnitOfWork> _delrunit_mock = new Mock<IUnitOfWork>();
        private readonly Mock<IWarehouseRepository> _whrepository_mock = new Mock<IWarehouseRepository>();
        public RoutePlanningTests()
        {
            _sut = new DeliveryService(_delrunit_mock.Object, _delrepository_mock.Object, _whrepository_mock.Object);
        }

        [Fact]
        public async Task ByDateAsync_ShouldReturnWarehouse_WhenItExits()
        {
            //Arrange
            DeliveryId id1 = new DeliveryId("221104/1");
            string deliveryDate1 = "08-11-2022";
            double massOfDelivery = 120.4;
            WarehouseId warehouseId = new WarehouseId("W01");
            int timeToPlaceDelivery = 12;
            int timeToPickUpDelivery = 28;
            Delivery delivery1 = new Delivery(id1, deliveryDate1, massOfDelivery, warehouseId, timeToPlaceDelivery, timeToPickUpDelivery);
            var date = DateParser.fromString("12-12-2022");
            List<Delivery> list = new List<Delivery>();
            list.Add(delivery1);

            _delrepository_mock.Setup(x => x.GetByDateAsync(date))
            .ReturnsAsync(list);

            //Act
            var deliveryDtoList = _sut.GetByDateAsync(date);
            var delivery_result = deliveryDtoList.Result[0];

            //Assert
            Assert.Equal(delivery_result.Id.ToString(), id1.AsString());
            Assert.Equal(delivery_result.DeliveryDate, deliveryDate1);
            Assert.Equal(delivery_result.WarehouseId, warehouseId.AsString());
            Assert.Equal(delivery_result.MassOfDelivery, massOfDelivery);
            Assert.Equal(delivery_result.TimeToPlaceDelivery, timeToPlaceDelivery);
            Assert.Equal(delivery_result.TimeToPickUpDelivery, timeToPickUpDelivery);

        }

        [Fact]
        public async Task ByDateAsync_ShouldReturnNothing_WhenItNotExits()
        {
            //Arrange
            var date = DateParser.fromString("12-12-2022");

            _delrepository_mock.Setup(x => x.GetByDateAsync(It.IsAny<DateTime>()))
            .ReturnsAsync(() => null);

            //Act
            var delivery = _sut.GetByDateAsync(date);

            //Assert
//            Assert.Null(delivery.Result[0]);
        }
    }
} 
