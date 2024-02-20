using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using WarehouseManagement.Domain.Warehouses;
using WarehouseManagement.Domain.Shared;
using WarehouseManagement.Controllers;
using Moq;
using Xunit;
using Microsoft.AspNetCore.Mvc;

namespace WarehouseManagement.WarehouseTests
{
    public class WarehouseControllerTests
    {
        private readonly WarehousesController _sut;
        private readonly Mock<IWarehouseRepository> _whrepository_mock = new Mock<IWarehouseRepository>();
        private readonly Mock<IUnitOfWork> _whrunit_mock = new Mock<IUnitOfWork>();
        private readonly Mock<IWarehouseService> _whservice_mock;

        public WarehouseControllerTests()
        {      
            _whservice_mock = new Mock<IWarehouseService>();
            _sut = new WarehousesController(_whservice_mock.Object);
        }

        [Fact]
        public async Task GetById_ReceivedCorrectly()
        {
            //Arrange
            string id = "W01";
            var whId = new WarehouseId("W01");
            string designation = "Maia Norte";
            string address = "Av Principal 24";
            double lat = 78.4;
            double lng = 55;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            WarehouseDto whDto = new WarehouseDto(id, designation, address, lat, lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            _whservice_mock.Setup(x => x.GetByIdAsync(whId))
            .ReturnsAsync(whDto);

            //Act
            var warehouse = _sut.GetGetById(id);

            //Assert
            var redirectToActionResult = Assert.IsType<WarehouseDto>(warehouse.Result.Value);
            Assert.Equal(id, redirectToActionResult.Id);
            Assert.Equal(designation, redirectToActionResult.Designation);
            Assert.Equal(address, redirectToActionResult.Address);
            Assert.Equal(lat, redirectToActionResult.Lat);
            Assert.Equal(lng, redirectToActionResult.Lng);
        }

        [Fact]
        public async Task GetById_IdNotExists()
        {
            //Arrange
            string id = "W01";

            _whservice_mock.Setup(x => x.GetByIdAsync(It.IsAny<WarehouseId>()))
            .ReturnsAsync(() => null);

            //Act
            var warehouse = _sut.GetGetById(id);
            
            //Assert
            Assert.Null(warehouse.Result.Value);
        }

        [Fact]
        public async Task Create_FailureCreating()
        {
            //Arrange
            string id = "W01";
            var whId = new WarehouseId("W01");
            string designation = "Maia Norte";
            string address = "Av Principal 24";
            double lat = 78.4;
            double lng = 55;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            WarehouseDto whDto = new WarehouseDto(id, designation, address, lat, lng, altitude, radius, rotation, scale, model, isMainWarehouse);

            _whservice_mock.Setup(x => x.AddAsync(whDto))
            .ThrowsAsync(new BusinessRuleValidationException("Error creating Warehouse"));

            //Act
            var result = _sut.Create(whDto);

            //Assert
            Assert.IsType<BadRequestObjectResult>(result.Result.Result);
        }

        [Fact]
        public async Task Create_CreateSuccess()
        {
            //Arrange
            string id = "W05";
            var whId = new WarehouseId("W05");
            string designation = "Maia Norte";
            string address = "Av Principal 24";
            double lat = 78.4;
            double lng = 55;
            double altitude = 30;
            double radius = 3;
            double rotation = 20;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            WarehouseDto whDto = new WarehouseDto(id, designation, address, lat, lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            _whservice_mock.Setup(x => x.AddAsync(whDto))
            .ReturnsAsync(whDto);

            //Act
            var warehouse = _sut.Create(whDto);

            //Assert
//            var redirectToActionResult = Assert.IsType<WarehouseDto>(warehouse);
 //           Assert.Equal(id, redirectToActionResult.Id);
  //          Assert.Equal(designation, redirectToActionResult.Designation);
   //         Assert.Equal(address, redirectToActionResult.Address);
    //        Assert.Equal(lat, redirectToActionResult.Lat);
     //       Assert.Equal(lng, redirectToActionResult.Lng);
        }
    }
}