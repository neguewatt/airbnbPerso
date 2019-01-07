import { Address } from '../models/Address';
export class User {
	id: number;
	firstName: string;
	lastName: string;
	emailAddress: string;
	birthday: Date;
	address: Address;
}
