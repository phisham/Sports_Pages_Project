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
      "link":"https://player2-a9e19.web.app/"
     
    },
    {
       "id": 3,
      "name": "Neymar Jr",
      "age": "26",
      "nationality": "Brazil",
      "club":"Paris Saint-Germain",
      "link":"https://player3-e2a9.web.app/"
    },
    {
       "id": 4,
      "name": "De Gea",
      "age": "27",
      "nationality": "Spain",
      "club":"Manchester United",
      "link":"https://player4-ba959.web.app/"
      
    },
    {
       "id": 5,
      "name": "K De Bruyne",
      "age": "27",
      "nationality": "Belgium",
      "club":"Manchester City",
      "link":"https://player5-a83aa.web.app/"
    },
    
  ]

  checkSts(){
    this.check=true;

  }
}
