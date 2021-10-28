import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SearchPage';
  check:boolean=false;
  filterTerm:any;

  userRecords = [{
      "id": 1,
      "name": "L Messi",
      "age": "31",
      "nationality": "Argentina",
      "club":"Fc Barcelona",
      

    
    },
    {
      "id": 2,
      "name": "Cristiano Ronaldo",
      "age": "33",
      "nationality": "Portugal",
      "club":"Juventus",
      
      
    },
    {
       "id": 3,
      "name": "Neymar Jr",
      "age": "26",
      "nationality": "Brazil",
      "club":"Paris Saint-Germain",
      
    },
    {
       "id": 4,
      "name": "De Gea",
      "age": "27",
      "nationality": "Spain",
      "club":"Manchester United",
      
      
    },
    {
       "id": 5,
      "name": "K De Bruyne",
      "age": "27",
      "nationality": "Belgium",
      "club":"Manchester City",
      
    },
    
  ]

  checkSts(){
    this.check=true;

  }
}
