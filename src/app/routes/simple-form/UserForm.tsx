'use client';

import { newUser } from '../../../data';
import type { User } from '../../../schema';
import { UserSchema } from '../../../schema';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export interface UserFormProps {
  user?: User;
  onSubmit: (user: User) => void;
}

export function UserForm({ user, onSubmit }: UserFormProps) {
  const form = useForm<User>({
    resolver: zodResolver(UserSchema),
    defaultValues: user,
  });

  const handleReset = () => {
    form.reset(newUser);
  };

  return (
    <Form {...form}>
      <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
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
          control={form.control}
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
          control={form.control}
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
          <Button type="submit">{user ? 'Update' : 'Create'}</Button>
          <Button onClick={handleReset} variant="secondary">
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
