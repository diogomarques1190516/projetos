﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WarehouseManagement.Infrastructure;

#nullable disable

namespace DDDNetCore.Migrations
{
    [DbContext(typeof(WarehouseManagementDbContext))]
    [Migration("20221116202331_Deliveries")]
    partial class Deliveries
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
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
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("WarehouseId");

                    b.ToTable("Deliveries");
                });

            modelBuilder.Entity("WarehouseManagement.Domain.Warehouses.Warehouse", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Designation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Lat")
                        .HasColumnType("float");

                    b.Property<double>("Lng")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.ToTable("Warehouses");
                });

            modelBuilder.Entity("WarehouseManagement.Domain.Deliveries.Delivery", b =>
                {
                    b.HasOne("WarehouseManagement.Domain.Warehouses.Warehouse", "Warehouse")
                        .WithMany()
                        .HasForeignKey("WarehouseId");

                    b.Navigation("Warehouse");
                });
#pragma warning restore 612, 618
        }
    }
}
