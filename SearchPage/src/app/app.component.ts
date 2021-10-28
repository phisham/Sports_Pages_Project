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
      "link":"https://player1-a56fb.web.app"

    
    },
    {
      "id": 2,
      "name": "Cristiano Ronaldo",
      "age": "33",
      "nationality": "Portugal",
      "club":"Juventus",
      "link":""
      
    },
    {
       "id": 3,
      "name": "Neymar Jr",
      "age": "26",
      "nationality": "Brazil",
      "club":"Paris Saint-Germain",
      "link":""
    },
    {
       "id": 4,
      "name": "De Gea",
      "age": "27",
      "nationality": "Spain",
      "club":"Manchester United",
      "link":""
      
    },
    {
       "id": 5,
      "name": "K De Bruyne",
      "age": "27",
      "nationality": "Belgium",
      "club":"Manchester City",
      "link":""
    },
    
  ]

  checkSts(){
    this.check=true;

  }
}
