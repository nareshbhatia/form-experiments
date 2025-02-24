'use client';

import { UserProfileForm } from './UserProfileForm';
import { ObjectViewer } from '@/components/ObjectViewer';
import { userProfile1 } from '@/data';
import type { UserProfile } from '@/schema';
import { useState } from 'react';

export function ModularFormPage() {
  const [userProfile, setUserProfile] = useState<UserProfile | undefined>(
    userProfile1,
  );

  function handleSubmit(newUserProfile: UserProfile) {
    setUserProfile(newUserProfile);
  }

  return (
    <div className="container flex-1">
      <main className="flex flex-col gap-8 py-8">
        <UserProfileForm onSubmit={handleSubmit} userProfile={userProfile} />
        <ObjectViewer o={userProfile} />
      </main>
    </div>
  );
}
