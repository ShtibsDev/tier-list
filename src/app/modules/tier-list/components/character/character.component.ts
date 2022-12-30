import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Character } from '../../models/character.model';

@Component({
	selector: 'osv-character',
	templateUrl: './character.component.html',
	styleUrls: ['./character.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterComponent {
	@Input() character: Character;
}
