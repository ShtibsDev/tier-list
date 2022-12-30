import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvailableCharactersComponent } from './components/available-characters/available-characters.component';
import { CharacterComponent } from './components/character/character.component';
import { TierListComponent } from './components/tier-list/tier-list.component';
import { TierComponent } from './components/tier/tier.component';
import { TiersContainerComponent } from './components/tiers-container/tiers-container.component';

@NgModule({
	declarations: [TierListComponent, TiersContainerComponent, TierComponent, CharacterComponent, AvailableCharactersComponent],
	imports: [CommonModule, FontAwesomeModule, DragDropModule],
	exports: [TierListComponent],
})
export class TierListModule {}
