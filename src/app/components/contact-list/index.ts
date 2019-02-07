import { NgModule } from '@angular/core';
import { ContactListComponent } from './contact-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		ContactListComponent
	],
	exports: [
		ContactListComponent
	]
})
export class ContactListModule { }
