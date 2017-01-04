import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  animations:[
  	trigger('signal', [
  		state('void', style({
  			'background-color':'orange'
  		})),
  		state('go', style({
  			'background-color':'green'
  		})),
  		state('stop', style({
  			'background-color':'red'
  		})),
  		transition('void => *', animate(1000)),
  		transition('* => *', animate(500))
  	])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  signal;

  constructor() {
  	this.signal = 'stop'
  }

  onClick(step) {
  	this.signal = step;
  }
}
