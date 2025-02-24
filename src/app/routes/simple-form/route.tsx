'use client';

import { UserForm } from './UserForm';
import type { User } from './schema';

export function SimpleFormPage() {
  function handleSubmit(user: User) {
    console.log(user);
  }

  return (
    <div className="container flex-1">
      <main className="flex flex-col gap-8 py-8">
        <UserForm onSubmit={handleSubmit} />
      </main>
    </div>
  );
}
