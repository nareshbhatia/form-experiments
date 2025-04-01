'use client';

import { OrderForm } from './OrderForm';
import { ObjectViewer } from '@/components/ObjectViewer';
import { newOrder, productTree, products } from '@/data';
import type { InputOrder } from '@/types';
import { useState } from 'react';

export function OrderFormPage() {
  const [inputOrder, setInputOrder] = useState<InputOrder | undefined>(
    newOrder,
  );

  function handleSubmit(newInputOrder: InputOrder) {
    setInputOrder(newInputOrder);
  }

  return (
    <div className="container flex-1">
      <main className="flex flex-col gap-8 py-8">
        <OrderForm
          existingOrder={inputOrder}
          onSubmit={handleSubmit}
          productTree={productTree}
          products={products}
        />
        <ObjectViewer o={inputOrder} />
      </main>
    </div>
  );
}
