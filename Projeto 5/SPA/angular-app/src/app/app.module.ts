import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { HttpClientModule } from '@angular/common/http';
import { WarehouseManagerComponent } from './warehouse-manager/warehouse-manager.component';
import { CreateWarehouseComponent } from './warehouse-manager/create-warehouse/create-warehouse.component';
import { ListWarehouseComponent } from './warehouse-manager/list-warehouse/list-warehouse.component';
import { WarehouseManDashComponent } from './dashboard/warehouse-man-dash/warehouse-man-dash.component';
import { LogisticsManagerComponent } from './logistics-manager/logistics-manager.component';
import { CreatePackagingComponent } from './logistics-manager/create-packaging/create-packaging.component';
import { ListPackagingComponent } from './logistics-manager/list-packaging/list-packaging.component';
import { LogisticsManDashComponent } from './dashboard/logistics-man-dash/logistics-man-dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list'
import { CreateDeliveryComponent } from './warehouse-manager/create-delivery/create-delivery.component';
import { ListDeliveryComponent } from './warehouse-manager/list-delivery/list-delivery.component';
import { CreateRouteComponent } from './logistics-manager/create-route/create-route.component';
import { ListRouteComponent } from './logistics-manager/list-route/list-route.component';
import { RoadMapComponent } from './logistics-manager/road-map/road-map.component';
import { RoutePlanningComponent } from './logistics-manager/route-planning/route-planning.component';
import { DatePipe } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { CreateAccountComponent } from './admin/create-account/create-account.component';
import { CancelAnAccountComponent } from './admin/cancel-an-account/cancel-an-account.component';
import { AdminDashComponent } from './dashboard/admin-dash/admin-dash.component';
import { CreateTruckComponent } from './logistics-manager/create-truck/create-truck.component';
import { ListTruckComponent } from './logistics-manager/list-truck/list-truck.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { FilterPipe } from './filter.pipe';
import { OrderPipe } from './order.pipe';
import { OAuthModule } from 'angular-oauth2-oidc';
import { InhibitWarehouseComponent } from './warehouse-manager/inhibit-warehouse/inhibit-warehouse.component'


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FrontPageComponent,
    CreateTruckComponent,
    ListTruckComponent,
    WarehouseManagerComponent,
    CreateWarehouseComponent,
    ListWarehouseComponent,
    WarehouseManDashComponent,
    LogisticsManagerComponent,
    LogisticsManDashComponent,
    CreatePackagingComponent,
    ListPackagingComponent,
    CreateDeliveryComponent,
    ListDeliveryComponent,
    CreateRouteComponent,
    ListRouteComponent,
    RoadMapComponent,
    RoutePlanningComponent,
    AdminComponent,
    CreateAccountComponent,
    CancelAnAccountComponent,
    AdminDashComponent,
   // WarehouseManDashComponent,
    FilterPipe,
    OrderPipe,
   // MatPaginatorModule,
    InhibitWarehouseComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatGridListModule,
    BrowserModule,
    ReactiveFormsModule,
    SocialLoginModule,
    OAuthModule.forRoot()
  ],
  providers: [Title,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '331782593215-fp5ugi0t8ucsuhp2dv9h5v6gg0cotsb7.apps.googleusercontent.com'
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
