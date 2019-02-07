import { Component } from '@angular/core';
import { ContactState, IContact, DeleteContact } from 'src/app/contact.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';

@Component({
	selector: 'contact-list',
	templateUrl: './contact-list.component.html',
	styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
	// We subscribe to this property in our view with the async pipe
	@Select(ContactState) contact$: Observable<IContact[]>;

	// Injecting the store into our contructor
	constructor(private store: Store) { }

	public deleteContact(index) {
		// dispatching event to our store
		this.store.dispatch(new DeleteContact(index));
	}

}
