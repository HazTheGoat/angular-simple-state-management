import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { IContact, AddContact } from 'src/app/contact.state';

@Component({
	selector: 'contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

	// Injecting the store into our contructor
	constructor(private store: Store) { }

	public addContact(name: string) {
		const contact: IContact = { name };

		// Dispatching an event to add contact
		this.store.dispatch(new AddContact(contact));
	}
}
