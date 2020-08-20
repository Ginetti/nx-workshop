import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { UiCardModule } from '@workshop/ui-card';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, HttpClientModule, RouterModule.forRoot([], { initialNavigation: 'enabled' }), UiCardModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
