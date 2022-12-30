import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
	selector: 'osv-available-characters',
	templateUrl: './available-characters.component.html',
	styleUrls: ['./available-characters.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailableCharactersComponent {
	@Input() characters: Character[];
	@Output() characterMoved = new EventEmitter<CdkDragDrop<Character[]>>();

	trackCharacters(_index: number, character: Character): number {
		return character.id;
	}
}
