import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ICard } from '@workshop/types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'workshop-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public title = 'Workshop';
	public cards$: Observable<ICard[]>;

	constructor(private http: HttpClient) {
		this.cards$ = this.http.get('http://localhost:4200/api/cards').pipe(map((res: ICard[]) => res));
	}
}
