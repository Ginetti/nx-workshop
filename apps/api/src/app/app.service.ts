import { Injectable } from '@nestjs/common';
import { BoxColor, ICard } from '@workshop/types';

@Injectable()
export class AppService {
	getCards(): ICard[] {
		return [
			{ title: 'Card 1', description: 'My first card', boxColor: BoxColor.GREEN },
			{ title: 'Card 2', description: 'My second card ', boxColor: BoxColor.RED },
			{ title: 'Card 3', description: 'The last one', boxColor: BoxColor.BLUE },
		];
	}
}
