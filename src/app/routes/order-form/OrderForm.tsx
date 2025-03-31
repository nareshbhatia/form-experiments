'use client';

import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { newOrder } from '@/data';
import { cn } from '@/lib/utils';
import type { InputOrder, Product, TreeNode } from '@/types';
import { inputOrderSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ControllerRenderProps, FieldPath } from 'react-hook-form';
import { useForm } from 'react-hook-form';

export interface OrderFormProps {
  existingOrder?: InputOrder;
  products: Product[];
  productTree: TreeNode;
  onSubmit: (inputOrder: InputOrder) => void;
}

export function OrderForm({
  existingOrder,
  products,
  productTree,
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

  // ----- Helper functions to get the display text for a product -----
  const getProductDisplayText = (product: Product) => {
    return `${product.manufacturer} - ${product.name}`;
  };

  const getProductIdDisplayText = (productId: string | undefined) => {
    if (!productId) return 'Select product';
    const product = products.find((product) => product.id === productId);
    return product ? getProductDisplayText(product) : productId;
  };

  // Recursive function to render nested menu items
  const renderTreeNodes = (
    nodes: TreeNode[] | undefined,
    field: ControllerRenderProps<InputOrder, FieldPath<InputOrder>>,
    level = 0,
  ) => {
    if (!nodes || nodes.length === 0) return undefined;

    return nodes.map((node) => {
      // If the node has children, it's not a leaf node
      const hasChildren = node.children && node.children.length > 0;

      if (hasChildren === true) {
        // Render a submenu for nodes with children
        return (
          <DropdownMenuSub key={node.id}>
            <DropdownMenuSubTrigger>
              <span>{node.name}</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              {renderTreeNodes(node.children, field, level + 1)}
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        );
      }
      // Render selectable items for leaf nodes
      return (
        <DropdownMenuCheckboxItem
          checked={node.id === field.value}
          key={node.id}
          onClick={() => {
            field.onChange(node.id);
          }}
        >
          {getProductIdDisplayText(node.id)}
        </DropdownMenuCheckboxItem>
      );
    });
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
                      {getProductDisplayText(product)}
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
                  <Button className="inline-flex w-fit" variant="outline">
                    {getProductIdDisplayText(field.value)}
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
                      {getProductDisplayText(product)}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ---------- Dropdown Menu ---------- */}
        <FormField
          control={form.control}
          name="product3Id"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Product 3</FormLabel>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="inline-flex w-fit" variant="outline">
                    {getProductIdDisplayText(field.value)}
                    <Icons.chevronDown className="text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {/* Start rendering from categories (second level) */}
                  {renderTreeNodes(productTree.children, field)}
                </DropdownMenuContent>
              </DropdownMenu>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ---------- Command Menu ---------- */}
        <FormField
          control={form.control}
          name="product4Id"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Product 4</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button className="inline-flex w-fit" variant="outline">
                      {getProductIdDisplayText(field.value)}
                      <Icons.chevronDown className="text-muted-foreground" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                  <Command
                    filter={(value, search) => {
                      if (value.toLowerCase().includes(search.toLowerCase()))
                        return 1;
                      return 0;
                    }}
                  >
                    <CommandInput placeholder="Search product..." />
                    <CommandList>
                      <CommandEmpty>No product found.</CommandEmpty>
                      <CommandGroup>
                        {products.map((product) => (
                          <CommandItem
                            value={getProductDisplayText(product)}
                            key={product.id}
                            onSelect={() => {
                              form.setValue('product4Id', product.id);
                            }}
                          >
                            <Icons.check
                              className={cn(
                                'mr-2',
                                product.id === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0',
                              )}
                            />
                            {getProductDisplayText(product)}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

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
