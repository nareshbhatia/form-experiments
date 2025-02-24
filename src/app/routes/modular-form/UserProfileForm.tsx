'use client';

import { AddressForm } from '@/components/AddressForm';
import { UserForm } from '@/components/UserForm';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { emptyUserProfile } from '@/data';
import type { UserProfile } from '@/schema';
import { UserProfileSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export interface UserProfileFormProps {
  userProfile?: UserProfile;
  onSubmit: (userProfile: UserProfile) => void;
}

export function UserProfileForm({
  userProfile,
  onSubmit,
}: UserProfileFormProps) {
  const form = useForm<UserProfile>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: userProfile,
  });

  const handleReset = () => {
    form.reset(emptyUserProfile);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <UserForm />
        <AddressForm parentName="address" title="Address" />

        <div className="flex gap-2">
          <Button type="submit">{userProfile ? 'Update' : 'Create'}</Button>
          <Button onClick={handleReset} variant="secondary">
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
