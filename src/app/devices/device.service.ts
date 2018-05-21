import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseApi} from '../core/base-api';
import {Observable} from 'rxjs/Observable';
import {Page} from '../models/page';
import {Device} from '../models/device';


@Injectable()
export class BrigadesService extends BaseApi {

  constructor(public http: HttpClient) {
    super(http);
  }

  getDevices(page?: string): Observable<Page<Device>> {
    return this.getPage(`device`, page);
  }
  // addBrigade(brigade: Brigade): Observable<Brigade> {
  //   return this.post(`installer_groups/`, brigade);
  // }
  // editBrigade(brigade: Brigade): Observable<Brigade> {
  //   return this.put(`installer_groups/${brigade.id}/`, brigade);
  // }
  // deleteBrigade(brigade: Brigade) {
  //   return this.del(`installer_groups/${brigade.id}/`);
  // }
}
