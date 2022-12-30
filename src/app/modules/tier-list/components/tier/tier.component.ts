import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { faArrowDown, faArrowUp, faCog } from '@fortawesome/free-solid-svg-icons';
import { Character } from '../../models/character.model';
import { Tier } from '../../models/tier.model';

@Component({
	selector: 'osv-tier',
	templateUrl: './tier.component.html',
	styleUrls: ['./tier.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TierComponent {
	@Input() tier: Tier;
	@Output() characterMoved = new EventEmitter<CdkDragDrop<Character[]>>();

	readonly cog = faCog;
	readonly arrowUp = faArrowUp;
	readonly arrowDown = faArrowDown;

	drop(event: CdkDragDrop<Character[]>) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
		} else {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
		}
	}
}
