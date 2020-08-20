import './card-style';

export class CardWrapperElement extends HTMLElement {}
customElements.define('card-wrapper', CardWrapperElement);
export class CardContentElement extends HTMLElement {}
customElements.define('card-content', CardContentElement);
export class CardTitleElement extends HTMLElement {}
customElements.define('card-title', CardTitleElement);
export class CardDescriptionElement extends HTMLElement {}
customElements.define('card-description', CardDescriptionElement);
export class CardBoxElement extends HTMLElement {
	constructor() {
		super();
	}

	public static observedAttributes = ['color'];

	attributeChangedCallback() {
		const color = this.getAttribute('color');

		this.innerHTML = `<div class="${color}"></div>`;
	}
}
customElements.define('card-box', CardBoxElement);

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type JSXify<T extends Element> = Partial<Omit<T, 'children'> & { children?: any[] | any }>;

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'card-wrapper': JSXify<CardWrapperElement>;
			'card-content': JSXify<CardContentElement>;
			'card-title': JSXify<CardTitleElement>;
			'card-description': JSXify<CardDescriptionElement>;
			'card-box': JSXify<CardBoxElement>;
		}
	}
}
