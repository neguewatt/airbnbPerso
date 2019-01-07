
import { Address } from '../models/Address';

export class Housing {

     title: string;
     description: string;
     travelerNumber: number;
     houseType: string;
     roomNumber: string;
     sleepNumber: number;
     beddingType: string[];
/*     street: string;
     postalCode: number;
     city: string;*/
     startDateLeasing: Date;
     endDateLeasing: Date;
     pictures: string[];
     address: Address;
    }