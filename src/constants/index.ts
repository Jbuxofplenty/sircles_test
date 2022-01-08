export { THEME as light } from './light';
export * from './components';
export * from './theme';

export interface IAddress {
  street?: string;
  suite?: string;
  city?: string;
  zipCode?: number;
  address?: string;
}

export interface IUser {
  firstName?: string;
  lastName?: string;
  userName?: string;
  emailAddress?: string;
  address?: IAddress;
  phoneNumber?: string;
  website?: string;
  companyName?: string;
}