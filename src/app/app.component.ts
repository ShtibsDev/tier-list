import { Component } from '@angular/core';
import { Character } from './modules/tier-list/models/character.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'tier-list';

	characters: Character[] = [
		{ id: 1, title: 'Luffy', image: '/assets/images/luffy.png' },
		{ id: 2, title: 'Zoro', image: '/assets/images/zoro.jpg' },
		{ id: 3, title: 'Nami', image: '/assets/images/nami.jpeg' },
		{ id: 4, title: 'Ussop', image: '/assets/images/ussop.jpg' },
		{ id: 5, title: 'Sanji', image: '/assets/images/sanji.jpg' },
	];
}
