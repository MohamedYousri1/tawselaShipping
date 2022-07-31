import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CouponsService {
  private base_url:string="https://tawsela-backend.innovations-eg.com/api/dashboard"
  constructor(private http:HttpClient) { }

  //get all
  getAll(){
    return this.http.get<any>(`${this.base_url}/coupons`)
  }

  //add
  add(data){
    return this.http.post<any>(`${this.base_url}/coupons`, data)
  }

  //edit
  edit(data, id){
    return this.http.post<any>(`${this.base_url}/coupons/${id}?_method=PUT`, data)
  }


      // delete
      delete_section(item: any):Observable<any>{
        return this.http.delete<any>(this.base_url +`/coupons/${item.id}`)
    }
}

