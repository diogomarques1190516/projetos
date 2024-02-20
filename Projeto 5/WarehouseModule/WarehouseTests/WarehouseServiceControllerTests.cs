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
    public class WarehouseServiceControllerTests
    {
        private readonly WarehousesController _sut;
        private readonly WarehouseService whService;
        private readonly Mock<IWarehouseRepository> _whrepository_mock = new Mock<IWarehouseRepository>();
        private readonly Mock<IUnitOfWork> _whrunit_mock = new Mock<IUnitOfWork>();

        public WarehouseServiceControllerTests(){
            whService = new WarehouseService(_whrunit_mock.Object, _whrepository_mock.Object);
            _sut = new WarehousesController(whService);
        }

        [Fact]
        public async Task Create_CorrectCreate()
        {
             //Arrange
            WarehouseId id = new WarehouseId("W01");
            string designation = "Maia Norte";
            string address = "Calle Gomez Laguna 2";
            double lat = 112;
            double lng = 38;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            var warehouse = new WarehouseDto(id.AsString(),designation,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            _whrepository_mock.Setup(x => x.AddAsync(It.IsAny<Warehouse>())).Verifiable();

            //Act
            var result = _sut.Create(warehouse);

            //Assert
            var redirectToActionResult = Assert.IsType<ActionResult<WarehouseDto>>(result.Result);
            //Assert.IsType<CreatedAtActionResult>(redirectToActionResult.Result);
        }

        [Fact]
        public async Task Create_FailureCreating()
        {
            //Arrange
            WarehouseId id = new WarehouseId("W01");
            string designation = "Maia Norte";
            string address = "Calle Gomez Laguna 2";
            double lat = 112;
            double lng = 38;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            var warehouse = new WarehouseDto(id.AsString(),designation,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);
            var ex = new BusinessRuleValidationException("Error");

            _whrepository_mock.Setup(x => x.AddAsync(It.IsAny<Warehouse>())).ThrowsAsync(ex);
            
            //Act
            var result = _sut.Create(warehouse);

            //Assert
            var redirectToActionResult = Assert.IsType<ActionResult<WarehouseDto>>(result.Result);
            Assert.IsType<BadRequestObjectResult>(redirectToActionResult.Result);
        }

        [Fact]
        public async Task GetById_ReturnWarehouseCorrectly()
        {
            //Arrange
            WarehouseId id1 = new WarehouseId("W01");
            string designation1 = "Maia Norte";
            string address = "Calle Gomez Laguna 2";
            double lat = 65;
            double lng = 38;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            var warehouse1 = new Warehouse(id1,designation1,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            WarehouseId id2 = new WarehouseId("W02");
            string designation2 = "Matosinhos";
            var warehouse2 = new Warehouse(id2,designation2,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            _whrepository_mock.Setup(x => x.GetByIdAsync(id1))
            .ReturnsAsync(warehouse1);

            _whrepository_mock.Setup(x => x.GetByIdAsync(id2))
            .ReturnsAsync(warehouse2);

            //Act
            var result1 = _sut.GetGetById(id1.AsString());
            var result2 = _sut.GetGetById(id2.AsString());

            //Assert
            var redirectToActionResult1 = Assert.IsType<ActionResult<WarehouseDto>>(result1.Result);
            var redirectToWarehouse1 = Assert.IsType<WarehouseDto>(redirectToActionResult1.Value);
            Assert.Equal(id1.AsString(), redirectToWarehouse1.Id);
            Assert.Equal(designation1, redirectToWarehouse1.Designation);
            Assert.Equal(address, redirectToWarehouse1.Address);
            Assert.Equal(lat, redirectToWarehouse1.Lat);
            Assert.Equal(lng, redirectToWarehouse1.Lng);

            var redirectToActionResult2 = Assert.IsType<ActionResult<WarehouseDto>>(result2.Result);
            var redirectToWarehouse2 = Assert.IsType<WarehouseDto>(redirectToActionResult2.Value);
            Assert.Equal(id2.AsString(), redirectToWarehouse2.Id);
            Assert.Equal(designation2, redirectToWarehouse2.Designation);
            Assert.Equal(address, redirectToWarehouse2.Address);
            Assert.Equal(lat, redirectToWarehouse2.Lat);
            Assert.Equal(lng, redirectToWarehouse2.Lng);
        }

        [Fact]
        public async Task GetById_ReturnNull_WhenWarehouseDoesNotExist()
        {
            //Arrange
            WarehouseId id = new WarehouseId("");
            _whrepository_mock.Setup(x => x.GetByIdAsync(It.IsAny<WarehouseId>()))
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
            WarehouseId id = new WarehouseId("W01");
            string designation1 = "Maia Norte";
            string address = "Calle Gomez Laguna 2";
            double lat = 54;
            double lng = 38;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            Warehouse warehouseOld = new Warehouse(id,designation1,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            string designation2 = "Matosinhos";
            WarehouseDto warehouseNew = new WarehouseDto(id.AsString(),designation2,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            _whrepository_mock.Setup(x => x.GetByIdAsync(It.IsAny<WarehouseId>()))
            .ReturnsAsync(warehouseOld);

            //Act
            var result = _sut.Update(id.AsString(), warehouseNew);

            //Assert
            var redirectToActionResult = Assert.IsType<ActionResult<WarehouseDto>>(result.Result);
            Assert.IsType<OkObjectResult>(redirectToActionResult.Result);
        }

        [Fact]
        public async Task Update_RetursNull_WhenWarehouseDoesNotExist()
        {
            //Arrange
            WarehouseId id = new WarehouseId("");
            string designation1 = "Maia Norte";
            string address = "Calle Gomez Laguna 2";
            double lat = 44;
            double lng = 38;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            var warehouse = new WarehouseDto(id.AsString(),designation1,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            _whrepository_mock.Setup(x => x.GetByIdAsync(It.IsAny<WarehouseId>()))
            .ReturnsAsync(() => null);

            //Act
            var result = _sut.Update(id.AsString(), warehouse);

            //Assert
            Assert.Null(result.Result.Value);
            Assert.IsType<NotFoundResult>(result.Result.Result);
        }
    }

}