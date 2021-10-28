
export interface IDiabetes {
  id: number;
  reading: number;
  date: string;
  timeOfDay: number;
}

export interface IAddresses {
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

export interface ILogin {
  Email: string;
  Password: string;
}


export interface IBills {
  id: number;
  name: string;
  value: number;
}


export interface IPensions {
  id: number;
  name: string;
  description: string;
  value: number;
}
