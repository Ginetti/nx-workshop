import { Component, Input } from '@angular/core';
import { ICard } from '@workshop/types';

@Component({
	selector: 'workshop-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent {
	@Input() cards: ICard[];
}
