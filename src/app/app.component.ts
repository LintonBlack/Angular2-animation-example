import { Component, trigger, state, style } from '@angular/core';

@Component({
  selector: 'app-root',
  animations:[
  	trigger('signal', [
  		state('go', style({
  			'background-color':'green'
  		})),
  		state('stop', style({
  			'background-color':'red'
  		}))
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
