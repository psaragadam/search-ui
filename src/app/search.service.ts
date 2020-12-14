import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs/Rx';
 

@Injectable()
export class SearchService {
 
   baseURL= "http://localhost:8080/search";
 
   constructor(private httpClient: HttpClient){
   }
 
   getSearchData(searchText: string): Observable<[]> {
 
       if(searchText != null){
        this.baseURL = this.baseURL + '?searchText='+ searchText;
       }
       return this.httpClient.get<[]>(this.baseURL);
   }
  
}