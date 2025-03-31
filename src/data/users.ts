import type { Address, User, UserProfile } from '@/types';

// ---------- User ----------
export const newUser: User = {
  firstName: '',
  lastName: '',
  email: '',
};

export const user1: User = {
  firstName: 'Michael',
  lastName: 'Jackson',
  email: 'mjackson@gmail.com',
};

// ---------- Address ----------
export const newAddress: Address = {
  street: '',
  city: '',
  state: '',
  zip: '',
};

export const address1: Address = {
  street: '123 Main St',
  city: 'San Francisco',
  state: 'CA',
  zip: '94111',
};

// ---------- UserProfile ----------
export const newUserProfile: UserProfile = {
  user: newUser,
  address: newAddress,
};

export const userProfile1: UserProfile = {
  user: user1,
  address: address1,
};
