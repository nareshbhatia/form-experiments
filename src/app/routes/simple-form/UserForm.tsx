'use client';

import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { newUser } from '@/data';
import { userSchema } from '@/types';
import type { User } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';

export interface UserFormProps {
  existingUser?: User;
  onSubmit: (user: User) => void;
}

export function UserForm({ existingUser, onSubmit }: UserFormProps) {
  const methods = useForm<User>({
    resolver: zodResolver(userSchema),
    mode: 'onChange',
    defaultValues: existingUser ?? newUser,
  });
  const { control, handleSubmit, reset } = methods;

  const handleReset = () => {
    reset(existingUser ?? newUser);
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-8 max-w-xl" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          control={control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} />
              </FormControl>
              <FormDescription>
                Your email address will be used as your username.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <Button type="submit">{existingUser ? 'Update' : 'Create'}</Button>
          <Button onClick={handleReset} variant="secondary">
            Reset
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
