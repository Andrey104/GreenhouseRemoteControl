import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceComponent } from './device/device.component';
import {RouterModule} from '@angular/router';

export const router = [{
  path: '',
  component: DeviceListComponent
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  declarations: [DeviceListComponent, DeviceComponent]
})
export class DevicesModule { }
