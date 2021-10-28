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
    { x: 'Pace', y: 88},
    { x: 'Dribbling', y: 95,},
    { x: 'Shooting', y: 91,},
    { x: 'Defending', y: 26, },
    { x: 'Passing', y: 87,},
    { x: 'Physicality', y: 61,},
 
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
