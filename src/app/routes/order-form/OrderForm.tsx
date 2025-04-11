import { Icons } from '@/components/Icons';
import { TreeSelect } from '@/components/TreeSelect/TreeSelect';
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
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
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const SELECT_PRODUCT_PLACEHOLDER = 'Select a product';

export interface OrderFormProps {
  inputOrder: InputOrder;
  products: Product[];
  productTree: TreeNode;
  productTreeNodeMap: Map<string, TreeNode>;
  onSubmit: (inputOrder: InputOrder) => void;
}

export function OrderForm({
  inputOrder,
  products,
  productTree,
  productTreeNodeMap,
  onSubmit,
}: OrderFormProps) {
  const methods = useForm<InputOrder>({
    resolver: zodResolver(inputOrderSchema),
    mode: 'onChange',
    defaultValues: newOrder,
  });
  const { control, handleSubmit, reset, setValue } = methods;

  useEffect(() => {
    reset(inputOrder);
  }, [inputOrder, reset]);

  // ----- Helper functions to get the display text for a product -----
  const getProductDisplayText = (product: Product) =>
    `${product.manufacturer} - ${product.name}`;

  const getProductIdDisplayText = (productId: string) => {
    if (productId === '') return undefined;
    const product = products.find((product) => product.id === productId);
    return product ? getProductDisplayText(product) : undefined;
  };

  return (
    <FormProvider {...methods}>
      <form className="space-y-8 max-w-xl" onSubmit={handleSubmit(onSubmit)}>
        {/* ---------- Select ---------- */}
        <FormField
          control={control}
          name="product1Id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product 1</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={SELECT_PRODUCT_PLACEHOLDER} />
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

        {/* ---------- Dropdown Menu with DropdownMenuItem ---------- */}
        <FormField
          control={control}
          name="product2Id"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Product 2</FormLabel>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="inline-flex w-fit" variant="outline">
                    {getProductIdDisplayText(field.value) ?? (
                      <span className="text-muted-foreground">
                        {SELECT_PRODUCT_PLACEHOLDER}
                      </span>
                    )}
                    <Icons.chevronDown className="text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {products.map((product) => (
                    <DropdownMenuItem
                      key={product.id}
                      onClick={() => {
                        field.onChange(product.id);
                      }}
                    >
                      {getProductDisplayText(product)}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ---------- Dropdown Menu with DropdownMenuRadioItem ---------- */}
        <FormField
          control={control}
          name="product3Id"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Product 3</FormLabel>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="inline-flex w-fit" variant="outline">
                    {getProductIdDisplayText(field.value) ?? (
                      <span className="text-muted-foreground">
                        {SELECT_PRODUCT_PLACEHOLDER}
                      </span>
                    )}
                    <Icons.chevronDown className="text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuRadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    {products.map((product) => (
                      <DropdownMenuRadioItem
                        key={product.id}
                        value={product.id}
                      >
                        {getProductDisplayText(product)}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ---------- Dropdown Menu ---------- */}
        <FormField
          control={control}
          name="product4Id"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Product 4</FormLabel>
              <TreeSelect
                onChange={field.onChange}
                placeholder={SELECT_PRODUCT_PLACEHOLDER}
                tree={productTree}
                treeNodeMap={productTreeNodeMap}
                value={field.value}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        {/* ---------- Command Menu ---------- */}
        <FormField
          control={control}
          name="product5Id"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Product 5</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button className="inline-flex w-fit" variant="outline">
                      {getProductIdDisplayText(field.value) ?? (
                        <span className="text-muted-foreground">
                          {SELECT_PRODUCT_PLACEHOLDER}
                        </span>
                      )}
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
                            key={product.id}
                            onSelect={() => {
                              setValue('product5Id', product.id);
                            }}
                            value={getProductDisplayText(product)}
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
          <Button type="submit">
            {inputOrder.id === '' ? 'Create' : 'Update'} Order
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
