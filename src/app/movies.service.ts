import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MoviesService {
     apikey: string = "a93f51f3c07b58f12672d17eed97a8fa";
     url: string = "https://api.themoviedb.org/3/movie/550?api_key=a93f51f3c07b58f12672d17eed97a8fa&query=";

//   constructor() { }

// }

constructor( public http: Http) { }
     
 getData(){
    return this.http.get(this.url )
    .map(res => res.json())
  } 
 
}
// postData() {
//     return this.http.post("https://stephanie-fall-2017-phortonssf.c9users.io:8081/hello", {"number": 12})
//     .map(res => res.json())
  
//  }
// }
