import { debounce } from '@agentepsilon/decko';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '../../models/character.model';
import { Tier } from '../../models/tier.model';

@Component({
	selector: 'osv-tier-list',
	templateUrl: './tier-list.component.html',
	styleUrls: ['./tier-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TierListComponent {
	@Input() characters: Character[];
	@Input() tiers: Tier[] = [
		{ id: 1, name: 'Test', color: 'green', characters: [] },
		{ id: 2, name: 'cool', color: 'blue', characters: [] },
	];

	drop(event: CdkDragDrop<Character[]>) {
		debugger;
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
		}
		console.log(this.tiers);
	}
}
