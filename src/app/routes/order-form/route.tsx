import { OrderForm } from './OrderForm';
import { ObjectViewer } from '@/components/ObjectViewer';
import { Button } from '@/components/ui/button';
import { newOrder, productTree, products } from '@/data';
import { treeToMap } from '@/types';
import type { InputOrder } from '@/types';
import { useState } from 'react';

const productTreeNodeMap = treeToMap(productTree);

export function OrderFormPage() {
  const [inputOrder, setInputOrder] = useState<InputOrder>(newOrder);

  function handleSubmit(newInputOrder: InputOrder) {
    if (newInputOrder.id === '') {
      newInputOrder.id = Math.random().toString(36).slice(2);
    }
    setInputOrder(newInputOrder);
  }

  return (
    <div className="container flex-1">
      <main className="space-y-8 py-8">
        <Button
          onClick={() => {
            setInputOrder(newOrder);
          }}
          variant="secondary"
        >
          Create New Order
        </Button>

        <OrderForm
          inputOrder={inputOrder}
          onSubmit={handleSubmit}
          productTree={productTree}
          productTreeNodeMap={productTreeNodeMap}
          products={products}
        />
        <ObjectViewer o={inputOrder} />
      </main>
    </div>
  );
}
