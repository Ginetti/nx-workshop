export enum BoxColor {
	BLUE = 'blue',
	GREEN = 'green',
	RED = 'red',
}

export interface ICard {
	title: string;
	boxColor: BoxColor;
	description: string;
}
