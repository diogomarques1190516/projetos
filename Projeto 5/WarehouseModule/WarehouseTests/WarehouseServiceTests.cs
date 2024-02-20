using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using WarehouseManagement.Domain.Warehouses;
using WarehouseManagement.Domain.Shared;
using Moq;
using Xunit;

namespace WarehouseManagement.WarehouseTests
{
    public class WarehouseServiceTests
    {
        private readonly WarehouseService _sut;
        private readonly Mock<IWarehouseRepository> _whrepository_mock = new Mock<IWarehouseRepository>();
        private readonly Mock<IUnitOfWork> _whrunit_mock = new Mock<IUnitOfWork>();
        public WarehouseServiceTests()
        {
            _sut = new WarehouseService(_whrunit_mock.Object, _whrepository_mock.Object);
        }

        [Fact]
        public async Task ByIdAsync_ShouldReturnWarehouse_WhenItExits()
        {
            //Arrange
            WarehouseId id1 = new WarehouseId("W01");
            string designation1 = "Maia Norte";
            string address = "Calle Gomez Laguna 2";
            double lat = 34;
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
            var warehouseDto1 = _sut.GetByIdAsync(id1);
            var warehouseDto2 = _sut.GetByIdAsync(id2); 

            //Assert
            Assert.Equal(warehouseDto1.Result.Id.ToString(), id1.AsString());
            Assert.Equal(warehouseDto1.Result.Designation, designation1);
            Assert.Equal(warehouseDto2.Result.Id.ToString(), id2.AsString());
            Assert.Equal(warehouseDto1.Result.Address, address);
            Assert.Equal(warehouseDto1.Result.Lat, lat);
            Assert.Equal(warehouseDto1.Result.Lng, lng);
        }

        [Fact]
        public async Task ByIdAsync_ShouldReturnNothing_WhenItNotExits()
        {
            //Arrange
            var id = new WarehouseId("");

            _whrepository_mock.Setup(x => x.GetByIdAsync(It.IsAny<WarehouseId>()))
            .ReturnsAsync(() => null);

            //Act
            var warehouse = _sut.GetByIdAsync(id);

            //Assert
            Assert.Null(warehouse.Result);
        }

        [Fact]
        public async Task AddAsync_ReturnsCorrectWarehouse()
        {
            //Arrange
            WarehouseId id = new WarehouseId("W01");
            string designation = "Maia Norte";
            string address = "Calle Gomez Laguna 2";
            double lat = 43;
            double lng = 38;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            var wh = new WarehouseDto(id.AsString(),designation,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);
            //_whrepository_mock.Setup(x => x.GetByIdAsync(It.IsAny<WarehouseId>()))
            //.ReturnsAsync(() => null);

            //Act
            var warehouse = _sut.AddAsync(wh);

            //Assert
            Assert.Equal(warehouse.Result.Id.ToString(), id.AsString());
            Assert.Equal(warehouse.Result.Designation, designation);
            Assert.Equal(warehouse.Result.Address, address);
            Assert.Equal(warehouse.Result.Lat, lat);
            Assert.Equal(warehouse.Result.Lng, lng);
        }

        [Fact]
        public async Task UpdateAsync_ReturnsCorrectWarehouse()
        {
            //Arrange
            WarehouseId id = new WarehouseId("W01");
            string designation = "Maia Norte";
            string designationNew = "Matosinhos";
            string address = "Calle Gomez Laguna 2";
            double lat = 54;
            double lng = 38;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            var whnew = new WarehouseDto(id.AsString(),designationNew,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);
            var whold = new Warehouse(id, designation, address,lat, lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            _whrepository_mock.Setup(x => x.GetByIdAsync(id))
            .ReturnsAsync(whold);

            //Act
            var warehouseDto =  _sut.AddAsync(whnew);

            //Assert
            Assert.Equal(warehouseDto.Result.Id.ToString(), id.AsString());
            Assert.Equal(warehouseDto.Result.Designation, designationNew);
            Assert.Equal(warehouseDto.Result.Address, address);
            Assert.Equal(warehouseDto.Result.Lat, lat);
            Assert.Equal(warehouseDto.Result.Lng, lng);
        }

        [Fact]
        public async Task UpdateAsync_TryToUpdateNonExistingWarehouse()
        {
            var id = new WarehouseId("W01");
            string designation = "Maia Norte";
            string address = "Calle Gomez Laguna 2";
            double lat = 23;
            double lng = 38;
            double altitude = 30;
            double radius = 3;
            double rotation = 230;
            double scale = 4;
            string model = "https://TODO";
            bool isMainWarehouse = false;
            var wh = new WarehouseDto(id.AsString(),designation,address,lat,lng, altitude, radius, rotation, scale, model,isMainWarehouse);

            _whrepository_mock.Setup(x => x.GetByIdAsync(It.IsAny<WarehouseId>()))
            .ReturnsAsync(() => null);

            //Act
            var warehouse = _sut.UpdateAsync(wh);

            //Assert
            Assert.Null(warehouse.Result);
        }
    }
} 
