import { Component } from '@angular/core';
import {MoviesService} from './movies.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Movie App';
  actor: string;
  searchResult = [];
  favActor: string[]= [];
  
  
   constructor (public movie$: MoviesService) {
//     this.movie$.postData(actorName, movie)
//     .subscribe(
//       //results is the response you get back
//       results => { 
//         console.log("these are your results pal", results),
//         error => console.log("error", error)
// });
   }
  
  search(value: any) { // without type info
    this.actor = value;
    this.movie$.getData (value) 
       .subscribe(data => {
          if (data.total_results === 0) {
            (alert("Whoops! No actor exists by this name. Check your spelling and try again"));
          } else {
            this.searchResult.push(data);
            console.log("Response", data)
          }
  }
  )}
  
  
  addFavActor(actor) {
  if (!this.favActor.includes(actor)) {
      this.favActor.push(actor);
    console.log(this.favActor);
  } else {
   alert('This actor is already in your favorites list');
  }
  
} 

  removeFavActor(result) {
      let index = this.favActor.indexOf(result);
      this.favActor.splice(index, 1);
}
}
