using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using WarehouseManagement.Domain.Warehouses;
using WarehouseManagement.Domain.Shared;
using WarehouseManagement.Controllers;
using Moq;
using Xunit;
using Microsoft.AspNetCore.Mvc;
using WarehouseManagement.Domain.Deliveries;

namespace WarehouseManagement.DeliveriesTests
{
    public class DeliveriesServiceControllerTests
    {
        private readonly DeliveriesController _sut;
        private readonly DeliveryService delService;
        private readonly Mock<IDeliveryRepository> _delrepository_mock = new Mock<IDeliveryRepository>();
        private readonly Mock<IUnitOfWork> _delrunit_mock = new Mock<IUnitOfWork>();
        private readonly Mock<IWarehouseRepository> _whrepository_mock = new Mock<IWarehouseRepository>();

        public DeliveriesServiceControllerTests(){
            delService = new DeliveryService(_delrunit_mock.Object, _delrepository_mock.Object,_whrepository_mock.Object);
            _sut = new DeliveriesController(delService);
        }

        [Fact]
        public async Task Create_CorrectCreate()
        {
            //Arrange
            WarehouseId id = new WarehouseId("W01");
            DeliveryId id1 = new DeliveryId("221104/1");
            string deliveryDate1 = "08-11-2022";
            double massOfDelivery = 120.4;
            WarehouseId warehouseId = new WarehouseId("W01");
            int timeToPlaceDelivery = 12;
            int timeToPickUpDelivery = 28;
            DeliveryDto delivery = new DeliveryDto(id1.AsString(), deliveryDate1, massOfDelivery, warehouseId.AsString(), timeToPlaceDelivery, timeToPickUpDelivery);

            _whrepository_mock.Setup(x => x.AddAsync(It.IsAny<Warehouse>())).Verifiable();
            _delrepository_mock.Setup(x => x.AddAsync(It.IsAny<Delivery>())).Verifiable();

            //Act
            var result = _sut.Create(delivery);

            //Assert
            var redirectToActionResult = Assert.IsType<ActionResult<DeliveryDto>>(result.Result);
//            Assert.IsType<CreatedAtActionResult>(redirectToActionResult.Result);
        }

        [Fact]
        public async Task Create_FailureCreating()
        {
            //Arrange
            WarehouseId id = new WarehouseId("W01");
            DeliveryId id1 = new DeliveryId("221104/1");
            string deliveryDate1 = "08-11-2022";
            double massOfDelivery = 120.4;
            WarehouseId warehouseId = new WarehouseId("W01");
            int timeToPlaceDelivery = 12;
            int timeToPickUpDelivery = 28;
            DeliveryDto delivery = new DeliveryDto(id1.AsString(), deliveryDate1, massOfDelivery, warehouseId.AsString(), timeToPlaceDelivery, timeToPickUpDelivery);

            var ex = new BusinessRuleValidationException("Error");

            _whrepository_mock.Setup(x => x.AddAsync(It.IsAny<Warehouse>())).Returns(value: null);
            
            //Act
            var result = _sut.Create(delivery);

            //Assert
            var redirectToActionResult = Assert.IsType<ActionResult<DeliveryDto>>(result.Result);
            Assert.IsType<BadRequestObjectResult>(redirectToActionResult.Result);
        }

        [Fact]
        public async Task GetById_ReturnWarehouseCorrectly()
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
            var result1 = _sut.GetGetById(id1.AsString());
            var result2 = _sut.GetGetById(id2.AsString());

            //Assert
            var redirectToActionResult1 = Assert.IsType<ActionResult<DeliveryDto>>(result1.Result);
            var redirectToDelivery1 = Assert.IsType<DeliveryDto>(redirectToActionResult1.Value);
            Assert.Equal(id1.AsString(), redirectToDelivery1.Id);
            Assert.Equal(deliveryDate1, redirectToDelivery1.DeliveryDate);
            Assert.Equal(massOfDelivery, redirectToDelivery1.MassOfDelivery);
            Assert.Equal(warehouseId.AsString(), redirectToDelivery1.WarehouseId);
            Assert.Equal(timeToPickUpDelivery, redirectToDelivery1.TimeToPickUpDelivery);
            Assert.Equal(timeToPlaceDelivery, redirectToDelivery1.TimeToPlaceDelivery);

