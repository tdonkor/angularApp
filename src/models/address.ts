import {IAddresses} from '../Interfaces/Interfaces';

export class Address  implements IAddresses {
  id: number;
  name: string;
  type: string;
  description: string;
  dOB: Date;
  number: number;
  street: string;
  city: string;
  county: string;
  postcode: string;
  phone: string;
  email: number;
}
