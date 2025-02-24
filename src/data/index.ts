import type { Address, User, UserProfile } from '@/schema';

// ---------- User ----------
export const emptyUser: User = {
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
export const emptyAddress: Address = {
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
export const emptyUserProfile: UserProfile = {
  user: emptyUser,
  address: emptyAddress,
};

export const userProfile1: UserProfile = {
  user: user1,
  address: address1,
};
