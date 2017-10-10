import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MoviesService {
     apikey: string = "a93f51f3c07b58f12672d17eed97a8fa";
     url: string = "https://api.themoviedb.org/3/search/person?api_key=a93f51f3c07b58f12672d17eed97a8fa&language=en-US&query=";

    postUrl: string = "http://stephanie-fall-2017-phortonssf.c9users.io:8080/api/actors";
    
constructor( public http: Http) { }
     
 getData(end){
    return this.http.get(this.url + end)
    .map(res => res.json())
  } 
 

postData(actorName, movie) {
    return this.http.post(this.postUrl, {name: actorName, known_for: movie})
    .map(res => res.json())
 }
};