import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { WarehouseManagerComponent } from './warehouse-manager/warehouse-manager.component';
import { CreateWarehouseComponent } from './warehouse-manager/create-warehouse/create-warehouse.component';
import { ListWarehouseComponent } from './warehouse-manager/list-warehouse/list-warehouse.component';
import { CreatePackagingComponent } from './logistics-manager/create-packaging/create-packaging.component';
import { LogisticsManagerComponent } from './logistics-manager/logistics-manager.component';
import { ListPackagingComponent } from './logistics-manager/list-packaging/list-packaging.component';
import { CreateDeliveryComponent } from './warehouse-manager/create-delivery/create-delivery.component';
import { ListDeliveryComponent } from './warehouse-manager/list-delivery/list-delivery.component';
import { CreateRouteComponent } from './logistics-manager/create-route/create-route.component';
import { ListRouteComponent } from './logistics-manager/list-route/list-route.component';
import { RoadMapComponent } from './logistics-manager/road-map/road-map.component';
import { RoutePlanningComponent } from './logistics-manager/route-planning/route-planning.component';
import { AdminComponent } from './admin/admin.component';
import { CreateAccountComponent } from './admin/create-account/create-account.component';
import { CancelAnAccountComponent } from './admin/cancel-an-account/cancel-an-account.component';
import { CreateTruckComponent } from './logistics-manager/create-truck/create-truck.component';
import { ListTruckComponent } from './logistics-manager/list-truck/list-truck.component';
import { InhibitWarehouseComponent } from './warehouse-manager/inhibit-warehouse/inhibit-warehouse.component';
import { InhibitTruckComponent } from './logistics-manager/inhibit-truck/inhibit-truck.component';
import { AuthGuardAdminService } from './services/auth-guard-admin.service';
import { AuthGuardLogisticsService } from './services/auth-guard-logistics.service';
import { AuthGuardWarehouseService } from './services/auth-guard-warehouse.service';

const routes: Routes = [
  /* { path: 'heroes', component: HeroesComponent },*/
  { path: 'frontpage', component: FrontPageComponent },
  {
    path: 'profile/systemadmin', component: AdminComponent, canActivateChild: [AuthGuardAdminService], children: [
      { path: 'createaccount', component: CreateAccountComponent },
      { path: 'cancelaccount', component: CancelAnAccountComponent }
    ]
  },
  {
    path: 'profile/warehousemanager', component: WarehouseManagerComponent, canActivateChild: [AuthGuardWarehouseService, AuthGuardAdminService], children: [
      {
        path: 'createwarehouse', component: CreateWarehouseComponent
      },
      { path: 'listwarehouse', component: ListWarehouseComponent },
      { path: 'inhibitwarehouse', component: InhibitWarehouseComponent },
      { path: 'createdelivery', component: CreateDeliveryComponent },
      { path: 'listdeliveries', component: ListDeliveryComponent },
    ]
  },
  {
    path: 'profile/logisticsmanager', component: LogisticsManagerComponent, canActivateChild: [AuthGuardLogisticsService, AuthGuardAdminService], children: [
      { path: 'createtruck', component: CreateTruckComponent },
      { path: 'listtrucks', component: ListTruckComponent },
      { path: 'inhibittruck', component: InhibitTruckComponent },
      { path: 'createpackaging', component: CreatePackagingComponent },
      { path: 'listpackagings', component: ListPackagingComponent },
      { path: 'createroute', component: CreateRouteComponent },
      { path: 'listroutes', component: ListRouteComponent },
      { path: 'roadmap', component: RoadMapComponent },
      { path: 'routeplanningone', component: RoutePlanningComponent },
    ]
  },
  { path: '**', redirectTo: '/frontpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
