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
    public class DeliveryServiceTests
    {
        private readonly DeliveryService _sut;
        private readonly Mock<IDeliveryRepository> _delrepository_mock = new Mock<IDeliveryRepository>();
        private readonly Mock<IUnitOfWork> _delrunit_mock = new Mock<IUnitOfWork>();
        private readonly Mock<IWarehouseRepository> _whrepository_mock = new Mock<IWarehouseRepository>();
        public DeliveryServiceTests()
        {
            _sut = new DeliveryService(_delrunit_mock.Object, _delrepository_mock.Object, _whrepository_mock.Object);
        }

        [Fact]
        public async Task ByIdAsync_ShouldReturnWarehouse_WhenItExits()
        {
            //Arrange
            DeliveryId id1 = new DeliveryId("221104/1");
            string deliveryDate1 = "08-11-2022";
            double massOfDelivery = 120.4;
            WarehouseId warehouseId = new WarehouseId("W01");
            int timeToPlaceDelivery = 12;
            int timeToPickUpDelivery = 28;
            Delivery delivery1 = new Delivery(id1, deliveryDate1, massOfDelivery, warehouseId, timeToPlaceDelivery, timeToPickUpDelivery);

            DeliveryId id2 = new DeliveryId("221104/2");
            string deliveryDate2 = "14-11-2022";
            Delivery delivery2 = new Delivery(id2, deliveryDate2, massOfDelivery, warehouseId, timeToPlaceDelivery, timeToPickUpDelivery);
            
            _delrepository_mock.Setup(x => x.GetByIdAsync(id1))
            .ReturnsAsync(delivery1);

            _delrepository_mock.Setup(x => x.GetByIdAsync(id2))
            .ReturnsAsync(delivery2);

            //Act
            var deliveryDto1 = _sut.GetByIdAsync(id1);
            var deliveryDto2 = _sut.GetByIdAsync(id2); 

            //Assert
            Assert.Equal(deliveryDto1.Result.Id.ToString(), id1.AsString());
            Assert.Equal(deliveryDto1.Result.DeliveryDate, deliveryDate1);
            Assert.Equal(deliveryDto1.Result.WarehouseId, warehouseId.AsString());
            Assert.Equal(deliveryDto1.Result.MassOfDelivery, massOfDelivery);
            Assert.Equal(deliveryDto1.Result.TimeToPlaceDelivery, timeToPlaceDelivery);
            Assert.Equal(deliveryDto1.Result.TimeToPickUpDelivery, timeToPickUpDelivery);

            Assert.Equal(deliveryDto2.Result.Id.ToString(), id2.AsString());
            Assert.Equal(deliveryDto2.Result.DeliveryDate, deliveryDate2);
        }

        [Fact]
        public async Task ByIdAsync_ShouldReturnNothing_WhenItNotExits()
        {
            //Arrange
            var id = new DeliveryId("");

            _delrepository_mock.Setup(x => x.GetByIdAsync(It.IsAny<DeliveryId>()))
            .ReturnsAsync(() => null);

            //Act
            var delivery = _sut.GetByIdAsync(id);

            //Assert
            Assert.Null(delivery.Result);
        }

        [Fact]
        public async Task UpdateAsync_ReturnsCorrectDelivery()
        {
            //Arrange
            DeliveryId id = new DeliveryId("221104/1");
            string deliveryDate1 = "08-11-2022";
            double massOfDelivery = 120.4;
            WarehouseId warehouseId = new WarehouseId("W01");
            int timeToPlaceDelivery = 12;
            int timeToPickUpDelivery = 28;
            Delivery oldDelivery = new Delivery(id, deliveryDate1, massOfDelivery, warehouseId, timeToPlaceDelivery, timeToPickUpDelivery);
            
            string deliveryDate2 = "14-11-2022";
            DeliveryDto newDelivery = new DeliveryDto(id.AsString(), deliveryDate2, massOfDelivery, warehouseId.AsString(), timeToPlaceDelivery, timeToPickUpDelivery);

            _delrepository_mock.Setup(x => x.GetByIdAsync(id))
            .ReturnsAsync(oldDelivery);

            //Act
            var deliveryDto =  _sut.UpdateAsync(newDelivery);

            //Assert
//            Assert.Equal(deliveryDto.Result.Id.ToString(), id.AsString());
  //          Assert.Equal(deliveryDto.Result.DeliveryDate, deliveryDate1);
   //         Assert.Equal(deliveryDto.Result.WarehouseId, warehouseId.AsString());
  //          Assert.Equal(deliveryDto.Result.MassOfDelivery, massOfDelivery);
    //        Assert.Equal(deliveryDto.Result.TimeToPlaceDelivery, timeToPlaceDelivery);
      //      Assert.Equal(deliveryDto.Result.TimeToPickUpDelivery, timeToPickUpDelivery);
        }

        [Fact]
        public async Task UpdateAsync_TryToUpdateNonExistingWarehouse()
        {
            DeliveryId id = new DeliveryId("221104/1");
            string deliveryDate1 = "08-11-2022";
            double massOfDelivery = 120.4;
            WarehouseId warehouseId = new WarehouseId("W01");
            int timeToPlaceDelivery = 12;
            int timeToPickUpDelivery = 28;
            DeliveryDto delivery = new DeliveryDto(id.AsString(), deliveryDate1, massOfDelivery, warehouseId.AsString(), timeToPlaceDelivery, timeToPickUpDelivery);

            string designation1 = "Maia Norte";
            string address = "Calle Gomez Laguna 2";
            double lat = 76;
            double lng = 38;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            var warehouse = new Warehouse(warehouseId,designation1,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            _delrepository_mock.Setup(x => x.GetByIdAsync(It.IsAny<DeliveryId>()))
            .ReturnsAsync(() => null);
            _whrepository_mock.Setup(x => x.GetByIdAsync(warehouseId))
            .ReturnsAsync(warehouse);

            //Act
            var result = _sut.UpdateAsync(delivery);

            //Assert
            Assert.Null(result.Result);
        }
    }
} 
