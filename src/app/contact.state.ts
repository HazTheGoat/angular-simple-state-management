import { State, Action, StateContext } from '@ngxs/store';

export class AddContact {
	static type = '[CONTACT] AddContact';
	constructor(public readonly contact: IContact) { }
}

export class DeleteContact {
	static type = '[CONTACT] DelteContact';
	constructor(public readonly index: number) { }
}

export interface IContact {
	name: string;
}

// Giving our state a model
@State<IContact[]>({
	name: 'contact',
	// defaults is optional
	defaults: [
		{ name: 'Peter Griffin' }
	]
})
export class ContactState {
	// Add contact action
	@Action(AddContact)
	addContact({ getState, setState }: StateContext<IContact[]>, { contact }: AddContact) {
		setState([...getState(), contact]);
	}

	// Delete contact action
	@Action(DeleteContact)
	deleteContact({ getState, setState }: StateContext<IContact[]>, { index }: DeleteContact) {
		setState(getState().filter((contact, i) => i !== index));
	}
}
