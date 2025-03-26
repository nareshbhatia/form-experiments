'use client';

import { AddressForm } from '@/components/AddressForm';
import { UserForm } from '@/components/UserForm';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { newUserProfile } from '@/data';
import { userProfileSchema } from '@/types';
import type { UserProfile } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export interface UserProfileFormProps {
  existingUserProfile?: UserProfile;
  onSubmit: (userProfile: UserProfile) => void;
}

export function UserProfileForm({
  existingUserProfile,
  onSubmit,
}: UserProfileFormProps) {
  const form = useForm<UserProfile>({
    resolver: zodResolver(userProfileSchema),
    mode: 'onChange',
    defaultValues: existingUserProfile ?? newUserProfile,
  });

  const handleReset = () => {
    form.reset(existingUserProfile ?? newUserProfile);
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
          <Button type="submit">
            {existingUserProfile ? 'Update' : 'Create'}
          </Button>
          <Button onClick={handleReset} variant="secondary">
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
