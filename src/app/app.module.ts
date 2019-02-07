import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ContactState } from './contact.state';
import { ContactFormModule } from './components/contact-form';
import { ContactListModule } from './components/contact-list';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		CommonModule,
		ContactFormModule,
		ContactListModule,
		BrowserModule,
		NgxsModule.forRoot([
			ContactState
		])

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
