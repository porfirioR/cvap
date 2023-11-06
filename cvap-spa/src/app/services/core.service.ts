import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreApiModel } from '../models/core-api-model';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private httpClient: HttpClient) { }

  public getData = (): Observable<CoreApiModel> => {
    return this.httpClient.get<CoreApiModel>('http://localhost:3000')
  }
}
