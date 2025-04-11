import { OrderFormBody } from './OrderFormBody';
import { ObjectViewer } from '@/components/ObjectViewer';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { newOrder, productTree, products } from '@/data';
import { inputOrderSchema, treeToMap } from '@/types';
import type { InputOrder } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const productTreeNodeMap = treeToMap(productTree);

export function DialogFormPage() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [inputOrder, setInputOrder] = useState<InputOrder>(newOrder);

  const methods = useForm<InputOrder>({
    resolver: zodResolver(inputOrderSchema),
    mode: 'onChange',
    defaultValues: newOrder,
  });
  const { handleSubmit, reset } = methods;

  useEffect(() => {
    reset(inputOrder);
  }, [inputOrder, reset]);

  function handleSubmitOrder(newInputOrder: InputOrder) {
    if (newInputOrder.id === '') {
      newInputOrder.id = Math.random().toString(36).slice(2);
    }
    setInputOrder(newInputOrder);
    setDialogOpen(false);
  }

  /**
   * Generic function that prevents any default event behavior.
   * Based on https://github.com/radix-ui/primitives/discussions/1997#discussioncomment-8986672
   */
  const preventDefaultDomBehavior = (e: Event) => {
    e.preventDefault();
  };

  return (
    <div className="container flex-1">
      <main className="space-y-8 py-8">
        <div className="flex gap-2">
          <Button
            onClick={() => {
              setInputOrder(newOrder);
              setDialogOpen(true);
            }}
            variant="secondary"
          >
            Create Order
          </Button>

          <Button
            onClick={() => {
              setDialogOpen(true);
            }}
            variant="secondary"
          >
            Edit Order
          </Button>
        </div>

        <Dialog onOpenChange={setDialogOpen} open={isDialogOpen}>
          <DialogContent
            className="sm:max-w-[425px]"
            onEscapeKeyDown={preventDefaultDomBehavior}
            onInteractOutside={preventDefaultDomBehavior}
            onPointerDownOutside={preventDefaultDomBehavior}
          >
            <FormProvider {...methods}>
              <form
                className="space-y-8 max-w-xl"
                onSubmit={handleSubmit(handleSubmitOrder)}
              >
                <DialogHeader>
                  <DialogTitle>Create Order</DialogTitle>
                  <DialogDescription>Manage your order here.</DialogDescription>
                </DialogHeader>
                <OrderFormBody
                  productTree={productTree}
                  productTreeNodeMap={productTreeNodeMap}
                  products={products}
                />
                <DialogFooter>
                  <Button type="submit">
                    {inputOrder.id === '' ? 'Create' : 'Update'} Order
                  </Button>
                </DialogFooter>
              </form>
            </FormProvider>
          </DialogContent>
        </Dialog>
        <ObjectViewer o={inputOrder} />
      </main>
    </div>
  );
}
