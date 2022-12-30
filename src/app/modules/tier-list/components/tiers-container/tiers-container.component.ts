import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../models/character.model';
import { Tier } from '../../models/tier.model';

@Component({
	selector: 'osv-tiers-container',
	templateUrl: './tiers-container.component.html',
	styleUrls: ['./tiers-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TiersContainerComponent {
	@Input() tiers: Tier[] = [];
	@Output() characterMoved = new EventEmitter<CdkDragDrop<Character[]>>();

	trackTier(_index: number, tier: Tier): number {
		return tier.id;
	}
}
