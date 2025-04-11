import { RootLayout } from './app/root';
import { DialogFormPage } from './app/routes/dialog-form/route';
import { ModularFormPage } from './app/routes/modular-form/route';
import { OrderFormPage } from './app/routes/order-form/route';
import { SimpleFormPage } from './app/routes/simple-form/route';
import { RoutePath } from '@/config/RoutePath';
import type { RouteObject } from 'react-router';

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      {
        path: RoutePath.SimpleForm,
        element: <SimpleFormPage />,
      },
      {
        path: RoutePath.ModularForm,
        element: <ModularFormPage />,
      },
      {
        path: RoutePath.OrderForm,
        element: <OrderFormPage />,
      },
      {
        path: RoutePath.DialogForm,
        element: <DialogFormPage />,
      },
    ],
  },
];
