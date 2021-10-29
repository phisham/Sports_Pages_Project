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
    { x: 'Diving', y: 90},
    { x: 'Reflex', y: 94,},
    { x: 'Handling', y: 85,},
    { x: 'Speed', y: 57, },
    { x: 'Kick', y: 87,},
    { x: 'Position', y: 88,},

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
