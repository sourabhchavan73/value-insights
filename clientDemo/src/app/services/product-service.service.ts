import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import {payMlrtStream} from '../../assets/dummyData/payMlrtStream.json'

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  getPayStreamData():Observable<any>{
    return this.http.get("../../assets/dummyData/payMlrtStream.json")
  }
}
