import { 
	Component, 
	trigger, 
	state, 
	style, 
	transition, 
	animate,
	keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  animations:[
  	trigger('signal', [
  		state('void', style({
  			'transform':'translateY(-100%)',
  			'background-color':'orange'
  		})),
  		state('go', style({
  			'background-color':'green'
  		})),
  		state('stop', style({
  			'background-color':'red'
  		})),
  		// could be from * => * or from go => stop ... or two-way binding * <=> *
  		transition('void => *', animate(5000, keyframes([
  				style({'transform' : 'scale(0)'}),
  				style({'transform' : 'scale(.5)'}),
  				style({'transform' : 'scale(.1)'}),
  				style({'transform' : 'scale(1)'}),
  				style({'transform' : 'scale(.2)'}),
  				style({'transform' : 'scale(1)'})
  			]))),
  		//easings.net
  		transition('* => *', animate('2s 1s ease-out'))
  	])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  signal;
  isHere = false;

  constructor() {
  	this.signal = 'stop'
  }

  onClick(step) {
  	this.signal = step;
  }

  onToggleClick() {
  	this.isHere = !this.isHere;
  }
}
