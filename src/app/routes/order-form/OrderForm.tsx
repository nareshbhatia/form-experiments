'use client';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { newOrder } from '@/data';
import type { InputOrder, Product } from '@/types';
import { inputOrderSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export interface OrderFormProps {
  existingOrder?: InputOrder;
  products: Product[];
  onSubmit: (inputOrder: InputOrder) => void;
}

export function OrderForm({
  existingOrder,
  products,
  onSubmit,
}: OrderFormProps) {
  const form = useForm<InputOrder>({
    resolver: zodResolver(inputOrderSchema),
    mode: 'onChange',
    defaultValues: existingOrder ?? newOrder,
  });

  const handleReset = () => {
    form.reset(existingOrder ?? newOrder);
  };

  return (
    <Form {...form}>
      <form
        className="space-y-8 max-w-xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* ---------- Select ---------- */}
        <FormField
          control={form.control}
          name="product1Id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product 1</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id}>
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ---------- Dropdown Menu ---------- */}
        <FormField
          control={form.control}
          name="product2Id"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Product 2</FormLabel>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="inline-flex w-fit">
                    {field.value
                      ? (products.find((p) => p.id === field.value)?.name ??
                        field.value)
                      : 'Select product 2'}
                    <Icons.chevronDown className="text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {products.map((product) => (
                    <DropdownMenuCheckboxItem
                      checked={product.id === field.value}
                      key={product.id}
                      onClick={() => {
                        field.onChange(product.id);
                      }}
                    >
                      {product.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <Button type="submit">{existingOrder ? 'Update' : 'Create'}</Button>
          <Button onClick={handleReset} variant="secondary">
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}
