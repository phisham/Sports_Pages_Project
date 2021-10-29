import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'player2';
  public data: Object[] = [
    // {x: 'China', y: 9635, y1: 10535, y2: 11226, y3: 11218},
    { x: 'Pace', y: 89},
    { x: 'Dribbling', y: 90,},
    { x: 'Shooting', y: 94,},
    { x: 'Defending', y: 33, },
    { x: 'Passing', y: 81,},
    { x: 'Physicality', y: 83,},
 
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
