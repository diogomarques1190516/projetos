using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WarehouseManagement.Infrastructure;
using WarehouseManagement.Infrastructure.Warehouses;
using WarehouseManagement.Infrastructure.Deliveries;
using WarehouseManagement.Infrastructure.Shared;
using WarehouseManagement.Domain.Shared;
using WarehouseManagement.Domain.Warehouses;
using WarehouseManagement.Domain.Deliveries;


namespace WarehouseManagement
{
    public class Startup
    {
        
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddCors(options =>
                {
                    options.AddDefaultPolicy(
                                    policy  =>
                                    {
                                        policy.WithOrigins( "http://127.0.0.1:5500",
                                                            "http://localhost:5500",
                                                            "http://127.0.0.1:5555",
                                                            "http://localhost:5555",
                                                            "http://localhost:4200",
                                                            "http://127.0.0.1:4200",
                                                            "http://localhost:5033",
                                                            "http://127.0.0.1:5033",
                                                            "http://localhost:5000",
                                                            "http://127.0.0.1:5000",
                                                            "http://localhost:3000",
                                                            "http://127.0.0.1:3000",
                                                            "https://spalapr5.azurewebsites.net"
                                                            )
                                                            .AllowAnyHeader()
                                                            .AllowAnyMethod();
                                    });
                });


            services.AddDbContext<WarehouseManagementDbContext>(opt =>
                opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"))
                //opt.UseInMemoryDatabase("DDDSample1DB")
                //.ReplaceService<IValueConverterSelector, StronglyEntityIdValueConverterSelector>()
                );

            ConfigureMyServices(services);
            

            services.AddControllers().AddNewtonsoftJson();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        public void ConfigureMyServices(IServiceCollection services)
        {
            services.AddTransient<IUnitOfWork,UnitOfWork>();

            services.AddTransient<IWarehouseRepository,WarehouseRepository>();
            services.AddTransient<IWarehouseService,WarehouseService>();

            services.AddTransient<IDeliveryRepository,DeliveryRepository>();
            services.AddTransient<DeliveryService>();
        }
    }
}
