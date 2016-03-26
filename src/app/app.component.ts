import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})
export class AppComponent { 
    hero: Hero;
    
    ngOnInit() {
        this.hero = new Hero(1, 'The Flash', 'Super Speed', 'Barry Allen');
    }
}