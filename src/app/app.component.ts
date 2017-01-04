import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  animations:[
  	trigger('signal', [
  		state('go', style({
  			'background-color':'green'
  		})),
  		state('stop', style({
  			'background-color':'red'
  		})),
  		transition('void => *', animate(0)),
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
