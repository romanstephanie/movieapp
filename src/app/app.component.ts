import { Component } from '@angular/core';
import {MoviesService} from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Movie App';
  // actor: string;
  // searchResult = [];
  
   constructor (public movie$: MoviesService) {
     
     this.movie$.getData()
     .subscribe(
        (data)=>{
          
             console.log("we got some data",data);
        } )
     
     
   }
  
  // search(value: any) { // without type info
  //   this.actor = value;
  //   this.movie$.getData(value)
  //   .subscribe((data) => 
  //     this.searchResult.push(data.results);
  //     console.log("result" + data);

  // )}
}
