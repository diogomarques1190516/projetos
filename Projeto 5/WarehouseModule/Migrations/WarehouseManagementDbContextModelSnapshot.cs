﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WarehouseManagement.Infrastructure;

#nullable disable

namespace DDDNetCore.Migrations
{
    [DbContext(typeof(WarehouseManagementDbContext))]
    partial class WarehouseManagementDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("WarehouseManagement.Domain.Deliveries.Delivery", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("DeliveryDate")
                        .HasColumnType("datetime2");

                    b.Property<double>("MassOfDelivery")
                        .HasColumnType("float");

                    b.Property<int>("TimeToPickUpDelivery")
                        .HasColumnType("int");

                    b.Property<int>("TimeToPlaceDelivery")
                        .HasColumnType("int");

                    b.Property<string>("WarehouseId")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Deliveries");
                });

            modelBuilder.Entity("WarehouseManagement.Domain.Warehouses.Warehouse", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Altitude")
                        .HasColumnType("float");

                    b.Property<string>("Designation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsMainWarehouse")
                        .HasColumnType("bit");

                    b.Property<double>("Lat")
                        .HasColumnType("float");

                    b.Property<double>("Lng")
                        .HasColumnType("float");

                    b.Property<string>("Model")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Radius")
                        .HasColumnType("float");

                    b.Property<double>("Rotation")
                        .HasColumnType("float");

                    b.Property<double>("Scale")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("Warehouses");
                });
#pragma warning restore 612, 618
        }
    }
}
