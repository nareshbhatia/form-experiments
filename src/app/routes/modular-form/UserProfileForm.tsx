'use client';

import { AddressForm } from '@/components/AddressForm';
import { UserForm } from '@/components/UserForm';
import { Button } from '@/components/ui/button';
import { newUserProfile } from '@/data';
import { userProfileSchema } from '@/types';
import type { UserProfile } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

export interface UserProfileFormProps {
  existingUserProfile?: UserProfile;
  onSubmit: (userProfile: UserProfile) => void;
}

export function UserProfileForm({
  existingUserProfile,
  onSubmit,
}: UserProfileFormProps) {
  const methods = useForm<UserProfile>({
    resolver: zodResolver(userProfileSchema),
    mode: 'onChange',
    defaultValues: existingUserProfile ?? newUserProfile,
  });
  const { handleSubmit, reset } = methods;

  const handleReset = () => {
    reset(existingUserProfile ?? newUserProfile);
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-8 max-w-xl" onSubmit={handleSubmit(onSubmit)}>
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
    </FormProvider>
  );
}
