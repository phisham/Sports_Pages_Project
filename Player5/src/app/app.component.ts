import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'player1';
  public data: Object[] = [
    // {x: 'China', y: 9635, y1: 10535, y2: 11226, y3: 11218},
    { x: 'Pace', y: 78},
    { x: 'Dribbling', y: 88,},
    { x: 'Shooting', y: 87,},
    { x: 'Defending', y: 61, },
    { x: 'Passing', y: 93,},
    { x: 'Physicality', y: 79,},
 
  ];

//Initializing Primary X Axis
public primaryXAxis: Object = {
    valueType: 'Category',
    fill:'red',
    // majorGridLines:{
    //   color:'red',
    //   width:2
    // }
     
};
}