            var redirectToActionResult2 = Assert.IsType<ActionResult<DeliveryDto>>(result2.Result);
            var redirectToDelivery2 = Assert.IsType<DeliveryDto>(redirectToActionResult2.Value);
            Assert.Equal(id2.AsString(), redirectToDelivery2.Id);
            Assert.Equal(deliveryDate2, redirectToDelivery2.DeliveryDate);
            Assert.Equal(massOfDelivery, redirectToDelivery2.MassOfDelivery);
            Assert.Equal(warehouseId.AsString(), redirectToDelivery2.WarehouseId);
            Assert.Equal(timeToPickUpDelivery, redirectToDelivery2.TimeToPickUpDelivery);
            Assert.Equal(timeToPlaceDelivery, redirectToDelivery2.TimeToPlaceDelivery);
        }

        [Fact]
        public async Task GetById_ReturnNull_WhenWarehouseDoesNotExist()
        {
            //Arrange
            DeliveryId   id = new DeliveryId("");
            _delrepository_mock.Setup(x => x.GetByIdAsync(It.IsAny<DeliveryId>()))
            .ReturnsAsync(() => null);

            //Act
            var result = _sut.GetGetById(id.AsString());

            //Assert
            Assert.Null(result.Result.Value);
            Assert.IsType<NotFoundResult>(result.Result.Result);
        }

        [Fact]
        public async Task Update_ReturnUpdateWarehouse()
        {
            //Arrange
            DeliveryId id1 = new DeliveryId("221104/1");
            string deliveryDate1 = "08-11-2022";
            double massOfDelivery = 120.4;
            WarehouseId warehouseId = new WarehouseId("W01");
            int timeToPlaceDelivery = 12;
            int timeToPickUpDelivery = 28;
            Delivery oldDelivery = new Delivery(id1, deliveryDate1, massOfDelivery, warehouseId, timeToPlaceDelivery, timeToPickUpDelivery);

            DeliveryId id2 = new DeliveryId("221104/2");
            string deliveryDate2 = "14-11-2022";
            DeliveryDto newDelivery = new DeliveryDto(id1.AsString(), deliveryDate1, massOfDelivery, warehouseId.AsString(), timeToPlaceDelivery, timeToPickUpDelivery);
            
            _delrepository_mock.Setup(x => x.GetByIdAsync(id1))
            .ReturnsAsync(oldDelivery);

            //Act
            var result = _sut.Update(id1.AsString(), newDelivery);

            //Assert
            var redirectToActionResult = Assert.IsType<ActionResult<DeliveryDto>>(result.Result);
//            Assert.IsType<BadRequestObjectResult>(redirectToActionResult.Result);
   //         var redirectToDelivery = Assert.IsType<DeliveryDto>(redirectToActionResult.Value);
  //          Assert.Equal(id2.AsString(), redirectToDelivery.Id);
    //        Assert.Equal(deliveryDate2, redirectToDelivery.DeliveryDate);
      //      Assert.Equal(massOfDelivery, redirectToDelivery.MassOfDelivery);
      //      Assert.Equal(warehouseId.AsString(), redirectToDelivery.WarehouseId);
      //      Assert.Equal(timeToPickUpDelivery, redirectToDelivery.TimeToPickUpDelivery);
       //     Assert.Equal(timeToPlaceDelivery, redirectToDelivery.TimeToPlaceDelivery);
        }

        [Fact]
        public async Task Update_RetursNull_WhenWarehouseDoesNotExist()
        {
            //Arrange
            DeliveryId id = new DeliveryId("221104/1");
            string deliveryDate1 = "08-11-2022";
            double massOfDelivery = 120.4;
            WarehouseId warehouseId = new WarehouseId("W01");
            int timeToPlaceDelivery = 12;
            int timeToPickUpDelivery = 28;
            var delivery = new DeliveryDto(id.AsString(), deliveryDate1, massOfDelivery, warehouseId.AsString(), timeToPlaceDelivery, timeToPickUpDelivery);

            _delrepository_mock.Setup(x => x.GetByIdAsync(It.IsAny<DeliveryId>()))
            .ReturnsAsync(() => null);

            //Act
            var result = _sut.Update(id.AsString(), delivery);

            //Assert
            Assert.Null(result.Result.Value);
            Assert.IsType<BadRequestObjectResult>(result.Result.Result);
        }
    }

}