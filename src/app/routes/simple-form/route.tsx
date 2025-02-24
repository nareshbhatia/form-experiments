'use client';

import { UserForm } from './UserForm';
import { user1 } from '../../../data';
import type { User } from '../../../schema';
import { ObjectViewer } from '@/components/ObjectViewer';
import { useState } from 'react';

export function SimpleFormPage() {
  const [user, setUser] = useState<User | undefined>(user1);

  function handleSubmit(newUser: User) {
    setUser(newUser);
  }

  return (
    <div className="container flex-1">
      <main className="flex flex-col gap-8 py-8">
        <UserForm onSubmit={handleSubmit} user={user} />
        <ObjectViewer o={user} />
      </main>
    </div>
  );
}
