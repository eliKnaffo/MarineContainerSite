import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Container } from '../Container';


  
  @Injectable({
    providedIn: 'root'
  })
  export class MarinServiceService {
    
    Marinurl : string = 'http://192.168.0.83/MarinApi/api/Values';
    constructor(private http : HttpClient) { }
   

    public getAllContainers():Observable<Container[]>{
      return this.http.get<Container[]>(this.Marinurl)
    }
}
