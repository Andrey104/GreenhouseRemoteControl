import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {NgModule} from '@angular/core';
import {AuthComponent} from './user/auth/auth.component';
import {AppComponent} from './app.component';
import {DeviceListComponent} from './devices/device-list/device-list.component';

const routes: Routes = [
  {path: '', loadChildren: 'app/devices/devices.module#DevicesModule', canActivate: [AuthGuard]},
  {path: 'login', component: AuthComponent},
  {path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
