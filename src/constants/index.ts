export { THEME as light } from './light';
export * from './components';
export * from './theme';

export interface IGeo {
  lat?: string;
  lng?: string;
}
export interface IAddress {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: number;
  geo?: IGeo;
}
export interface ICompany {
  bs?: string;
  catchPhrase?: string;
  name?: string;
}

export interface IUser {
  name?: string;
  username?: string;
  email?: string;
  address?: IAddress;
  phone?: string;
  website?: string;
  company?: ICompany;
}